import { Component, OnInit } from '@angular/core';
import { FruitService } from 'src/app/services/fruit.service';
import { Fruit } from 'src/types';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit {
  fruits: Fruit[] = [];
  newFruit: string = '';

  constructor(private _fruitService: FruitService) { }

  ngOnInit(): void {
    this.fruits = this._fruitService.getAll();
  }

  addFruit(): void {
    this._fruitService.create(this.newFruit);
  }

  deleteFruit(id: string): void {
    this._fruitService.delete(id);
  }
}
