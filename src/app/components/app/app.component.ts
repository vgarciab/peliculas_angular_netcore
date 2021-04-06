import { Component, Inject, OnInit, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Al valor que yo quiera';
  peliculasEnCines:[] | any;
  // otra manera de declarar la variable >> peliculas: {titulo:string, fechaLanzamiento: Date, precio:number}[] | any;
  // o también >> peliculas?:Array<{titulo:string, fechaLanzamiento: Date, precio:number}>;
  peliculasProximosEstrenos:[] | any;
  ocultar:boolean = false;
  

  ngOnInit(): void {
    setTimeout(() => {
      // this.peliculas = [];
      this.peliculasEnCines = [ 
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
      ];

      this.peliculasProximosEstrenos = [ 
        {
          titulo: 'Avengers: Endgame',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
        },
        {
          titulo: 'Inception',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
        },
        {
          titulo: 'Rocky',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
        }
      ]


    },500);
  }

  manejarRated(voto:number): void {
   alert(voto);
  }


  asignarTitulo(e:any) {
    this.title = e.target.value;
  }
  
}
