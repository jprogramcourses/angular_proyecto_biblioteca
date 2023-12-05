import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LibrosService } from '../libros-service.service';
import { Libro } from '../libro';
import { Autor } from 'src/app/autor/autor';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent implements OnInit {

  libroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private libroService: LibrosService
  ){}

  ngOnInit(): void {
    this.libroForm = this.fb.group({
      titulo: ['', [Validators.required]],
      autor: [''],
      genero: ['', Validators.minLength(2)],
      paginas: [''],
      editorial: [''],
      anhoPublicacion: [''],
      imagen: ['']
    });
  }

  checkTitulo(fc: FormControl): {[invalidTitulo: string]: boolean}{
    const titulo = fc.value,
    regexp = new RegExp('[a-zA-Z0-9]*$');
    if(regexp.test(titulo)){
      return {'invalidTitulo': false};
    }else{
      return {'invalidTitulo': true};
    }
  }

  crearLibro(form: any): void{
    console.log('Crear libro');
    console.log(form);
    console.log('Título: ', form.get('titulo').value);
    
    const newLibro = new Libro('x', form.get('titulo').value, new Autor(form.get('autor').value), form.get('genero').value, form.get('paginas').value, form.get('editorial').value, form.get('anhoPublicacion').value, form.get('imagen').value);
    this.libroService.createLibro(newLibro);
  }

}
