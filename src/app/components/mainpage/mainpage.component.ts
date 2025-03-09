import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {LangService} from '../../services/lang/lang.service';
import {ActivatedRoute} from '@angular/router';
import {ImgComponent} from '../utils/img/img.component';

@Component({
  selector: 'app-mainpage',
  imports: [
    NgOptimizedImage,
    ImgComponent
  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {

  constructor(
    protected langService: LangService,
    private route: ActivatedRoute
  ) {}

  scrollToPlugins(event: MouseEvent) {
    event.preventDefault()
    document.querySelector('#plugins')?.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const lang = params['lang'];
      this.langService.setLang(lang);
      this.langService.loadTranslations("landingpage", lang)
    });
  }

}
