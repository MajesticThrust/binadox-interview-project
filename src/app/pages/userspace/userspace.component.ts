import { Component, OnInit } from "@angular/core";

interface SidenavLink {
  name: string;
  svgIcon: string;
  routerLink: string;
}

@Component({
  selector: "app-userspace",
  templateUrl: "./userspace.component.html",
  styleUrls: ["./userspace.component.scss"]
})
export class UserspaceComponent implements OnInit {
  public links: SidenavLink[] = [
    { name: "Dashboard", svgIcon: "dashboard", routerLink: "dashboard" },
    {
      name: "Applications and Services",
      svgIcon: "app-utilization",
      routerLink: "app-utilization"
    },
    {
      name: "User Details",
      svgIcon: "user-details",
      routerLink: "user-details"
    },
    { name: "Discovery", svgIcon: "discovery", routerLink: "discovery" },
    { name: "Renewals", svgIcon: "renewal", routerLink: "renewals" },
    { name: "Advices", svgIcon: "advice", routerLink: "advices" },
    {
      name: "Integrations",
      svgIcon: "integration",
      routerLink: "integrations"
    },
    { name: "Settings", svgIcon: "settings", routerLink: "settings" },
    {
      name: "System Configuration",
      svgIcon: "sys-config",
      routerLink: "sys-config"
    },
    { name: "Event Log", svgIcon: "event-log", routerLink: "event-log" }
  ];

  constructor() {}

  ngOnInit() {}
}
