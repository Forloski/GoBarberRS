// import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';
import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointDTO from '../dtos/ICreateAppointmentDTO';
import IFindByMonthAndProviderDTO from '../dtos/IFindByMonthAndProviderDTO';
import IFindByDayAndProviderDTO from '../dtos/IFindByDayAndProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findByMonthAndProvider(
    data: IFindByMonthAndProviderDTO,
  ): Promise<Appointment[]>;
  findByDayAndProvider(data: IFindByDayAndProviderDTO): Promise<Appointment[]>;
}
