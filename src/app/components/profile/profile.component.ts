import {Component} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {StorageService} from "../../services/storage.service";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: User | undefined;

  constructor(private usersService: UsersService, private storage: StorageService) {
    const id = storage.getUserId();
    if (id) {
      usersService.getUserById(id).subscribe(res => {
        this.user = new User({
          id: res?.id,
          apiKey: res?.apiKey,
          firstName: res?.firstName,
          lastName: res?.lastName,
          email: res?.email,
          role: res?.role,
        })
      });
    }
  }

  generateNewApiKey() {
    const id = this.storage.getUserId();
    if(id) {
      this.usersService.generateApiKeyById(id).subscribe(res =>{
        if(this.user){
          this.user.apiKey = res.apiKey;
        }
        this.storage.saveApiKey(res.apiKey);
      })
    }
  }
}
