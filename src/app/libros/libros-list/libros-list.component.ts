import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros-service.service';
import { Libro } from '../libro';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent implements OnInit {

  libros: Libro[];

  constructor(private libroService: LibrosService){}

  ngOnInit(): void {
    this.libros = this.libroService.getLibros();
  }

}
