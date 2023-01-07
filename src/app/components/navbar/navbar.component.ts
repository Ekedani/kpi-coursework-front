import { Component } from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  constructor(private storage: StorageService) {
  }

  userIsAdmin() {
    return this.storage.getRole() === 'admin';
  }
}
