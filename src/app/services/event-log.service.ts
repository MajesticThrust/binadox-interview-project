import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventLogService {
  // tslint:disable-next-line: variable-name
  private _unreadCount = new BehaviorSubject(0);
  public get unreadCount() {
    return this._unreadCount.asObservable();
  }

  constructor() {
    this._unreadCount.next(15);
  }
}
