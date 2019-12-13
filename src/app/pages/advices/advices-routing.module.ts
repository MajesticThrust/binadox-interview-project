import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdvicesComponent } from "./advices.component";

const routes: Routes = [{ path: "", component: AdvicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvicesRoutingModule {}
