import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventLogComponent } from "./event-log.component";

const routes: Routes = [{ path: "", component: EventLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventLogRoutingModule {}
