import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  contenidoMarkdown: string = '';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  inputTextArea(texto:string) {
    // console.log(texto);
    this.contenidoMarkdown = texto;
    this.changeMarkdown.emit(texto);
  }

}
