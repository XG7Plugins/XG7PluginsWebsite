import {Component, Input} from '@angular/core';
import {marked} from 'marked';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-markdown',
  imports: [],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent {
  @Input() text: string = '';
  @Input() styles: string = '';
  @Input() classes: string = '';
  @Input() content!: string | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  convert(): SafeHtml {
    if (!this.text) return '';
    const html = marked.parse(this.text); // importante: usar parse()
    return this.sanitizer.bypassSecurityTrustHtml(<string>html);
  }
}
