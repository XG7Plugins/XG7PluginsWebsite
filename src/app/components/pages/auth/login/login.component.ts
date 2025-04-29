import {Component, OnInit} from '@angular/core';
import {ImgComponent} from '../../../utils/img/img.component';
import {Router, RouterLink} from '@angular/router';
import {LangService} from '../../../../services/lang/lang.service';
import {FormSubmittedEvent} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../services/user/user.service';

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
    private userService: UserService,
    private httpClient: HttpClient,
    private router: Router,
  ) {
  }

  ngOnInit(): void {

    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('login', lang);
    })

    if (this.userService.isValid()) {
      this.router.navigate([`/${this.langService.getLang()}/dashboard`]);
    }

  }

  login(event: FormSubmittedEvent) {
    const formdata = new FormData();
  }


}
