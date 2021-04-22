import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {


  // Los Servicios se inyectan a través del constructor de la Class
  constructor(private router: Router, private generosService: GenerosService) { }

  errores: string[] = [];

  
  ngOnInit(): void {
  }


  guardarCambios(genero: generoCreacionDTO) {
    //..guardar los cambios (a través de un servicio (backend))
    console.log(genero);
    this.generosService.crear(genero).subscribe(() => {
      // y volver a una dirección concreta (portada de películas, por ejemplo)
      this.router.navigate(['/generos']);
    }, error => this.errores = parsearErroresAPI(error)); //  console.error(error));
  }


  
}
