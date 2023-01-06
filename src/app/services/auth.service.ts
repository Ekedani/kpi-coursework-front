import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const AUTH_API = `${'http://localhost:3000'}/api/auth`;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {
  }

  signIn(body: { email: string | undefined | null, password: string | undefined | null }) {
    // @ts-ignore
    const encodedBody = new URLSearchParams(body);
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    console.log(headers);
    return this.http.post<{accessToken: string}>(`${AUTH_API}/signin`, encodedBody, {headers});
  }

  signUp(body: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  }) {
    const encodedBody = new URLSearchParams(body);
    const headers = new HttpHeaders(JSON.stringify({'Content-Type': 'x-www-form-urlencoded'}));
    return this.http.post<{accessToken: string}>(`${AUTH_API}/signup`, encodedBody, {headers});
  }
}
