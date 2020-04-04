import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PhysicalSpecificationsTableDataSource, PhysicalSpecificationsTableItem } from './physical-specifications-table-datasource';

@Component({
  selector: 'app-physical-specifications-table',
  templateUrl: './physical-specifications-table.component.html',
  styleUrls: ['./physical-specifications-table.component.css']
})
export class PhysicalSpecificationsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PhysicalSpecificationsTableItem>;
  dataSource: PhysicalSpecificationsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new PhysicalSpecificationsTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
