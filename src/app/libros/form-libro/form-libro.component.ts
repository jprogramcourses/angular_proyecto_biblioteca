import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LibrosService } from '../libros-service.service';
import { Libro } from '../libro';
import { Autor } from 'src/app/autor/autor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent implements OnInit {

  libroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private libroService: LibrosService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.libroForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      autor: this.fb.group({
        nombre: [''],
        apellidos: [''],
        nacionalidad: ['']
      }),
      genero: ['', Validators.minLength(2)],
      paginas: [''],
      editorial: [''],
      descripcion: [''],
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

    if(this.libroForm.invalid){
      Object.values(this.libroForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    
    let newLibro = new Libro(
      form.get('titulo').value, 'NOVELA', form.get('paginas').value, form.get('descripcion'), form.get('anhoPublicacion').value, form.get('imagen').value);
    
    let libroTest: Libro = new Libro('El problema de los tres cuerpos', 'NOVELA', 100, 'Descripción el Problema de los tres cuerpos', 2015, 'portadaElFin.png');
    libroTest.id = '7';

    this.libroService.createLibro(libroTest).subscribe(
      response => this.router.navigate(['/libros'])
    );
  }

  get tituloNoValido(){
    return this.libroForm.get('titulo')?.invalid && this.libroForm.get('titulo')?.touched;
  }

}
