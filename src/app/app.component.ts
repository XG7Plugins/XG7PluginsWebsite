import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgIf} from '@angular/common';
import {NotificationComponent} from './components/utils/notification/notification.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'XG7Plugins';

  disabledHeader = [
    "register",
    "login",
    "dashboard",
  ];

  disabledFooter = [
    "register",
    "login",
    "dashboard"
  ];

  constructor(
    private route: Router
  ) {
  }

  isDisabledHeader() {
    return this.disabledHeader.some((page) => this.route.url.includes(page));
  }

  isDisabledFooter() {
    return this.disabledFooter.some((page) => this.route.url.includes(page));
  }
}
