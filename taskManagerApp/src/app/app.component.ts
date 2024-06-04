import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'taskManagerApp';
}
