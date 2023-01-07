import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {User} from "../shared/models/user.model";

const USERS_API = `${'http://localhost:3000'}/api/users`;

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private headers: object = {'Content-Type': 'x-www-form-urlencoded'}
  constructor(private http: HttpClient, private storageService: StorageService) {}

  public getAllUsers(options: {page: number}){
    const reqHeaders = new HttpHeaders({
      ...this.headers,
      'Authorization': `Bearer: ${this.storageService.getToken()}`
    });
    return this.http.get<{total: number}>(`${USERS_API}`)
  }

  public getUserById(id: string){
    const reqHeaders = new HttpHeaders({
      ...this.headers,
      'Authorization': `Bearer: ${this.storageService.getToken()}`
    });
    return this.http.get<User>(`${USERS_API}/${id}`)
  }

  public deleteUserById(id: string){
    const reqHeaders = new HttpHeaders({
      ...this.headers,
      'Authorization': `Bearer: ${this.storageService.getToken()}`
    });
    return this.http.delete(`${USERS_API}/${id}`)
  }

  public generateApiKeyById(id: string){
    const reqHeaders = new HttpHeaders({
      ...this.headers,
      'Authorization': `Bearer: ${this.storageService.getToken()}`
    });
    return this.http.post<string>(`${USERS_API}/${id}/api-key`, {})
  }
}
