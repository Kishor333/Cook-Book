import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../model/recipe.model';
import { IngredientService } from 'src/app/shopping-list/service/ingredient.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipeDetail?:Recipe | any;
  
  constructor(private recipeSelectedService:RecipeService) { }

  ngOnInit(): void {
    this.recipeSelectedService.selectedRecipe.subscribe(
      (recipeGot:Recipe) => {
        this.selectedRecipeDetail = recipeGot;
      }
    );
  }

  addToShoppingList() {
    this.recipeSelectedService.addIngredients(this.selectedRecipeDetail?.ingredient);
  }

}
