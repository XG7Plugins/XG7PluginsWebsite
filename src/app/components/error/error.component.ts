  import {Component, OnInit} from '@angular/core';
  import {ActivatedRoute} from '@angular/router';
  import {map} from 'rxjs';

  @Component({
    selector: 'app-error',
    imports: [],
    templateUrl: './error.component.html',
    styleUrl: './error.component.css'
  })
export class ErrorComponent implements OnInit {

    protected errorCode: string | null = null;
    protected errorMessage: string | null = null;


    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
      this.route.data.subscribe(data => {

        console.log(data);

        this.errorCode = data['code'] || '500';
        this.errorMessage = data['message'] || 'An unexpected error occurred.';
      });
    }
  }
