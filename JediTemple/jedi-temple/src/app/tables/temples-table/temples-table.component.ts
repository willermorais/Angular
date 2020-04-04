import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import {MatDialog, MatDialogConfig } from '@angular/material/dialog';

import {TemplesTableDataSource} from './temples-table-datasource';
import { Temple } from '../../models/Temple';

import { TempleBodyDialogDeleteComponent } from './dialog/temple-body-dialog-delete/temple-body-dialog-delete.component';
import { TempleBodyDialogEditComponent } from './dialog/temple-body-dialog-edit/temple-body-dialog-edit.component';

@Component({
  selector: 'app-temples-table',
  templateUrl: './temples-table.component.html',
  styleUrls: ['./temples-table.component.css']
})
export class TemplesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Temple>;
  dataSource: TemplesTableDataSource;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['location', 'builders', 'buttons'];

  ngOnInit() {
    this.dataSource = new TemplesTableDataSource();
  }

  constructor(private matDialog: MatDialog){}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  getRecord(row: string){
    alert("teste: " + row);
  }

  openDialogDelete(row: Temple) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(TempleBodyDialogDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      alert(`Dialog sent: ${value}`); 
    });
  }
  
  openDialogEdit(row: Temple) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(TempleBodyDialogEditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      
      if(value == false){
        alert(`Dialog sent: ${value}`); 
      }else{
        alert(`Dialog sent ${value.location}`); 
      }
    });
  }
}
