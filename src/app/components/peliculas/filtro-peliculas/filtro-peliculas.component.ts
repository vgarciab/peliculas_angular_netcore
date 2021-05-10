import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { generoDTO } from '../../generos/genero';
import { GenerosService } from '../../generos/generos.service';
import { PeliculasService } from '../peliculas.service';
import { PeliculaDTO } from '../pelicula';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private location: Location,
    private activateRoute: ActivatedRoute,
    private generosService: GenerosService,
    private peliculasService: PeliculasService) {

}


  form: FormGroup | any;
  generos: generoDTO[]= [];
  paginaActual = 1;
  cantidadElementosAMostrar = 10;
  cantidadElementos: any;

  peliculas: PeliculaDTO[] | any;
  
  
  formularioOriginal = {
    titulo:'',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  }



  ngOnInit(): void {
    this.generosService.obtenerTodos()
    .subscribe(generos => {
      this.generos = generos;

      this.form = this.formBuilder.group(this.formularioOriginal);
      this.leerValoresURL();
      this.buscarPeliculas(this.form.value);
      
      this.form.valueChanges // --> Esto devueve un Observable, al que nos podemos subscribir
            .subscribe((valores:any) => {  // va a contener los valores del formulario. Cada vez que cambia algún valor del form, el observable lo detecta y notifica.
              console.log(valores);  
              this.buscarPeliculas(valores);
              this.escribirParametrosBusquedaEnURL();
            })
        
    })

  }


  private leerValoresURL() {  // --> Esto es un Observable
    this.activateRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

      if (params.titulo) {
        objeto.titulo = params.titulo;
      }
  
      if (params.generoId) {
        objeto.generoId = Number(params.generoId);
      }
  
      if (params.proximosEstrenos) {
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
  
      if (params.enCines) {
        objeto.enCines = params.enCines;
      }
  
      this.form.patchValue(objeto);

    });
  }


  private escribirParametrosBusquedaEnURL() {
    var queryStrings = [];
    var valoresFormulario = this.form.value;

    if (valoresFormulario.titulo) {
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }

    if (valoresFormulario.generoId != '0') {
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }

    if (valoresFormulario.proximosEstrenos) {
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if (valoresFormulario.enCines) {
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));

  }

  buscarPeliculas(valores:any) {
    valores.pagina = this.paginaActual;
    valores.recordsPorPagina = this.cantidadElementosAMostrar;
     this.peliculasService.filtrar(valores).subscribe(response => {
       this.peliculas = response.body;
       this.escribirParametrosBusquedaEnURL();
       this.cantidadElementos = response.headers.get('cantidadTotalRegistros');
     })  }


  limpiar() {
    this.form.patchValue(this.formularioOriginal); // ¿Cfr. this.form.reset(); ?
  }

  paginatorUpdate(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadElementosAMostrar = datos.pageSize;
    this.buscarPeliculas(this.form.value);
  }

}
