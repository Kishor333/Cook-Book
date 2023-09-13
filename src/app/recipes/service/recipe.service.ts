import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { IngredientService } from 'src/app/shopping-list/service/ingredient.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // selectedRecipe = new EventEmitter<Recipe>();
  constructor( private ingService:IngredientService) { }

  private recipy:Recipe[] =[
      { name:'Chorizo & mozzarella gnocchi bake',
        description: 'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal',
        imgPath:'rec1.webp',
        ingredient: [
          {name:'Chees', amount:1},
          {name:'Pasta', amount:2},
        ]
      },
      {name:'Chocolate fudge cake',
       description: 'Need a guaranteed crowd-pleasing cake thats easy to make? This super-squidgy chocolate fudge cake with smooth icing is an instant baking win', 
       imgPath:'choco.webp',
      ingredient:[
          {name:'Chocolate', amount:5},
          {name:'Flour', amount:2},
          {name:'Baking Soda', amount:1},
          {name:'Sugar', amount:1},
      ]
    },
      {name:'Fresh salmon niçoise',
       description: 'On a balmy summer evening, a warm salad is satisfying yet light. Traditionally, niçoise is made with canned tuna, but the omega-3 fatty acids in the fish don’t make it through the canning process, so we’ve used wild salmon instead',
      imgPath:'salmon.webp',
      ingredient:[
        {name:'salad', amount:3},
        {name:'yuna', amount:1},
      ]
    },
      {name:'Hummus without tahini',
       description: 'Enjoy our easy, budget-friendly hummus recipe with your favourite sides, such as pittas, crackers and crudités. Add more liquid from the can of chickpeas for a smoother hummus, if you like.',
        imgPath:'humus.webp',
      ingredient:[
        {name:'Pittas', amount:3},
        {name:'cracker', amount:1},
        {name:'Chick Peas', amount:1}
      ]
    },
      {name:'Potato hash',
       description: 'Achieve three of your five-a-day with our potato hash. Peppers are packed with vitamin C and spinach is rich in iron – a great combo with hearty potatoes',
        imgPath:'potato.webp',
      ingredient:[
        {name:'Potato', amount:3},
        {name:'Spinach', amount:2},
      ]
    },
      {name:'Gluten-free flatbread',
       description: 'Use our easy gluten-free bread recipe to make light, fluffy breads which can be used for scooping up sauces, served alongside curries or served as a lunchtime snack with some dips',
        imgPath:'flatbread.webp',
      ingredient:[
        {name:'Flour', amount:1},
          {name:'Sauce', amount:2},
      ]
    },
      {name:'Chicken koftas',
       description: 'Enjoy chicken koftas with hummus and salad for a healthy lunch. The tahini in the hummus is made from sesame seeds, which are thought to have anti-inflammatory properties',
        imgPath:'chickenkuffat.webp',
      ingredient:[
        {name:'Chicken(mother)', amount:1},
        {name:'Salad', amount:2},
        {name:'Sasame Seed', amount:1}
      ]
    },
  ];

  getRecipe() {
    return this.recipy.slice();
  };

  getCurrentRecipe (index:number){
    return this.recipy[index];
  }

  addIngredients(ingredient: Ingredient[]) {
    this.ingService.addIngredients(ingredient);
  }

}
