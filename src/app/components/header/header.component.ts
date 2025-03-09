import {Component, HostListener, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {LangService} from '../../services/lang/lang.service';
import {ModalComponent} from '../utils/modal/modal.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    ModalComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;

  constructor(
    protected langService: LangService,
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
}
