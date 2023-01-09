import {Component, Inject} from '@angular/core';
import {Media} from "../../shared/models/media.model";
import {MediaService} from "../../services/media.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DetailedMedia} from "../../shared/models/detailed-media";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  filtersShown: boolean = false;
  mediaItems: Array<Media> = [];
  total: number = 0;
  page = 1;

  currentFilters: { [key: string]: string | null | undefined } = {
    keyword: undefined,
    yearFrom: undefined,
    yearTo: undefined,
    ratingFrom: undefined,
    ratingTo: undefined,
  }

  searchForm = new FormGroup({
    keyword: new FormControl(''),
    yearFrom: new FormControl(''),
    yearTo: new FormControl(''),
    ratingFrom: new FormControl(''),
    ratingTo: new FormControl(''),
  })


  constructor(private mediaService: MediaService, private http: HttpClient, public dialog: MatDialog) {
  }

  searchNewMedia() {
    if (!this.searchForm.value.keyword) {
      throw Error('Empty search request');
    }
    this.page = 1;
    for (let key in this.searchForm.value) {
      // @ts-ignore
      this.currentFilters[key] = this.searchForm.value[key];
    }
    this.searchMedia();
  }

  searchMedia() {
    const {keyword, yearFrom, yearTo, ratingFrom, ratingTo} = this.searchForm.value;
    this.mediaService.searchMedia({
      keyword,
      yearFrom,
      yearTo,
      ratingFrom,
      ratingTo,
      page: this.page.toString(),
      itemsPerPage: '20'
    }).subscribe(res => {
      this.mediaItems = res.items;
      this.total = res.total;
    })
  }

  getMedia() {
    const {keyword, yearFrom, yearTo, ratingFrom, ratingTo} = this.currentFilters;
    this.mediaService.searchMedia({
      keyword,
      yearFrom,
      yearTo,
      ratingFrom,
      ratingTo,
      page: this.page.toString(),
      itemsPerPage: undefined,
    }).subscribe(res => {
      this.mediaItems = res.items;
    })
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, {responseType: 'blob'});
  }

  handlePageChange($event: number) {
    this.page = $event;
    this.getMedia();
  }

  getDetails(ids: { [p: string]: string }) {
    const {kinopoisk: kinopoiskId, tmdb: tmdbId} = ids;
    this.mediaService.getSingleMedia({kinopoiskId, tmdbId}).subscribe(res => {
      const dialogRef = this.dialog.open(DetailMediaDialog, {
        data: {
          media: res.aggregatedItem
        }
      });
    });
  }
}

@Component({
  selector: 'app-detail-media-dialog',
  templateUrl: 'detail-media.component.html',
  styleUrls: ['./detail-media.component.scss']
})

export class DetailMediaDialog {
  constructor(public dialogRef: MatDialogRef<DetailMediaDialog>,
              @Inject(MAT_DIALOG_DATA) public data: { media: DetailedMedia }) {
  }

  close() {
    this.dialogRef.close();
  }
}
