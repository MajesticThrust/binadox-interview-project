import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppUtilizationComponent } from "./app-utilization.component";

const routes: Routes = [{ path: "", component: AppUtilizationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUtilizationRoutingModule {}
