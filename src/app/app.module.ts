import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatIconRegistry } from "@angular/material";
import { EventLogService } from "./services/event-log.service";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MatIconRegistry, EventLogService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
