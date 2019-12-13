import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserspaceComponent } from "./userspace.component";
import { SharedModule } from "../../shared/shared.module";
import { UserspaceRoutingModule } from "./userspace.routing";
import {
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";

@NgModule({
  declarations: [UserspaceComponent],
  imports: [
    UserspaceRoutingModule,
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class UserspaceModule {}
