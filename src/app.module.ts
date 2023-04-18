import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReminderModule } from './reminder/reminder.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ReminderModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
