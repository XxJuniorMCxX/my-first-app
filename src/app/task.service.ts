import { Injectable } from '@angular/core';
import { Task } from './task.model';
//decorador que indica que la clase es un servicio
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  private nextId: number = 1;

  //metodo para listar nuestras tareas
  getTask(): Task[] {
    return this.tasks;
  }

  //metodo de añadir una tarea
  addTask(title: string, description: string): void {
    //push:añadir tarea  a un arreglo
    this.tasks.push({
      id: this.nextId++,
      title,
      description,
      completed: false,
    });
  }

  //metodo de eliminar una tarea

  removeTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  //metodo de completar una tarea modificar
  toogleTaskCompletion(id: number): void {
    const task = this.tasks.find((task) => task.id === id);

    if (task != null) {
      task.completed = !task.completed;
    }
  }
}
