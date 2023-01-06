import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorDialogService} from "./errors/error-dialog.service";
import {ErrorDialogComponent} from "./errors/error-dialog/error-dialog.component";
import {MaterialModule} from "../material.module";

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ErrorDialogComponent],
  providers: [ErrorDialogService],
  entryComponents: [ErrorDialogComponent],
})

export class SharedModule { }
