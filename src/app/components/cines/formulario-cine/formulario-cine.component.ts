import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada } from '../../utilidades/mapa/coordenada';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})

export class FormularioCineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup | any; 
  @Input()
  modelo: cineCreacionDTO | any;

  @Output()
  submitFormulario: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coordenadaInicial: Coordenada[] = [];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        { // el valor por defecto del campo
          validators: [Validators.required], 
        }
      ],
      latitud: [
        '', 
        { // el valor por defecto del campo
          validators: [Validators.required], 
        }
      ],
      longitud: [
        '', 
        { // el valor por defecto del campo
          validators: [Validators.required], 
        }
      ]

    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({ latitud: this.modelo.latitud, longitud: this.modelo.longitud});
    }

  }


  coordenadaSeleccionada(coordenada: Coordenada) {
   // console.log(coordenada);
    this.form.patchValue(coordenada);
  }

  guardarCambios() { // este método se llama onSubmit() en el código fuente de Felipe Gavilán
    this.submitFormulario.emit(this.form.value); // aquí se accede a toda la información  contenida en el formulario.
  }
  

}
