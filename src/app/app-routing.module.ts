import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {MediaComponent} from "./components/media/media.component";
import {UsersComponent} from "./components/users/users.component";
import {CinemasComponent} from "./components/cinemas/cinemas.component";

const routes: Routes = [
  {path: 'login', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'media', component: MediaComponent},
  {path: 'cinemas', component: CinemasComponent},
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
