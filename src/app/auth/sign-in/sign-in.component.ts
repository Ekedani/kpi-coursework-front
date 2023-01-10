import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private authService: AuthService, private storage: StorageService, private router: Router) {
  }

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

   signIn() {
    const {email, password} = this.signInForm.value;
    this.authService.signIn({
      email: email ?? '',
      password: password ?? '',
    }).subscribe((res) => {
      this.storage.saveToken(res.accessToken);
      this.router.navigate(['/profile'])
    });
  }
}
