import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }

  // Un FormControl nos permite manejar un campo de un formulario de manera individual (en lugar de utilizar un FormGroup)
  control: FormControl = new FormControl();
  actores = [
    {nombre: 'Tom Holland', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'},
    {nombre: 'Tom Hanks', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg'},
    {nombre: 'Samuel L. Jackson', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg'},
  ]

  actoresOriginal = this.actores;
  actoresSeleccionados: any[] = []; // 'Tipado con 'any' porque si no, más abajo, en push(...), error:Argument of type 'any' is not assignable to parameter of type 'never' 
  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any> | any;

  ngOnInit(): void {
    // valueChanges es un Observable
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    });
  }




  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }


  eliminar(actor: any) {
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre = actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

}
