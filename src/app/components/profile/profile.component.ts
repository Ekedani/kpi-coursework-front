import { Component } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private usersService: UsersService, private storageService: StorageService) {}
}
