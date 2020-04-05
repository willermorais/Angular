import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { PhysicalSpecification } from './../../models/PhysicalSpecification';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: PhysicalSpecification[] = [
  {description: "1dfsdfsdf", specification: 212},
];

/**
 * Data source for the PhysicalSpecificationsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PhysicalSpecificationsTableDataSource extends DataSource<PhysicalSpecification> {
  data: PhysicalSpecification[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PhysicalSpecification[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.data;
    }));
  }
  
  disconnect() { }
}