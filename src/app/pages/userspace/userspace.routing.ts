import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserspaceComponent } from "./userspace.component";

const routes: Routes = [
  {
    path: "",
    component: UserspaceComponent,
    children: [
      { path: "", redirectTo: "app-utilization", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () =>
          import("../dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "app-utilization",
        loadChildren: () =>
          import("../app-utilization/app-utilization.module").then(
            m => m.AppUtilizationModule
          )
      },
      {
        path: "user-details",
        loadChildren: () =>
          import("../user-details/user-details.module").then(
            m => m.UserDetailsModule
          )
      },
      {
        path: "discovery",
        loadChildren: () =>
          import("../discovery/discovery.module").then(m => m.DiscoveryModule)
      },
      {
        path: "renewals",
        loadChildren: () =>
          import("../renewals/renewals.module").then(m => m.RenewalsModule)
      },
      {
        path: "advices",
        loadChildren: () =>
          import("../advices/advices.module").then(m => m.AdvicesModule)
      },
      {
        path: "integrations",
        loadChildren: () =>
          import("../integrations/integrations.module").then(
            m => m.IntegrationsModule
          )
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../settings/settings.module").then(m => m.SettingsModule)
      },
      {
        path: "sys-config",
        loadChildren: () =>
          import("../sys-config/sys-config.module").then(m => m.SysConfigModule)
      },
      {
        path: "event-log",
        loadChildren: () =>
          import("../event-log/event-log.module").then(m => m.EventLogModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserspaceRoutingModule {}
