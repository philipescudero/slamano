import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  // Importa o FormsModule para usar ngModel
import { Componente2Component } from './componente2.component';

describe('Componente2Component', () => {
  let component: Componente2Component;
  let fixture: ComponentFixture<Componente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2Component ],
      imports: [ FormsModule ]  // Importa o FormsModule aqui
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica se o componente foi criado
  });

  it('should add an item to the list', () => {
    component.newItem = 'Novo Item';
    component.addItem();
    expect(component.items).toContain('Novo Item');  // Verifica se o novo item foi adicionado à lista
  });

  it('should not add an empty item to the list', () => {
    component.newItem = '';
    component.addItem();
    expect(component.items.length).toBe(3);  // Verifica se a lista ainda tem o número inicial de itens
  });
});
