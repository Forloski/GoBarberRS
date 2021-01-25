import AppError from '@shared/errors/AppError';

import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentRepository: FakeAppointmentRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    createAppointment = new CreateAppointmentService(fakeAppointmentRepository);
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      providerId: '1231231313',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.providerId).toBe('1231231313');
  });

  it('should not be able to create a two appointments at same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      providerId: '1231231313',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        providerId: '1231231313',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
