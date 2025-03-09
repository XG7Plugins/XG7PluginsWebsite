import { Component, EventEmitter, Output } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true, // Standalone Component ✅
  imports: [CommonModule] // 🔥 Aqui resolve o problema do *ngIf
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>(); // Emite um evento quando o modal é fechado

  closeModal() {
    this.close.emit(); // Dispara o evento de fechar
  }
}
