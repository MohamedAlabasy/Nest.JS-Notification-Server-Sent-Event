import { Controller, Get, Post, Body, Patch, Param, Delete, Sse } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  // listening for new notification
  @Sse()
  notificationListener() {
    return this.notificationService.notificationListener();
  }

}
