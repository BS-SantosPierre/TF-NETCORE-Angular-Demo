import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrls: ['./demo-pipes.component.scss']
})
export class DemoPipesComponent implements OnInit {
	message?: string;
	age?: number;
	birthDate?: Date;
	price?: number;


  constructor() {

	}

  ngOnInit(): void {
		this.message = 'Salut tout le monde';
		this.age = 26;
		this.birthDate = new Date();
		this.price = 10.58;
  }

}
