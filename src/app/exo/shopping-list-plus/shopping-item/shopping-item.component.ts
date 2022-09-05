import { Component, Input, OnInit } from '@angular/core';
import { ShoppingItem } from 'src/types';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
  @Input() item!: ShoppingItem;

  constructor(private _shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  delete(id: string):void {
    this._shoppingService.delete(id);
  }

  updateQuantity(id: string, increment: boolean = true){
    this._shoppingService.updateQuantity(id, increment);
  }

}
