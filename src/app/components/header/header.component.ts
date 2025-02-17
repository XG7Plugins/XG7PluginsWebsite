import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  protected readonly document = document;

  public toggleDark() {
    let isDark = document.body.classList.contains("dark")
    if (isDark) {
      document.body.classList.remove("dark")
    } else {
      document.body.classList.add("dark")
    }
  }
}
