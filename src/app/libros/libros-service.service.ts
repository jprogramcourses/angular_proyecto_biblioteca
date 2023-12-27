import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { Autor } from '../autor/autor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

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
          libros.push(libro);
        }
        
        return libros;
      })
    );
  }

  createLibro(libro: Libro): Observable<Libro>{
    console.log('Libro service: ');
    console.log(libro);
    return this.httpClient.post<Libro>(this.urlLibros, libro);
  }

}
