import { Component, Input, OnInit } from '@angular/core';
import { MultipleSelectorModel } from './MultipleSelectorModel';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit {

  constructor() { }

  @Input()
  Seleccionados: MultipleSelectorModel[] = [];

  @Input()
  NoSeleccionados: MultipleSelectorModel[] = [];



  ngOnInit(): void {
  }

  seleccionarTodo() {
    // el operador spread genera una lista de valores a partir de un array.
    this.Seleccionados.push(...this.NoSeleccionados);
    // this.NoSeleccionados = []; >> es un bug, ya que perdemos la referencia que estabamos haciendo desde 
    // el componente padre (cfr. Preguntas y respuestas del curso: 'Selección de géneros y cines no se realiza correctamente' en clase 64)
    this.NoSeleccionados.length = 0;
  }

  deseleccionarTodo() {
    // el operador spread genera una lista de valores a partir de un array.
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados = []; // >> es un bug, ya que perdemos la referencia que estabamos haciendo desde 
    // el componente padre (cfr. Preguntas y respuestas del curso: 'Selección de géneros y cines no se realiza correctamente' en clase 64)
    this.Seleccionados.length = 0;

  }

  seleccionar(item: MultipleSelectorModel, index: number) {
    this.Seleccionados.push(item);
    this.NoSeleccionados.splice(index, 1);
  }
  

  deseleccionar(item: MultipleSelectorModel, index: number) {
    this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index, 1);
    
  }



}
