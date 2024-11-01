import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Vehicle} from "../model/vehicle.entity";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService<Vehicle> {

  constructor() {
    super();
    this.resourceEndpoint='/vehicles';
  }

  public getVehiclesByUserId(userId: number) {
    return this.getAll().pipe(
      map((vehicles: Vehicle[]) => vehicles.filter(vehicle => vehicle.userId === userId))
    );
  }
}
