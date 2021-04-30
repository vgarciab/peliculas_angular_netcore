import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { cineCreacionDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent {

  constructor(private router: Router, private cinesService: CinesService) { }

  errores: string[] = [];


  guardarCambios(cine: cineCreacionDTO) {
    this.cinesService.crear(cine).subscribe(() => {
        this.router.navigate(['/cines']);
      }, error => this.errores = parsearErroresAPI(error)) 
  }




}
