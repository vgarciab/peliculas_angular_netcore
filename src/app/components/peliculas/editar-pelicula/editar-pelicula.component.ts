import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorPeliculaDTO } from '../../actores/actor';
import { MultipleSelectorModel } from '../../utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor(private peliculasService: PeliculasService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  modelo: PeliculaDTO | any;
  generosNoSeleccionados: MultipleSelectorModel[] = [];
  generosSeleccionados: MultipleSelectorModel[] = [];
  cinesNoSeleccionados: MultipleSelectorModel[] = [];
  cinesSeleccionados: MultipleSelectorModel[] = [];
  actoresSeleccionados: actorPeliculaDTO[] = [];



  ngOnInit(): void {
    console.log('ngOnInit INI: ');
    console.log(this.generosSeleccionados);
    this.activatedRoute.params.subscribe(params => {
      this.peliculasService.putGet(params.id) // -> La variable de ruta, obtenerPorId
        .subscribe(peliculaPutGet => {
          this.modelo = peliculaPutGet.pelicula;
          this.generosNoSeleccionados = peliculaPutGet.generosNoSeleccionados.map(genero => {
            return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
          });
          this.generosSeleccionados = peliculaPutGet.generosSeleccionados.map(genero => {
            return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
          });

          console.log('ngOnInit FIN: ');
          console.log(this.generosSeleccionados);
                
          this.cinesNoSeleccionados = peliculaPutGet.cinesNoSeleccionados.map(cines => {
            return <MultipleSelectorModel>{llave: cines.id, valor: cines.nombre}
          });
          this.cinesSeleccionados = peliculaPutGet.cinesSeleccionados.map(cines => {
            return <MultipleSelectorModel>{llave: cines.id, valor: cines.nombre}
          });

          this.actoresSeleccionados = peliculaPutGet.actores;
        });
    });

  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    // console.log(pelicula);
     // console.log('id');
     // console.log(this.modelo.id);
     console.log('guardarCambios en edita pelicula: ');
     console.log(pelicula.generosIds);

    this.peliculasService.editar(this.modelo.id, pelicula)
    .subscribe(() => this.router.navigate(['/pelicula/' + this.modelo.id]))
  }


}
