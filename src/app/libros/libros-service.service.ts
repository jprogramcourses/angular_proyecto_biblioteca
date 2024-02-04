import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { Autor } from '../autor/autor';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private urlLibros: string = 'http://localhost:8080/api/v1/libros';

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  libros: Libro[] = [
    // new Libro('El problema de los tres cuerpos', [new Autor('Cixin Liu')], 'Ciencia ficción', 100, 'Penguim random house', 'Descripción el Problema de los tres cuerpos', 2015, 'portadaElFin.png'),
    // new Libro('El fin de la eternidad', [new Autor('Isaac Asimov')], 'Ciencia ficción', 100, 'Bruguera', 'Descripción el fin de la eternidad', 1970, 'portadaElFin.png'),
    // new Libro('Cuentos de Eva Luna', [new Autor('Isabel Ayende')], 'Novela', 100, 'Bruguera', 'Descripción el fin de la eternidad',1900, 'portadaEvaLuna.png'),
    // new Libro('El Señor de los Anillos', [new Autor('Tolkien')], 'Fantasía', 100, 'Bruguera', 'Descripción el fin de la eternidad', 1900, 'portadaElSeñor.png'),
    // new Libro('Don Quijote de la Mancha', [new Autor('Miguel de Cervantes')], 'Novela', 100, 'DeBolsillo', 'Descripción el fin de la eternidad', 1610, 'portadaElQuijote.png')
  ];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getLibro(id: string): Observable<Libro>{
    console.log('getLibro, id: ', id);
    
    return this.httpClient.get(`${this.urlLibros}/${id}`).pipe(
      map((lib: any) => {
        console.log(lib);

        let libro = this.mapLibro(lib);

        console.log('getLibro service');
        console.log(libro);
        return libro;
      })
    );
  }

  private mapLibro(libroJson: any): Libro{
    let libro: Libro = new Libro(
      libroJson._titulo,
      libroJson._genero,
      libroJson._paginas,
      libroJson._descripcion,
      libroJson._anhoPublicacion,
      libroJson._portada
    );
    libro.id = libroJson._id;
    let autores: Autor[] = [];
    let autor: Autor = new Autor(
      libroJson._autores[0]._nombre
    );
    autor.id = libroJson._autores[0].id;
    autor.apellidos = libroJson._autores[0]._apellidos;
    autor.nacionalidad = libroJson._autores[0]._nacionalidad;
    autores.push(autor);
    libro.autores = autores;
    return libro;
  }

  getLibros(): Observable<Libro[]>{

    let libros: Libro[] = [];

    return this.httpClient.get(this.urlLibros).pipe(
      map((librosList:any) => {
        for(let i in librosList){
          console.log(librosList[i]);
          let libro: Libro = new Libro(
            librosList[i]._titulo,
            librosList[i]._genero,
            librosList[i]._paginas,
            librosList[i]._descripcion,
            librosList[i]._anhoPublicacion,
            librosList[i]._portada
          );
          libro.id = librosList[i]._id;
          libros.push(libro);
        }
        return libros;
      })
    );
  }

  createLibro(libro: Libro, portada: File): Observable<Libro>{
    console.log('Libro service: ');
    console.log(libro);

    console.log('Portada: ');
    console.log(portada.type);
    console.log('Portada de libro: ');
    console.log(libro.portada);

    // let formData = new FormData();
    // formData.append("portada", portada);
    // formData.append("titulo", libro.titulo);
    // formData.append("anhoPublicacion", libro.anhoPublicacion.toString());
    // formData.append("paginas", libro.paginas.toString());
    // formData.append("createdAt", libro.createdAt);
    // formData.append("lastModified", libro.lastModified);
    // formData.append("editorial", libro.editorial);
    // formData.append("descripcion", libro.descripcion);
    // formData.append("genero", libro.genero);
    

    // const params = new HttpParams();
    // params.append("titulo", libro.titulo)
    //   .append("anhoPublicacion", libro.anhoPublicacion)
    //   .append("paginas", libro.paginas)
    //   .append("portada", portada);


    // return this.httpClient.post<Libro>(`${this.urlLibros}/createWithFile`, formData).pipe(
    return this.httpClient.post<Libro>(this.urlLibros, libro).pipe(
      map((response: any) => response.libro as Libro),
      catchError(this.handleError)
    );
  }

  uploadPortada(portada: File, id:string): Observable<Libro>{
    let formData = new FormData();
    formData.append("portada", portada);
    formData.append("id", id);
    return this.httpClient.post(`${this.urlLibros}/uploadPortada`, formData).pipe(
      map((response: any) => response.libro as Libro),
      catchError(this.handleError)
    );
  }

  handleError(error: any){
    let errMsg = (error.message) ? error.message : error.statur ? `${error.status} - ${error.statusText}` : 'Server error';
    Swal.fire("Error: " + error.message);
    return throwError(() => errMsg);
  }

}
