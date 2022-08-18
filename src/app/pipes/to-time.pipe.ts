import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class ToTimePipe implements PipeTransform {

  transform(value: number): string {
    const seconds = value % 60;
    const minutes = Math.floor(value/60);
    const response = (minutes < 10 ? '0':'') + minutes + ' minutes ' + (seconds<10 ? '0': '') + seconds + ' secondes';
    return response;
  }

}
