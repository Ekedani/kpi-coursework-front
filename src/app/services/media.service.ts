import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const MEDIA_API = `${'http://localhost:3000'}/api/media/`;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'x-www-form-urlencoded'})
};

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) {}

  public searchMedia(params: {}){}

  public getSingleMedia(params: {}){}

  public getSingleMediaRating(params: {}){}
}
