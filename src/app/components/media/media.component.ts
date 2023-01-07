import {Component} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
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
  totalMediaItems: number = 0;

  constructor(private mediaService: MediaService, private storageService: StorageService) {
  }

  searchForm = new FormGroup({
    keyword: new FormControl(''),
    yearFrom: new FormControl(''),
    yearTo: new FormControl(''),
    ratingFrom: new FormControl(''),
    ratingTo: new FormControl(''),
  })

  onPaginateChange($event: PageEvent) {
  }

  searchMedia() {
    const page = 1;
    const {keyword, yearFrom, yearTo, ratingFrom, ratingTo} = this.searchForm.value;
    /*this.mediaService.searchMedia({
      page,
      keyword,
      yearFrom,
      yearTo,
      ratingFrom,
      ratingTo,
    });*/
  }
}
