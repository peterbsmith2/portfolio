import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdInputModule, MdButtonModule, MdCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PasswordComponent } from './password/password.component';
import { SecretFormComponent } from './secret-form/secret-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordComponent,
    SecretFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdInputModule, 
    MdButtonModule,
    MdCardModule
  ],
  providers: [{ 
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: HammerGestureConfig 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
