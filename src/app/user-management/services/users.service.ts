import {Injectable} from '@angular/core';
import {User} from '../model/user.entity';
import {BaseService} from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {

  constructor() {
    super();
  }

  public setResourceEndPoint(resourceEndPoint: string) {
    this.resourceEndpoint = resourceEndPoint;
  }
}
