import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  showUserData = false;
  user= {
    name:'',
    email:'',
    queAns: {
      question :'',
      answer:''
    }
  }
  @ViewChild('faa') signupForm:NgForm | any;
  defaultQuestion = 'teacher';
  response = '';
  constructor() { }

  ngOnInit(): void {
  }

  suggestUserdata() {
    const suggestUserName = 'kishor';
    this.signupForm.form.patchValue({
      name: suggestUserName,
      queAnsData: {
        answer: suggestUserName,
      }
    });
    // console.log(suggestUserName)
  }


  onSubmit(form: NgForm) {
    this.showUserData = true;
    this.user.name = this.signupForm.value.name;
    this.user.email = this.signupForm.value.Email;
    this.user.queAns.question = this.signupForm.value.queAnsData.question;
    this.user.queAns.answer = this.signupForm.value.queAnsData.answer;

    this.signupForm.reset();
    console.log(this.user )
  }

}
