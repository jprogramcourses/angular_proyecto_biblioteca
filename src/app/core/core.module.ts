import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LibrosModule } from '../libros/libros.module';
import { LoginModule } from '../login/login.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    LibrosModule,
    LoginModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
