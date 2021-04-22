import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { generoCreacionDTO, generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  modelo: generoDTO | any;
  errores: string[] = [];

  // ActivatedRoute se utiliza para poder extraer las variables de la ruta de la URL
  constructor(private router: Router, 
              private generosService: GenerosService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      this.generosService.obtenerPorId(params.id) // -> La variable de ruta, obtenerPorId
        .subscribe(genero => {
          this.modelo = genero;
        }, () => this.router.navigate(['/generos'])) // esto es por si tenemos algún error (que será un 404); genero no encontrado
    });

  }


  guardarCambios(genero: generoCreacionDTO) {
    console.log(genero);
    //..guardar los cambios (a través de un servicio (backend))
    this.generosService.editar(this.modelo.id, genero)
      .subscribe(() => {
        this.router.navigate(['/generos']);
      }, error => this.errores = parsearErroresAPI(error)) 
  }


}
