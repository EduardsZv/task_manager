import { Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';

export const routes: Routes = [
    {
        path: 'create-task-component',
        component: CreateTaskComponent
    }
];
