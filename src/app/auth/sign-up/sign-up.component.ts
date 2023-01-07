import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(
    private authService: AuthService,
    private storage: StorageService,
    private router: Router) {
  }

  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  signUp() {
    const {firstName, lastName, email, password} = this.signUpForm.value;
    this.authService.signUp({
      firstName,
      lastName,
      email,
      password,
    }).subscribe((res) => {
      this.storage.saveToken(res.accessToken);
      this.router.navigate(['/profile'])
    });
  }
}
