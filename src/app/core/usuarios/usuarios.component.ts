import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuariosService } from './usuarios.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuariosList: Usuario[] = [];

  constructor(
    private usuarioService: UsuariosService
  ){}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      from(usuarios).subscribe(usuario => {
        this.usuariosList.push(usuario);
      })
    });
  }

}
