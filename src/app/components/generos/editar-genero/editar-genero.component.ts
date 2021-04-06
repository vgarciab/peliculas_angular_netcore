import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  modelo: generoCreacionDTO = {nombre: 'Drama'};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  guardarCambios(genero: generoCreacionDTO) {
    console.log(genero);
    //..guardar los cambios (a través de un servicio (backend))
    // guardarCambios 

    
    // y volver a una dirección concreta (portada de películas, por ejemplo)
    this.router.navigate(['/generos']);
  }


}
