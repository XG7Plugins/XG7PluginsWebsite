import {Component, HostListener, OnInit} from '@angular/core';
import {LangService} from '../../services/lang/lang.service';
import {UserService} from '../../services/user/user.service';
import {PluginService} from '../../services/plugin/plugin.service';
import {CartService} from '../../services/cart/cart.service';
import {PurchasedPlugin} from '../../../assets/types/keys';
import {ModalComponent} from '../utils/modal/modal.component';
import {NgForOf, NgIf} from '@angular/common';
import {ImgComponent} from '../utils/img/img.component';

@Component({
  selector: 'app-licence-modal',
  imports: [
    ModalComponent,
    NgIf,
    ImgComponent,
    NgForOf
  ],
  templateUrl: './licence-modal.component.html',
  styleUrl: './licence-modal.component.css'
})
export class LicenceModalComponent implements OnInit   {
  isModalOpen = false;
  pp: PurchasedPlugin | null = null;

  constructor(
    protected langService: LangService,
    protected userService: UserService,
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('plugins', lang);
    });
  }

  openModal(plugin: PurchasedPlugin) {
    this.pp = plugin;
    this.isModalOpen = true;
  }
}
