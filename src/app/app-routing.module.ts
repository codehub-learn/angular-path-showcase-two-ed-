import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./modules/user/user.component";
import {UserDetailsComponent} from "./modules/user-details/user-details.component";
import {HomeComponent} from "./modules/home/home.component";
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'user/:id', component: UserDetailsComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
