import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [StudentModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
