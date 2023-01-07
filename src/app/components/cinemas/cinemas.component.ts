import { Component } from '@angular/core';
import {CinemasService} from "../../services/cinemas.service";
import {PageEvent} from "@angular/material/paginator";
import {Cinema} from "../../shared/models/cinema.model";

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent {
  cinemas: Array<Cinema> = [];
  total: number = 0;
  page: number = 1;

  constructor(private cinemasService: CinemasService) {}

  onPaginateChange($event: PageEvent) { }

  handlePageChange($event: number) {

  }
}
