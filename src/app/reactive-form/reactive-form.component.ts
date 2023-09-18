import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  signupForm: FormGroup | any;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userName': new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required),
      }),
      
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'sex': new FormControl('male'),
      'hobby': new FormArray([])
    })
  }

  onSubmit() {

    console.log(this.signupForm);
  }

  onHobbyAdd() {
    console.log('add hobies')
    const control = new FormControl(null);
    (<FormArray>this.signupForm.get('hobby')).push(control);
  }
  // newSubmit() {
  //   console.log('kkm')
  //   console.log(this.signupForm);
  // }

}
