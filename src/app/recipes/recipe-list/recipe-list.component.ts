import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../service/recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeList:Recipe[] = [];

  constructor(private recipeService: RecipeService) {
  
   }

  ngOnInit(): void {
    this.recipeList = this.recipeService.getRecipe();
  }
  
}
