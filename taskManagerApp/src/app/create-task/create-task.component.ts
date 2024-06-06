import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { DisplayTasksComponent } from '../display-tasks/display-tasks.component';


@Component({
  selector: 'tmg-create-task',
  standalone: true,
  imports: [ReactiveFormsModule, DisplayTasksComponent, CommonModule],
  providers: [DatePipe],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
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

  submitTask() {
      if (this.createTaskForm.valid) {
        let currTime = new Date();
        let submit_time = this.datePipe.transform(currTime, 'yyyy-MM-dd HH:mm:ss');
        this.createTaskForm.get('createdOn')?.setValue(new Date().toString());
        console.log('Form Submitted', this.createTaskForm.value);
        // Perform the submit action, e.g., send the data to a server
      } else {
        console.log('Form is invalid');
        // Optionally, mark all controls as touched to show errors
        this.createTaskForm.markAllAsTouched();
      }
    

  }

}
