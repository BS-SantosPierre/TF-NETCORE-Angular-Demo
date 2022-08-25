import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	users: User[] = [
		{
			id: 1,
			firstname: "John",
			lastname: "Doe",
			login: 'johndoe',
			password: 'j'
		},
		{
			id: 2,
			firstname: "Jane",
			lastname: "Doe",
			login: 'janedoe',
			password: 'j'
		}
	];

  constructor() { }

	getUsers() {
		return this.users;
	}

	getUser(id: number) {
		return this.users.find((u) => u.id === id);
	}
}
