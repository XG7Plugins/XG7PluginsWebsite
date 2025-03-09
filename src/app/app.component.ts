import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {MainpageComponent} from './components/pages/mainpage/mainpage.component';
import {FooterComponent} from './components/footer/footer.component';
import {LangService} from './services/lang/lang.service';
import {ModalComponent} from './components/utils/modal/modal.component';
import {NgIf} from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'XG7Plugins';

  isModalOpen = false;
}
