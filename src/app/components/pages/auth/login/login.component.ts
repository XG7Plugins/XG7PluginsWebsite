import {Component, OnInit} from '@angular/core';
import {ImgComponent} from '../../../utils/img/img.component';
import {Router, RouterLink} from '@angular/router';
import {LangService} from '../../../../services/lang/lang.service';
import {FormsModule, FormSubmittedEvent} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../services/user/user.service';
import {NotificationService} from '../../../../services/notification/notification.service';

@Component({
  selector: 'app-login',
  imports: [
    ImgComponent,
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginUser: { email: string, password: string} = {
    email: '',
    password: ''
  };

  constructor(
    protected langService: LangService,
    private userService: UserService,
    private httpClient: HttpClient,
    private router: Router,
    private notificationService: NotificationService,
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

  login() {

    console.log("Sending login request...");
    this.httpClient.post("http://localhost:8080/auth/login", this.loginUser, { withCredentials: true }).subscribe({

      next: (response) => {

        this.notificationService.show('Registration successful! Redirecting to dashboard...', "SUCCESS");

        setTimeout(() => {
          console.log("Redirecting to dashboard...");
          this.router.navigate([`/${this.langService.getLang()}/dashboard`]);
        }, 2000);
      },
      error: (error) => {

        console.log(error);

        this.notificationService.show(error.error.message, "ERROR");

      }

    });
  }


}
