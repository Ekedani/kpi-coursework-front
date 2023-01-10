import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {deleteFalsyValues} from "../shared/helpers/delete-falsy-values";
import {User} from "../shared/models/user.model";
import {environment} from "../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private USERS_API: string = `${environment.API_HOST}/api/users`;

  constructor(private http: HttpClient, private storage: StorageService) {
  }

  public getAllUsers(params: { page: string | undefined | null }) {
    let headers = new HttpHeaders();
    const token = this.storage.getToken();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const cleanedParams = deleteFalsyValues(params);
    return this.http.get<{ data: User[], total: number, pages: number }>(`${this.USERS_API}`, {
      headers,
      params: cleanedParams,
    })
  }

  public getUserById(id: string) {
    let headers = new HttpHeaders();
    const token = this.storage.getToken();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return this.http.get<User>(`${this.USERS_API}/${id}`, {
      headers
    })
  }

  public deleteUserById(id: string) {
    let headers = new HttpHeaders();
    const token = this.storage.getToken();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return this.http.delete(`${this.USERS_API}/${id}`, {
      headers
    });
  }

  public generateApiKeyById(id: string) {
    let headers = new HttpHeaders();
    const token = this.storage.getToken();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return this.http.post<{ apiKey: string }>(`${this.USERS_API}/${id}/api-key`, {}, {
      headers
    })
  }
}
