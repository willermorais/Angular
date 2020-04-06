import { AppService } from './../../services/app.service';
import { EventsService } from './../../services/events.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { EventsTableDataSource } from './events-table-datasource';
import { Event } from './../../models/Event';

import { EventBodyDialogDeleteComponent } from './dialog/event-body-dialog-delete/event-body-dialog-delete.component';
import { EventBodyDialogEditComponent } from './dialog/event-body-dialog-edit/event-body-dialog-edit.component';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  events: Event[] = [];
  templeId: number = this.actRoute.snapshot.params.id;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'date', 'time_measure', 'buttons'];
  dataSource = new MatTableDataSource<Event>(this.events);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getEventsByTempleId(this.templeId);

    this.appService.reloadTableEvent$.subscribe(() => {
      this.getEventsByTempleId(this.templeId);
    });
  }

  constructor(private matDialog: MatDialog, private eventsService: EventsService, private actRoute: ActivatedRoute, private appService: AppService){}

  openDialogDelete(row: Event) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(EventBodyDialogDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.deleteEventById(row.id);
      }
    });
  }
  
  openDialogEdit(row: Event) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(EventBodyDialogEditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {

      if ((!(value == false) && !(value === undefined))) {
        value.id = row.id;
        this.putEvent(value);
      }
    });
  }

  private getEventsByTempleId(id: number){
    this.eventsService.getEventsByTempleId(id)
    .subscribe((events: Event[]) => {
      this.events = events;
      this.dataSource.data = this.events;
    });
  }

  private deleteEventById(id: number){
    this.eventsService.deleteEventById(id)
    .subscribe(() => {
      this.getEventsByTempleId(this.templeId);
    });
  }

  private putEvent(event: Event){
    this.eventsService.putEvent(event)
    .subscribe(() => {
      this.getEventsByTempleId(this.templeId);
    });
  }
}
