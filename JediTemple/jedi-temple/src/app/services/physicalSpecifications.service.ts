import { HandleErrorService } from './handleError.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PhysicalSpecification } from './../models/PhysicalSpecification';
import { MEAT_API } from './../app.api';

@Injectable({providedIn: 'root'})
export class PhysicalSpecificationsService {

  templesUrl: string = `${MEAT_API}/physical_specification`;

  constructor(private http: HttpClient, private handleError: HandleErrorService) { }

  getPhysicalSpecificationsByTempleId(id: number) {
    const url = `${this.templesUrl}/${id}`
    return this.http.get<PhysicalSpecification[]>(url)
      .pipe(
        catchError(this.handleError.handleError)
      )
  }

  postPhysicalSpecificationByTempleId(physicalSpecification: PhysicalSpecification, id: number) {
    const url = `${this.templesUrl}/${id}`
    return this.http.post<PhysicalSpecification>(url, physicalSpecification)
      .pipe(
        catchError(this.handleError.handleError)
      )
  }

  putPhysicalSpecification(physicalSpecification: PhysicalSpecification) {
    const url = `${this.templesUrl}`;
    return this.http.put<PhysicalSpecification>(url, physicalSpecification)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }

  deletePhysicalSpecificationById(id: number) {
    const url = `${this.templesUrl}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }

  deleteAllPhysicalSpecificationsByTempleId(id: number) {
    const url = `${this.templesUrl}/${id}/all`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError.handleError)
      );
  }

}