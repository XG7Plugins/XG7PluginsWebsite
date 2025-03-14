import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {LangService} from '../../services/lang/lang.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    RouterLink
  ],
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor(
    protected langService: LangService,
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('footer', lang);
    });
  }

}
