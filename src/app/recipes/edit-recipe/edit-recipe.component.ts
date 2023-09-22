import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../service/recipe.service';


@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  id:number | any;
  editMode:boolean=false;

  recipeForm!: FormGroup;

  constructor(
    private route:ActivatedRoute,
     private router:Router, 
     private recipeService: RecipeService) {
      
      }


  ngOnInit(): void {
    this.route.params.
    subscribe(
      (param)=>{
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        // console.log('edit mode:' + this.editMode) 
        this.initForm();
      }
    );


  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredient')).push(
        new FormGroup({
          name: new FormControl(null, Validators.required),
          amount: new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
    )
  };

  cancelEdit() {
   this.router.navigate(['../'], {relativeTo:this.route} )
  };

  deleteIngredient(index:number) {
    // this.recipeService.deleteIngredient(this.id, index);
    (<FormArray>this.recipeForm.get('ingredient')).removeAt(index);
  }

  get ingredientFormGroups () {
    return this.recipeForm.get('ingredient') as FormArray;
  };

  onSubmit() {
  //  console.log(this.recipeForm.value);
   if(this.editMode) {
    this.recipeService.updateRecipe(this.id, this.recipeForm.value);
   }
   else {
    const lastI = this.recipeService.getRecipe().length;
    
    this.recipeService.addNewRecipe(this.recipeForm.value);
    this.router.navigate(['../' + lastI], {relativeTo: this.route});
    console.log(this.router.navigate(['../' + lastI], {relativeTo: this.route}))
    //    this.router.navigate([lastI]);
        // this.router.navigateByUrl('/recipes/' + lastI);
   }
  //  this.router.navigate(['../'], {relativeTo:this.route})
  this.cancelEdit();
  }


  //form
  private initForm() {
   
    let recName= '';
    let recImgUrl= '';
    let recDescription= '';
    let recipeIngredient = new FormArray([]);

    if(this.editMode) {
      let recipe = this.recipeService.getCurrentRecipe(this.id);
      recName= recipe.name;
      recImgUrl= recipe.imgPath;
      recDescription= recipe.description;
      // @ts-ignore
      // recipe['item'] = 'dsf'; //used when you are not sure if a property exists on an object. will create/add new item in recipe

      // will do stric
      if(recipe['ingredient']) {
        for(let item of  recipe.ingredient) {
          recipeIngredient.push(
            //@ts-ignore
            new FormGroup({
              name: new FormControl(item.name, Validators.required),
              amount: new FormControl(item.amount, [
                Validators.required,
                 Validators.pattern(/^[1-9]+[0-9]*$/)
                ]),
            })
          );
      }
      // if(recipe.ingredient) {
      //   console.log(recipe.ingredient)
      // }
    }
    }

    this.recipeForm = new FormGroup({   
      'name': new FormControl(recName, Validators.required),
      'imgPath': new FormControl(recImgUrl, Validators.required),
      'description': new FormControl(recDescription, Validators.required),
      'ingredient': recipeIngredient
    });
  };

  //write function to return sum of two number
  

}
