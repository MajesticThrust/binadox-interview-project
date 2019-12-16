import { DataSource } from "@angular/cdk/table";
import { Observable, combineLatest, BehaviorSubject } from "rxjs";
import {
  BackendService,
  ListSortOrder
} from "src/app/services/backend.service";
import { switchMap, map, tap } from "rxjs/operators";
import * as moment from "moment";

export { ListSortOrder };

export interface AssignedLicencesRow {
  id: number;
  name: string;
  email: string;
  appUtilizationPercent: number;
  lastActive: moment.Moment;
  billingPeriod: string;
  paymentPlan: string;
}

export interface ColumnSort {
  column: string;
  order: ListSortOrder;
}

export interface Page {
  pageNumber: number;
  resultsPerPage: number;
}

export class AssignedLicencesDataSource
  implements DataSource<AssignedLicencesRow> {
  /**
   * Column map to ease the sorting.
   * Keys - table columns, values - object paths in backend response type.
   */
  // TODO
  private columnMap: {
    id: "accountUsageDataDto.";
  };

  private pageSubject = new BehaviorSubject<Page>({
    pageNumber: 1,
    resultsPerPage: 10
  });
  private filterSubject = new BehaviorSubject("");
  private sortSubject = new BehaviorSubject<ColumnSort[]>([]);

  constructor(private backend: BackendService) {}

  public connect(): Observable<AssignedLicencesRow[]> {
    return combineLatest([
      this.pageSubject,
      this.filterSubject,
      this.sortSubject
    ]).pipe(
      switchMap(([page, filter, sort]) => {
        return this.backend.assignedLicences({
          query: filter,
          offset: (page.pageNumber - 1) * page.resultsPerPage,
          limit: page.resultsPerPage,
          sort: sort.map(c => c.column),
          order: sort.map(c => c.order)
        });
      }),
      // tap(console.log),
      map(response => {
        return response.items.map(item => {
          const row: AssignedLicencesRow = {
            id: item.accountUsageDataDto.accId,
            name: item.accountUsageDataDto.name,
            email: item.accountUsageDataDto.email,
            appUtilizationPercent: Math.round(
              item.usageDetailDto.utilization * 100
            ),
            lastActive: item.usageDetailDto.lastTime,

            // TODO find a better way to get element for these two
            paymentPlan: item.usageDetailDto.userLicenses[0],
            billingPeriod: item.usageDetailDto.userBillingPeriods[0]
          };

          return row;
        });
      })
    );
  }

  public disconnect(): void {}

  public setPage(page: Page) {
    this.pageSubject.next(page);
  }

  /**
   * Empty string means no filtering: all items are returned.
   * @param query Filter query
   */
  public filter(query: string) {
    this.filterSubject.next(query);
  }

  /**
   * Sort table by given columns.
   * @param columnSorts List of columns and sorting orders in the order that the sorting should be applied
   */
  public sort(columnSorts: ColumnSort[]) {
    columnSorts = columnSorts.filter(c => {
      if (!(c.column in this.columnMap)) {
        console.error(`Invalid column "${c.column}!"`);
        return false;
      } else {
        return true;
      }
    });

    this.sortSubject.next(columnSorts);
  }
}
