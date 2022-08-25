import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppingList : string[] = ["Patates", "Riz", "Poulet"];
  nouveauProduit : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ajouter() : void {
    //On vérifie que l'utilsateur a bien rentré une valeur dans l'input et que ce n'est pas plein d'espaces
    if(this.nouveauProduit.trim() !== ""){
      //On vérifie que l'élément qu'on essaie d'ajouter dans la liste n'est pas déjà présent (peu importe la casse)
      if(!this.shoppingList.find(produit => produit.toLowerCase() == this.nouveauProduit.trim().toLowerCase()))
      {
        //ajout à la liste
        this.shoppingList.push(this.nouveauProduit.trim());
        //remise à zéro de l'input
        this.nouveauProduit = "";
      }
      console.log(this.shoppingList);

    }
  }

  delete(index : number) : void {
    console.log(index);
    //La fonction splice supprime prend en premier paramètre l'indice à partir duquel on veut supprimer dans le tableau
    //et en deuxième, combien d'éléments on souhaite supprimer (il est optionnel et si on ne met rien, supprime jusqu'à la fin du tableau)
    this.shoppingList.splice(index, 1);
  }

}
