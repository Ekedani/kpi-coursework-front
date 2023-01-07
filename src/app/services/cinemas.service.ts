import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {deleteFalsyValues} from "../shared/helpers/delete-falsy-values";


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
    const headers = new HttpHeaders();
    const apiKey = this.storage.getApiKey();
    if (apiKey) {
      headers.append('x-api-key', apiKey);
    }
    const cleanedParams = deleteFalsyValues(params);
    return this.http.get(`${this.CINEMAS_API}`, {
      headers,
      params: cleanedParams
    });
  }

  createCinema(body: {
    title: string | null | undefined,
    description: string | null | undefined,
    link: string | null | undefined,
    /*picture*/
  }) {
    const headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});
    const token = this.storage.getToken();
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
    const cleanedBody = deleteFalsyValues(body);
    return this.http.post(`${this.CINEMAS_API}`, cleanedBody, {
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
  }

  updateCinema(id: string, body: {
    title: string | null | undefined,
    description: string | null | undefined,
    link: string | null | undefined,
    /*picture*/
  }) {
    const headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});
    const token = this.storage.getToken();
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
    const cleanedBody = deleteFalsyValues(body);
    return this.http.patch(`${this.CINEMAS_API}/${id}`, cleanedBody, {
      headers,
    });
  }

  deleteCinema(id: string) {
    const headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});
    const token = this.storage.getToken();
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
    return this.http.delete(`${this.CINEMAS_API}/${id}`, {
      headers
    });
  }
}
