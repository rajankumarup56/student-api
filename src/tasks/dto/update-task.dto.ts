import { ApiProperty } from '@nestjs/swagger';


export class UpdateTaskDto {
  @ApiProperty({ example: 'Learn NestJS', description: 'Task ka title', required: false})
  title?: string;

  @ApiProperty({ example: 'bevarc company', required: false })
  description?: string;

  @ApiProperty({example: 'true', required:false })
  done?:boolean;
}

