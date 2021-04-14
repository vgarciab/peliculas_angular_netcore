import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { peliculaCreacionDTO, peliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup | any; 

  @Input()
  modelo: peliculaDTO | any;


  @Output()
  submitFormulario: EventEmitter<peliculaCreacionDTO> = new EventEmitter<peliculaCreacionDTO>();


  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      titulo: [
        '',  // el valor por defecto del campo
        {
          validators: [Validators.required]
        }
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: ''
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }

  }

  archivoSeleccionado(archivo: File) {
    this.form.get('poster').setValue(archivo);
  }

  cambioMarkdown(texto: string) {
    this.form.get('resumen').setValue(texto);
  }

  
  guardarCambios() {
    // En el vídeo del curso, la vble 'submitFormulario' se llama 'OnSubmit' (ojo, que no es un evento, es una variable)
    this.submitFormulario.emit(this.form.value); // aquí se accede a toda la información  contenida en el formulario.
  }


}
