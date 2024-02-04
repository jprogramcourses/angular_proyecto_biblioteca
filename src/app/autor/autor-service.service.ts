import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from './autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private urlAutores: string = 'http://localhost:8080/api/v1/autores';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAutores(): Observable<Autor[]>{
    let autores: Autor[] = [];

    return this.httpClient.get<Autor[]>(this.urlAutores);
  }

}
