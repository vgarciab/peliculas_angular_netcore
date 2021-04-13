import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }

  modelo: cineDTO = {nombre: 'Sambil'};


  ngOnInit(): void {
  }


  guardarCambios(actor: cineCreacionDTO) {
    console.log(actor);
    //..guardar los cambios (a través de un servicio (backend))
    // guardarCambios 
}


}
