import {Component, OnInit} from '@angular/core';
import {ImgComponent} from "../../../utils/img/img.component";
import {Router, RouterLink} from "@angular/router";
import {LangService} from '../../../../services/lang/lang.service';
import {UserService} from '../../../../services/user/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
    imports: [
        ImgComponent,
        RouterLink
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(
    protected langService: LangService,
    private userService: UserService,
    private httpClient: HttpClient,
    private router: Router,
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

}
