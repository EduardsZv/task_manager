import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';
import { CommonModule } from '@angular/common';
import jsonData from './data/tasks.json';
import { Task } from './display-tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CreateTaskComponent, DisplayTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks: Task[] = jsonData.tasks;
}
