import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private generosService: GenerosService) { }

  generos: generoDTO[] = [];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros: number | undefined;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;


  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }


  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this.generosService.obtenerPaginado(pagina, cantidadElementosAMostrar).subscribe( 
      (respuesta: HttpResponse<generoDTO[]>) => {
        this.generos = <any>respuesta.body;
        // console.log(respuesta.headers.get("cantidadTotalRegistros"));
        this.cantidadTotalRegistros = <any>respuesta.headers.get("cantidadTotalRegistros");
      }, error => console.error(error)
    );
  }


  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number) {
    this.generosService.borrar(id)
      .subscribe(() => {
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
      }, error => console.log(error));
  }

}
