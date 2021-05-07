import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorPeliculaDTO } from '../../actores/actor';
import { MultipleSelectorModel } from '../../utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup | any; 

  @Input()
  errores: string[] = [];



  @Input()
  modelo: PeliculaDTO  = null!;


  @Output()
  submitFormulario: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  // Géneros
  @Input()
  generosNoSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  generosSeleccionados: MultipleSelectorModel[] =  [];

  // Cines
  @Input()
  cinesNoSeleccionados: MultipleSelectorModel[] =  [];
  
  @Input()
  cinesSeleccionados: MultipleSelectorModel[] =  [];


  // Actores
  @Input()
  actoresSeleccionados: actorPeliculaDTO[] =  [];
  
  imagenCambiada = false;

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
      generosIds: '',
      cinesIds: '',
      actores: ''
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }

  }

  archivoSeleccionado(archivo: File) {
    this.form.get('poster').setValue(archivo);
    this.imagenCambiada = true;
  }

  cambioMarkdown(texto: string) {
    this.form.get('resumen').setValue(texto);
  }

  
  guardarCambios() {
    console.log('generos seleccionados guardar cambios');
    console.log(this.generosSeleccionados);
    // Géneros
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosIds').setValue(generosIds);

    // Cines
    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesIds').setValue(cinesIds);

    const actores = this.actoresSeleccionados.map(val => {
      return {id: val.id, personaje: val.personaje}
    });
    this.form.get('actores').setValue(actores);

    if (!this.imagenCambiada)  {
      this.form.patchValue({'poster': null});
    }

    // En el vídeo del curso, la vble 'submitFormulario' se llama 'OnSubmit' (ojo, que no es un evento, es una variable)
    this.submitFormulario.emit(this.form.value); // aquí se accede a toda la información  contenida en el formulario.
  }


}
