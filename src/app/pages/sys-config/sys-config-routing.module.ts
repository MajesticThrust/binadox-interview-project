import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SysConfigComponent } from "./sys-config.component";

const routes: Routes = [{ path: "", component: SysConfigComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysConfigRoutingModule {}
