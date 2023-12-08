import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: string = 'Iniciar sesión';

  loginForm: FormGroup;

  // userForm!: FormGroup;
  userExists: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  logIn(form: any){
    console.log('login');
    console.log(form);
  }

}
