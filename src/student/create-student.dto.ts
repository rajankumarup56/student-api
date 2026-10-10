import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty({ message: 'Name khali nahi hona chahiye' })
  name: string;

  @IsEmail({}, { message: 'Sahi email address dalein' })
  @IsNotEmpty({ message: 'Email zaroori hai' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password kam se kam 6 characters ka hona chahiye' })
  password: string;
}