import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientService } from './service/ingredient.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredientList:Ingredient[] = [];
  

  constructor(private ingservice: IngredientService) {
   }

  ngOnInit(): void {
    this.ingredientList = this.ingservice.getIngredient();
    this.ingservice.newIngredirnt.subscribe(
      (ingredient:Ingredient[])=>{
        this.ingredientList= ingredient;
      })
  }

  

}
