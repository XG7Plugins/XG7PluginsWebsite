import { Component } from '@angular/core';
import {MarkdownComponent} from '../../utils/markdown/markdown.component';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  imports: [
    MarkdownComponent
  ],
  styleUrl: './terms.component.css'
})
export class TermsComponent {

}
