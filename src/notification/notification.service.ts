import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Subject, map } from 'rxjs';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  private readonly subject = new Subject();

  notificationListener() {
    try {
      return this.subject.asObservable().pipe(
        map((notification: Notification) => JSON.stringify(notification))
      );
    } catch (error) {
      this.logger.error('notificationListener : ' + error.message);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
