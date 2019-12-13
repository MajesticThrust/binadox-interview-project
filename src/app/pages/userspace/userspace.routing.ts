import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserspaceComponent } from "./userspace.component";

const routes: Routes = [{ path: "", component: UserspaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserspaceRoutingModule {}
