import {Component, HostListener, OnInit} from '@angular/core';
import {ModalComponent} from '../utils/modal/modal.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {LangService} from '../../services/lang/lang.service';
import {UserService} from '../../services/user/user.service';
import {PluginService} from '../../services/plugin/plugin.service';
import {Plugin} from '../../../assets/types/plugin';
import {MarkdownComponent} from '../utils/markdown/markdown.component';
import {StarsComponent} from '../utils/stars/stars.component';
import {StarsSelectorComponent} from '../utils/stars-selector/stars-selector.component';

@Component({
  selector: 'app-plugin-modal',
  imports: [
    ModalComponent,
    NgIf,
    NgClass,
    MarkdownComponent,
    NgForOf,
    StarsComponent,
    StarsSelectorComponent
  ],
  templateUrl: './plugin-modal.component.html',
  styleUrl: './plugin-modal.component.css'
})
export class PluginModalComponent implements OnInit {

  isModalOpen = false;
  plugin: Plugin | null = null;

  page: number = 0;

  constructor(
    protected langService: LangService,
    protected userService: UserService,
    private pluginService: PluginService,
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('header', lang);
    });
  }

  openModal(pluginID: number) {
    this.pluginService.getPlugin(pluginID).subscribe(plugin => {
      this.plugin = plugin;
    });
    this.isModalOpen = true;
  }

  setPage(number = 0) {
    this.page = number;
  }

  isSelected(selected: number) {
    return this.page == selected;
  }

  averageStars() {
    if (this.plugin == null) return 0;
    const total = this.plugin.ratings.reduce((sum, r) => sum + r.rating, 0);
    return this.plugin?.ratings.length > 0 ? total / this.plugin.ratings.length : 0;
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    if (window.innerWidth > 640) {
      if (this.page == 5) {
        this.page = 0;
      }
    }
  }


}
