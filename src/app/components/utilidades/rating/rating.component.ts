import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { SeguridadService } from '../../seguridad/seguridad.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  ratingAnterior:number = this.ratingSeleccionado;

  maximoRatingArr:any[] = [];
  votado: boolean = false;

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
    this.ratingAnterior = this.ratingSeleccionado; // >> código añadido sobre pregunta en clase 132: "Mantener puntuación tras pasar por encima de ella"
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }


  manejarMouseEnter(index:number): void {
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave() {
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    } else {
      this.ratingSeleccionado = 0;
    }
  }

  rate(index:number): void {
    if (this.seguridadService.estaLogueado()) {
      this.ratingSeleccionado = index + 1;
      this.votado = true;
      this.ratingAnterior = this.ratingSeleccionado;
      this.rated.emit(this.ratingSeleccionado);
    } else {
      Swal.fire('Debe Loguearse', "No puede realizar esta acción", "error");
    }
  }


}
