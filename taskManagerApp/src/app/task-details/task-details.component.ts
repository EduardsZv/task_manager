import { Component, inject } from '@angular/core';
import { Task } from '../display-tasks/tasks';
import { CommonModule } from '@angular/common';
import { TasksService } from '../services/tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tmg-task-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  tasksService: TasksService = inject(TasksService);
  selectedTask: Task = {};
  taskId!: number;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taskId = +params.get('id')!;
      this.selectedTask = this.tasksService.getTaskById(this.taskId);

    });
  }
  constructor(private route: ActivatedRoute) {}
  
  
}
