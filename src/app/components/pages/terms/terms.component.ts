import { Component } from '@angular/core';
import {MarkdownComponent} from '../../utils/markdown/markdown.component';
import {LangService} from '../../../services/lang/lang.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  imports: [
    MarkdownComponent
  ],
  styleUrl: './terms.component.css'
})
export class TermsComponent {

  constructor(
    protected langService: LangService,
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations(lang);
    });
  }

}
