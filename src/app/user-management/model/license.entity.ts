export class License {
  id: number;
  userId: number;
  name: string;
  surname: string;
  licenseNumber: string;
  licenseClass: string;
  expirationDate: string;
  issueDate: string;
  licenseCategory: string;
  licenseUrlImage: string;

  constructor() {
    this.id = 0;
    this.userId = 0;
    this.name = "";
    this.surname = "";
    this.licenseNumber = "";
    this.licenseClass = "";
    this.expirationDate = "";
    this.issueDate = "";
    this.licenseCategory = "";
    this.licenseUrlImage = "";
  }
}
