import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Adiciona CommonModule e FormsModule
})
export class Componente2Component {
  public items: string[] = [];  // Lista de itens
  public newItem: string = '';  // Valor do novo item a ser adicionado

  constructor() { }

  public addItem(): void {
    if (this.newItem.trim()) {
      this.items.push(this.newItem);
      this.newItem = '';  // Limpa o campo de entrada após adicionar
    }
  }
}
