import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Resource} from "../model/resource.entity";
import {BaseService} from "../../shared/services/base.service";


@Injectable({
  providedIn: 'root'
})
export class ResourcesService extends BaseService<Resource> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/resources';
  }

  getResources(): Observable<Array<Resource>> {
    return this.http.get<Array<Resource>>(this.resourcePath()).pipe(
      catchError(error => {
        console.error('Something happened with request, please try again later', error);
        return throwError(error);
      })
    );
  }
}
