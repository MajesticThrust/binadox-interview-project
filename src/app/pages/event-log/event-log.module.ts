import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventLogRoutingModule } from "./event-log-routing.module";
import { EventLogComponent } from "./event-log.component";

@NgModule({
  declarations: [EventLogComponent],
  imports: [CommonModule, EventLogRoutingModule]
})
export class EventLogModule {}
