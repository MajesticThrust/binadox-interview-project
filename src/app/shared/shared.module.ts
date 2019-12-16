import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatDividerModule
} from "@angular/material";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { EventLogButtonComponent } from "./components/event-log-button/event-log-button.component";
import { UserButtonComponent } from "./components/user-button/user-button.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TablePaginatorComponent } from "./components/table-paginator/table-paginator.component";

@NgModule({
  declarations: [
    NavbarComponent,
    EventLogButtonComponent,
    UserButtonComponent,
    FooterComponent,
    TablePaginatorComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [NavbarComponent, FooterComponent, TablePaginatorComponent]
})
export class SharedModule {}
