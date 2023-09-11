import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipe', pathMatch: 'full' },
  { path:'recipe', component:RecipesComponent , children:[
    {path:':id', component: RecipeDetailComponent}
  ] },
  
  { path:'shoppingList', component:ShoppingListComponent },

  { path:'not-found', component:NotFoundComponent },
  { path:'**', redirectTo: '/not-found', pathMatch:'full' },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
