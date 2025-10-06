import {Component, HostListener, OnInit} from '@angular/core';
import {ModalComponent} from '../../utils/modal/modal.component';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {LangService} from '../../../services/lang/lang.service';
import {PluginService} from '../../../services/plugin/plugin.service';
import {formatCategories, LoadedPlugin} from '../../../../assets/types/loadedPlugin';
import {MarkdownComponent} from '../../utils/markdown/markdown.component';

@Component({
  selector: 'app-plugin-modal',
  imports: [
    ModalComponent,
    NgIf,
    NgClass,
    MarkdownComponent,
    NgForOf,
    DatePipe
  ],
  templateUrl: './plugin-modal.component.html',
  styleUrl: './plugin-modal.component.css'
})
export class PluginModalComponent implements OnInit {

  isModalOpen = false;
  plugin: LoadedPlugin | null = null;

  page: number = 0;

  constructor(
    protected langService: LangService,
    private pluginService: PluginService,
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


  protected readonly formatCategories = formatCategories;
}
