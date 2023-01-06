import { Component } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {

  findMedia(event: Event) {
    event.preventDefault();
    console.log('results')
  }

  onPaginateChange($event: PageEvent) { }
}
