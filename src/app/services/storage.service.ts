import {Injectable} from '@angular/core';
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private TOKEN_KEY: string = 'access-token';
  private USER_KEY: string = 'user';

  constructor() {
  }

  public signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
    try {
      const user = jwtDecode(token);
      this.saveUser(JSON.stringify(user));
    } catch (e) {
      throw new Error('invalid token')
    }
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  private saveUser(user: string): void {
    window.sessionStorage.setItem(this.USER_KEY, user);
  }

  public getUser() {
    const userString = window.sessionStorage.getItem(this.USER_KEY);
    if (userString) {
      try {
        return JSON.parse(userString);
      } catch (e) {
        throw ('invalid user in storage');
      }
    } else {
      return null;
    }
  }

  public saveApiKey(key: string): void {
    const user = this.getUser();
    if (user) {
      user.apiKey = key;
      this.saveUser(JSON.stringify(user));
    } else {
      throw ('invalid user in storage');
    }
  }

  public getApiKey(): string | undefined {
    const user = this.getUser();
    return user?.apiKey;
  }
}
