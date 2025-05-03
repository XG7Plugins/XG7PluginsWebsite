import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LangService} from '../../../../services/lang/lang.service';

@Component({
  selector: 'app-dashboard-footer',
    imports: [
        RouterLink
    ],
  templateUrl: './dashboard-footer.component.html',
  styleUrl: './dashboard-footer.component.css'
})
export class DashboardFooterComponent implements OnInit {

  constructor(
    protected langService: LangService,
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe(lang => {
      this.langService.loadTranslations('footer', lang);
    });
  }

}
