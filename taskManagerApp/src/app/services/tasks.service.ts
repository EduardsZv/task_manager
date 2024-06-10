import { Injectable } from '@angular/core';
import jsonData from '../data/tasks.json';
import { Task } from '../display-tasks/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
  tasks: Task[] = jsonData.tasks;

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    return this.tasks[id];
  }

  createTask(title: string, desc: string, type: string, createdOn: string, status: string) {
    let newTask: Task = {title: title, description: desc, type: type, created_on: createdOn, status: status};
    this.tasks.push(newTask);
  }

  deleteTask(i: number): Task[] {
    return this.tasks.splice(i, 1);
  }
}
