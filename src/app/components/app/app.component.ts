import { Component, Inject, OnInit, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'front-end';

  peliculas?:Array<{titulo:string, fechaLanzamiento: Date, precio:number}>;

  ngOnInit(): void {
    setTimeout(() => {
      // this.peliculas = [];
      this.peliculas = [ 
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
        },

        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
        }
      ]
    },2000);
  }
  
}
