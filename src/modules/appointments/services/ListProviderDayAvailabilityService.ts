/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';
import { getHours } from 'date-fns';

// import IUsersRepository from '@modules/users/repositories/IUsersRepository';

// import User from '@modules/users/infra/typeorm/entities/User';
import IAppointmentsRepository from '../repositories/iAppointmentsRepository';

interface IRequest {
  providerId: string;
  year: number;
  month: number;
  day: number;
}

type IResponse = Array<{
  hour: number;
  available: boolean;
}>;

@injectable()
class ListProviderDayAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    providerId,
    year,
    month,
    day,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentsRepository.findByDayAndProvider(
      {
        providerId,
        year,
        month,
        day,
      },
    );

    const startHour = 8;

    const eachHourArray = Array.from(
      { length: 10 },
      (_, index) => index + startHour,
    );

    const availability = eachHourArray.map(hour => {
      const hasAppointmentInHour = appointments.find(
        appointment => getHours(appointment.date) === hour,
      );

      return {
        hour,
        available: !hasAppointmentInHour,
      };
    });

    return availability;
  }
}

export default ListProviderDayAvailabilityService;
