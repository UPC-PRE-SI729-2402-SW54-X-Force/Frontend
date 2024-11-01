export class Vehicle {
  id: number;
  userId: number;
  vehicleModel: string;
  vehicleManufacturingYear: number;
  vehicleImageURL: string;
  vehicleStatus: string;
  vehicleInsurance: string;

  constructor() {
    this.id = 0;
    this.userId = 0;
    this.vehicleModel = "";
    this.vehicleManufacturingYear = 0;
    this.vehicleImageURL = "";
    this.vehicleStatus = "";
    this.vehicleInsurance = "";
  }
}
