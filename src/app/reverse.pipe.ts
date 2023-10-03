import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: unknown) {
    return this.reverseString(value);
  }

  reverseString(value:any) {
    const givenString= [];
    for (let i = value.length - 1; i >= 0; i--) {
      givenString.push(value[i]);
      // console.log(value[i])
    }
    return givenString.join('');
  }
}
