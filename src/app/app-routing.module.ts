import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from "./modules/user/all-users.component";
import {UserDetailsComponent} from "./modules/user-details/user-details.component";
import {HomeComponent} from "./modules/home/home.component";
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";
import {UserRegistrationComponent} from "./modules/user-registration/user-registration.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'registerUser', component: UserRegistrationComponent},
  {path: 'allUsers', component: AllUsersComponent},
  {path: 'user/:id', component: UserDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
