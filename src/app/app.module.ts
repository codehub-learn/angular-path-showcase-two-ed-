import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";
import {UserComponent} from "./modules/user/user.component";
import {UserDetailsComponent} from "./modules/user-details/user-details.component";
import {HomeComponent} from "./modules/home/home.component";
import {DataService} from "./services/data.service";
import {FooterComponent} from "./core/footer/footer.component";
import {HeaderComponent} from "./core/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserComponent,
    UserDetailsComponent,
    FooterComponent,
    HeaderComponent
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
