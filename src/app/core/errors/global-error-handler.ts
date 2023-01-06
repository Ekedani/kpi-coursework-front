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
    if (!(err instanceof HttpErrorResponse)) {
      err = err.rejection;
    }
    console.log(err);
    this.zone.run(() => this.errorDialogService.openDialog(err?.error?.message || err?.message || 'undefined error'));
    console.error('[GLOBAL ERROR HANDLER] ', err);
  }
}
