import { Component } from '@angular/core';
import {DashboardFooterComponent} from '../dashboard-footer/dashboard-footer.component';
import {LangService} from '../../../../services/lang/lang.service';
import {UserService} from '../../../../services/user/user.service';
import {NgForOf, NgIf} from '@angular/common';
import {ImgComponent} from '../../../utils/img/img.component';

@Component({
  selector: 'app-your-plugins',
  imports: [
    DashboardFooterComponent,
    NgIf,
    NgForOf,
    ImgComponent
  ],
  templateUrl: './your-plugins.component.html',
  styleUrl: './your-plugins.component.css'
})
export class YourPluginsComponent {

  constructor(
    protected langService: LangService,
    protected userService: UserService
  ) {}

  getPlugins() {
    return this.userService.getPurchasedPlugins()
  }
}
