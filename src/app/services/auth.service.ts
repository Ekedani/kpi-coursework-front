import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = `${'http://localhost:3000'}/api/auth/`;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'x-www-form-urlencoded'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }

  signUp(firstName: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      firstName,
      email,
      password
    }, httpOptions);
  }
}
