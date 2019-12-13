import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserspaceComponent } from "./userspace.component";
import { SharedModule } from "src/app/shared/shared.module";
import { UserspaceRoutingModule } from "./userspace.routing";

@NgModule({
  declarations: [UserspaceComponent],
  imports: [UserspaceRoutingModule, CommonModule, SharedModule]
})
export class UserspaceModule {}
