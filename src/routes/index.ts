// src/routes/index.ts
import 'reflect-metadata';
import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;