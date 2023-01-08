import {Component, Inject} from '@angular/core';
import {CinemasService} from "../../services/cinemas.service";
import {Cinema} from "../../shared/models/cinema.model";
import {StorageService} from "../../services/storage.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent {
  cinemas: Array<Cinema> = [];

  total: number = 0;
  page: number = 1;

  constructor(private cinemasService: CinemasService, private storage: StorageService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getCinemas();
  }

  getCinemas() {
    this.cinemasService.getAllCinemas({page: this.page.toString()}).subscribe(res => {
      this.cinemas = res.data;
      this.total = res.total;
      this.getImages();
    });
  }

  getImages(){
    this.cinemas.forEach(cinema => {
      if(cinema.picture){
        this.cinemasService.getCinemaPicture(cinema.id).subscribe(res => {
          const reader = new FileReader();
          // @ts-ignore
          reader.readAsDataURL(res);
          reader.onloadend = function() {
            cinema.picture = reader.result;
          }
        })
      }
    })
  }

  handlePageChange($event: number) {
    this.page = $event;
    this.getCinemas();
  }

  userIsAdmin() {
    return this.storage.getRole() === 'admin';
  }

  addCinema() {
    const dialogRef = this.dialog.open(CinemaDialog, {
      data: {name: '', description: '', picture: '', link: ''}
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.cinemasService.createCinema({
          name: res.name,
          description: res.description,
          link: res.link,
          picture: res.picture,
        }).subscribe(res => {
          console.log(res);
        })
      }
    })
  }

  editCinema(cinema: Cinema) {
    const dialogRef = this.dialog.open(CinemaDialog, {
      data: {name: cinema.name, description: cinema.description, picture: '', link: cinema.link}
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.cinemasService.updateCinema(cinema.id, {
          name: res.name,
          description: res.description,
          link: res.link,
          picture: res.picture,
        }).subscribe(res => {
          console.log(res);
        })
      }
    })
  }

  deleteCinema() {
  }
}

@Component({
  selector: 'app-cinema-dialog',
  templateUrl: 'cinema-dialog.html',
  styleUrls: ['./cinema-dialog.scss']
})

export class CinemaDialog {
  constructor(public dialogRef: MatDialogRef<CinemaDialog>,
              @Inject(MAT_DIALOG_DATA) public data: {
                name: string | null | undefined,
                description: string | null | undefined,
                picture: object,
                link: string | null | undefined,
              }) {
  }

  close() {
    this.dialogRef.close();
  }

  onFileChange($event: Event) {
    // @ts-ignore
    this.data.picture = $event.target.files[0];
  }
}

