import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Learn NestJS', description: 'Task ka title' })
  title: string;

  @ApiProperty({ example: 'bevarc company', required: false })
  description?: string;
}
