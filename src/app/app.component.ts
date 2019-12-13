import { Component } from "@angular/core";
import { IconRegistrarService } from './services/icon-registrar.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "binadox-interview-project";

  constructor(iconRegistrar: IconRegistrarService) {
    iconRegistrar.registerIcons();
  }
}
