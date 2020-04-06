import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
  observer = new Subject();
  public reloadTableTample$ = this.observer.asObservable();

  reloadTableTampleEmit() {
    this.observer.next();
  }
}