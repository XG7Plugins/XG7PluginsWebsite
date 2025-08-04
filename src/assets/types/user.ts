import {PurchasedPlugin, Purchases} from './keys';

export interface User {
  name: string;
  email: string;

  roles: Array<Role>;
  permissions: Array<Permission>;

  profileIcon: string;

  balance: number;

  purchasedPlugins: Array<PurchasedPlugin>;
  purchases: Array<Purchases>;
}

export function hasRole(user: User, role: Role): boolean {
  return user.roles.includes(Role.ADMIN) || user.roles.includes(role);
}

export enum Role {
  ADMIN,
  STAFF,
  SUPPORTER,
  FRIEND,
  USER,
}
export enum Permission {
  ALL,

  USER_EDIT,
  USER_RESET_PASSWORD,
  USER_DELETE,
  USERS_VIEW,
  USERS_EDIT,

  PLUGINS_CREATE,
  PLUGINS_DELETE,
  PLUGINS_UPDATE,
  PLUGINS_RATE,
  PLUGINS_EDIT,
  PLUGINS_VIEW,
  PLUGINS_SELLS,

  COUPON_CREATE,
  COUPON_DELETE
}
