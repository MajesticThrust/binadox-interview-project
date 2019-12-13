import { Injectable } from "@angular/core";
import { UserInfo } from "../shared/models/user-info";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  public getUserInfo() {
    const user = new UserInfo().deserialize({
      name: "Malik",
      email: "malik@binadox.com"
    });

    return of(user);
  }

  public isLoggedIn() {
    return of(true);
  }
}
