import { Component, inject } from '@angular/core';
import { Task } from '../display-tasks/tasks';
import { CommonModule } from '@angular/common';
import { TasksService } from '../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'tmg-task-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  tasksService: TasksService = inject(TasksService);
  selectedTask: Task = {};
  taskId!: number;
  editTaskForm!: FormGroup;
  taskEditable: boolean = false;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taskId = +params.get('id')!;
      this.selectedTask = this.tasksService.getTaskById(this.taskId);

      this.editTaskForm = new FormGroup({
        title: new FormControl(this.selectedTask.title, [
          Validators.required
        ]),
        description: new FormControl(this.selectedTask.description, [
          Validators.required,
          Validators.maxLength(200)
        ]),
        type: new FormControl(this.selectedTask.type, [
          Validators.required
        ]),
        createdOn: new FormControl(this.selectedTask.created_on),
        status: new FormControl(this.selectedTask.status, [
          Validators.required
        ])
      })

    });
  }
  constructor(private route: ActivatedRoute) {}
  
  
  editTask() {
    this.tasksService.editSelectedTask(this.taskId, this.editTaskForm.controls['title'].value!, this.editTaskForm.controls['description'].value!, this.editTaskForm.controls['type'].value!, this.selectedTask.created_on!,this.editTaskForm.controls['status'].value!);
    this.selectedTask = this.tasksService.getTaskById(this.taskId);
  }

  submitTask() {
    if (this.editTaskForm.valid) {
      console.log('Form Submitted', this.editTaskForm.value);
      this.editTask();
      this.toggleEdit();

      
    } else {
      console.log('Form is invalid');
      this.editTaskForm.markAllAsTouched();
    }
  }

  toggleEdit() {this.taskEditable = !this.taskEditable;}
}
