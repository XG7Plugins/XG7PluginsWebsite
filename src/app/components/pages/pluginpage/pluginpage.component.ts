import {Component, HostListener, OnInit} from '@angular/core';
import {PluginService} from '../../../services/plugin/plugin.service';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {LangService} from '../../../services/lang/lang.service';
import {ActivatedRoute} from '@angular/router';
import {PrePlugin} from '../../../../assets/types/plugin';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-pluginpage',
  imports: [
    NgClass,
    NgForOf,
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

  pluginForPage = 10;

  constructor(
    private pluginsService: PluginService,
    protected langs: LangService,
    private route: ActivatedRoute,
    protected userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const lang = params['lang'];
      this.langs.setLang(lang);
      this.langs.loadTranslations('plugins', lang);

    });

    this.setPluginsForPage(window.innerWidth);
    this.changePlugins(this.currentPage);


  }

  changePlugins(page: number) {


    if (page < 1 || page > this.maxPages) return

    this.loading = true;
    this.pluginsService.getSomePrePlugins((page - 1) * this.pluginForPage, page * this.pluginForPage).subscribe(plugins => {
      this.loadedPlugins = plugins;
      this.loading = false;
    });

    this.currentPage = page;
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    const pluginsForPageBefore = this.pluginForPage;
    this.setPluginsForPage(window.innerWidth);
    if (pluginsForPageBefore !== this.pluginForPage) {
      this.changePlugins(this.currentPage);
      this.maxPages = Math.ceil(this.pluginsService.getPrePlugins().length / this.pluginForPage);

    }

  }


  setPluginsForPage(width: number) {
    if (width < 640) {
      this.pluginForPage = 3;
    } else if (width < 1024) {
      this.pluginForPage = 6;
    }else if (width < 1334) {
      this.pluginForPage = 9;
    } else if (width < 1660) {
      this.pluginForPage = 8;
    } else {
      this.pluginForPage = 10;
    }

    if (this.currentPage > this.maxPages) {
      this.currentPage = this.maxPages;
    }
  }


}
