import {Component, OnInit} from '@angular/core';
import {ImgComponent} from '../../../utils/img/img.component';
import {RouterLink} from '@angular/router';
import {LangService} from '../../../../services/lang/lang.service';
import {FormSubmittedEvent} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    ImgComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(
    protected langService: LangService,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {

    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('login', lang);
    })

  }

  login(event: FormSubmittedEvent) {
    const formdata = new FormData();
  }


}
