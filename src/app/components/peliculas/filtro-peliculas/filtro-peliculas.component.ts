import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  form: FormGroup | any;
  generos = [
    {id: 1, nombre: 'Drama'},
    {id: 2, nombre: 'Acción'},
    {id: 3, nombre: 'Comedia'},
  ];

  peliculas = [
    {titulo: 'Spider-Man: Far From Home', enCines: false, proximosEstrenos: true, generos: [1,2], poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {titulo: 'Moana', enCines: true, proximosEstrenos: false, generos: [3], poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {titulo: 'Inception', enCines: false, proximosEstrenos: false, generos: [1,3], poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
  ]

  peliculasOriginal = this.peliculas;
  
  formularioOriginal = {
    titulo:'',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    
    this.form.valueChanges // --> Esto devueve un Observable, al que nos podemos subscribir
          .subscribe((valores:any) => {  // va a contener los valores del formulario. Cada vez que cambia algún valor del form, el observable lo detecta y notifica.
            console.log(valores);  
            this.peliculas = this.peliculasOriginal;
            this.buscarPeliculas(valores);
          })
  }


  buscarPeliculas(valores:any) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    if (valores.enCines) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }


  limpiar() {
    this.form.patchValue(this.formularioOriginal); // ¿Cfr. this.form.reset(); ?
  }

}
