import {Component, HostListener, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {LangService} from '../../services/lang/lang.service';
import {ModalComponent} from '../utils/modal/modal.component';
import {RouterLink} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {ImgComponent} from '../utils/img/img.component';
import {CartComponent} from '../cart/cart.component';
import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    ModalComponent,
    NgIf,
    RouterLink,
    ImgComponent,
    CartComponent,
    SearchComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;
  isDropdownOpen = false;

  constructor(
    protected langService: LangService,
    protected userService: UserService
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('header', lang);
    });
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize() {
    if (window.innerWidth > 640) {
      this.isMenuOpen = false
    }
  }

  toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    if (!dropdown) return;
    dropdown.classList.toggle("hidden");
  }
}
