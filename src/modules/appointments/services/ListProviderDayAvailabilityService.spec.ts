// import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderDayAvailability: ListProviderDayAvailabilityService;

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvailability = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list availability of chosen day', async () => {
    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 24, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 5, 23, 9, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 5, 23, 11, 0, 0),
    });

    const dayAvailability = await listProviderDayAvailability.execute({
      providerId: 'Provider',
      year: 2020,
      month: 6,
      day: 23,
    });

    expect(dayAvailability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: true },
        { hour: 9, available: false },
        { hour: 10, available: true },
        { hour: 11, available: false },
        { hour: 12, available: true },
      ]),
    );
  });
});
