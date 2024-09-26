import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user.entity';
import { BaseService } from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {

  userId: number;
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/users';
    this.userId = 1;
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.resourcePath()}/${id}`).pipe(
      catchError(error => {
        console.error('Something happened with request, please try again later', error);
        return throwError(error);
      })
    );
  }
}
