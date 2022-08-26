import { Component, OnInit } from '@angular/core';
import { ShoppingItem, ShoppingItemDTO } from 'src/types';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-shopping-list-plus',
  templateUrl: './shopping-list-plus.component.html',
  styleUrls: ['./shopping-list-plus.component.scss']
})
export class ShoppingListPlusComponent implements OnInit {
  listItems: ShoppingItem[] = []

  dataInput: ShoppingItemDTO = {
    isPromo: false,
    name: '',
    unitPrice: 0,
  }

  constructor(private _shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.listItems = this._shoppingService.getAll();
  }

  add():void {
    this._shoppingService.create(this.dataInput);
  }

  totalPrice() {
    return this._shoppingService.getTotalPrice();
  }
}
