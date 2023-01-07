import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {deleteFalsyValues} from "../shared/helpers/delete-falsy-values";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private MEDIA_API: string = `${'http://localhost:3000'}/api/media`;
  constructor(private http: HttpClient, private storage: StorageService) {
  }

  public searchMedia(params: {
    keyword: string | undefined | null,
    yearFrom: string | undefined | null,
    yearTo: string | undefined | null,
    ratingFrom: string | undefined | null,
    ratingTo: string | undefined | null,
    page: string | undefined | null,
    itemsPerPage: string | undefined | null,
  }) {
    const headers = new HttpHeaders();
    const apiKey = this.storage.getApiKey();
    if (apiKey) {
      headers.append('x-api-key', apiKey);
    }
    const cleanedParams = deleteFalsyValues(params);
    this.http.get(`${this.MEDIA_API}`, {
      headers,
      params: cleanedParams,
    });
  }

  public getSingleMedia(params: { kinopoiskId: string | undefined, tmdbId: string | undefined }) {
    const headers = new HttpHeaders();
    const apiKey = this.storage.getApiKey();
    if (apiKey) {
      headers.append('x-api-key', apiKey);
    }
    const cleanedParams = deleteFalsyValues(params);
    this.http.get(`${this.MEDIA_API}/single`, {
      params: cleanedParams,
      headers,
    });
  }

  public getSingleMediaRating(params: { kinopoiskId: string | undefined, tmdbId: string | undefined }) {
    const headers = new HttpHeaders();
    const apiKey = this.storage.getApiKey();
    if (apiKey) {
      headers.append('x-api-key', apiKey);
    }
    const cleanedParams = deleteFalsyValues(params);
    this.http.get(`${this.MEDIA_API}/rating`, {
      params: cleanedParams,
      headers
    });
  }
}
