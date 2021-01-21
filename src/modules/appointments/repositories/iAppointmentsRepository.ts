import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointDTO from '../dtos/iCreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
