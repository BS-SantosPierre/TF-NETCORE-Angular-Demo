import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.scss']
})
export class DemoDirectivesComponent implements OnInit {
	isOpen: boolean = false;
	choice: number = 0;

	listItem: string[] = ['pommes', 'poires', 'fraises', 'bananes'];

  constructor() { }

  ngOnInit(): void {
  }

	add() {
		// this.listItem = [...this.listItem, 'hey'];
		this.listItem.push('hey');
	}
}
