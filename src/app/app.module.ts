import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CinemaDialog, CinemasComponent} from './components/cinemas/cinemas.component';
import {UsersComponent} from './components/users/users.component';
import {DetailMediaDialog, MediaComponent} from './components/media/media.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {MaterialModule} from "./material.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogOutComponent} from "./auth/log-out/logout.component";
import {MatTableModule} from "@angular/material/table";
import {NgxPaginationModule} from "ngx-pagination";
import {MatMenuModule} from "@angular/material/menu";
import {MatTreeModule} from "@angular/material/tree";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    LogOutComponent,
    NavbarComponent,
    CinemasComponent,
    UsersComponent,
    MediaComponent,
    ProfileComponent,
    CinemaDialog,
    DetailMediaDialog,
 ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NoopAnimationsModule,
        CoreModule,
        SharedModule,
        MaterialModule,
        ReactiveFormsModule,
        MatTableModule,
        NgxPaginationModule,
        MatMenuModule,
        FormsModule,
        MatTreeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
