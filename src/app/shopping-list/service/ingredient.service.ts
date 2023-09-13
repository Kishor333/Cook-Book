import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  // newIngredirnt = new EventEmitter<Ingredient[]>();
  newIngredirnt = new Subject<Ingredient[]>();


  constructor() { }

  private ingredient: Ingredient[] =[
    { name:'Apple', amount:5 },
    { name:'Tomato', amount:7 }
  ]; 

  getIngredient() {
    return this.ingredient.slice();
  }

  addIngredients(ingredirntAdded: Ingredient[]) {
    this.ingredient.push(...ingredirntAdded);
    this.newIngredirnt.next(this.ingredient.slice());
    // console.log(ingredirntAdded);
  }
}
