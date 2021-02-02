/* eslint-disable camelcase */
import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../controller/AppointmentsController';
import ProviderAppointsmentsController from '../controller/ProviderAppointmentsController';

const appointmentsRouter = Router();

const appointmentsController = new AppointmentController();
const providerAppointsmentsController = new ProviderAppointsmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);

appointmentsRouter.get('/me', providerAppointsmentsController.index);

export default appointmentsRouter;
