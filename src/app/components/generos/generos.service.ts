import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoCreacionDTO, generoDTO } from './genero';

@Injectable({
  providedIn: 'root' // este servicio es un Singleton
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'generos'; // endpoint

  public obtenerTodos(): Observable<generoDTO[]> {
    return this.http.get<generoDTO[]>(this.apiURL);
  }

  public crear(genero: generoCreacionDTO) {
    return this.http.post(this.apiURL, genero);
  }

}
