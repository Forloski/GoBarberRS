// import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentService from './ListProviderAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderAppointments: ListProviderAppointmentService;

describe('ListProvidersService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderAppointments = new ListProviderAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('its should be abre to list appoints from a provider on given day', async () => {
    const firstAppointment = await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 5, 23, 9, 0, 0),
      userId: 'LoggedUserUserId',
    });

    const secondAppointment = await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 5, 23, 11, 0, 0),
      userId: 'LoggedUserUserId',
    });

    await fakeAppointmentsRepository.create({
      providerId: 'NotProvider',
      date: new Date(2020, 5, 23, 15, 0, 0),
      userId: 'LoggedUserUserId',
    });

    const availability = await listProviderAppointments.execute({
      providerId: 'Provider',
      year: 2020,
      month: 6,
      day: 23,
    });

    expect(availability).toEqual([firstAppointment, secondAppointment]);
  });
});
