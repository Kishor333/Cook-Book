import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, pipe, tap, throwError } from 'rxjs';
import { User } from './auth.model';

export interface authResponseData {
  idToken: string,
  email: string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User | null>(null);

  tokenExpirationTimer: any;

  constructor(private http:HttpClient) { }

  // Sign-UP part
  signup(email:string, password:string) {
   return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5dEgeoDIrwrFIY3jtXhy4Hlw44n_I3bc', 
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).
    pipe(
      catchError(this.errorHandeler),
      tap(
        responseData => {
          this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
          
          // this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn);
        }
      )
      );
  }
;

// Login Part
  login(email:string, password:string) {
   return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5dEgeoDIrwrFIY3jtXhy4Hlw44n_I3bc',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
    )
    .pipe(
      catchError(this.errorHandeler),
      tap(
        responseData => {
          this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
        }
      )
    )
  }

  private handleAuthentication(email: string, userId: string, token:string, expiresIn:number) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000
    );

    const user = new User(email, userId, token, expirationDate );
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('UserData', JSON.stringify(user))
  }

  logOut() {
    this.user.next(null);
    localStorage.removeItem('UserData');
    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    },expirationDuration)
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('UserData')!);

    if(!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if(loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDate = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDate);
    }

  }

  private errorHandeler(errorRes:HttpErrorResponse) {
    let errorMessage = 'An error occured';
    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    // console.log(errorRes.error.error)
    switch(errorRes.error.error.message) {
      case 'EMAIL_EXIST':
        errorMessage = 'This email already exist';
        break;
      
      case 'EMAIL_NOT_FOUND':
        errorMessage='this email is not registered yet!';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'password is invalid!'
        break;
      
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'email or password is invalid!'
    }

    return throwError(errorMessage);
  }
}
