import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: unknown) {
    return this.sortData(value);
  }

  sortData(value:any) {
    let sortedProducts = value.sort(
      (p1:any, p2:any) => (p1.name < p2.name) ? -1 : (p1.name > p2.name) ? 1 : 0);
      // console.log(sortedProducts)
    return sortedProducts;
  }
}
