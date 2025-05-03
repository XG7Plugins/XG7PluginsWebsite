import {Component, HostListener} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ImgComponent} from '../utils/img/img.component';
import {LangService} from '../../services/lang/lang.service';
import {UserService} from '../../services/user/user.service';
import {RouterLink} from '@angular/router';
import {ModalComponent} from '../utils/modal/modal.component';
import {Role} from '../../../assets/types/user';

@Component({
  selector: 'app-dashboard-sidebar',
  imports: [
    NgOptimizedImage,
    ImgComponent,
    RouterLink,
    NgIf,
    ModalComponent
  ],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css'
})
export class DashboardSidebarComponent {

  isMenuOpen = false;

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

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    if (window.innerWidth > 640) {
      this.isMenuOpen = false
    }
  }
}
