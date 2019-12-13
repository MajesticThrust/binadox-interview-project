import { IDeserializable } from './common';

export class UsageDetail implements IDeserializable {
  utilization: number;
  lastTime: Date;
  userLicences: string[]; // TODO change to enum
  userBillingPeriods: string[]; // TODO change to enum

  deserialize(input) {
    Object.assign(this, input);

    this.lastTime = new Date(input.lastTime);

    return this;
  }
}
