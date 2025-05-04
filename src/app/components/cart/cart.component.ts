import {Component, Input} from '@angular/core';
import {ModalComponent} from '../utils/modal/modal.component';

@Component({
  selector: 'app-cart',
  imports: [
    ModalComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  isCartOpen: boolean = false;

  openCart() {
    this.isCartOpen = true;
  }

}
