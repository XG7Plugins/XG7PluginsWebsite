import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Permission, Role, User } from '../../../assets/types/user';
import { PluginService } from '../plugin/plugin.service';
import { PurchasedPlugin, Purchases } from '../../../assets/types/keys';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | null = null;

  constructor(
    private http: HttpClient,
    private pluginService: PluginService,
  ) { }

  loadUser() {
    let token = localStorage.getItem("token");

    if (token) {
      this.http.get<any>("http://localhost:8080/auth/token").subscribe(json => {
        const { icon64, keys, ...resto } = json;

        const purchasedPlugins: PurchasedPlugin[] = [];

        if (keys) {
          const pluginMap: { [pluginId: number]: PurchasedPlugin } = {};

          keys.forEach((key: any) => {
            if (!pluginMap[key.pluginId]) {
              pluginMap[key.pluginId] = {
                plugin: (() => {
                  const prePlugin = this.pluginService.getPrePlugin(key.pluginId);
                  if (!prePlugin) {
                    throw new Error(`PrePlugin not found for pluginId ${key.pluginId}`);
                  }
                  return prePlugin;
                })(),
                keys: []
              };
              purchasedPlugins.push(pluginMap[key.pluginId]);
            }

            pluginMap[key.pluginId].keys.push({
              id: key.id,
              ip: key.ip,
              port: key.port,
            });
          });
        }

        this.user = {
          ...resto, 
          purchasedPlugins: purchasedPlugins,
          profileIcon: icon64 || 'https://crafatar.com/avatars/2ceb3b2e-78b6-4677-aea5-5c9915fcaeb7',
        } as User;
      });
    }
  }

  isValid() {
    return this.user != null;
  }

  containsPlugin(pluginId: number) {
    if (this.user === null) {
      return false
    }
    return this.user.purchasedPlugins.some(pp => pp.plugin.id === pluginId);
  }

  getPurchasedPlugins() {
    if (this.user === null) {
      return [];
    }
    return this.user.purchasedPlugins;
  }

  getPurchases() {
    if (this.user === null) {
      return [];
    }
    return this.user.purchases;
  }
}
