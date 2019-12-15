import { Component, OnInit } from "@angular/core";

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

  constructor() {}

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
}
