import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {LangService} from '../../../services/lang/lang.service';
import {ActivatedRoute} from '@angular/router';
import {ImgComponent} from '../../utils/img/img.component';
import {PluginService} from '../../../services/plugin/plugin.service';
import {Category, formatCategories, LoadedPlugin} from '../../../../assets/types/loadedPlugin';
import {PluginModalComponent} from '../../plugins/plugin-modal/plugin-modal.component';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-mainpage',
  imports: [
    ImgComponent,
    NgForOf,
    NgIf,
    NgClass,
    PluginModalComponent
  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit, AfterViewInit {

  @ViewChild('observedElement') observedElement!: ElementRef;

  loadedPlugins: LoadedPlugin[] = [];

  loadingPlugins = true

  currentPage = 1;
  maxPages = 1;

  pluginForPage = 10;

  categoryList = Object.entries(Category).map(([key, value]) => ({ key, value }));

  categorySelected = 'ALL';

  filter: "RECENT" | "DOWNLOADED" | "NOTHING" = 'NOTHING';

  @ViewChild('pluginModal') pluginModal!: PluginModalComponent;


  constructor(
    protected langService: LangService,
    private route: ActivatedRoute,
    private pluginsService: PluginService,
    private sanitizer: DomSanitizer
  ) {}

  scrollToPlugins(event: MouseEvent) {
    event.preventDefault()
    document.querySelector('#plugins')?.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const lang = params['lang'];
      this.langService.setLang(lang);
      this.langService.loadTranslations(lang)
    });

    this.pluginsService.loadPlugins().then(() => {
      this.loadingPlugins = false;
      this.loadedPlugins = this.pluginsService.getPlugins();
    })
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('anm');
          entry.target.classList.add('opacity-100');
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(this.observedElement.nativeElement);
  }

  changePlugins(page: number) {


    if (page < 1 || page > this.maxPages) return

    this.loadingPlugins = true;
    this.pluginsService.getSomePlugins((page - 1) * this.pluginForPage, page * this.pluginForPage).subscribe(plugins => {
      this.loadedPlugins = plugins;
      this.loadingPlugins = false;
    });

    this.currentPage = page;
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    const pluginsForPageBefore = this.pluginForPage;
    this.setPluginsForPage(window.innerWidth);
    if (pluginsForPageBefore !== this.pluginForPage) {
      this.changePlugins(this.currentPage);
      this.maxPages = Math.ceil(this.pluginsService.getPlugins().length / this.pluginForPage);

    }

  }


  setPluginsForPage(width: number) {
    if (width < 640) {
      this.pluginForPage = 3;
    } else if (width < 1024) {
      this.pluginForPage = 4;
    } else if (width < 1280) {
      this.pluginForPage = 9;
    } else {
      this.pluginForPage = 8;
    }

    if (this.currentPage > this.maxPages) {
      this.currentPage = this.maxPages;
    }
  }

  getPlugins () {

    let listPlugins = this.categorySelected === 'ALL' ? this.loadedPlugins : this.loadedPlugins.filter(pl => pl.categories.includes(this.categorySelected as Category));

    switch (this.filter) {
      case 'RECENT':
        listPlugins = listPlugins.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());
        break;

      case 'DOWNLOADED':
        listPlugins = listPlugins.sort((a, b) => b.downloads - a.downloads);
        break;

      case 'NOTHING':
      default:
        break;
    }

    return listPlugins;
  }

  getSafeHtml(key: string): SafeHtml {
    const html = this.langService.getTranslation(key);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  protected readonly formatCategories = formatCategories;
}
