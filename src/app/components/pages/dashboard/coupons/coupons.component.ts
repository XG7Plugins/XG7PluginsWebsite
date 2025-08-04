import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CartService} from '../../../../services/cart/cart.service';
import {Coupon} from '../../../../../assets/types/cart';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-coupons',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.css'
})
export class CouponsComponent {

  constructor(
    protected cartService: CartService
  ) {
  }


  getCoupons(): Array<Coupon> {
    return [
      {
        code: '213123',
        discount: 0,
        user: null,
        sells: 0
      },
    ]
  }

}
