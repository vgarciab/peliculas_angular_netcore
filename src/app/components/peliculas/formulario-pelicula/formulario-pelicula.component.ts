import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from '../../utilidades/selector-multiple/MultipleSelectorModel';
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

  // Géneros
  generosNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Acción'},
    {llave: 3, valor: 'Comedia'},
  ];

  generosSeleccionados: MultipleSelectorModel[] = [];

  // Cines
  cinesNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Sambil'},
    {llave: 2, valor: 'Ágora'},
    {llave: 3, valor: 'Acrópilis'},
  ];

  cinesSeleccionados: MultipleSelectorModel[] = [];


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
      poster: '',
      generosId: '',
      cinesId: ''
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
    console.log(this.generosSeleccionados);
    // Géneros
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId').setValue(generosIds);

    // Cines
    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId').setValue(cinesIds);

    // En el vídeo del curso, la vble 'submitFormulario' se llama 'OnSubmit' (ojo, que no es un evento, es una variable)
    this.submitFormulario.emit(this.form.value); // aquí se accede a toda la información  contenida en el formulario.
  }


}
