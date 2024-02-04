import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros-service.service';
import { Libro } from '../libro';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent implements OnInit {

  librosList: Libro[] = [];

  constructor(
    private libroService: LibrosService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.libroService.getLibros().subscribe(libros => {
      from(libros).subscribe(libro => {
        this.librosList.push(libro);
      })
    })
  }

  selectLibro(libro: Libro){
    console.log('Libro: ', libro);
    this.router.navigate(['/libro', libro.id]);
  }

}
