import { Component } from '@angular/core';
import { Task } from './tasks';
import { CommonModule } from '@angular/common';
import jsonData from '../data/tasks.json';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tmg-display-tasks',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterModule],
  templateUrl: './display-tasks.component.html',
  styleUrl: './display-tasks.component.scss'
})
export class DisplayTasksComponent {
  tasks: Task[] = jsonData.tasks;

  deleteTask(i: number): Task[] {
    return this.tasks.splice(i, 1);
  }

  constructor(private router: Router) {}

  viewTaskDetail(taskId: number) {
    this.router.navigate(['/task-details', taskId]);
  }
  selectTask(index: number) {
    return this.tasks[index];
  }
  
}
