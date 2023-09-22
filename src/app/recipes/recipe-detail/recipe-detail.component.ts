import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../model/recipe.model';
// import { IngredientService } from 'src/app/shopping-list/service/ingredient.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipeDetail?:Recipe | any;
  
  id?: number;
  constructor(private recipeSelectedService:RecipeService,
    private router:Router,
    private route:ActivatedRoute
    
     ) { }

  ngOnInit() {
    // this.recipeSelectedService.selectedRecipe.subscribe(
    //   (recipeGot:Recipe) => {
    //     this.selectedRecipeDetail = recipeGot;
    //   }
    // );
    // console.log('before'+ this.id);
    this.route.params.subscribe(
      (param:Params) => {
        this.id = +param['id'];
        this.selectedRecipeDetail = this.recipeSelectedService.getCurrentRecipe(this.id);
      }
    );
  }

  addToShoppingList() {
    this.recipeSelectedService.addIngredients(this.selectedRecipeDetail?.ingredient);
  };

  openEdit() {
    // this.router.navigate(['edit'], relativeTO: this.route);
    this.router.navigate(['edit'],{relativeTo: this.route});
  };

  deleteRecipe() {
    //@ts-ignore
    this.recipeSelectedService.deleteRecipy(this.id);
    this.router.navigate(['../'], {relativeTo:this.route})
  }

}
