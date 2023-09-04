import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeList:Recipe[] = [];

  constructor() {
    this.recipeList = [
      {name:'Chorizo & mozzarella gnocchi bake', description: 'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal', imgPath:''}
    ];
   }

  ngOnInit(): void {
  }
  
}
