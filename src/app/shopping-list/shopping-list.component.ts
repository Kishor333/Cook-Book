import { Subscriber, Subscription } from 'rxjs';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientService } from './service/ingredient.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredientList:Ingredient[] = [];
  private ingredientSub: Subscription | any;

  constructor(private ingservice: IngredientService) {
   }

  ngOnInit(): void {
    this.ingredientList = this.ingservice.getIngredient();
    this.ingredientSub = this.ingservice.newIngredirnt.
    subscribe((ingredient:Ingredient[])=>{
        this.ingredientList= ingredient;
      })
  }

  ngOnDestroy(): void {
      this.ingredientSub.unsubscribe();
  }

}
