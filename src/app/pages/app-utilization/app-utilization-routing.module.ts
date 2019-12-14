import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppUtilizationComponent } from "./app-utilization.component";
import { AssignedLicencesComponent } from "./assigned-licences/assigned-licences.component";
import { UnassignedLicencesComponent } from "./unassigned-licences/unassigned-licences.component";

const routes: Routes = [
  {
    path: "",
    component: AppUtilizationComponent,
    children: [
      { path: "", redirectTo: "assigned-licences", pathMatch: "full" },
      { path: "assigned-licences", component: AssignedLicencesComponent },
      { path: "unassigned-licences", component: UnassignedLicencesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUtilizationRoutingModule {}
