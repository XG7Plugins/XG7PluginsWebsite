import {PrePlugin} from './plugin';

export type Key = {
  id: number;
  key: string;

  plugin: PrePlugin;

  keyIps: Array<KeyIps>;
}

export type KeyIps = {
  id: number;

  ip: "string"
  port: number
}
