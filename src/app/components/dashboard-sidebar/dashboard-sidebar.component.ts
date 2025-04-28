import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ImgComponent} from '../utils/img/img.component';
import {LangService} from '../../services/lang/lang.service';
import {UserService} from '../../services/user/user.service';
import {RouterLink} from '@angular/router';
import {Role} from '../../services/user/user';

@Component({
  selector: 'app-dashboard-sidebar',
  imports: [
    NgOptimizedImage,
    ImgComponent,
    RouterLink,
    NgIf
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

  protected readonly Role = Role;

  isAdmin() {
    const user = this.userService.user;

    if (user === null) return false

    return user.roles.includes(Role.ADMIN)
  }
}
