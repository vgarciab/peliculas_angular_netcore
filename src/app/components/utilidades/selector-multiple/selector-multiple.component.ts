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
    this.NoSeleccionados = [];
  }

  deseleccionarTodo() {
    // el operador spread genera una lista de valores a partir de un array.
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados = [];
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
