import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Componente3Component } from './componente3.component';

describe('Componente3Component', () => {
  let component: Componente3Component;
  let fixture: ComponentFixture<Componente3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [Componente3Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Componente3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task to the list', () => {
    component.newTask = 'New Task';
    component.addTask();
    expect(component.tasks).toContain('New Task');
    expect(component.newTask).toBe('');
  });

  it('should remove a task from the list', () => {
    component.tasks = ['Task 1', 'Task 2'];
    component.removeTask(0);
    expect(component.tasks).not.toContain('Task 1');
    expect(component.tasks).toContain('Task 2');
  });
});
