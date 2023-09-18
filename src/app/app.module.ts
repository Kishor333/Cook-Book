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

@NgModule({
  declarations: [
    AppComponent,
    HoverButtonComponent,
    FormsComponent,
    LiquidBtnComponent,
    GlitchCardComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
