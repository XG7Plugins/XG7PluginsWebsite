import {Component, OnInit} from '@angular/core';
import {Category, EditingPlugin, Plugin, PostUpdate} from '../../../../assets/types/plugin';
import {LangService} from '../../../services/lang/lang.service';
import {ModalComponent} from '../../utils/modal/modal.component';
import {FormsModule} from '@angular/forms';
import {MarkdownComponent} from '../../utils/markdown/markdown.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-update-plugins',
  imports: [
    ModalComponent,
    FormsModule,
    MarkdownComponent,
    NgIf
  ],
  templateUrl: './update-plugins.component.html',
  styleUrl: './update-plugins.component.css'
})
export class UpdatePluginsComponent implements OnInit {

  isModalOpen = false;

  updatingPlugin: PostUpdate = {
    description: undefined,
    downloadFile: undefined,
    title: undefined,
    version: undefined
  };

  plugin: Plugin | undefined = undefined;


  categoryList = Object.entries(Category).map(([key, value]) => ({
    key,
    value
  })).filter(({value}) => value !== Category.ALL);

  constructor(
    protected langService: LangService,
  ) {
  }

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('plugins', lang);
    });
  }

  openModal(plugin: Plugin) {
    this.isModalOpen = true;

    this.plugin = plugin

  }

}
