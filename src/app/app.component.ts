import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgIf} from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'XG7Plugins';

  constructor(
    private route: Router
  ) {
  }

  isAuthPage() {
    return this.route.url.includes("register") || this.route.url.includes("login") || this.route.url.includes("dashboard");
  }
}
