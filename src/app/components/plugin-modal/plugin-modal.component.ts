import {Component, OnInit} from '@angular/core';
import {ModalComponent} from '../utils/modal/modal.component';
import {ImgComponent} from '../utils/img/img.component';
import {NgClass, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {LangService} from '../../services/lang/lang.service';
import {UserService} from '../../services/user/user.service';
import {PluginService} from '../../services/plugin/plugin.service';
import {PrePlugin, Plugin} from '../../../assets/types/plugin';
import {MarkdownComponent} from '../utils/markdown/markdown.component';

@Component({
  selector: 'app-plugin-modal',
  imports: [
    ModalComponent,
    ImgComponent,
    NgIf,
    RouterLink,
    NgClass,
    MarkdownComponent
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

  closeModal() {
    this.isModalOpen = false;
    this.plugin = null;
  }

  setPage(number = 0) {
    this.page = number;
  }

  isSelected(selected: number) {
    return this.page == selected;
  }


}
