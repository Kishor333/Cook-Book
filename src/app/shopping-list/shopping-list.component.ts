import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredientList:Ingredient[] = [];
  @ViewChild('ingName') nameInputRef?:ElementRef;
  @ViewChild('ingAmount') amountInputRef?:ElementRef;

  constructor() {
    this.ingredientList = [
      { name:'Apple', amount:5 },
      { name:'Tomato', amount:7 }
  
    ];
   }

  ngOnInit(): void {
  }

  addIngredient() {
    const name = this.nameInputRef?.nativeElement.value;
    const amount = this.amountInputRef?.nativeElement.value;
    this.ingredientList.push({name:name, amount:amount});
  }

}
