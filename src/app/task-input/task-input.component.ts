import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css',
})
export class TaskInputComponent {
  title: string = '';

  description: string = '';

  constructor(private taskService: TaskService) {}

  addTasks(): void {
    if (this.title.trim() && this.description.trim()) {
      console.log(this.title);
      console.log(this.description);
      console.log('Se añadio Correctamente');

      this.taskService.addTask(this.title, this.description);
      this.title = '';
      this.description = '';
    } else {
      console.log('Llenar el Formulario');
    }
  }
}
