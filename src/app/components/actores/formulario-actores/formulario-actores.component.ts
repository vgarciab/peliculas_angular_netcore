import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  // se configura el FormGroup utilizando el FormBuilder
  form: FormGroup | any; 


  @Input()
  modelo: actorCreacionDTO | any;
  @Output()
  submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { // el valor por defecto del campo
        validators: [Validators.required],
      }],
      fechaNacimiento: '',
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }

  }

  guardarCambios() { // este método se llama onSubmit() en el código fuente de Felipe Gavilán
    this.submit.emit(this.form.value); // aquí se accede a toda la información  contenida en el formulario.
  }


}
