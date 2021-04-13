import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  guardarCambios(actor: cineCreacionDTO) {
    console.log(actor);
    //..guardar los cambios (a través de un servicio (backend))
    // guardarCambios 

    
    // y volver a una dirección concreta (portada de películas, por ejemplo)
    // this.router.navigate(['/cines']);
  }




}
