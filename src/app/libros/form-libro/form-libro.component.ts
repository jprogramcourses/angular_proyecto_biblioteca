import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LibrosService } from '../libros-service.service';
import { Libro } from '../libro';
import { Autor } from 'src/app/autor/autor';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent implements OnInit {

  libroForm: FormGroup;

  private portadaSeleccionada: File;

  constructor(
    private fb: FormBuilder,
    private libroService: LibrosService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.crearLibroFormulario();
  }

  crearLibroFormulario(){
    this.libroForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      autor: this.fb.group({
        nombre: [''],
        apellidos: [''],
        nacionalidad: ['']
      }),
      genero: ['', Validators.minLength(2)],
      paginas: [],
      editorial: [''],
      descripcion: [''],
      anhoPublicacion: [],
      portada: ['']
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

    if(this.libroForm.invalid){
      Object.values(this.libroForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    
    let newLibro = new Libro(
      form.get('titulo').value, 
      form.get('genero').value, 
      form.get('paginas').value, 
      form.get('descripcion').value, 
      form.get('anhoPublicacion').value, 
      form.get('portada').value
    );
    

    this.libroService.createLibro(newLibro, this.libroForm.get('titulo')?.value)
      .subscribe(libro => {
        Swal.fire('Libro creado con éxito');
        this.router.navigate(['/libros']);
      });


    if(form.get('autor').get('nombre')){
      let autor: Autor = new Autor(form.get('autor').get('nombre').value);
      autor.apellidos = form.get('autor').get('apellidos').value;
      console.log('Autor');
      console.log(autor);

      let autores: Autor[] = [];
      autores.push(autor);

      newLibro.autores = autores;

    }

    console.log('New libro: ', newLibro);

    // let libroTest: Libro = new Libro('El problema de los tres cuerpos', 'NOVELA', 100, 'Descripción el Problema de los tres cuerpos', 2015, 'portadaElFin.png');
    newLibro.id = '7';

    // this.libroService.createLibro(newLibro).subscribe(
    //   response => this.router.navigate(['/libros'])
    // );
  }

  get tituloNoValido(){
    return this.libroForm.get('titulo')?.invalid && this.libroForm.get('titulo')?.touched;
  }

  seleccionarPortada(event: any){
    this.portadaSeleccionada = event.target.files[0];
    console.log(this.portadaSeleccionada);
    Swal.fire('La foto se ha seleccionado');
  }

}
