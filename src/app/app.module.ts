import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverButtonComponent } from './hover-button/hover-button.component';
import { FormsComponent } from './forms/forms.component';
import { LiquidBtnComponent } from './liquid-btn/liquid-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlitchCardComponent } from './forms/glitch-card/glitch-card.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpComponent } from './http/http.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthIntersecptorService } from './http/auth-interseptor';
import { LoginInterseptor } from './http/login-interseptor';

@NgModule({
  declarations: [
    AppComponent,
    HoverButtonComponent,
    FormsComponent,
    LiquidBtnComponent,
    GlitchCardComponent,
    ReactiveFormComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthIntersecptorService,
      multi: true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: LoginInterseptor,
      multi: true
    },
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
