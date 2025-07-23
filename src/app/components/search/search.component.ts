import {Component, OnInit} from '@angular/core';
import {ModalComponent} from "../utils/modal/modal.component";
import {NgForOf, NgIf} from "@angular/common";
import {PurchasedPlugin} from '../../../assets/types/keys';
import {LangService} from '../../services/lang/lang.service';
import {UserService} from '../../services/user/user.service';
import {PluginService} from '../../services/plugin/plugin.service';
import {ImgComponent} from '../utils/img/img.component';
import {FormsModule} from '@angular/forms';
import {PluginModalComponent} from '../plugin-modal/plugin-modal.component';

@Component({
  selector: 'app-search',
  imports: [
    ModalComponent,
    NgIf,
    NgForOf,
    ImgComponent,
    FormsModule,
    PluginModalComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit   {
  isModalOpen = false;

  pesquisa: string = '';

  constructor(
    protected langService: LangService,
    protected pluginService: PluginService,
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('plugins', lang);
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  getPlugins() {
    if (this.pesquisa === "") return [];

    return this.pluginService.getPrePlugins().filter(plugin => plugin.name.toLowerCase().includes(this.pesquisa.toLowerCase()));
  }
}
