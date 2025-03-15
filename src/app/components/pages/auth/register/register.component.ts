import {Component, OnInit} from '@angular/core';
import {ImgComponent} from "../../../utils/img/img.component";
import {RouterLink} from "@angular/router";
import {LangService} from '../../../../services/lang/lang.service';

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
  ) {
  }

  ngOnInit(): void {

    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('register', lang);
    })

  }

}
