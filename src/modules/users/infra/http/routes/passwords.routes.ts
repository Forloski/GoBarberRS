import { Router } from 'express';

import ForgottenPasswordController from '../controller/ForgottenPasswordController';
import ResetPasswordController from '../controller/ResetPasswordController';

const passwordsRouter = Router();
const forgottenPasswordController = new ForgottenPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordsRouter.post('/forgot', forgottenPasswordController.create);
passwordsRouter.post('/reset', resetPasswordController.create);

export default passwordsRouter;
