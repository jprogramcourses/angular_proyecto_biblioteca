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

  // userForm!: FormGroup;
  userExists: boolean = false;

  constructor(
    private authService: AuthenticationService
  ){}

  ngOnInit(): void {
    // this.userForm = this.fb.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // })
  }

  logIn(form: any){
    console.log('login');
    console.log(form);
  }

}
