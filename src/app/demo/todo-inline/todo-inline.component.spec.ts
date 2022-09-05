import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInlineComponent } from './todo-inline.component';

describe('TodoInlineComponent', () => {
  let component: TodoInlineComponent;
  let fixture: ComponentFixture<TodoInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
