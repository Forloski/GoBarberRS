/* eslint-disable camelcase */
import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../controller/AppointmentsController';
import ProviderAppointsmentsController from '../controller/ProviderAppointmentsController';

const appointmentsRouter = Router();

const appointmentsController = new AppointmentController();
const providerAppointsmentsController = new ProviderAppointsmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      providerId: Joi.string().uuid().required().required,
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);

appointmentsRouter.get('/me', providerAppointsmentsController.index);

export default appointmentsRouter;
