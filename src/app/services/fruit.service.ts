import { Injectable } from '@angular/core';
import { Fruit } from 'src/types';
import { nanoid } from "nanoid";

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  fruits: Fruit[] = [];

  constructor() { }

  // Méthode qui va recherché tout les fruits
  getAll(): Fruit[] {
    return this.fruits;
  }

  // Méthode permettant l'ajout d'un fruit
  create(name :string) {
    const newFruit = {
      id: nanoid(), // Génération id unique
      name
    };
    this.fruits.push(newFruit);
  }

  // Méthode permettant la suppression d'un fruit
  delete(id: string) {
    const index = this.fruits.findIndex((fruit) => fruit.id === id);

    if (index === -1) {
      console.log('Suppression impossible');
      return;
    }

    this.fruits.splice(index, 1);
  }
}
