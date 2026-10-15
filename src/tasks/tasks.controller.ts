import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  // Dependency Injection: Controller ke andar Service ko connect kiya
  constructor(private readonly tasksService: TasksService) {}

  @Post()
create(@Body() createTaskDto: CreateTaskDto) {
  return this.tasksService.create(createTaskDto);
}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  // @ApiParam({ title: 'string', done: 'boolean', description: 'string' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto ) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}