import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('reminder')
export class ReminderController {
  @Get('getAll')
  getUserReminders() {
    return 123;
  }

  @Post()
  create() {
    return 'reminder created';
  }

  @Put()
  edit() {
    return 'reminder edited';
  }

  @Delete()
  delete() {
    return 'reminder removed';
  }
}
