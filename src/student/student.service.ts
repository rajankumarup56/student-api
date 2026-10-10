import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class StudentService {
  // Yahan type explicitly 'any[]' define kar diya hai
  private students: any[] = [];

  // 1. Register Logic
  register(studentData: any) {
    const existingStudent = this.students.find(s => s.email === studentData.email);
    if (existingStudent) {
      throw new BadRequestException('Student with this email already exists!');
    }
    const newStudent = { id: Date.now().toString(), ...studentData };
    this.students.push(newStudent);
    return { message: 'Student registered successfully', student: newStudent };
  }

  // 2. Login Logic
  login(credentials: any) {
    const student = this.students.find(
      s => s.email === credentials.email && s.password === credentials.password
    );
    if (!student) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return { message: 'Login successful', student };
  }

  // 3. List Logic
  findAll() {
    return this.students;
  }
}