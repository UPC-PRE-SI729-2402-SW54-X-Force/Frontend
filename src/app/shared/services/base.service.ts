import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BaseService<T> {

    protected basePath: string = `${environment.serverBasePath}`;

    protected resourceEndpoint: string = '/resources';

    protected httpOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
        })
    }

    protected http: HttpClient = inject(HttpClient);

    protected resourcePath(): string {
        return `${this.basePath}${this.resourceEndpoint}`;
    }


    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('Client-side error:', error.error.message);
        } else {
            console.error(`Server-side error: Code ${error.status}, Message: ${error.message}, Body: ${error.error}`);
        }
        return throwError(() => new Error('Something happened with request, please try again later'));
    }


    // Create Resource
    public create(item: any): Observable<T> {
        return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    // Delete Resource
    public delete(id: any) {
        return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    // Update Resource
    public update(id: any, item: any): Observable<T> {
        return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    // Get All Resources
    public getAll(): Observable<T> {
        return this.http.get<T>(this.resourcePath(), this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    // Get Resource By Id
    public getById(id: any): Observable<T> {
        return this.http.get<T>(`${this.resourcePath()}/${id}`)
            .pipe(retry(2), catchError(this.handleError));
    }

}
