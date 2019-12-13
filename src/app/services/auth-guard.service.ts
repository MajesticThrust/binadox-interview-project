import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  public canActivate() {
    return this.auth.isLoggedIn().pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(["login"]);
        }
      })
    );
  }
}
