import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ConfirmationButtonDirective } from './confirmation/confirmation-button.directive';



@NgModule({
  declarations: [
    
  
    ConfirmationButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class SharedModule { }
