import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../services/todos.service';

@Component({
  selector: 'app-todo-item',
  template: `
    	<li [ngStyle]="{'background-color': todo.done ? 'green' : ''}">
				{{todo.title}} <br/>
				<span style="cursor: pointer;" (click)="onToggleTodo()">{{ todo.done ? 'Undone' : 'Done' }}</span>
				<span style="cursor: pointer; margin-left: 20px" (click)="onDeleteTodo()">X</span>
			</li>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
	@Input() todo!: Todo

	@Output() deleteTodo: EventEmitter<string>;

	@Output() toggleTodo: EventEmitter<string>;

  constructor() {
		this.deleteTodo = new EventEmitter<string>();
		this.toggleTodo = new EventEmitter<string>();
	}

  ngOnInit(): void {
  }

	onDeleteTodo() {
		this.deleteTodo.emit(this.todo.id);
	}

	onToggleTodo() {
		console.log(this.todo.id);

		this.toggleTodo.emit(this.todo.id);
	}

}
