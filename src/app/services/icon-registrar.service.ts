import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

interface IconDefinition {
  name: string;
  url: string;
}

const icons: IconDefinition[] = [
  { name: "event-log-button", url: "assets/icons/event-log-button.svg" },
  { name: "dashboard", url: "assets/icons/main-menu-icons/dashboard-icon.svg" },
  { name: "app-utilization", url: "assets/icons/main-menu-icons/app-utilization.svg" },
  { name: "user-details", url: "assets/icons/main-menu-icons/user-details.svg" },
  { name: "discovery", url: "assets/icons/main-menu-icons/shadow-it.svg" },
  { name: "renewal", url: "assets/icons/main-menu-icons/renewal-icon.svg" },
  { name: "advice", url: "assets/icons/main-menu-icons/advice-icon.svg" },
  { name: "integration", url: "assets/icons/main-menu-icons/integration-icon.svg" },
  { name: "settings", url: "assets/icons/main-menu-icons/settings-icon.svg" },
  { name: "sys-config", url: "assets/icons/main-menu-icons/sys-config-icon.svg" },
  { name: "event-log", url: "assets/icons/main-menu-icons/event-log-icon.svg" },
  { name: "office365", url: "assets/icons/office365.svg" }
];

@Injectable({
  providedIn: "root"
})
export class IconRegistrarService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  public registerIcons() {
    for (const icon of icons) {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.url)
      );
    }
  }
}
