import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { combineLatest, Subject } from "rxjs";
import * as _ from "lodash";

export interface PageEvent {
  pageNumber: number;
  previousPageNumber: number;
  pageSize: number;
  length: number;
}

// TODO finish first and last page buttons

@Component({
  selector: "app-table-paginator",
  templateUrl: "./table-paginator.component.html",
  styleUrls: ["./table-paginator.component.scss"]
})
export class TablePaginatorComponent implements OnInit {
  /** Specifies if paginator should show first and last page buttons */
  @Input() public showFirstLastButtons = false;

  /** Available page sizes */
  @Input() public pageSizeOptions: number[];

  public pageSize: number;
  public pageNumber = 1;

  /** Total amount of elements that are being paginated */
  @Input() public length: number;

  /** Amount of page buttons to display (not counting first/last page buttons) */
  @Input() public pageSelectorRange = 5;

  /** Emitted when the page index or page size changes */
  @Output() public page = new EventEmitter<PageEvent>();

  public get nextPageEnabled(): boolean {
    return this.pageNumber < this.getNumberOfPages();
  }

  public get prevPageEnabled(): boolean {
    return this.pageNumber > 1;
  }

  /**
   * Current page range to display.
   * E.g. when current page is 1 and pageSelectorRange is 5, the range is [1,2,3,4,5].
   * When the current page is 6, the range is [4,5,6,7,8].
   * When the current page is 9 and the total number of pages is 10, the range is [6,7,8,9,10].
   */
  public get currentPageRange() {
    const min = 1;
    const max = this.getNumberOfPages();
    const current = this.pageNumber;

    const leftHalf = Math.ceil(this.pageSelectorRange / 2) - 1;
    const rightHalf = Math.floor(this.pageSelectorRange / 2);

    let range: number[];

    if (current - leftHalf < min) {
      range = _.range(min, Math.min(min + this.pageSelectorRange, max + 1));
    } else if (current + rightHalf > max) {
      range = _.range(Math.max(min, max - this.pageSelectorRange + 1), max + 1);
    } else {
      range = _.range(current - leftHalf, current + rightHalf + 1);
    }

    return range;
  }

  private pageNumberSubject = new Subject<number>();
  private pageSizeSubject = new Subject<number>();

  private previousPageNumber: number;

  constructor() {
    combineLatest(this.pageNumberSubject, this.pageSizeSubject).subscribe(
      ([pageNumber, size]) => {
        this.page.next({
          pageNumber,
          previousPageNumber: this.previousPageNumber,
          pageSize: size,
          length: this.length
        });

        this.previousPageNumber = this.pageNumber;
      }
    );
  }

  ngOnInit() {
    if (this.pageSizeOptions === undefined) {
      throw new Error("'pageSizeOptions' is not specified!");
    }

    if (this.length === undefined) {
      throw new Error("'length' is not specified!");
    }

    this.pageNumberSubject.next(this.pageNumber);
    this.pageSizeSubject.next(this.pageSizeOptions[0]);

    this.pageSize = this.pageSizeOptions[0];
  }

  public setPage(pageNumber) {
    this.pageNumber = pageNumber;
    this.pageNumberSubject.next(pageNumber);
  }

  public selectPageSize(size: number) {
    // TODO set page size in such a way that the first element in the current page stays the same
    this.pageSize = size;
    this.pageSizeSubject.next(size);
  }

  public getNumberOfPages() {
    return Math.ceil(this.length / this.pageSize);
  }

  public nextPage() {
    if (this.nextPageEnabled) {
      this.setPage(this.pageNumber + 1);
    }
  }

  public prevPage() {
    if (this.prevPageEnabled) {
      this.setPage(this.pageNumber - 1);
    }
  }
}
