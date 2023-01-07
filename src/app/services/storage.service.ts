import {Injectable} from '@angular/core';
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private TOKEN_KEY: string = 'access-token';
  private API_KEY: string = 'api-key'

  constructor() {
  }

  public signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
    // @ts-ignore
    const {apiKey} = jwtDecode(token);
    if (apiKey) {
      this.saveApiKey(apiKey);
    }
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  public saveApiKey(key: string): void {
    window.sessionStorage.setItem(this.API_KEY, key);
  }

  public getApiKey(): string | null {
    return window.sessionStorage.getItem(this.API_KEY);
  }

  getRole(): string | undefined{
    try {
    const token = this.getToken();
    if (token) {
      // @ts-ignore
      const { role } = jwtDecode(token);
      return role;
    } else {
      return undefined;
    }
  } catch (e) {
    return undefined;
  }
  }

  public getUserId(): string | undefined {
    try {
      const token = this.getToken();
      if (token) {
        // @ts-ignore
        const { id } = jwtDecode(token);
        return id;
      } else {
        return undefined;
      }
    } catch (e) {
      return undefined;
    }
  }
}
