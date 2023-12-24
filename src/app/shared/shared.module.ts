import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ConfirmationButtonDirective } from './confirmation/confirmation-button.directive';
import { SlideshowComponent } from './slideshow/slideshow.component';



@NgModule({
  declarations: [
    ConfirmationButtonDirective,
    SlideshowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    SlideshowComponent
  ]
})
export class SharedModule { }
