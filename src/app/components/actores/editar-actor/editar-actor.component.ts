import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {


  // Para poder leer la variable de ruta (p.e 'id' desde nuestro Componenente,editar-actor, en este caso >>>>
  // ActivatedRoute es un servicio nativo (Observable) con el que podemo obtener información acerca de la ruta en la cuál se encuentra el usuario.
  // Entonces, mediante ese servicio obtendremos el valor de la variable ('id', en el ejemplo, referido a actores/editar/:id)
  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = {nombre: 'Víctor', fechaNacimiento: new Date(), foto: 'https://m.media-amazon.com/images/M/MV5BMjE3ODgyNTI4Nl5BMl5BanBnXkFtZTgwMTIyNTA2MzI@._V1_UX99_CR0,0,99,99_AL_.jpg'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id); // -> La variable de ruta, id
    });
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
    // guardarCambios 

    
    // y volver a una dirección concreta (portada de películas, por ejemplo)
    // this.router.navigate(['/generos']);
  }


}
