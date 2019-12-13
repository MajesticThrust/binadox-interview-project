import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { UserInfo } from '../../models/user-info';
import { Observable } from 'rxjs';

@Component({
  selector: "app-user-button",
  templateUrl: "./user-button.component.html",
  styleUrls: ["./user-button.component.scss"]
})
export class UserButtonComponent implements OnInit {
  public userInfo: Observable<UserInfo>;

  constructor(private auth: AuthService) {
    this.userInfo = auth.getUserInfo();
  }

  ngOnInit() {}
}
