import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {LangService} from '../../../services/lang/lang.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ImgComponent} from '../../utils/img/img.component';
import {PluginService} from '../../../services/plugin/plugin.service';
import {PrePlugin} from '../../../services/plugin/plugin';

@Component({
  selector: 'app-mainpage',
  imports: [
    NgOptimizedImage,
    ImgComponent,
    RouterLink,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {

  loadedPlugins: PrePlugin[] = [];

  loadingPlugins = true

  constructor(
    protected langService: LangService,
    private route: ActivatedRoute,
    private pluginsService: PluginService
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

    this.pluginsService.getSomePrePlugins(5).subscribe(plugins => {
      this.loadedPlugins = plugins;
      this.loadingPlugins = false;
    });
  }

}
