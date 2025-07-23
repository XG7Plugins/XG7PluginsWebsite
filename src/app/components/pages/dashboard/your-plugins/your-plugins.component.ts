import { Component } from '@angular/core';
import {DashboardFooterComponent} from '../dashboard-footer/dashboard-footer.component';
import {LangService} from '../../../../services/lang/lang.service';
import {UserService} from '../../../../services/user/user.service';
import {NgForOf, NgIf} from '@angular/common';
import {ImgComponent} from '../../../utils/img/img.component';
import {LicenceModalComponent} from '../../../licence-modal/licence-modal.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-your-plugins',
  imports: [
    DashboardFooterComponent,
    NgIf,
    NgForOf,
    ImgComponent,
    LicenceModalComponent,
    FormsModule
  ],
  templateUrl: './your-plugins.component.html',
  styleUrl: './your-plugins.component.css'
})
export class YourPluginsComponent {

  protected pesquisa: string = '';

  constructor(
    protected langService: LangService,
    protected userService: UserService
  ) {}

  getPlugins() {
    return this.userService.getPurchasedPlugins().filter(pp => pp.plugin.name.toLowerCase().includes(this.pesquisa.toLowerCase()));
  }

  getTotalPlugins() {
    return this.userService.getPurchasedPlugins();
  }
}
