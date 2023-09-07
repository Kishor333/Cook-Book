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
      {name:'Chorizo & mozzarella gnocchi bake', description: 'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal', imgPath:'rec1.webp'},
      {name:'Chocolate fudge cake', description: 'Need a guaranteed crowd-pleasing cake thats easy to make? This super-squidgy chocolate fudge cake with smooth icing is an instant baking win', imgPath:'choco.webp'},

      {name:'Fresh salmon niçoise', description: 'On a balmy summer evening, a warm salad is satisfying yet light. Traditionally, niçoise is made with canned tuna, but the omega-3 fatty acids in the fish don’t make it through the canning process, so we’ve used wild salmon instead', imgPath:'salmon.webp'},
      {name:'Hummus without tahini', description: 'Enjoy our easy, budget-friendly hummus recipe with your favourite sides, such as pittas, crackers and crudités. Add more liquid from the can of chickpeas for a smoother hummus, if you like.', imgPath:'humus.webp'},
      {name:'Potato hash', description: 'Achieve three of your five-a-day with our potato hash. Peppers are packed with vitamin C and spinach is rich in iron – a great combo with hearty potatoes', imgPath:'potato.webp'},
      {name:'Gluten-free flatbread', description: 'Use our easy gluten-free bread recipe to make light, fluffy breads which can be used for scooping up sauces, served alongside curries or served as a lunchtime snack with some dips', imgPath:'flatbread.webp'},
      {name:'Chicken koftas', description: 'Enjoy chicken koftas with hummus and salad for a healthy lunch. The tahini in the hummus is made from sesame seeds, which are thought to have anti-inflammatory properties', imgPath:'chickenkuffat.webp'},

    ];
   }

  ngOnInit(): void {
  }
  
}
