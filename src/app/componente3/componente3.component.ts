import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Componente3Component {
  public tasks: string[] = [];
  public newTask: string = '';

  constructor() { }

  public addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  public removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
