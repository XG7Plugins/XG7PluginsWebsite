import { Component } from '@angular/core';
import {DashboardSidebarComponent} from '../../dashboard-sidebar/dashboard-sidebar.component';
import {LangService} from '../../../services/lang/lang.service';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardSidebarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(
    protected langService: LangService,
    protected userService: UserService
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('dashboard', lang);
    });
  }
}
