import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatTabsModule
} from "@angular/material";

import { AppUtilizationRoutingModule } from "./app-utilization-routing.module";
import { AppUtilizationComponent } from "./app-utilization.component";
import { AssignedLicencesComponent } from "./assigned-licences/assigned-licences.component";
import { UnassignedLicencesComponent } from "./unassigned-licences/unassigned-licences.component";

@NgModule({
  declarations: [
    AppUtilizationComponent,
    AssignedLicencesComponent,
    UnassignedLicencesComponent
  ],
  imports: [
    CommonModule,
    AppUtilizationRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule
  ]
})
export class AppUtilizationModule {}
