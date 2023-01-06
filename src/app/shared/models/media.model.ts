export class Media {
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
  }) {
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
  }

  sources: Array<string>;
  nameOriginal: string | null;
  alternativeNames: Array<string>;
  year: number | null;
  imdbId: string | null;
  rating: {
    [service: string]: number;
  };
  genres: Array<string>;
  ids: {
    [service: string]: string;
  };
  images: Array<string>;
  links: {
    [service: string]: string;
  };
}
