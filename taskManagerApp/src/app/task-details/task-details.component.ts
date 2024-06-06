import { Component, Input } from '@angular/core';
import { Task } from '../display-tasks/tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tmg-task-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  @Input() task: Task = {};

  ngOnInit(): void {
    this.task = history.state.task;
  }

  
}
