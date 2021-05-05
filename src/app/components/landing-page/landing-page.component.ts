import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) {}
  

  peliculasEnCines: PeliculaDTO[] | any;
  // otra manera de declarar la variable >> peliculas: {titulo:string, fechaLanzamiento: Date, precio:number}[] | any;
  // o también >> peliculas?:Array<{titulo:string, fechaLanzamiento: Date, precio:number}>;
  peliculasProximosEstrenos: PeliculaDTO[] | any;
  

  ngOnInit(): void {
    this.peliculasService.obtenerLandingPage().subscribe(landingPage => {
      this.peliculasEnCines = landingPage.enCines;
      this.peliculasProximosEstrenos = landingPage.proximosEstremos;
    })
  }


}
