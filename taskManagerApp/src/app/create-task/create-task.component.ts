import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { DisplayTasksComponent } from '../display-tasks/display-tasks.component';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'tmg-create-task',
  standalone: true,
  imports: [ReactiveFormsModule, DisplayTasksComponent, CommonModule],
  providers: [DatePipe],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  taskService: TasksService = inject(TasksService);

  createTaskForm = new FormGroup({
    title: new FormControl("", [
      Validators.required
    ]),
    description: new FormControl("", [
      Validators.required,
      Validators.maxLength(200)
    ]),
    type: new FormControl("", [
      Validators.required
    ]),
    createdOn: new FormControl(""),
    status: new FormControl("", [
      Validators.required
    ])
  })

  constructor(private datePipe: DatePipe) {}

  createTask(title: string, desc: string, type: string, createdOn: string, status: string) {
    this.taskService.createTask(title, desc, type, createdOn, status);
  }

  submitTask() {
      if (this.createTaskForm.valid) {
        let currTime = new Date();
        let submit_time = this.datePipe.transform(currTime, 'HH:mm:ss');
        this.createTaskForm.get('createdOn')?.setValue(new Date().toString());
        console.log('Form Submitted', this.createTaskForm.value);
        this.createTask(this.createTaskForm.controls['title'].value!, this.createTaskForm.controls['description'].value!, this.createTaskForm.controls['type'].value!, this.createTaskForm.controls['createdOn']. value!,this.createTaskForm.controls['status'].value!);

        
      } else {
        console.log('Form is invalid');
        this.createTaskForm.markAllAsTouched();
      }
    

  }

}
