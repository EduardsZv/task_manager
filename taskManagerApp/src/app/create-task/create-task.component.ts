import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'tmg-create-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  createTaskForm = new FormGroup({
    title: new FormControl(""),
    description: new FormControl(""),
    type: new FormControl(""),
    createdOn: new FormControl(""),
    status: new FormControl("")
  })

  submitTask() {
    console.log(this.createTaskForm.value);
  }
}
