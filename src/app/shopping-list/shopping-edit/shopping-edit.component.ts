import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingName') nameInputRef?:ElementRef;
  @ViewChild('ingAmount') amountInputRef?:ElementRef;

  constructor( private ingservice: IngredientService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    const name = this.nameInputRef?.nativeElement.value;
    const amount = this.amountInputRef?.nativeElement.value;
    // this.ingredientList.push({name:name, amount:amount});
    this.ingservice.addIngredients({name, amount});
  }

}
