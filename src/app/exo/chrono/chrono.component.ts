import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {
  //https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
  timer: ReturnType<typeof setInterval> | null = null;
  seconds: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.timer = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      return;
    }
  }

  reset() {
    this.seconds = 0;
    this.stop();
  }

}
