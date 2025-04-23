import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ImgComponent} from '../utils/img/img.component';
import {LangService} from '../../services/lang/lang.service';
import {UserService} from '../../services/user/user.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  imports: [
    NgOptimizedImage,
    ImgComponent,
    RouterLink
  ],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css'
})
export class DashboardSidebarComponent {
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
