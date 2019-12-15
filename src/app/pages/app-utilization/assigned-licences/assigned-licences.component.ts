import { Component, OnInit } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import {
  AssignedLicencesRow,
  AssignedLicencesDataSource,
  ListSortOrder
} from "./assigned-licenses-datasource";
import { BackendService } from "src/app/services/backend.service";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-assigned-licences",
  templateUrl: "./assigned-licences.component.html",
  styleUrls: ["./assigned-licences.component.scss"]
})
export class AssignedLicencesComponent implements OnInit {
  public checkboxes = {
    underutilizedLicences: false,
    abandonedLicences: false
  };

  public displayedColumns = [
    "name",
    "email",
    "appUtilizationPercent",
    "lastActive",
    "billingPeriod",
    "paymentPlan"
  ];

  private dataSource: AssignedLicencesDataSource;

  private filterSubject = new BehaviorSubject("");

  constructor(backend: BackendService) {
    this.dataSource = new AssignedLicencesDataSource(backend);

    this.filterSubject
      .pipe(debounceTime(250))
      .subscribe(s => this.dataSource.filter(s));
  }

  ngOnInit() {}

  public checkUnderutilizedLicences() {
    this.checkboxes = {
      underutilizedLicences: !this.checkboxes.underutilizedLicences,
      abandonedLicences: false
    };
  }

  public checkAbandonedLicences() {
    this.checkboxes = {
      underutilizedLicences: false,
      abandonedLicences: !this.checkboxes.abandonedLicences
    };
  }

  public trackBy(index: number, item: AssignedLicencesRow) {
    return item.id;
  }

  public filter(event) {
    this.filterSubject.next(event.target.value);
  }
}
