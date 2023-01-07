import {Component} from '@angular/core';
import {Media} from "../../shared/models/media.model";
import {MediaService} from "../../services/media.service";
import {StorageService} from "../../services/storage.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
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

  constructor(private mediaService: MediaService, private storageService: StorageService) {
  }

  searchMedia() {
    this.page = 1
    for (let key in this.searchForm.value) {
      // @ts-ignore
      this.currentFilters[key] = this.searchForm.value[key];
    }
    console.log(this.currentFilters)
  }

  paginateMedia() {
    const {keyword, yearFrom, yearTo, ratingFrom, ratingTo} = this.searchForm.value;
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
      // @ts-ignore
      this.mediaItems = res.items;
    })
  }

  handlePageChange($event: number) {
    this.page = $event;
  }
}
