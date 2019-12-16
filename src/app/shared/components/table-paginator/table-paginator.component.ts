import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PageEvent, MatPaginator } from "@angular/material";
import { BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import * as _ from "lodash";
export { PageEvent };

@Component({
  selector: "app-table-paginator",
  templateUrl: "./table-paginator.component.html",
  styleUrls: ["./table-paginator.component.scss"]
})
export class TablePaginatorComponent extends MatPaginator implements OnInit {
  /** Amount of page buttons to display (not counting first/last page buttons) */
  @Input() public pageSelectorRange = 5;

  ngOnInit() {
    if (
      this.pageSize === undefined &&
      this.pageSizeOptions &&
      this.pageSizeOptions.length > 0
    ) {
      this.pageSize = this.pageSizeOptions[0];
    }

    if (this.pageIndex !== undefined && this.pageIndex < 1) {
      throw new Error("pageIndex must be at least 1!");
    }

    console.log(this);
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
    const current = this.pageIndex;

    const leftHalf = Math.ceil(this.pageSelectorRange / 2) - 1;
    const rightHalf = Math.floor(this.pageSelectorRange / 2);

    if (current - leftHalf < min) {
      return _.range(min, min + this.pageSelectorRange);
    } else if (current + rightHalf > max) {
      return _.range(max - this.pageSelectorRange + 1, max + 1);
    } else {
      return _.range(current - leftHalf, current + rightHalf + 1);
    }
  }

  public setPage(pageIndex) {
    this.pageIndex = pageIndex;
  }
}
// export class TablePaginatorComponent implements OnInit {
//   /** Available page sizes */
//   @Input() public pageSizeOptions: number[];

//   /** Initial page index */
//   @Input() public pageIndex = 0;

//   /** Total amount of elements that are being paginated */
//   @Input() public length: number;

//   /** Emitted when the page index or page size changes */
//   @Output() public page = new EventEmitter<PageEvent>();

//   // public

//   private pageIndexSubject = new BehaviorSubject(this.pageIndex);
//   private pageSizeSubject = new BehaviorSubject(this.pageSizeOptions[0]);

//   private previousPageIndex: number;

//   constructor() {
//     combineLatest(this.pageIndexSubject, this.pageSizeSubject).pipe(
//       map(([index, size]) => {
//         this.previousPageIndex = this.pageIndex;

//         this.page.next({
//           pageIndex: index,
//           previousPageIndex: this.previousPageIndex,
//           pageSize: size,
//           length: this.length
//         });
//       })
//     );
//   }

//   ngOnInit() {}

//   public selectPageSize() {}
// }
