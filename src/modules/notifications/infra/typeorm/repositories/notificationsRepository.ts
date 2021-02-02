import { getMongoRepository, MongoRepository } from 'typeorm';
// import { getMonth, getYear } from 'date-fns';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import Notification from '../schemas/notification';

class NotificationsRepository implements INotificationsRepository {
  private ormRepository: MongoRepository<Notification>;

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongo');
  }

  public async create({
    content,
    recipientId,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({ content, recipientId });

    await this.ormRepository.save(notification);

    return notification;
  }
}

export default NotificationsRepository;
