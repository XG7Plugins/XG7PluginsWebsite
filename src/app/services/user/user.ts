export interface User {
  username: string;
  email: string;

  roles: Array<Role>;
  permissions: Array<Permission>;

  icon_url: string;
  about: string;
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
  USER_DELETE,
  USERS_VIEW,

  FORUM_EDIT,
  FORUM_DELETE,
  FORUM_POST,

  FORUM_MOD_BAN,
  FORUM_MOD_DELETE,

  PLUGINS_CREATE,
  PLUGINS_DELETE,
  PLUGINS_EDIT,
  PLUGINS_VIEW
}
