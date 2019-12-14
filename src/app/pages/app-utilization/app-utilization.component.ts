import { Component, OnInit } from "@angular/core";

interface TabLink {
  name: string;
  path: string;
}

@Component({
  selector: "app-app-utilization",
  templateUrl: "./app-utilization.component.html",
  styleUrls: ["./app-utilization.component.scss"]
})
export class AppUtilizationComponent implements OnInit {
  public tabLinks: TabLink[] = [
    { name: "Assigned Licences", path: "assigned-licences" },
    { name: "Unassigned Licences", path: "unassigned-licences" }
  ];

  constructor() {}

  ngOnInit() {}
}
