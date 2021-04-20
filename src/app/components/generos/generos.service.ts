import { Injectable } from '@angular/core';
import { generoDTO } from './genero';

@Injectable({
  providedIn: 'root' // este servicio es un Singleton
})
export class GenerosService {

  constructor() { }

  public obtenerTodos(): generoDTO[] {
    return [{ id: 1, nombre: 'Drama'}];

  }

}
