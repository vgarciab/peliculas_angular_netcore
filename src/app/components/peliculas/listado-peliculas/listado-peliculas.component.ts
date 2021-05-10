import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  // this.peliculas = [];
  @Input() 
  peliculas: PeliculaDTO[] | any;

  @Output()
  borrado: EventEmitter<void> = new EventEmitter<void>(); 

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {

  }


  borrar(peliculaId: number): void {
    this.peliculasService.borrar(peliculaId)
      .subscribe(() => this.borrado.emit());  // Con 'emit() avisamos al componente Padre (landing-page.component) del borrado
  }

}
