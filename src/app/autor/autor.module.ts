import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresComponent } from './autores/autores.component';
import { AutorRoutingModule } from './autor-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AutoresComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    RouterModule
  ]
})
export class AutorModule { }
