import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlUsuarios: string = 'http://localhost:8082/api/v1';

  usuarios: Usuario[];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ){}

  getUsuarios(): Observable<Usuario[]>{
    let usuarios: Usuario[] = [];

    return this.httpClient.get(this.urlUsuarios + '/usuarios').pipe(
      map((usuariosList: any) => {
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

  getUsuarioById(id: string): Observable<Usuario>{
    return this.httpClient.get(this.urlUsuarios + '/' + id).pipe(
      map((us: any) => {

        // Comprobar resultado de la búsqueda

        let usuario: Usuario = new Usuario();
          usuario.nombre = us.firstname;
          usuario.apellido = us.lastname;
          usuario.user = us.user;
          usuario.email = us.email;
          return usuario;
      }),
      catchError(this.handleError)
    );
  }

  getUsuarioByEmail(email: string): Observable<Usuario>{
    return this.httpClient.get(this.urlUsuarios + '/usuario/email/' + email).pipe(
      map((us: any) => {
        let usuario: Usuario = new Usuario();
          usuario.nombre = us.firstname;
          usuario.apellido = us.lastname;
          usuario.user = us.user;
          usuario.email = us.email;
          return usuario;
      }),
      catchError(this.handleError)
    );
  }

  createUsuario(usuario: Usuario){
    return this.httpClient.post(this.urlUsuarios + '/usuarios', usuario).pipe(
      map(() => console.log('Usuario creado con éxito')),
      catchError(this.handleError)
    );
  }

  handleError(error: any){
    this.router.navigate(['libros']);
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    Swal.fire("Error: " + error.message);
    return throwError(() => errMsg);
  }

  private isNoAutorizado(e: any): boolean{
    if(e.status == 401 || e.status == 403){
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }

}
