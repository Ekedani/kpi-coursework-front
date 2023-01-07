import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {Media} from "../shared/models/media.model";
import {deleteFalsyValues} from "../shared/helpers/delete-falsy-values";

const MEDIA_API = `${'http://localhost:3000'}/api/media`;

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private http: HttpClient, private storageService: StorageService) {
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
    const cleanedParams = deleteFalsyValues(params);
    const apiKey = this.storageService.getApiKey();
    this.http.get<Media[]>(`${MEDIA_API}`, {
      params: cleanedParams,
    });
  }

  public getSingleMedia(params: { kinopoiskId: string | undefined, tmdbId: string | undefined }) {
    const cleanedParams = deleteFalsyValues(params);
    const apiKey = this.storageService.getApiKey();
    const headers = new HttpHeaders(JSON.stringify({
      'Content-Type': 'x-www-form-urlencoded',
      'x-api-key': apiKey,
    }));
    this.http.get<Media>(`${MEDIA_API}/single`, {
      params: cleanedParams,
      headers,
    });
  }

  public getSingleMediaRating(params: { kinopoiskId: string | undefined, tmdbId: string | undefined }) {
    const cleanedParams = deleteFalsyValues(params);
    const apiKey = this.storageService.getApiKey();
    const headers = new HttpHeaders(JSON.stringify({
      'Content-Type': 'x-www-form-urlencoded',
      'x-api-key': apiKey,
    }));

    this.http.get(`${MEDIA_API}/rating`, {
      params: cleanedParams,
      headers
    });
  }
}
