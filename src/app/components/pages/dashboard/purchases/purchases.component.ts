import { Component } from '@angular/core';
import {LangService} from '../../../../services/lang/lang.service';
import {UserService} from '../../../../services/user/user.service';
import {ImgComponent} from '../../../utils/img/img.component';
import {DashboardFooterComponent} from '../dashboard-footer/dashboard-footer.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-purchases',
  imports: [
    DashboardFooterComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.css'
})
export class PurchasesComponent {

  constructor(
    protected langService: LangService,
    protected userService: UserService
  ) {}

  getPurchases() {
    return this.userService.getPurchases();
  }

}
