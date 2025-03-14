import {Component, Input} from '@angular/core';
import {marked} from 'marked';

@Component({
  selector: 'app-markdown',
  imports: [],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent {
  @Input() text: string = '';

  convert() {
    return marked(this.text);
  }
}
