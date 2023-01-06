import {Injectable} from '@angular/core';
import {User} from "../shared/models/user.model";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = 'auth-token';
const API_KEY = 'api-key'

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor() {}

  public signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveApiKey(key: string): void{
    window.sessionStorage.removeItem(API_KEY);
    window.sessionStorage.setItem(API_KEY, key);
  }

  public getApiKey(): string | null {
   return window.sessionStorage.getItem(API_KEY);
  }

  public getDecodedToken() {
    const token = this.getToken();
    if(token){
      return jwtDecode(token);
    } else {
      return null;
    }
  }
}
