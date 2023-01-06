import { Component } from '@angular/core';
import {CinemasService} from "../../services/cinemas.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent {
  constructor(private cinemasService: CinemasService) {}

  onPaginateChange($event: PageEvent) { }
}
