import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {deleteFalsyValues} from "../shared/helpers/delete-falsy-values";
import {Media} from "../shared/models/media.model";
import {DetailedMedia} from "../shared/models/detailed-media";
import {environment} from "../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private MEDIA_API: string = `${environment.API_HOST}/api/media`;

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
    let headers = new HttpHeaders();
    const apiKey = this.storage.getApiKey();
    if (apiKey) {
      headers = headers.append('x-api-key', apiKey);
    }
    const cleanedParams = deleteFalsyValues(params);
    return this.http.get<{
      dataSoruces: string[],
      items: Media[],
      total: number,
      pages: number
    }>(`${this.MEDIA_API}`, {
      headers,
      params: cleanedParams,
    });
  }

  public getSingleMedia(params: {
    kinopoiskId: string | null | undefined,
    tmdbId: string | null | undefined
  }) {
    let headers = new HttpHeaders();
    const apiKey = this.storage.getApiKey();
    if (apiKey) {
      headers = headers.append('x-api-key', apiKey);
    }
    const cleanedParams = deleteFalsyValues(params);
    return this.http.get<{ aggregatedItem: DetailedMedia }>(`${this.MEDIA_API}/single`, {
      params: cleanedParams,
      headers,
    });
  }

  public getSingleMediaRating(params: {
    kinopoiskId: string | null | undefined,
    tmdbId: string | null | undefined
  }) {
    let headers = new HttpHeaders();
    const apiKey = this.storage.getApiKey();
    if (apiKey) {
      headers = headers.append('x-api-key', apiKey);
    }
    const cleanedParams = deleteFalsyValues(params);
    this.http.get<{rating: {[service: string] : number}}>(`${this.MEDIA_API}/single/rating`, {
      params: cleanedParams,
      headers
    });
  }
}
