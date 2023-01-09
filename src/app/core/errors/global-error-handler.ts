import {HttpErrorResponse} from '@angular/common/http';
import {ErrorHandler, Injectable, NgZone} from '@angular/core';
import {ErrorDialogService} from '../../shared/errors/error-dialog.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorDialogService: ErrorDialogService,
    private zone: NgZone
  ) {
  }

  handleError(err: any) {
    if (err instanceof HttpErrorResponse) {
      const message = `${err.message}; Status: ${err.error.statusCode}; Description: ${err.error.message}`
      err = new Error(message);
    }
    if (err.rejection) {
      err = err.rejection;
    }
    this.zone.run(() => this.errorDialogService.openDialog(err?.message ?? 'Undefined error'));
  }
}
