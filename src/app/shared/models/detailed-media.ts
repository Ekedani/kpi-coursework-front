import {Media} from "./media.model";

export class DetailedMedia extends Media {
  constructor(param: {
    alternativeNames: any;
    nameOriginal: string;
    images: any;
    sources: any;
    year: number;
    imdbId: string;
    genres: any;
    rating: any;
    ids: any;
    links: any;
    overview?: string;
    budget?: number;
    originalLanguage?: string;
  }) {
    super(param);
    this.sources = param.sources;
    this.nameOriginal = param.nameOriginal;
    this.alternativeNames = param.alternativeNames;
    this.year = param.year;
    this.imdbId = param.imdbId;
    this.rating = param.rating;
    this.genres = param.genres;
    this.ids = param.ids;
    this.images = param.images;
    this.links = param.links;
    this.budget = param.budget;
    this.overview = param.overview;
    this.originalLanguage = param.originalLanguage;
    this.budget = param.budget;
    this.overview = param.overview;
    this.originalLanguage = param.originalLanguage;
    if (this.rating["average"]) {
      this.rating["average"] = +this.rating["average"].toFixed(2);
    }
  }

  overview?: string;
  budget?: number;
  originalLanguage?: string;

}
