import {PurchasedPlugin, Purshases} from './keys';

export interface User {
  name: string;
  email: string;

  roles: Array<Role>;
  permissions: Array<Permission>;

  profileIcon: string;
  about: string;

  balance: number;

  purchasedPlugins: Array<PurchasedPlugin>;
  purchases: Array<Purshases>;
}

export enum Role {
  CEO,
  ADMIN,
  MODERATOR,
  HELPER,
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

  FORUM_EDIT,
  FORUM_DELETE,
  FORUM_POST,

  FORUM_MOD_BAN,
  FORUM_MOD_DELETE,
  FORUM_MOD_EDIT,

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
