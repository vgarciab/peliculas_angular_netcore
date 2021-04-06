import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id); // -> La variable de ruta, id
    });
  }

}
