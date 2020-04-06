import { HandleErrorService } from './handleError.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Temple } from './../models/Temple';
import { MEAT_API } from './../app.api';

@Injectable()
export class TempleService {

  templesUrl: string = `${MEAT_API}/jedi_temple`;

  constructor(private http: HttpClient, private handleError: HandleErrorService) { }

  getTemples() {
    const url = `${this.templesUrl}`
    return this.http.get<Temple[]>(url)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }

  getTempleById(id: number) {
    const url = `${this.templesUrl}/${id}`
    return this.http.get<Temple>(url)
      .pipe(
        catchError(this.handleError.handleError)
      )
  }

  postTemple(temple: Temple) {
    const url = `${this.templesUrl}`
    return this.http.post<Temple>(url, temple)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }

  putTempleById(id: number, temple: Temple) {
    const url = `${this.templesUrl}/${id}`;
    return this.http.put<Temple>(url, temple)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }

  deleteTempleById(id: number) {
    const url = `${this.templesUrl}/${id}`;
    return this.http.delete<Temple>(url)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }

  deleteAllTemples() {
    const url = `${this.templesUrl}/all`;
    return this.http.delete<Temple>(url)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }
}


