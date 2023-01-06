import { Component } from '@angular/core';
import {CinemasService} from "../../services/cinemas.service";

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent {
  constructor(private cinemasService: CinemasService) {}
}
