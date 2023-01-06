import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const CINEMAS_API = `${'http://localhost:3000'}/api/cinemas/`;


@Injectable({
  providedIn: 'root'
})

export class CinemasService {

  constructor(private http: HttpClient) {}

  getAllCinemas(){

  }
}
