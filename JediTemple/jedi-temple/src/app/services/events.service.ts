import { HandleErrorService } from './handleError.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from './../models/Event';
import { MEAT_API } from './../app.api';

@Injectable({providedIn: 'root'})
export class EventsService {

  templesUrl: string = `${MEAT_API}/event`;

  constructor(private http: HttpClient, private handleError: HandleErrorService) { }

  getEventsByTempleId(id: number) {
    const url = `${this.templesUrl}/${id}`
    return this.http.get<Event[]>(url)
      .pipe(
        catchError(this.handleError.handleError)
      )
  }

  postEventByTempleId(event: Event, id: number) {
    const url = `${this.templesUrl}/${id}`
    return this.http.post<Event>(url, event)
      .pipe(
        catchError(this.handleError.handleError)
      )
  }

  putEvent(event: Event) {
    const url = `${this.templesUrl}`;
    return this.http.put<Event>(url, event)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }

  deleteEventById(id: number) {
    const url = `${this.templesUrl}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }

  deleteAllEventsByTempleId(id: number) {
    const url = `${this.templesUrl}/${id}/all`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }

}