import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatTabsModule,
  MatCheckboxModule,
  MatInputModule,
  MatTableModule,
  MatFormFieldModule
} from "@angular/material";

import { AppUtilizationRoutingModule } from "./app-utilization-routing.module";
import { AppUtilizationComponent } from "./app-utilization.component";
import { AssignedLicencesComponent } from "./assigned-licences/assigned-licences.component";
import { UnassignedLicencesComponent } from "./unassigned-licences/unassigned-licences.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppUtilizationComponent,
    AssignedLicencesComponent,
    UnassignedLicencesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppUtilizationRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ]
})
export class AppUtilizationModule {}
