import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../display-tasks/tasks';


@Injectable({
  providedIn: 'root'
})
export class TasksAPIService {

  private apiUrl: string = "";

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.apiUrl);
  }
  getSpecificTask(index: number) {
    return this.http.get(`${this.apiUrl}/${index}`);
  }
  addTask(task: Task) {
    return this.http.post(this.apiUrl, task);
  }
  updateTask(index: number, task: Task) {
    return this.http.put(`${this.apiUrl}/${index}`, task);
  }
  deleteUser(index: number) {
    return this.http.delete(`${this.apiUrl}/${index}`);
  }
}
