import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
    //..guardar los cambios (a través de un servicio (backend))
    // guardarCambios 

    
    // y volver a una dirección concreta (portada de películas, por ejemplo)
    // this.router.navigate(['/generos']);
  }



}
