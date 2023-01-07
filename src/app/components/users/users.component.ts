import {Component} from '@angular/core';
import {User} from "../../shared/models/user.model";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: Array<User> = [];
  total: number = 0;
  page: number = 1;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getAllUsers({page: this.page.toString()}).subscribe(res => {
      this.users = res.data;
      this.total = res.total;
    })
  }

  handlePageChange($event: number) {
    this.page = $event;
    this.getUsers();
  }
}
