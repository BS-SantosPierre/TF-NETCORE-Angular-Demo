import { Injectable } from '@angular/core';
import { nanoid } from "nanoid";

export type Todo = {
	id: string;
	title : string;
	done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
	private _todos: Todo[] = [
		{
			id: nanoid(),
			title: 'My Awesome Title',
			done: false
		}
	];

  constructor() { }

	getTodos() {
		return this._todos;
	}

	addTodo(title: string) {
		this._todos.push({ id: nanoid(), title, done: false });
	}

	toggleDone(id: string) {
		const todoIndex = this._todos.findIndex((t) => t.id === id);
		this._todos[todoIndex].done = !this._todos[todoIndex].done;
	}

	deleteTodo(id: string) {
		const todoIndex = this._todos.findIndex((t) => t.id === id);
		this._todos.splice(todoIndex, 1);
	}

}
