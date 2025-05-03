import {Component, OnInit} from '@angular/core';
import {DashboardSidebarComponent} from '../../dashboard-sidebar/dashboard-sidebar.component';
import {LangService} from '../../../services/lang/lang.service';
import {UserService} from '../../../services/user/user.service';
import {HttpClient} from '@angular/common/http';
import {Router, RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../footer/footer.component';
import {DashboardFooterComponent} from './dashboard-footer/dashboard-footer.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardSidebarComponent,
    RouterOutlet,
    DashboardFooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(
    protected langService: LangService,
    private userService: UserService,
    private httpClient: HttpClient,
    private router: Router,
  ) {
  }

  ngOnInit(): void {

    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('dashboard', lang);
    })

    if (!this.userService.isValid()) {
      this.router.navigate([`/${this.langService.getLang()}/auth/login`]);
    }

  }
}
