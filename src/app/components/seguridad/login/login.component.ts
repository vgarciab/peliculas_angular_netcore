import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private seguridadService: SeguridadService,
              private router: Router) { }

  public errores: string[] = [];

  ngOnInit(): void {
  }
  

  login(credenciales: credencialesUsuario){
    this.seguridadService.login(credenciales)
    .subscribe(respuesta => {
      this.seguridadService.guardarToken(respuesta);
      this.router.navigate(['/']);
    }, errores => this.errores = parsearErroresAPI(errores));
  }

}
