export class User {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  address: string;
  password: string;
  pfp: string;
  joined_at: string;
  userType: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.surname = "";
    this.age = 0;
    this.address = "";
    this.password = "";
    this.email = "";
    this.pfp = "";
    this.joined_at = "";
    this.userType = "";
  }
}
