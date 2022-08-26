import { Injectable } from '@angular/core';
import { ShoppingItem, ShoppingItemDTO } from 'src/types';
import { nanoid } from "nanoid";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private _shoppingList: ShoppingItem[] = [
    {
      id: nanoid(),
      name: 'Pomme',
      isPromo: true,
      quantity: 1,
      unitPrice: 5.50
    }
  ];

  private _totalPrice: number;

  constructor() {
    this._totalPrice = this._shoppingList.reduce((acc, current) => {
      return acc + (current.quantity * current.unitPrice);
    }, 0);
  }

  getAll() {
    return this._shoppingList;
  }

  getTotalPrice() {
    this._totalPrice = this._shoppingList.reduce((acc, current) => {
      return acc + (current.quantity * current.unitPrice);
    }, 0);
    return this._totalPrice;
  }

  create(item: ShoppingItemDTO) {
    const newItem: ShoppingItem = {
      id: nanoid(),
      quantity: 1,
      name: item.name,
      isPromo: item.isPromo,
      unitPrice: item.unitPrice
    };

    this._shoppingList.push(newItem);
    this._totalPrice = this.getTotalPrice();
  }

  delete(id: string) {
    const index = this._shoppingList.findIndex((shoppingItem) => shoppingItem.id === id);

    if (index === -1) {
      console.log('Suppression impossible');
      return;
    }

    this._shoppingList.splice(index, 1);
    this._totalPrice = this.getTotalPrice();
  }

  updateQuantity(id: string, increment: boolean = true){
    const itemIndex = this._shoppingList.findIndex(item => item.id === id);

    if (increment) {
      this._shoppingList[itemIndex].quantity += 1;
    }else {
      this._shoppingList[itemIndex].quantity -= 1;
      if (this._shoppingList[itemIndex].quantity === 0) {
        this.delete(id);
      }
    }

    this._totalPrice = this.getTotalPrice();
  }
}
