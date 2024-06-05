import { Component } from '@angular/core';
import { Task } from './tasks';
import { CommonModule } from '@angular/common';
import jsonData from '../data/tasks.json';

@Component({
  selector: 'tmg-display-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-tasks.component.html',
  styleUrl: './display-tasks.component.scss'
})
export class DisplayTasksComponent {
  tasks: Task[] = jsonData.tasks;

  deleteTask(i: number): Task[] {
    return this.tasks.splice(i, 1);
  }
  
}
