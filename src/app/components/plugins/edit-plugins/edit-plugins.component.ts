import {Component, HostListener, OnInit} from '@angular/core';
import {MarkdownComponent} from "../../utils/markdown/markdown.component";
import {ModalComponent} from "../../utils/modal/modal.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Category, CreatingPlugin, EditingPlugin, Plugin} from '../../../../assets/types/plugin';
import {LangService} from '../../../services/lang/lang.service';
import {UserService} from '../../../services/user/user.service';
import {PluginService} from '../../../services/plugin/plugin.service';
import {CartService} from '../../../services/cart/cart.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-plugins',
  imports: [
    MarkdownComponent,
    ModalComponent,
    NgForOf,
    NgIf,
    FormsModule,
    NgClass
  ],
  templateUrl: './edit-plugins.component.html',
  styleUrl: './edit-plugins.component.css'
})
export class EditPluginsComponent implements OnInit {

  isModalOpen = false;

  editingPlugin: EditingPlugin | undefined = undefined;

  previewUrl: string | ArrayBuffer | null = "";


  categoryList = Object.entries(Category).map(([key, value]) => ({ key, value })).filter(({value}) => value !== Category.ALL);

  constructor(
    protected langService: LangService,
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('plugins', lang);
    });
  }

  openModal(plugin: Plugin) {
    this.isModalOpen = true;

    this.editingPlugin = {
      categories: plugin.categories,
      commands: plugin.commands,
      description: plugin.description,
      docLink: plugin.docLink,
      githubLink: plugin.githubLink,
      iconFile: undefined,
      name: plugin.name,
      permissions: plugin.permissions,
      price: plugin.price,
      slogan: plugin.slogan,
    }

    this.previewUrl = plugin.iconUrl

  }


  changeImage(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          this.previewUrl = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.previewUrl = null;
      }
    }
  }

  isCategorySelected(category: Category): boolean {
    return this.editingPlugin !== undefined && this.editingPlugin.categories.includes(category);
  }

  toggleCategory(category: Category): void {
    if (this.editingPlugin === undefined) return;
    if (!this.isCategorySelected(category)) {
      this.editingPlugin.categories.push(category);
      return
    }
    this.editingPlugin.categories = this.editingPlugin.categories.filter(c => c !== category);
  }

  priceChange(event: Event) {
    if (this.editingPlugin === undefined) return;

    let input = event.target as HTMLInputElement;

    let price = Number.parseFloat(input.value);
    if (price < 0) {
      price = 0
      input.value = price.toString()
    }

    this.editingPlugin.price = price;
  }


}
