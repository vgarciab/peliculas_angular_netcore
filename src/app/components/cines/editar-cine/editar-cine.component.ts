import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { cineCreacionDTO, cineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private router: Router, 
    private cinesService: CinesService,
    private activatedRoute: ActivatedRoute) { }

  modelo: cineDTO | any;;
  errores: string[] = [];


  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      this.cinesService.obtenerPorId(params.id) // -> La variable de ruta, obtenerPorId
        .subscribe(cine => {
          this.modelo = cine;
        }, () => this.router.navigate(['/cines'])) // esto es por si tenemos algún error (que será un 404); genero no encontrado
    });

  }


  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
    //..guardar los cambios (a través de un servicio (backend))
    this.cinesService.editar(this.modelo.id, cine)
      .subscribe(() => {
        this.router.navigate(['/cines']);
      }, error => this.errores = parsearErroresAPI(error)) 
  }


}
