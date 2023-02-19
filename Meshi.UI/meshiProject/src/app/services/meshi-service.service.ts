import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRead } from '../interfaces/read';

@Injectable({
  providedIn: 'root'
})
export class MeshiServiceService {
  private _basePath;

  constructor(private _http: HttpClient) {
    const path = environment.apiEndpoint;
    this._basePath = path + '/api/Reads/';
  }

  getReads(): Observable<IRead[]> {
    var response = this._http.get<IRead[]>(this._basePath).pipe(map(res=>res));
    return response;
  }
}



