import {Component, OnInit} from '@angular/core';
import {ImgComponent} from "../../../utils/img/img.component";
import {Router, RouterLink} from "@angular/router";
import {LangService} from '../../../../services/lang/lang.service';
import {UserService} from '../../../../services/user/user.service';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../../services/notification/notification.service';
import {CodeService} from '../../../../services/code/code.service';

@Component({
  selector: 'app-register',
    imports: [
    ImgComponent,
    RouterLink,
    FormsModule
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  preUser: { username: string, email: string, password: string, termsAccepted: boolean } = {
    username: '',
    email: '',
    password: '',
    termsAccepted: false
  };

  constructor(
    protected langService: LangService,
    private userService: UserService,
    private httpClient: HttpClient,
    private router: Router,
    private notificationService: NotificationService,
    private codeService: CodeService
  ) {
  }

  ngOnInit(): void {

    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('register', lang);
    })

    if (this.userService.isValid()) {
      this.router.navigate([`/${this.langService.getLang()}/dashboard`]);
    }

  }


  validate() {

    if (!this.preUser.termsAccepted) {
      this.notificationService.show('You must accept the terms and conditions.', "ERROR");
      return false;
    }

    if (this.preUser.email === "" || this.preUser.username === "" || this.preUser.password === "") {
      this.notificationService.show('All fields are required.', "ERROR");
      return false;
    }

    const regex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!regex.test(this.preUser.email)) {
      this.notificationService.show('Invalid email format.', "ERROR");
      return false;
    }

    const password = this.preUser.password;

    if (password.length < 8) {
      this.notificationService.show('Password is too short.', "ALERT");
      return false;
    }
    if (password.length > 64) {
      this.notificationService.show('Password is too long.', "ALERT");
      return false;
    }
    if (!/\d/.test(password)) {
      this.notificationService.show('Password must contain at least one number.', "ALERT");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      this.notificationService.show('Password must contain at least one uppercase letter.', "ALERT");
      return false;
    }
    if (!/[!@#$%^&*()\-\+]/.test(password)) {
      this.notificationService.show('Password must contain at least one symbol.', "ALERT");
      return false;
    }
    if (/\s/.test(password)) {
      this.notificationService.show('Password must not contain whitespace.', "ALERT");
      return false;
    }

    return true;
  }

  requestVerifyCode() {

    if (!this.validate()) return;

    console.log("Sending registration request...");
    this.httpClient.post("http://localhost:8080/auth/register", this.preUser, { withCredentials: true }).subscribe({

      next: (response) => {
        console.log("Request sent successful:", response);

        this.notificationService.show('Registration successful! Redirecting to dashboard...', "SUCCESS");

        setTimeout(() => {
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
