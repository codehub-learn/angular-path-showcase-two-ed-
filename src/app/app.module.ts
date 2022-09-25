import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";
import {AllUsersComponent} from "./modules/user/all-users.component";
import {UserDetailsComponent} from "./modules/user-details/user-details.component";
import {HomeComponent} from "./modules/home/home.component";
import {DataService} from "./services/data.service";
import {FooterComponent} from "./core/footer/footer.component";
import {HeaderComponent} from "./core/header/header.component";
import { UserRegistrationComponent } from './modules/user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AllUsersComponent,
    UserDetailsComponent,
    FooterComponent,
    HeaderComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
