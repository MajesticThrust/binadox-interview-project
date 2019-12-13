import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RenewalsRoutingModule } from "./renewals-routing.module";
import { RenewalsComponent } from "./renewals.component";

@NgModule({
  declarations: [RenewalsComponent],
  imports: [CommonModule, RenewalsRoutingModule]
})
export class RenewalsModule {}
