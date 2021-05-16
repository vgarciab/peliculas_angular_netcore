import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private seguridadService: SeguridadService,
              private router: Router) { }

  errores: string[] = [];

  ngOnInit(): void {
  }


  registrar(credenciales: credencialesUsuario){
    this.seguridadService.registrar(credenciales)
    .subscribe(respuesta => {  // subscribirse al Observable
      this.seguridadService.guardarToken(respuesta);
      this.router.navigate(['/']);
    }, errores => this.errores = parsearErroresAPI(errores));
  }

}
