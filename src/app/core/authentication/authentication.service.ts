import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token: string;

  private urlAuthenticate: string = '';
  private urlRegister: string = ''

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private usuarioService: UsuariosService
  ) { }

  login(data: {email: string, password: string}): Observable<any>{
    this.usuarioService.getUsuarioByEmail(data.email).subscribe(response => {
      console.log('Respuesta de login');
      console.log(response);
      return of(response);
    });

    // return this.httpClient.post<any>(
    //   this.urlAuthenticate,
    //   data).pipe(
    //     tap((data: any) => data),
    //     catchError(err => throwError(() => err))
    //   )

    return of("token");

  }


}
