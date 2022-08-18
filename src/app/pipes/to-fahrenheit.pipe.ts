import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return ( value * 9/5) + 32;
  }

}
