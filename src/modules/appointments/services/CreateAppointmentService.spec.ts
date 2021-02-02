import AppError from '@shared/errors/AppError';

import FakeNotificationsRepository from '@modules/notifications/repositories/fakes/FakeNotificationsRepository';
import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentRepository: FakeAppointmentRepository;
let fakeNotificationsRepository: FakeNotificationsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    fakeNotificationsRepository = new FakeNotificationsRepository();

    createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository,
      fakeNotificationsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    const appointment = await createAppointment.execute({
      date: new Date(2020, 4, 10, 13),
      providerId: 'chosenProvider',
      userId: 'loggerUser',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.providerId).toBe('chosenProvider');
  });

  it('should not be able to create a two appointments on the same time', async () => {
    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await createAppointment.execute({
      date: new Date(2020, 4, 10, 14),
      providerId: 'chosenProvider',
      userId: 'loggerUser',
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 4, 10, 14),
        providerId: 'chosenProvider',
        userId: 'loggerUser',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a two appointments at a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 3, 8, 24),
        providerId: 'chosenProvider',
        userId: 'loggerUser',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment when user and provider are the same', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 4, 10, 13),
        providerId: 'loggerUser',
        userId: 'loggerUser',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment before 8 hours', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 4, 11, 7),
        providerId: 'chosenProvider',
        userId: 'loggerUser',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment after 17 hours', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 4, 11, 18),
        providerId: 'chosenProvider',
        userId: 'loggerUser',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
