import { Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';

export const routes: Routes = [
    {
        path: 'create-task-component',
        component: CreateTaskComponent
    },
    {
        path: 'display-tasks-component',
        loadComponent: () => import('./display-tasks/display-tasks.component').then((c) => c.DisplayTasksComponent)
    },
    {
        path: 'task-details-component/:id',
        loadComponent: () => import('./task-details/task-details.component').then((c) => c.TaskDetailsComponent)
    }
];
