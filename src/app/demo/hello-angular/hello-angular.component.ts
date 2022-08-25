import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-angular',
  templateUrl: './hello-angular.component.html',
  styleUrls: ['./hello-angular.component.scss']
})
export class HelloAngularComponent implements OnInit {
	name:string = 'John Doe';
  constructor() { }

  ngOnInit(): void {
		console.log("Je suis là");
		this.name = 'Jane Doe';
  }

	handleClick() {
		this.name = 'Donald';
	}

}
