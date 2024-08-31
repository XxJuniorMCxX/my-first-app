import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TaskInputComponent } from './task-input/task-input.component';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { TaskListComponent } from "./task-list/task-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskInputComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   

  }


