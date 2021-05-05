import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  // this.peliculas = [];
  @Input() 
  peliculas: PeliculaDTO[] | any;

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  remover(indicePelicula: number) {
    this.peliculas.splice(indicePelicula, 1);
  }

}
