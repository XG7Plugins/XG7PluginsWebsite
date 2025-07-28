import {User} from './user';

export type PluginItem = {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
  quantity: number;
}

export type Coupon = {
  code: string;
  discount: number;
  user: User | null;
  sells: number;
}
