import {Component, OnInit, ViewChild} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {LangService} from '../../../services/lang/lang.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ImgComponent} from '../../utils/img/img.component';
import {PluginService} from '../../../services/plugin/plugin.service';
import {PrePlugin} from '../../../../assets/types/plugin';
import {UserService} from '../../../services/user/user.service';
import {PluginModalComponent} from '../../plugin-modal/plugin-modal.component';
import {CartService} from '../../../services/cart/cart.service';

@Component({
  selector: 'app-mainpage',
  imports: [
    ImgComponent,
    RouterLink,
    NgForOf,
    NgIf,
    NgClass,
    PluginModalComponent
  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {

  loadedPlugins: PrePlugin[] = [];

  loadingPlugins = true

  @ViewChild('pluginModal') pluginModal!: PluginModalComponent;


  constructor(
    protected langService: LangService,
    private route: ActivatedRoute,
    private pluginsService: PluginService,
    protected userService: UserService,
    protected cartService: CartService,
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

    this.pluginsService.getSomePrePlugins(0,5).subscribe(plugins => {
      this.loadedPlugins = plugins;
      this.loadingPlugins = false;
    });
  }

}
