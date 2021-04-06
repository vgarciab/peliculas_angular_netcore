import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  // se configura el FormGroup utilizando el FormBuilder
  form: FormGroup | any; 

  // Los Servicios se inyectan a través del constructor de la Class
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }]  // el valor por defecto del campo
    });
  }


  guardarCambios() {
    //..guardar los cambios (a través de un servicio (backend))
    // guardarCambios 

    // y volver a una dirección concreta (portada de películas, por ejemplo)
    this.router.navigate(['/generos']);
  }


  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if (campo.hasError('required')) {
      return 'El campo Nombre es requerido';
    }

    if (campo.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres';
    }
    
    return '';
  }

}
