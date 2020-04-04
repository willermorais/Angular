import { EventBodyDialogDeleteComponent } from './dialog/event-body-dialog-delete/event-body-dialog-delete.component';
import { EventBodyDialogEditComponent } from './dialog/event-body-dialog-edit/event-body-dialog-edit.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import {MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { EventsTableDataSource } from './events-table-datasource';
import { Event } from './../../models/Event';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Event>;
  dataSource: EventsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'date', 'time_measure', 'buttons'];

  ngOnInit() {
    this.dataSource = new EventsTableDataSource();
  }

  constructor(private matDialog: MatDialog){}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialogDelete(row: Event) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(EventBodyDialogDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      alert(`Dialog sent: ${value}`); 
    });
  }
  
  openDialogEdit(row: Event) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(EventBodyDialogEditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      
      if(value == false){
        alert(`Dialog sent: ${value}`); 
      }else{
        alert(`Dialog sent ${value.location}`); 
      }
    });
  }
}
