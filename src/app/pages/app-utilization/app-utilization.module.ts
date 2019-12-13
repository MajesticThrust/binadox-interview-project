import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppUtilizationRoutingModule } from "./app-utilization-routing.module";
import { AppUtilizationComponent } from "./app-utilization.component";

@NgModule({
  declarations: [AppUtilizationComponent],
  imports: [CommonModule, AppUtilizationRoutingModule]
})
export class AppUtilizationModule {}
