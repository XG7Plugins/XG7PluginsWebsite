import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true, // Standalone Component ✅
  imports: [CommonModule] // 🔥 Aqui resolve o problema do *ngIf
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  @Input() blur = true;

  closeModal() {
    this.close.emit(); // Dispara o evento de fechar
  }
}
