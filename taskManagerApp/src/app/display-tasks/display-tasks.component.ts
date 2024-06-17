import { Component, inject } from '@angular/core';
import { Task } from './tasks';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'tmg-display-tasks',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterModule],
  templateUrl: './display-tasks.component.html',
  styleUrl: './display-tasks.component.scss'
})
export class DisplayTasksComponent {
  taskService: TasksService = inject(TasksService);
  tasks: Task[] = [];


  constructor(private router: Router) {
    this.tasks = this.taskService.getTasks();
  }
  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks(); // Update the local tasks array
  }
  viewTaskDetail(taskId: number) {
    this.router.navigate(['/task-details-component', taskId]);
  }
  
}
