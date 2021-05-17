import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { credencialesUsuario, respuestaAutenticacion } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private httpClient: HttpClient) { }

  apiURL = environment.apiURL + 'cuentas';
  private readonly llaveToken = 'token';
  private readonly llaveExpiracion = 'token-expiracion';


  estaLogueado() {
    const token = localStorage.getItem(this.llaveToken);

    if (!token){
      return false;
    }

    const expiracion = String(localStorage.getItem(this.llaveExpiracion));
    const expiracionFecha = new Date(expiracion);

    if (expiracionFecha <= new Date()){
      this.logout();
      return false;
    }

    return true;  
  }


  logout(){
    localStorage.removeItem(this.llaveToken);
    localStorage.removeItem(this.llaveExpiracion);
  }  


  obtenerRol(): string {
    return '';
  }


  obtenerCampoJWT(campo: string): string {
    const token = localStorage.getItem(this.llaveToken);
    if (!token){
      return '';
    }
    var dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[campo]; // obtenemos el email del usuario logueado.
  }


  registrar(credenciales: credencialesUsuario): Observable<respuestaAutenticacion>{
    return this.httpClient.post<respuestaAutenticacion>(this.apiURL + '/crear', credenciales);
  }

  login(credenciales: credencialesUsuario): Observable<respuestaAutenticacion>{
    return this.httpClient.post<respuestaAutenticacion>(this.apiURL + '/login', credenciales);
  }

  // Para guardar el Token en  LocalStorage 
  // (LocalStorage es un API de almacenamiento que nos permiten usar los navegadores para guardar
  //   data pequeña en el PC del usuario; luego esa data la podemos recuperar y utilizarla)
  // En este caso, vamos a guardar el JWT y la fecha de expiración del mismo.
  guardarToken(respuestaAutenticacion: respuestaAutenticacion) {
    localStorage.setItem(this.llaveToken, respuestaAutenticacion.token);
    localStorage.setItem(this.llaveExpiracion, respuestaAutenticacion.expiracion.toString()); // .toString() es para poder guardarlo.
  }

  obtenerToken() {
    return localStorage.getItem(this.llaveToken);
  }

}
