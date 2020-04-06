import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HandleErrorService {

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      alert('Connection error, please check the network!');
    } else {
      switch (error.status) {
        case 400:
          alert('Error requesting data!');
          break;

        default:
          alert('Error!');
          break;
      }
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}


