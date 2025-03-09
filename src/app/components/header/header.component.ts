import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {LangService} from '../../services/lang/lang.service';
import {ModalComponent} from '../utils/modal/modal.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    ModalComponent,
    NgIf
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
}
