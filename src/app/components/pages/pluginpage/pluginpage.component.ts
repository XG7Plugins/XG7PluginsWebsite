import {Component, OnInit} from '@angular/core';
import {PluginService} from '../../../services/plugin/plugin.service';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {LangService} from '../../../services/lang/lang.service';
import {ActivatedRoute} from '@angular/router';
import {PrePlugin} from '../../../../assets/types/plugin';

@Component({
  selector: 'app-pluginpage',
  imports: [
    NgClass,
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './pluginpage.component.html',
  styleUrl: './pluginpage.component.css'
})
export class PluginpageComponent implements OnInit {

  loadedPlugins: PrePlugin[] = [];
  loading = true;

  currentPage = 1;
  maxPages = 1;

  constructor(
    private pluginsService: PluginService,
    protected langs: LangService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const lang = params['lang'];
      this.langs.setLang(lang);
      this.langs.loadTranslations('plugins', lang);

    });
    this.changePlugins(this.currentPage);

    this.maxPages = Math.ceil(this.pluginsService.getPrePlugins().length / 10);
  }

  changePlugins(page: number) {

    if (page < 1 || page > this.maxPages) return

    this.loading = true;
    this.pluginsService.getSomePrePlugins((page - 1) * 10, page * 10).subscribe(plugins => {
      console.log(plugins)
      this.loadedPlugins = plugins;
      this.loading = false;
    });

    this.currentPage = page;
  }


}
