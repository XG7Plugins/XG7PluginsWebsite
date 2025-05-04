export type Cart = {
  items: Array<PluginItem>;
}

export type PluginItem = {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

export type Coupon = {
  id: number;
  code: string;
  discount: number;
}
