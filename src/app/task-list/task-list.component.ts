import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor(private taskService:TaskService){}

  removeTask(id:number):void{
    this.taskService.removeTask(id);

  }

  //listado de tareas
  get tasks():Task[]{
    return this.taskService.getTask();
  }

  //editar Tare
  toggleTaskCompletion(task:Task){
    this.taskService.toogleTaskCompletion(task.id);
  }
}
