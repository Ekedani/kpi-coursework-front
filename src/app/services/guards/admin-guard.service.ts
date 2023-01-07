import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../storage.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {
  constructor(public storage: StorageService, public router: Router) {}

  canActivate(): boolean {
    if (this.storage.getRole() !== 'admin') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
