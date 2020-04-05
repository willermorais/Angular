import { PhysicalSpecificationsBodyDialogEditComponent } from './dialog/physical-specifications-body-dialog-edit/physical-specifications-body-dialog-edit.component';
import { PhysicalSpecificationsBodyDialogDeleteComponent } from './dialog/physical-specifications-body-dialog-delete/physical-specifications-body-dialog-delete.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import {MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { PhysicalSpecificationsTableDataSource } from './physical-specifications-table-datasource';
import { PhysicalSpecification } from './../../models/PhysicalSpecification';

@Component({
  selector: 'app-physical-specifications-table',
  templateUrl: './physical-specifications-table.component.html',
  styleUrls: ['./physical-specifications-table.component.css']
})
export class PhysicalSpecificationsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PhysicalSpecification>;
  dataSource: PhysicalSpecificationsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'specification', 'buttons'];

  ngOnInit() {
    this.dataSource = new PhysicalSpecificationsTableDataSource();
  }

  constructor(private matDialog: MatDialog){}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialogDelete(row: PhysicalSpecification) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(PhysicalSpecificationsBodyDialogDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      alert(`Dialog sent: ${value}`); 
    });
  }
  
  openDialogEdit(row: PhysicalSpecification) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(PhysicalSpecificationsBodyDialogEditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      
      if(value == false){
        alert(`Dialog sent: ${value}`); 
      }else{
        alert(`Dialog sent ${value.description}`); 
      }
    });
  }
}
