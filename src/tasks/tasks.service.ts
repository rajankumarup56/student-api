import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  // 1. Storage Array (In-Memory Database)
  private tasks: Task[] = [];

  // 2. CREATE:  Added new task in array
  create(createTaskDto: { title: string; description?: string }) {
    const newTask: Task = {
      id: crypto.randomUUID(), // create new Unique ID 
      title: createTaskDto.title,
      description: createTaskDto.description,
      done: false, // it will be there by defult.
      createdAt: new Date(),
    };
    this.tasks.push(newTask);
    return newTask;
  }

  // 3. READ ALL: Return all from task
  findAll() {
    return this.tasks;
  }

  // 4. READ ONE: find task from ID.
  findOne(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  // 5. UPDATE: To update task
  update(id: string, updateTaskDto: { title?: string; done?: boolean }) {
    const task = this.findOne(id); // Pehle task dhoondho (nahi mila toh 404 dega)
    if (updateTaskDto.title !== undefined) task.title = updateTaskDto.title;
    if (updateTaskDto.done !== undefined) task.done = updateTaskDto.done;
    return task;
  }

  // 6. DELETE: to delete task from array
  remove(id: string) {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    this.tasks.splice(index, 1);
    return { message: 'Task deleted successfully' };
  }
}