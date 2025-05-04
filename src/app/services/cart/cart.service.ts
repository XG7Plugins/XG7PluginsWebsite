import {Injectable, OnInit} from '@angular/core';
import {Cart, Coupon, PluginItem} from '../../../assets/types/cart';
import {PluginService} from '../plugin/plugin.service';
import {Plugin} from '../../../assets/types/plugin';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '../notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  private cart: Cart = {
    items: [],
  }

  private coupon: Coupon | null = null

  constructor(
    private pluginService: PluginService,
    private http: HttpClient,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {

    const cartString = localStorage.getItem('cart');

    this.cart = cartString == null ? [] : JSON.parse(cartString);

  }

  updateCart(cart: Cart): void {
    this.cart = cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart(plugin: PluginItem): void {
    const pluginId = this.cart.items.find(item => item.id === plugin.id);

    if (pluginId) {
      this.notificationService.show('Plugin already on cart', "ALERT");

      return;
    }

    this.cart.items.push(plugin);

    this.updateCart(this.cart);

    this.notificationService.show('Plugin added to cart', "SUCCESS");
  }

  getTotal() {
    let total = 0;
    this.cart.items.forEach(item => {

      let price = item.price;

      if (this.coupon) {
        let discountFactor = this.coupon.discount / 100;
        price *= (1 - discountFactor);
      }

      total += price;

    });

    if (this.coupon) {
      total -= this.coupon.discount;
    }

    return total;
  }
}
