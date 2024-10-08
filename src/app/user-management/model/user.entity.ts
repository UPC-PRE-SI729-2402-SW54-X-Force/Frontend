import { License } from "./license.entity";

export class User {
  id: number;
  name: string;
  age: number;
  email: string;
  address: string;
  pfp: string;
  joined: string;
  license: License[];

  constructor() {
    this.id = 0;
    this.name = "";
    this.age = 0;
    this.address = "";
    this.email = "";
    this.pfp = "";
    this.joined = "";
    this.license = [];
  }
}
