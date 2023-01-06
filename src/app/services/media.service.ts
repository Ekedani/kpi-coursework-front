import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {Media} from "../shared/models/media.model";


const MEDIA_API = `${'http://localhost:3000'}/api/media`;

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private http: HttpClient, private storageService: StorageService) {
  }

  public searchMedia(params: {
    keyword: string,
    yearFrom: number | undefined,
    yearTo: number | undefined,
    ratingFrom: number | undefined,
    ratingTo: string | undefined,
    page: number | undefined,
    itemsPerPage: number | undefined
  }) {
    const apiKey = this.storageService.getApiKey();
    this.http.get<Media[]>(`${MEDIA_API}`, {});
  }

  public getSingleMedia(params: { kinopoiskId: string | undefined, tmdbId: string | undefined }) {
    const apiKey = this.storageService.getApiKey();
    const headers = new HttpHeaders(JSON.stringify({
      'Content-Type': 'x-www-form-urlencoded',
      'x-api-key': apiKey,
    }));
    this.http.get<Media>(`${MEDIA_API}/single`, {
      headers,
    });
  }

  public getSingleMediaRating(params: { kinopoiskId: string | undefined, tmdbId: string | undefined }) {
    const apiKey = this.storageService.getApiKey();
    const headers = new HttpHeaders(JSON.stringify({
      'Content-Type': 'x-www-form-urlencoded',
      'x-api-key': apiKey,
    }));

    this.http.get(`${MEDIA_API}/rating`, {
      headers
    });
  }
}
