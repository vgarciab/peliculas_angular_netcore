import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoDTO } from '../generos/genero';
import { cineCreacionDTO, cineDTO } from './cine';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'cines'; // endpoint

  public crear(cine: cineCreacionDTO) {
    return this.http.post(this.apiURL, cine);
  }

  public obtenerTodos(pagina: number, cantidadElementosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadElementosAMostrar.toString())
    return this.http.get<cineDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  
}
