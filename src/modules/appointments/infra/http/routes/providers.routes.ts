/* eslint-disable camelcase */
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controller/ProvidersController';
import ProviderDayAvailabilityController from '../controller/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controller/ProviderMonthAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:providerId/monthAvailability',
  providerMonthAvailabilityController.index,
);

providersRouter.get(
  '/:providerId/dayAvailability',
  providerDayAvailabilityController.index,
);

export default providersRouter;
