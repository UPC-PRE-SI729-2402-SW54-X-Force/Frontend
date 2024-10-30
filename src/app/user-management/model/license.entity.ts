export class License {
  id: string;
  surname: string;
  name: string;
  licenseNumber: string;
  class: string;
  expirationDate: string;
  issueDate: string;
  category: string;
  urlImage: string;

  constructor() {
    this.id = "";
    this.surname = "";
    this.name = "";
    this.licenseNumber = "";
    this.class = "";
    this.expirationDate = "";
    this.issueDate = "";
    this.category = "";
    this.urlImage = "";
  }
}
