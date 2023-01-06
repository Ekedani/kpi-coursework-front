import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const USERS_API = `${'http://localhost:3000'}/api/users/`;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'x-www-form-urlencoded'})
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) {}

  public getAllUsers(options: {page: number}){}

  public getUserById(id: string){}

  public deleteUserById(id: string){}

  public generateApiKeyById(id: string){}
}
