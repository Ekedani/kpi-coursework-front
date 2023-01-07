import { Injectable } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    return true;
  }
}
