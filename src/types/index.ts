export type Fruit = {
  id: string;
  name: string;
}

export type ShoppingItem = {
  id: string;
  name: string;
  quantity: number;
  isPromo : boolean; // Affichage nom en rouge si en promo
  // Price (Bonus)
  unitPrice: number;
}

export type ShoppingItemDTO = {
  name: string;
  isPromo: boolean;
  unitPrice: number;
}
