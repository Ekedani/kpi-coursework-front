import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {deleteFalsyValues} from "../shared/helpers/delete-falsy-values";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private AUTH_API: string = `${'http://localhost:3000'}/api/auth`;
  private jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private storage: StorageService,
  ) {
  }

  public isAuthenticated(): boolean {
    const token = this.storage.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  public signIn(body: {
    email: string | null | undefined,
    password: string | null | undefined
  }) {
    const encodedBody = new URLSearchParams(deleteFalsyValues(body));
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post<{ accessToken: string }>(`${this.AUTH_API}/signin`, encodedBody, {
      headers
    });
  }

  public signUp(body: {
    firstName: string | null | undefined,
    lastName: string | null | undefined,
    email: string | null | undefined,
    password: string | null | undefined,
  }) {
    const encodedBody = new URLSearchParams(deleteFalsyValues(body));
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post<{ accessToken: string }>(`${this.AUTH_API}/signup`, encodedBody, {
      headers
    });
  }
}
