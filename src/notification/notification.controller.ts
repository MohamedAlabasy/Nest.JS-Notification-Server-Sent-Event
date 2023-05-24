import { Controller, Post, Body, Sse, Patch } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { IMessage } from 'src/interfaces/IMessage.interface';
import { CreateNotificationsDto } from './dto/create-notifications.dto';
import { UpdateAllUnseenNotificationDto } from './dto/update-all-unseen-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  // listening for new notification
  @Sse()
  notificationListener() {
    return this.notificationService.notificationListener();
  }


  // create new notification
  @Post()
  async createNotification(@Body() createNotificationsDto: CreateNotificationsDto): Promise<IMessage> {
    return await this.notificationService.createNotification(createNotificationsDto);
  }


  // update all seen notifications
  @Patch()
  async updateUnseenNotificationByIds(@Body() updateAllUnseenNotificationDto: UpdateAllUnseenNotificationDto) {
    return await this.notificationService.updateUnseenNotificationByIds(updateAllUnseenNotificationDto);
  }

}
