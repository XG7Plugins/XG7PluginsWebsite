import {Injectable} from '@angular/core';
import {Coupon, PluginItem} from '../../../assets/types/cart';
import {PluginService} from '../plugin/plugin.service';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '../notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cart: Array<PluginItem> = []

  private coupon: Coupon | null = null

  constructor(
    private pluginService: PluginService,
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
    const cartString = localStorage.getItem('cart');

    this.cart = cartString == null ? [] : JSON.parse(cartString);
  }

  getCart() {
    return this.cart
  }

  updateCart(cart: Array<PluginItem>): void {
    this.cart = cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart(plugin: PluginItem): void {
    const pluginId = this.cart.find(item => item.id === plugin.id);

    if (pluginId) {
      this.notificationService.show('Plugin já está no carrinho', "ALERT");

      return;
    }

    this.cart.push(plugin);

    this.updateCart(this.cart);

    this.notificationService.show('Plugin adicionado ao carrinho', "SUCCESS");
  }

  removeFromCart(item: PluginItem) {
    this.cart = this.cart.filter(plugin => plugin.id !== item.id);
    this.updateCart(this.cart);
  }

  addQuantity(item: PluginItem) {
    item.quantity++;
    this.updateCart(this.cart);
  }

  removeQuantity(item: PluginItem) {
    if (item.quantity <= 1) return;
    item.quantity--;
    this.updateCart(this.cart);
  }

  getTotal() {
    let total = 0;
    this.cart.forEach(item => {
      total += (item.price * item.quantity) / 100;
    });


    return total;
  }

  getDiscount() {
    let discount = 0;
    this.cart.forEach(item => {

      let price = (item.price * item.quantity);

      if (this.coupon) {
        let discountFactor = this.coupon.discount / 100;
        price *= (1 - discountFactor);
      }

      discount += ((item.price * item.quantity) - price);

    });

    return discount / 100;
  }

  getFinalAmount() {
    let total = 0;
    this.cart.forEach(item => {

      let price = (item.price * item.quantity);

      if (this.coupon) {
        let discountFactor = this.coupon.discount / 100;
        price *= (1 - discountFactor);
      }

      total += price;

    });

    return total / 100;
  }

  applyCoupon(name: string) {

    if (!name) {
      this.coupon = null;
      return;
    }

    //Getinh with hhtp


    this.coupon = {
      code: name,
      discount: 10
    }

  }

  getCoupon() {
    return this.coupon;
  }
}
