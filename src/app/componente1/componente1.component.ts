import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',  // Nome do seletor do componente
  templateUrl: './componente1.component.html',  // Referência ao template HTML
  styleUrls: ['./componente1.component.css']  // Referência ao estilo CSS
})
export class Componente1Component implements OnInit {

  public message: string = '';  

  constructor() { }

  ngOnInit(): void {
    this.message = "Componente 1 inicializado!";  
  }


  public someMethod(): void {
    
    console.log('Método someMethod() foi chamado');
  }
}
