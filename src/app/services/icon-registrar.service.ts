import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

interface IconDefinition {
  name: string;
  url: string;
}

const icons: IconDefinition[] = [
  { name: "event-log-button", url: "assets/icons/event-log-button.svg" }
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
