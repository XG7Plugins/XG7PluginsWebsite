import { Component } from '@angular/core';
import {DashboardFooterComponent} from "../dashboard-footer/dashboard-footer.component";
import {NgForOf, NgIf} from "@angular/common";
import {LangService} from '../../../../services/lang/lang.service';
import {UserService} from '../../../../services/user/user.service';

@Component({
  selector: 'app-sells',
    imports: [
        DashboardFooterComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './sells.component.html',
  styleUrl: './sells.component.css'
})
export class SellsComponent {
  constructor(
    protected langService: LangService,
    protected userService: UserService
  ) {}

  getPurchases() {
    return this.userService.getPurchases();
  }
}
