import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateStudentDto } from './create-student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Register Route
  @Post('register')
  register(@Body() studentData: CreateStudentDto) {
    return this.studentService.register(studentData);
  }

  // Login Route
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() credentials: any) {
    return this.studentService.login(credentials);
  }

  // List Route
  @Get('list')
  findAll() {
    return this.studentService.findAll();
  }
}