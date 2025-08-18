import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NotificationService} from '../notification/notification.service';
import {LangService} from '../lang/lang.service';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  private token?: string;

  private type: 'EMAIL' | "PASSWORD" | undefined;

  setToken(token: string, type: 'EMAIL' | "PASSWORD") {
    this.type = type;
    this.token = token;
  }

  getToken(): string | undefined {
    return this.token;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService,
    private langService: LangService
  ) { }

  verify(code: string) {

    if (this.type === "EMAIL") {

      this.http.post("http://localhost:8080/auth/register/confirm", { id: this.token, code: code }, { withCredentials: true }).subscribe({

        next: (response) => {
          console.log("Confirmation successful:", response);
          this.router.navigate([`/${this.langService.getLang()}/dashboard`]);
        },
        error: (error) => {
          console.error("Confirmation failed:", error);
          this.notificationService.show("Failed to confirm code. Please try again.", "ERROR");

        }

      });

      return
    }

  }
}
