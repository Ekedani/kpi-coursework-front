import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-log-out',
  template: ``
})

export class LogOutComponent {
  constructor(private router: Router, private storage: StorageService) {}

  ngOnInit() {
    this.storage.signOut();
    this.router.navigate(['/login'])
  }
}
