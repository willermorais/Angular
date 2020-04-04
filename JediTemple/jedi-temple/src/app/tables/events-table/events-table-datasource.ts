import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Event } from './../../models/Event';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Event[] = [
  { description: 'Constructed', date: 1121, time_measure: 'ABY' },
  { description: 'Destroyed', date: 135, time_measure: 'ABY' },
  { description: 'Rebuild', date: 121, time_measure: 'ABY' },
];

/**
 * Data source for the EventsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EventsTableDataSource extends DataSource<Event> {
  data: Event[] = EXAMPLE_DATA;
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
  connect(): Observable<Event[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [      
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Event[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Event[]) {
      return data;
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);

}
