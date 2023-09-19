import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  // newIngredirnt = new EventEmitter<Ingredient[]>();
  newIngredirnt = new Subject<Ingredient[]>();

  editableIngridentIndex = new Subject<number>();


  constructor() { }

  private ingredient: Ingredient[] =[
    { name:'Apple', amount:5 },
    { name:'Tomato', amount:7 }
  ]; 

  getIngredient() {
    return this.ingredient.slice();
  };

  getEditableIngredient(index:number) {
    return this.ingredient[index];
  };

  addIngredients(ingredirntAdded: Ingredient[]) {
    this.ingredient.push(...ingredirntAdded);
    this.newIngredirnt.next(this.ingredient.slice()); //show the change in ingredient
    // console.log(ingredirntAdded);
  };

  updateIngredient(index:number, data: any) {
    this.ingredient[index] = data;
    this.newIngredirnt.next(this.ingredient.slice());

    // console.log(this.ingredient.slice());
  };

  deleteIngredient(index:number) {
    this.ingredient.splice(index,1);
    this.newIngredirnt.next(this.ingredient.slice());
  }
}
