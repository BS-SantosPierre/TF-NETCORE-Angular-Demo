import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.scss']
})
export class AccordeonComponent implements OnInit {

  mesCours : Cours[] = [
    new Cours("HTML","Mettre en page des sites web"),
    new Cours("CSS", "Les rendre plus ou moins beaux"),
    new Cours("JavaScript", "Les rendre dynamiques"),
    new Cours("C#", "Un super langage orienté objet")
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleDescription(indice : number){
    this.mesCours.forEach(cours => {
      if(cours.title !== this.mesCours[indice].title)
      cours.isActive = false});
    this.mesCours[indice].isActive = !this.mesCours[indice].isActive;
  }
}
