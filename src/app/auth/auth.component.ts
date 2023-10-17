import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Router } from 'express';
import { Router } from '@angular/router';
import { AuthService, authResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isSignup = false;
  isLoading = false;
  hasError:string | null  = null;

  authObs: Observable<authResponseData> | any;

  constructor(private authService:AuthService, private route: Router) { }
  
  ngOnInit(): void {
  }

  switchAuth(value: boolean) {
    this.isSignup = value;
    this.hasError = null;
  }

  onSubmit(value: NgForm) {
    this.isLoading =true;
      
    //  console.log(email,password)
      if(this.isSignup) {
        const email = value.value.email;
        const password = value.value.password;
        // console.log(email,password);
       this.authObs = this.authService.signup(email,password)
      }
      else {
        const email = value.value.emaillog;
        const password = value.value.passwordlog;
        // console.log(email,password)
       this.authObs = this.authService.login(email,password)
      }

      this.authObs.subscribe(
        (response: authResponseData) =>{
          console.log(response);
          this.isLoading = false;
          // console.log('success!!!');
          this.route.navigate(['/recipe']);
        },
       ( errorMessage: any) => {
          this.hasError = errorMessage;
          this.isLoading = false;
          console.log(errorMessage)
        }
      )
    
    value.reset();
    }
    
}
