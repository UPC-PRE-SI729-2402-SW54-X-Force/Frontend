import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import {Owner} from "../model/owner.entity";

@Injectable({
  providedIn: 'root'
})
export class OwnerService extends BaseService<Owner> {

  constructor() { super(); }

  public setResourceEndPoint(resourceEndPoint: string) {
    this.resourceEndpoint = resourceEndPoint;
  }
}
