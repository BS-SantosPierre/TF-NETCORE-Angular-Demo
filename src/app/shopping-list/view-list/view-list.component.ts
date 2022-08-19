import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  @Input() listAAfficher : string[] = [];
  @Output() supprimer : EventEmitter<number>;

  constructor() { 
    this.supprimer = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  sendId(index : number){
    this.supprimer.emit(index);
  }
}
