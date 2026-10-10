import { Controller, Post, Get, Body } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Register Route
  @Post('register')
  register(@Body() studentData: any) {
    return this.studentService.register(studentData);
  }

  // Login Route
  @Post('login')
  login(@Body() credentials: any) {
    return this.studentService.login(credentials);
  }

  // List Route
  @Get('list')
  findAll() {
    return this.studentService.findAll();
  }
}