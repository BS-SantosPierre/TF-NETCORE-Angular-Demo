import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserPlaceholder } from 'src/types';
import { JsonplaceholderUserService } from './services/jsonplaceholder-user.service';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.scss']
})
export class DemoHttpComponent implements OnInit {
  users: UserPlaceholder[] = [];
  subscriptionAll!: Subscription;
  subscriptionCreate!: Subscription;
  loading: boolean = false;

  constructor(
    private _jsonPlaceHolderUser: JsonplaceholderUserService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.subscriptionAll = this._jsonPlaceHolderUser.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.loading = false;
        this.subscriptionAll.unsubscribe();
      }
    });
  }

  addUser() {
    const data: UserPlaceholder = {
      "id": 11,
      "name": "Pierre Santos",
      "username": "psantos",
      "email": "pierre@bstorm.be",
      "address": {
        "street": "Hello",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
    this.loading = true;
    this.subscriptionCreate = this._jsonPlaceHolderUser.addUser(data).subscribe({
      next: (user) => {
        this.users.push(user);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Done');
        this.loading = false;
        this.subscriptionCreate.unsubscribe();
      }
    });
  }

}
