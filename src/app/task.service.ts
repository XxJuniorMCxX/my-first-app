import { Injectable } from '@angular/core';
import { Task } from './task.model';
//decorador que indica que la clase es un servicio
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  private nextId: number = 1;

  constructor(){
    this.loadTasks();;
  }

  //metodo para listar nuestras tareas
  getTask(): Task[] {
    return this.tasks;
  }

  //guardar tareas en un storage
  private savetasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  //Cargar Tareas
  private loadTasks(): void {
    const saveTasks = localStorage.getItem('tasks');
    if (saveTasks) {
      this.tasks = JSON.parse(saveTasks);

      this.nextId=this.tasks.length ? Math.max(...this.tasks.map(task=>task.id))+1:1;
    }
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
    this.savetasks();
  }

  //metodo de eliminar una tarea

  removeTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.savetasks();
  }

  //metodo de completar una tarea modificar
  toogleTaskCompletion(id: number): void {
    const task = this.tasks.find((task) => task.id === id);

    if (task != null) {
      task.completed = !task.completed;
      this.savetasks();
    }
  }
}
