import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO | undefined;


  ngOnInit(): void {
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
    //..guardar los cambios (a través de un servicio (backend))
    // guardarCambios 
}


}
