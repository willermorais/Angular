import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
  observerTemple = new Subject();
  observerEvent = new Subject();
  observerPhysicalSpecifications = new Subject();
  
  public reloadTableTample$ = this.observerTemple.asObservable();
  public reloadTableEvent$ = this.observerEvent.asObservable();
  public reloadTablePhysicalSpecifications$ = this.observerPhysicalSpecifications.asObservable();

  reloadTableTampleEmit() {
    this.observerTemple.next();
  }

  reloadTableEventsEmit() {
    this.observerEvent.next();
  }

  reloadTablePhysicalSpecificationsEmit() {
    this.observerPhysicalSpecifications.next();
  }
}