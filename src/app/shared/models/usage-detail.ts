import { IDeserializable } from "./common";
import * as moment from "moment";

export class UsageDetail implements IDeserializable {
  utilization: number;
  lastTime: moment.Moment;
  userLicenses: string[]; // TODO change to enum
  userBillingPeriods: string[]; // TODO change to enum

  deserialize(input) {
    Object.assign(this, input);

    // TODO what to when timestamp is 0?
    this.lastTime = moment(input.lastTime);

    return this;
  }
}
