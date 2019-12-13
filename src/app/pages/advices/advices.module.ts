import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdvicesRoutingModule } from "./advices-routing.module";
import { AdvicesComponent } from "./advices.component";

@NgModule({
  declarations: [AdvicesComponent],
  imports: [CommonModule, AdvicesRoutingModule]
})
export class AdvicesModule {}
