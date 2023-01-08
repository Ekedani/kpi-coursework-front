import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {deleteFalsyValues} from "../shared/helpers/delete-falsy-values";
import {Cinema} from "../shared/models/cinema.model";


@Injectable({
  providedIn: 'root'
})

export class CinemasService {
  private CINEMAS_API: string = `${'http://localhost:3000'}/api/cinemas`

  constructor(private http: HttpClient, private storage: StorageService) {
  }

  getAllCinemas(params: {
    page: string | null | undefined
  }) {
    let headers = new HttpHeaders();
    const apiKey = this.storage.getApiKey();
    if (apiKey) {
      headers = headers.append('x-api-key', apiKey);
    }
    const cleanedParams = deleteFalsyValues(params);
    return this.http.get<{ total: number, data: Cinema[], pages: number }>(`${this.CINEMAS_API}`, {
      headers,
      params: cleanedParams
    });
  }

  createCinema(body: {
    name: string | null | undefined,
    description: string | null | undefined,
    link: string | null | undefined,
    picture: object | string | null | undefined,
  }) {
    let headers = new HttpHeaders();
    const token = this.storage.getToken();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const cleanedBody = deleteFalsyValues(body);
    const formData = new FormData();
    for(let key in cleanedBody){
      formData.append(key, cleanedBody[key]);
    }
    return this.http.post(`${this.CINEMAS_API}`, formData, {
      headers,
    });
  }

  getCinemaById(id: string) {
    const headers = new HttpHeaders();
    const apiKey = this.storage.getApiKey();
    if (apiKey) {
      headers.append('x-api-key', apiKey);
    }
    return this.http.get(`${this.CINEMAS_API}/${id}`, {
      headers
    })
  }

  getCinemaPicture(id: string) {
    const headers = new HttpHeaders();
    const apiKey = this.storage.getApiKey();
    if (apiKey) {
      headers.append('x-api-key', apiKey);
    }
    return this.http.get(`${this.CINEMAS_API}/${id}`, {
      headers
    });
  }

  updateCinema(id: string, body: {
    name: string | null | undefined,
    description: string | null | undefined,
    link: string | null | undefined,
    picture: object | string | null | undefined,
  }) {
    let headers = new HttpHeaders();
    const token = this.storage.getToken();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const cleanedBody = deleteFalsyValues(body);
    const formData = new FormData();
    for(let key in cleanedBody){
      formData.append(key, cleanedBody[key]);
    }
    return this.http.patch(`${this.CINEMAS_API}/${id}`, cleanedBody, {
      headers,
    });
  }

  deleteCinema(id: string) {
    let headers = new HttpHeaders();
    const token = this.storage.getToken();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return this.http.delete(`${this.CINEMAS_API}/${id}`, {
      headers
    });
  }
}
