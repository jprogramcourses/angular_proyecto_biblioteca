import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros-service.service';
import { Libro } from '../libro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent implements OnInit {

  libros: Libro[];

  constructor(
    private libroService: LibrosService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.libros = this.libroService.getLibros();
  }

  selectLibro(libro: Libro){
    this.router.navigate(['/libro', libro.titulo]);
  }

}
