// import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list availability of chosen month', async () => {
    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 21, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 21, 9, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 21, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 21, 11, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 21, 12, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 21, 13, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 21, 14, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 21, 15, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 21, 16, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 21, 17, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 4, 24, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      providerId: 'Provider',
      date: new Date(2020, 5, 23, 8, 0, 0),
    });

    const monthAvailability = await listProviderMonthAvailability.execute({
      providerId: 'Provider',
      year: 2020,
      month: 5,
    });

    expect(monthAvailability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 21, available: false },
        { day: 22, available: true },
      ]),
    );
  });
});
