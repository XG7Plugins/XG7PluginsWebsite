import {Component, HostListener, OnInit} from '@angular/core';
import {ModalComponent} from '../utils/modal/modal.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {LangService} from '../../services/lang/lang.service';
import {UserService} from '../../services/user/user.service';
import {PluginService} from '../../services/plugin/plugin.service';
import {Plugin} from '../../../assets/types/plugin';
import {MarkdownComponent} from '../utils/markdown/markdown.component';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-plugin-modal',
  imports: [
    ModalComponent,
    NgIf,
    NgClass,
    MarkdownComponent,
    NgForOf
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
    protected cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('plugins', lang);
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

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    if (window.innerWidth > 640) {
      if (this.page == 5) {
        this.page = 0;
      }
    }
  }


}
