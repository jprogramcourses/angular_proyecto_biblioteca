import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { LibrosService } from '../libros-service.service';
import { Libro } from '../libro';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit, OnChanges {

  id: string;
  libro: Libro;

  constructor(
    private route: ActivatedRoute,
    private libroService: LibrosService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('Id detalle: ', this.id);
    this.libroService.getLibro(this.id).subscribe((lib: Libro) => {
      // let libroDetalle: Libro = new Libro(lib.titulo);

      console.log('Libro recuperado');
      console.log(lib);
      this.libro = lib;
      console.log(this.libro.titulo);
    }
    );
  }

  getLibro(id: string): void{
    console.log('Id buscado: ', id);
    this.libroService.getLibro(id).subscribe(lib => {
      console.log(lib);
      this.libro = lib;
    }
    );
  }

}
