import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SysConfigRoutingModule } from "./sys-config-routing.module";
import { SysConfigComponent } from "./sys-config.component";

@NgModule({
  declarations: [SysConfigComponent],
  imports: [CommonModule, SysConfigRoutingModule]
})
export class SysConfigModule {}
