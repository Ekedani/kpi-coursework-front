import { Component } from '@angular/core';
import {CinemasService} from "../../services/cinemas.service";
import {PageEvent} from "@angular/material/paginator";
import {Cinema} from "../../shared/models/cinema.model";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent {
  cinemas: Array<Cinema> = [];
  totalCinemas: number = 0;

  constructor(private cinemasService: CinemasService, private storageService: StorageService) {

  }

  onPaginateChange($event: PageEvent) { }
}
