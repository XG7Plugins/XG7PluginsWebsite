import {Component, OnInit} from '@angular/core';
import {MarkdownComponent} from "../../utils/markdown/markdown.component";
import {ModalComponent} from "../../utils/modal/modal.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Category, CreatingPlugin, Plugin} from '../../../../assets/types/plugin';
import {LangService} from '../../../services/lang/lang.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-plugins',
  imports: [
    MarkdownComponent,
    ModalComponent,
    NgForOf,
    NgIf,
    FormsModule,
    NgClass
  ],
  templateUrl: './create-plugins.component.html',
  styleUrl: './create-plugins.component.css'
})
export class CreatePluginsComponent implements OnInit {

  isModalOpen = false;

  previewUrl: string | ArrayBuffer | null = "data:image/png;base64,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";

  creatingPlugin: CreatingPlugin = {
    categories: [],
    commands: undefined,
    description: undefined,
    docLink: undefined,
    downloadFile: undefined,
    githubLink: undefined,
    iconFile: undefined,
    name: undefined,
    permissions: undefined,
    price: undefined,
    slogan: undefined,
    version: undefined

  }

  categoryList = Object.entries(Category).map(([key, value]) => ({ key, value })).filter(({value}) => value !== Category.ALL);

  constructor(
    protected langService: LangService,
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('plugins', lang);
    });
  }

  openModal() {
    this.isModalOpen = true;
  }


  changeImage(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Verifica se é imagem
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          this.previewUrl = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.previewUrl = null; // ou exibir erro
      }
    }
  }

  isCategorySelected(category: Category): boolean {
    return this.creatingPlugin.categories.includes(category);
  }

  toggleCategory(category: Category): void {
    if (!this.isCategorySelected(category)) {
      this.creatingPlugin.categories.push(category);
      return
    }
    this.creatingPlugin.categories = this.creatingPlugin.categories.filter(c => c !== category);
  }

  priceChange(event: Event) {
    let input = event.target as HTMLInputElement;

    let price = Number.parseFloat(input.value);
    if (price < 0) {
      price = 0
      input.value = price.toString()
    }

    this.creatingPlugin.price = price;
  }


}
