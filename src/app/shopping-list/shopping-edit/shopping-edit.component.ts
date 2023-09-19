import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { IngredientService } from '../service/ingredient.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm:NgForm | any;

  // @ViewChild('ingName') nameInputRef?:ElementRef;
  // @ViewChild('ingAmount') amountInputRef?:ElementRef;

  editableSubscription?:Subscription;
  editMode = false;
  editableIndex:number | any;

  editableIngredient?:Ingredient;


  constructor( private ingservice: IngredientService) { }

  ngOnInit(): void {
    this.slForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required),
    });

    this.editableSubscription = this.ingservice.editableIngridentIndex.subscribe(
      ((index:number) => {
        this.editMode = true;
        this.editableIndex = index;
        this.editableIngredient = this.ingservice.getEditableIngredient(this.editableIndex);
        // console.log(this.editableIngredient );

        this.slForm.setValue(
          {
            name: this.editableIngredient.name,
            amount: this.editableIngredient.amount
          }
        )
      })
    );
  }

  // addIngredient() {
  //   const name = this.nameInputRef?.nativeElement.value;
  //   const amount = this.amountInputRef?.nativeElement.value;
  //   const item =[{name,amount}]
  //   // this.ingredientList.push({name:name, amount:amount});
  //   this.ingservice.addIngredients(item);
  // }

  onAddItem(form: NgForm) {
    // console.log(form);
    const values = form.value;
    // console.log(values.amount);
    const item ={
      name: values.name,
       amount:values.amount
      };

      if(this.editMode) {
        // update the ingredient in the list and then save it to local storage
        this.ingservice.updateIngredient(this.editableIndex , item);
        this.clearFilter(); 
      
      }
      else {
        this.ingservice.addIngredients([item]);
        this.clearFilter(); 
      }
  }

  clearFilter () {
    this.slForm.reset();
    this.editMode = false;
  }

  deleteItem() {
    this.slForm.reset();
    this.ingservice.deleteIngredient(this.editableIndex);
  }

  ngOnDestroy(): void {
      this.editableSubscription?.unsubscribe();
  }
}
