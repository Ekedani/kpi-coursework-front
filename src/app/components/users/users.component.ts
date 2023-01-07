import { Component } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {User} from "../../shared/models/user.model";
import {UsersService} from "../../services/users.service";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: Array<User> = [];
  totalUsers: number = 0;

  constructor(private usersService: UsersService, private storageService: StorageService) {
    usersService.getAllUsers({page: 1});
  }

  onPaginateChange($event: PageEvent) {}
}
