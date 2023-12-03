import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosListComponent } from './libros-list/libros-list.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { SharedModule } from '../shared/shared.module';
import { LibroCardComponent } from './libro-card/libro-card.component';
import { LibrosRoutingModule } from './libros-routing.module';
import { RouterModule } from '@angular/router';
import { FormLibroComponent } from './form-libro/form-libro.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LibrosListComponent,
    LibroDetalleComponent,
    LibroCardComponent,
    FormLibroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LibrosRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LibrosModule { }
