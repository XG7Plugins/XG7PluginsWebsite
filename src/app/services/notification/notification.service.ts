import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NotificationMessage, NotificationType} from '../../../assets/types/notificationType';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messageSubject = new BehaviorSubject<NotificationMessage | null>(null);
  message$ = this.messageSubject.asObservable();

  private currentTimeout: any = null;

  show(message: string, type: NotificationType) {
    if (this.currentTimeout !== null) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }

    this.messageSubject.next(null);
    this.messageSubject.next({message: message, type: type});

    this.currentTimeout = setTimeout(() => {
      this.messageSubject.next(null);
      this.currentTimeout = null;
    }, 5000);
  }
}
