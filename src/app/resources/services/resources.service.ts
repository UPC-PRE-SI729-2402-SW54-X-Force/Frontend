import {Injectable} from '@angular/core';
import {Resource} from "../model/resource.entity";
import {BaseService} from "../../shared/services/base.service";


@Injectable({
  providedIn: 'root'
})
export class ResourcesService extends BaseService<Resource> {

  constructor() {
    super();
    this.resourceEndpoint = '/resources';
  }
}
