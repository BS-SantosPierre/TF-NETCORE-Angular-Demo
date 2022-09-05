import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo, TodosService } from './services/todos.service';

@Component({
  selector: 'app-todo-inline',
  template: `
    <h2>Todo List Inline</h2>
		<form (ngSubmit)="handleSubmit()">
			<input type="text" [formControl]="titleControl">
			<button>ADD</button>
		</form>
		<ul>
			<app-todo-item
				*ngFor="let todo of todos"
				[todo]="todo"
				(deleteTodo)="handleDeleteTodo($event)"
				(toggleTodo)="handleToggleTodo($event)">
			</app-todo-item>
		</ul>
  `,
  styleUrls: ['./todo-inline.component.scss']
})
export class TodoInlineComponent implements OnInit {
	private _todos: Todo[] = this._todosService.getTodos();
	public titleControl: FormControl = new FormControl('');

  constructor(private _todosService: TodosService) { }


	public get todos() : Todo[] {
		return this._todos;
	}

	handleSubmit() {
		this._todosService.addTodo(this.titleControl.value);
	}

  ngOnInit(): void {
  }

	handleToggleTodo(event: string) {
		this._todosService.toggleDone(event);
	}

	handleDeleteTodo(event: string) {
		this._todosService.deleteTodo(event);
	}

}
