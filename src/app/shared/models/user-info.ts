import { IDeserializable } from "./common";

export class UserInfo implements IDeserializable {
  name: string;
  email: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  getDisplayAccountName() {
    return this.email;
  }

  getAbbreviatedName() {
    // take up to 2 first letters from name and change case
    return this.name
      .split(" ")
      .slice(0, 2)
      .map(w => w[0])
      .join()
      .toUpperCase();
  }
}
