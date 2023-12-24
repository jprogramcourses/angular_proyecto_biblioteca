import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../core/usuarios/usuario';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: string = 'Iniciar sesión';

  loginForm: FormGroup;

  usuario: Usuario;

  // userForm!: FormGroup;
  userExists: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ){
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  logIn(form: any){
    console.log('login');
    console.log(form);
    Swal.fire("Te has logueado correctamente");
    this.authService.login({email: form.value.email, password: form.value.password});
  }

}
