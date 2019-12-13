import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RenewalsComponent } from "./renewals.component";

const routes: Routes = [{ path: "", component: RenewalsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewalsRoutingModule {}
