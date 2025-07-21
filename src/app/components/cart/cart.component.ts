import {Component, Input} from '@angular/core';
import {ModalComponent} from '../utils/modal/modal.component';
import {NgForOf, NgIf} from '@angular/common';
import {LangService} from '../../services/lang/lang.service';
import {CartService} from '../../services/cart/cart.service';
import {ImgComponent} from '../utils/img/img.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [
    ModalComponent,
    NgIf,
    NgForOf,
    ImgComponent,
    FormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  isCartOpen: boolean = false;

  coupon: string = "";

  constructor(
    protected langService: LangService,
    protected cartService: CartService
  ) {}

  openCart() {
    this.isCartOpen = true;
  }

}
