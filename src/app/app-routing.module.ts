import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {MediaComponent} from "./components/media/media.component";
import {UsersComponent} from "./components/users/users.component";
import {CinemasComponent} from "./components/cinemas/cinemas.component";
import {AuthGuardService as AuthGuard} from "./services/guards/auth-guard.service";
import {NoAuthGuardService as NoAuthGuard} from "./services/guards/no-auth-guard.service";
import {AdminGuardService as AdminGuard} from "./services/guards/admin-guard.service";
import {LogOutComponent} from "./auth/log-out/logout.component";

const routes: Routes = [
  {path: 'login', component: SignInComponent,  canActivate: [NoAuthGuard]},
  {path: 'register', component: SignUpComponent, canActivate: [NoAuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'media', component: MediaComponent, canActivate: [AuthGuard]},
  {path: 'cinemas', component: CinemasComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'logout', component: LogOutComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'profile'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
