import { AppService } from './../../services/app.service';
import { PhysicalSpecificationsService } from './../../services/physicalSpecifications.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { PhysicalSpecification } from './../../models/PhysicalSpecification';

import { PhysicalSpecificationsBodyDialogEditComponent } from './dialog/physical-specifications-body-dialog-edit/physical-specifications-body-dialog-edit.component';
import { PhysicalSpecificationsBodyDialogDeleteComponent } from './dialog/physical-specifications-body-dialog-delete/physical-specifications-body-dialog-delete.component';

@Component({
  selector: 'app-physical-specifications-table',
  templateUrl: './physical-specifications-table.component.html',
  styleUrls: ['./physical-specifications-table.component.css']
})
export class PhysicalSpecificationsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  physicalSpecifications: PhysicalSpecification[] = [];
  templeId: number = this.actRoute.snapshot.params.id;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'specification', 'buttons'];
  dataSource = new MatTableDataSource<PhysicalSpecification>(this.physicalSpecifications);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getPhysicalSpecificationsByTempleId(this.templeId);

    this.appService.reloadTablePhysicalSpecifications$.subscribe(() => {
      this.getPhysicalSpecificationsByTempleId(this.templeId);
    });
  }

  constructor(private matDialog: MatDialog, private physicalSpecificationsService: PhysicalSpecificationsService, private actRoute: ActivatedRoute, private appService: AppService) { }

  openDialogDelete(row: PhysicalSpecification) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(PhysicalSpecificationsBodyDialogDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {

      if (value) {
        this.deletePhysicalSpecificationById(row.id);
      }
    });
  }

  openDialogEdit(row: PhysicalSpecification) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    let dialogRef = this.matDialog.open(PhysicalSpecificationsBodyDialogEditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {

      if ((!(value == false) && !(value === undefined))) {
        value.id = row.id;
        this.putPhysicalSpecification(value);
      }
    });
  }


  private getPhysicalSpecificationsByTempleId(id: number) {
    this.physicalSpecificationsService.getPhysicalSpecificationsByTempleId(id)
      .subscribe((physicalSpecifications: PhysicalSpecification[]) => {
        this.physicalSpecifications = physicalSpecifications;
        this.dataSource.data = this.physicalSpecifications;
      });
  }

  private deletePhysicalSpecificationById(id: number) {
    this.physicalSpecificationsService.deletePhysicalSpecificationById(id)
      .subscribe(() => {
        this.getPhysicalSpecificationsByTempleId(this.templeId);
      });
  }

  private putPhysicalSpecification(physicalSpecification: PhysicalSpecification) {
    this.physicalSpecificationsService.putPhysicalSpecification(physicalSpecification)
      .subscribe(() => {
        this.getPhysicalSpecificationsByTempleId(this.templeId);
      });
  }
}
