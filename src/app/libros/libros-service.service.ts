import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { Autor } from '../autor/autor';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: Libro[] = [
    new Libro('1', 'El problema de los tres cuerpos', new Autor('Cixin Liu'), 'Ciencia ficción', 100, 'Penguim random house', 'Descripción el Problema de los tres cuerpos', 2015, 'portadaElFin.png'),
    new Libro('2', 'El fin de la eternidad', new Autor('Isaac Asimov'), 'Ciencia ficción', 100, 'Bruguera', 'Descripción el fin de la eternidad', 1970, 'portadaElFin.png'),
    new Libro('3', 'Cuentos de Eva Luna', new Autor('Isabel Ayende'), 'Novela', 100, 'Bruguera', 'Descripción el fin de la eternidad',1900, 'portadaEvaLuna.png'),
    new Libro('4', 'El Señor de los Anillos', new Autor('Tolkien'), 'Fantasía', 100, 'Bruguera', 'Descripción el fin de la eternidad', 1900, 'portadaElSeñor.png'),
    new Libro('5', 'Don Quijote de la Mancha', new Autor('Miguel de Cervantes'), 'Novela', 100, 'DeBolsillo', 'Descripción el fin de la eternidad', 1610, 'portadaElQuijote.png')
  ];

  constructor() { }

  getLibros(): Libro[]{
    return this.libros;
  }

  createLibro(libro: Libro){
    console.log('Libro service: ');
    console.log(libro);
  }

}
