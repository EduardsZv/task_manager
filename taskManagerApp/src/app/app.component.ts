import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';
import { CommonModule } from '@angular/common';
import jsonData from './data/tasks.json';
import { Task } from './display-tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CreateTaskComponent, DisplayTasksComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks: Task[] = jsonData.tasks;
}
