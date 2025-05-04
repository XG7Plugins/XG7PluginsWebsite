import { Component } from '@angular/core';
import {AsyncPipe, NgClass, NgIf} from '@angular/common';
import {NotificationService} from '../../../services/notification/notification.service';

@Component({
  selector: 'app-notification',
  imports: [
    NgIf,
    AsyncPipe,
    NgClass
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

  constructor(private notificationService: NotificationService) {}


  getMessage() {
    return this.notificationService.message$
  }

}
