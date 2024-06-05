import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'tmg-create-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [DatePipe],
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

  constructor(private datePipe: DatePipe) {}

  submitTask() {
    let currTime = new Date();
    let submit_time = this.datePipe.transform(currTime, 'yyyy-MM-dd HH:mm:ss');
    this.createTaskForm.get('createdOn')?.setValue(new Date().toString());
    console.log(this.createTaskForm.value);
  }

}
