import { IDeserializable } from './common';

export class AccountUsageData implements IDeserializable {
  accId: number;
  name: string;
  email: string;

  deserialize(input) {
    Object.assign(this, input);
    return this;
  }
}
