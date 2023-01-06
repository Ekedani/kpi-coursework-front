import {Component} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {Media} from "../../shared/models/media.model";
import {MediaService} from "../../services/media.service";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  mediaItems: Array<Media> = [];
  totalMediaItems: number = 0;
  searchForm: any;

  constructor(private mediaService: MediaService, private storageService: StorageService) {

  }

  onPaginateChange($event: PageEvent) {

  }

  searchMedia() {
    console.log(this.searchForm);
  }
}
