/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/iAppointmentsRepository';

interface IRequest {
  providerId: string;
  year: number;
  month: number;
  day: number;
}

@injectable()
class ListProviderAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    providerId,
    year,
    month,
    day,
  }: IRequest): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.findByDayAndProvider(
      {
        providerId,
        year,
        month,
        day,
      },
    );

    return appointments;
  }
}

export default ListProviderAppointmentService;
