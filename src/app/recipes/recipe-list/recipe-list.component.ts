import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../service/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipeList:Recipe[] = [];
  recipeSub?: Subscription;


  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route:ActivatedRoute,
    ) {
  
   }

  ngOnInit(): void {
    this.recipeList = this.recipeService.getRecipe();

    this.recipeSub = this.recipeService.recipeChange.subscribe(
      (recipes) => {
        this.recipeList= recipes;
      }
    );

  }

  // getDetail(index : number) {
  //   this.recipeService.getCurrentRecipe(index);
  //   console.log(index);
  // }
  addNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
      this.recipeSub?.unsubscribe();
  }
}
