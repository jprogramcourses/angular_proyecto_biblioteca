import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlUsuarios: string = 'http://localhost:8082/api/v1/usuarios';

  usuarios: Usuario[];

  constructor(
    private httpClient: HttpClient
  ){}

  getUsuarios(): Observable<Usuario[]>{
    let usuarios: Usuario[] = [];

    return this.httpClient.get(this.urlUsuarios).pipe(
      map((usuariosList: any) => {
        console.log(usuariosList)
        for(let i in usuariosList){
          let usuario: Usuario = new Usuario();
          usuario.nombre = usuariosList[i].firstname;
          usuario.apellido = usuariosList[i].lastname;
          usuario.user = usuariosList[i].user;
          usuario.email = usuariosList[i].email;
          usuarios.push(usuario);
        }
        return usuarios;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: any){
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return throwError(() => errMsg);
  }

}
