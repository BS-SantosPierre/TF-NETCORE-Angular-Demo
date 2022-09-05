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

export interface UserPlaceholder {
  address:  Address;
  company:  Company;
  email:    string;
  id:       number;
  name:     string;
  phone:    string;
  username: string;
  website:  string;
 }

 export interface Address {
  city:    string;
  geo:     Geo;
  street:  string;
  suite:   string;
  zipcode: string;
 }

 export interface Geo {
  lat: string;
  lng: string;
 }

 export interface Company {
  bs:          string;
  catchPhrase: string;
  name:        string;
 }
