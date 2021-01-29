/* eslint-disable camelcase */
import { v4 as uuid } from 'uuid';
import { isEqual, getMonth, getYear, getDate } from 'date-fns';

import IAppointmentsRepository from '@modules/appointments/repositories/iAppointmentsRepository';
import ICreateAppointDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import IFindByMonthAndProviderDTO from '@modules/appointments/dtos/IFindByMonthAndProviderDTO';
import IFindByDayAndProviderDTO from '@modules/appointments/dtos/IFindByDayAndProviderDTO';

import Appointment from '../../infra/typeorm/entities/Appointment';

class FakeAppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(appointment.date, date),
    );

    return findAppointment;
  }

  public async create({
    providerId,
    userId,
    date,
  }: ICreateAppointDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: uuid(), date, providerId, userId });

    this.appointments.push(appointment);

    return appointment;
  }

  public async findByMonthAndProvider({
    providerId,
    month,
    year,
  }: IFindByMonthAndProviderDTO): Promise<Appointment[]> {
    const appointments = this.appointments.filter(
      appointment =>
        appointment.providerId === providerId &&
        getMonth(appointment.date) + 1 === month &&
        getYear(appointment.date) === year,
    );

    return appointments;
  }

  public async findByDayAndProvider({
    providerId,
    year,
    month,
    day,
  }: IFindByDayAndProviderDTO): Promise<Appointment[]> {
    const appointments = this.appointments.filter(
      appointment =>
        appointment.providerId === providerId &&
        getDate(appointment.date) === day &&
        getMonth(appointment.date) + 1 === month &&
        getYear(appointment.date) === year,
    );

    return appointments;
  }
}

export default FakeAppointmentsRepository;
