import { Injectable } from '@angular/core';
import {License} from "../model/license.entity";
import {BaseService} from "../../shared/services/base.service";
import {catchError, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LicenseService extends BaseService<License> {

  constructor() {
    super();
    this.resourceEndpoint = '/licenses';
  }

  public getLicenseByUserId(userId: number): Observable<License> {
    return this.http.get<License>(`${this.basePath}/licenses?userId=${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

}
