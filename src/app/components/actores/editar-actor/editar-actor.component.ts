import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { actorCreacionDTO, actorDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {


  // Para poder leer la variable de ruta (p.e 'id' desde nuestro Componenente,editar-actor, en este caso >>>>
  // ActivatedRoute es un servicio nativo (Observable) con el que podemo obtener información acerca de la ruta en la cuál se encuentra el usuario.
  // Entonces, mediante ese servicio obtendremos el valor de la variable ('id', en el ejemplo, referido a actores/editar/:id)
  // ActivatedRoute se utiliza para poder extraer las variables de la ruta de la URL
  constructor(private router: Router, 
    private actoresService: ActoresService,
    private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO | any;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.actoresService.obtenerPorId(params.id) // -> La variable de ruta, obtenerPorId
        .subscribe(actor => {
          this.modelo = actor;
        }, () => this.router.navigate(['/actores'])) // esto es por si tenemos algún error (que será un 404); genero no encontrado
    });
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
    //..guardar los cambios (a través de un servicio (backend))
    this.actoresService.editar(this.modelo.id, actor)
      .subscribe(() => {
        this.router.navigate(['/actores']);
      }, error => this.errores = parsearErroresAPI(error)) 
  }


}
