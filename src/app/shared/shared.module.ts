import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule
} from "@angular/material";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { EventLogButtonComponent } from "./components/event-log-button/event-log-button.component";
import { UserButtonComponent } from "./components/user-button/user-button.component";

@NgModule({
  declarations: [NavbarComponent, EventLogButtonComponent, UserButtonComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule {}
