import { AppService } from './../../services/app.service';
import { TempleService } from './../../services/temple.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Temple } from '../../models/Temple';

import { TempleBodyDialogDeleteComponent } from './dialog/temple-body-dialog-delete/temple-body-dialog-delete.component';
import { TempleBodyDialogEditComponent } from './dialog/temple-body-dialog-edit/temple-body-dialog-edit.component';

@Component({
  selector: 'app-temples-table',
  templateUrl: './temples-table.component.html',
  styleUrls: ['./temples-table.component.css']
})
export class TemplesTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  temples: Temple[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['location', 'builders', 'buttons'];
  dataSource = new MatTableDataSource<Temple>(this.temples);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getTemples();

    this.appService.reloadTableTample$.subscribe(() => {
      this.getTemples();
    });
  }

  constructor(private matDialog: MatDialog, private templeService: TempleService, private appService: AppService) { }

  openDialogDelete(row: Temple) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(TempleBodyDialogDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.deleteTempleById(row.id);
      }
    });
  }

  openDialogEdit(row: Temple) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(TempleBodyDialogEditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {

      if ((!(value == false) && !(value === undefined))) {
        this.putTempleById(row.id, value);
      }
    });
  }

  private getTemples() {
    this.templeService.getTemples()
      .subscribe((temples: Temple[]) => {
        this.temples = temples;
        this.dataSource.data = this.temples;
      });
  }

  private deleteTempleById(id: number) {
    this.templeService.deleteTempleById(id)
      .subscribe(() => {
        this.getTemples();
      });
  }

  private putTempleById(id: number, temple: Temple) {
    this.templeService.putTempleById(id, temple)
      .subscribe(() => {
        this.getTemples();
      });
  }
}