import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule]  // Adiciona FormsModule aqui
})
export class AppComponent {
  title = 'my-app';
}
