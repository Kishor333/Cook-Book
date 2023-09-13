import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../service/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeList:Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route:ActivatedRoute,
    ) {
  
   }

  ngOnInit(): void {
    this.recipeList = this.recipeService.getRecipe();
  }

  // getDetail(index : number) {
  //   this.recipeService.getCurrentRecipe(index);
  //   console.log(index);
  // }
  addNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
