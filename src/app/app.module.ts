import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserRegistrationComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
