import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  @Input() 
  contenidoMarkdown: string = '';

  @Input()  
  placeHoldertextarea: string = 'Texto';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /* Con binding de doble vía, ya no es necesario esta función: >> 
  inputTextArea(texto:string) {
    // console.log(texto);
    this.contenidoMarkdown = texto;
    this.changeMarkdown.emit(texto);
  }
  */

}
