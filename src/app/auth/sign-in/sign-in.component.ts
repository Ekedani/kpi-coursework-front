import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private authService: AuthService, private storageService: StorageService) {
  }

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  async signIn() {
    const {email, password} = this.signInForm.value;
    this.authService.signIn({
      email,
      password
    }).subscribe((res) => {this.storageService.saveToken(res.accessToken)});
  }
}
