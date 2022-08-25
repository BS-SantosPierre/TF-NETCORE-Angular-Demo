import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  //On injecte ElementRef -> Permet de récupérer l'élément sur lequel il y a notre directive
  constructor(private _ref : ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    //Instructions à déclencher quand la souris va passer sur notre élément HTML
    this._ref.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    //Instructions à déclencher quand la souris va quitter l'élément HTML
    this._ref.nativeElement.style.backgroundColor = '';
  }

}
