import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token: string;

  private urlAuthenticate: string = '';
  private urlRegister: string = ''

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  login(data: {email: string, password: string}): Observable<any>{
    return this.httpClient.post<any>(
      `${environment.authURL}/authenticate`,
      data).pipe(
        tap((data: any) => data),
        catchError(err => throwError(() => err))
      )
  }


}
