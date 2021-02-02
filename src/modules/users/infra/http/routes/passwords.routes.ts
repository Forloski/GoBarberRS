import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ForgottenPasswordController from '../controller/ForgottenPasswordController';
import ResetPasswordController from '../controller/ResetPasswordController';

const passwordsRouter = Router();
const forgottenPasswordController = new ForgottenPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordsRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required,
    },
  }),
  forgottenPasswordController.create,
);
passwordsRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      passwordConfirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  resetPasswordController.create,
);

export default passwordsRouter;
