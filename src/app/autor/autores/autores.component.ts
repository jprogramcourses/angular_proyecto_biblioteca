import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor-service.service';
import { Autor } from '../autor';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  private autores: Autor[] = [];

  constructor(
    private autorService: AutorService
  ){}

  ngOnInit(): void {
    this.getAutores();
  }

  getAutores(){
    this.autorService.getAutores().subscribe((resp: Autor[]) => {
      console.log('length: ', resp.length);
      resp.forEach((autor: Autor) => {
        console.log(autor);
        this.autores.push(autor);
      });
      console.log(this.autores);
    });
  }

}
