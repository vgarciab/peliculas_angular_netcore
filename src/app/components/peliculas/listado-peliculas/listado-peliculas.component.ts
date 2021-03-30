import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  // this.peliculas = [];
  @Input() 
  peliculas: any;


  constructor() { 
    
  }

  ngOnInit(): void {

  }

  remover(indicePelicula: number) {
    this.peliculas.splice(indicePelicula, 1);
  }

}
