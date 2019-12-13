import { Component, OnInit } from "@angular/core";
import { EventLogService } from "src/app/services/event-log.service";
import { Observable } from "rxjs";
import { shareReplay, map } from "rxjs/operators";

@Component({
  selector: "app-event-log-button",
  templateUrl: "./event-log-button.component.html",
  styleUrls: ["./event-log-button.component.scss"]
})
export class EventLogButtonComponent implements OnInit {
  public haveUnread: Observable<boolean>;
  public unreadEventCount: Observable<number>;

  constructor(eventLog: EventLogService) {
    this.unreadEventCount = eventLog.unreadCount.pipe(shareReplay(1));
    this.haveUnread = this.unreadEventCount.pipe(map(count => count > 0));
  }

  ngOnInit() {}
}
