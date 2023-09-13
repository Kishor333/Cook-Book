import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  id?:number;
  editMode:boolean=false;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.
    subscribe(
      (param)=>{
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        console.log('edit mode:' + this.editMode) 
      }
    )
  }

}
