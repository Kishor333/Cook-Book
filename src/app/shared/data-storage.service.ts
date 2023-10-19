import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/service/recipe.service';
import { Recipe } from '../recipes/model/recipe.model';
import { AuthService } from '../auth/auth.service';
import { Subject } from 'rxjs';
// import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {

  saveOption = new Subject<boolean>();
  
  constructor(
    private http: HttpClient,
    private recService: RecipeService,
    private authService: AuthService
  ) {}

  fetchData() {
    // return this.authService.user.pipe(
    //   take(1),
    //   exhaustMap( user => {
    // console.log('kishor' + user)
    // return this.http.get<Recipe[]>('https://cookbook-719a4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
    // {
    //   params: new HttpParams().set('auth', user?.token as any)
    // }

    //   }
    // ),
    return this.http
      .get<Recipe[]>(
        'https://cookbook-719a4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((recipe) => {
          return Array.isArray(recipe)
            ? recipe.map((recipe: any) => {
                return {
                  ...recipe,
                  ingredient: recipe.ingredient ? recipe.ingredient : [],
                };
              })
            : [];
        }),
        tap((response) => {
          this.recService.setRecipe(response);
        })
      );
  }

  storeData() {
    const recipe = this.recService.getRecipe();
    this.http
      .put(
        'https://cookbook-719a4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        recipe
      )
      .subscribe((response) => {
        console.log(response);
      });
      // .pipe(map(recipes => {
      //     return Array.isArray(recipes) ? recipes.map(
      //       (recipe:any) =>{
      //         return {
      //           ...recipe,
      //            ingredient: recipe.ingredient ? recipe.ingredient : []
      //         }
      //       }): [];
      //   }))
      // .pipe(
      //   map((recipes:any) => {
      //     return Object.keys(recipes).map((key:any) => {
      //       const recipe = recipes[key];
      //       return {
      //         ...recipe,
      //         ingredient: recipe.ingredient ? recipe.ingredient : []
      //       }
      //     });
      //   }),
      //   tap(recipe => {

      //   })
      // )
  }
}
