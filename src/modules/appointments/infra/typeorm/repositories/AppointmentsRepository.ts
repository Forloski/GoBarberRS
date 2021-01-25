import { getRepository, Repository, Raw } from 'typeorm';
// import { getMonth, getYear } from 'date-fns';

import IAppointmentsRepository from '@modules/appointments/repositories/iAppointmentsRepository';
import ICreateAppointDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import IFindByMonthAndProviderDTO from '@modules/appointments/dtos/IFindByMonthAndProviderDTO';
import IFindByDayAndProviderDTO from '@modules/appointments/dtos/IFindByDayAndProviderDTO';

import Appointment from '../entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment || undefined;
  }

  public async create({
    // eslint-disable-next-line camelcase
    providerId,
    date,
  }: ICreateAppointDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create({ providerId, date });

    await this.ormRepository.save(appointment);

    return appointment;
  }

  public async findByMonthAndProvider({
    providerId,
    month,
    year,
  }: IFindByMonthAndProviderDTO): Promise<Appointment[]> {
    const parsedMonth = String(month).padStart(2, '0');

    const appointments = await this.ormRepository.find({
      where: {
        providerId,
        date: Raw(
          dateFieldName =>
            `to_char(${dateFieldName}, 'MM-YYYY') = '${parsedMonth}-${year}'`,
        ),
      },
    });

    return appointments;
  }

  public async findByDayAndProvider({
    providerId,
    year,
    month,
    day,
  }: IFindByDayAndProviderDTO): Promise<Appointment[]> {
    const parsedMonth = String(month).padStart(2, '0');
    const parsedDay = String(day).padStart(2, '0');

    const appointments = await this.ormRepository.find({
      where: {
        providerId,
        date: Raw(
          dateFieldName =>
            `to_char(${dateFieldName}, 'DD-MM-YYYY') = '${parsedDay}-${parsedMonth}-${year}'`,
        ),
      },
    });

    return appointments;
  }
}

export default AppointmentsRepository;
