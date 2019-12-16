import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatTabsModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule
} from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";

import { AppUtilizationRoutingModule } from "./app-utilization-routing.module";
import { AppUtilizationComponent } from "./app-utilization.component";
import { AssignedLicencesComponent } from "./assigned-licences/assigned-licences.component";
import { UnassignedLicencesComponent } from "./unassigned-licences/unassigned-licences.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

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
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTableModule
  ]
})
export class AppUtilizationModule {}
