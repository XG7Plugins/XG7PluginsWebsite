import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category, Plugin, PrePlugin} from '../../../assets/types/plugin';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  loadedPrePlugins: PrePlugin[] = [
    {
      id: 1,
      name: 'XG7Lobby',
      version: '2.0',
      slogan: 'Melhor plugin de lobby',
      iconUrl: 'https://www.spigotmc.org/data/resource_icons/112/112029.jpg?1741197551',
      price: 0,
      downloadLink: '',
      downloads: 10,
      updated: new Date(),
      categories: [Category.ADMIN, Category.UTILS, Category.MANAGEMENT],
    },
    {
      id: 2,
      name: 'XG7RandomKits',
      version: '2.0',
      slogan: 'Melhor plugin de rk',
      iconUrl: 'https://www.spigotmc.org/data/resource_icons/112/112605.jpg?1694471111',
      price: 1499,
      downloadLink: '',
      downloads: 100,
      updated: new Date(100),
      categories: [Category.FUN,Category.UTILS]
    }










  ];
  loadedPlugins: Plugin[] = [
    {
      id: 1,
      name: 'XG7Lobby',
      version: '2.0',
      slogan: 'Melhor plugin de lobby',
      description: '# Baixeaq o pl legalzin \n namoral mt bom OOOO',
      iconUrl: 'https://www.spigotmc.org/data/resource_icons/112/112029.jpg?1741197551',
      price: 0,
      downloadLink: '',
      docLink: 'https://xg7plugins.gitbook.io/doc/xg7lobby-pt',
      githubLink: 'asdadasdasd',
      downloads: 3,
      created: new Date(),
      updated: new Date(),
      commands: '/lobby',
      permissions: 'xg7lobby.permission',
      categories: [Category.ADMIN,Category.UTILS],
      changelog: [
        {
          title: 'Novo plugin',
          version: '2.0',
          description: 'Plugin de lobby para servidores de Minecraft.\n 1. Adicionado suporte a 1.20\n 2. Adicionado suporte a 1.19 \n 3. Adicionado suporte a 1.18',
          updated: new Date(),
          downloadLink: ''
        },
        {
          title: 'Novo 213123',
          version: '1.0',
          description: 'Plugin de lobby para servidores de Minecraft',
          updated: new Date(),
          downloadLink: ''
        },
        {
          title: 'sadfasdfa',
          version: '1.0',
          description: 'Fixed bugs',
          updated: new Date(),
          downloadLink: ''
        }
      ]
    },
    {
      id: 2,
      name: 'XG7RandomKits',
      version: '2.0',
      slogan: 'Melhor plugin de rk',
      description: '# Baixeaq',
      iconUrl: 'https://www.spigotmc.org/data/resource_icons/112/112605.jpg?1694471111',
      price: 1059,
      downloadLink: '',
      docLink: '',
      githubLink: 'linkuin',
      downloads: 3,
      created: new Date(),
      updated: new Date(),
      commands: '/rk',
      permissions: 'xg7rk.permission',
      categories: [Category.FUN,Category.UTILS],
      changelog: [
        {
          title: 'Novo plugin',
          version: '2.0',
          description: 'Plugin de lobby para servidores de Minecraft.',
          updated: new Date(),
          downloadLink: ''
        }
      ]
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  getPrePlugins() {
    return this.loadedPrePlugins
    // return this.http.get('https://api.example.com/plugins');
  }
  getPrePlugin(id: number): PrePlugin | null {
    return this.loadedPrePlugins.find(plugin => plugin.id === id) || null;
    // return this.http.get(`https://api.example.com/plugins/${id}`);
  }
  getPlugin(id: number) {
    // return this.http.get(`https://api.example.com/plugins/${id}`);
    return of(this.loadedPlugins.find(plugin => plugin.id === id) || null);
  }
  getSomePrePlugins(start: number, end: number): Observable<PrePlugin[]> {
    return of(this.loadedPrePlugins.slice(start, end));
    // return this.http.get<PrePlugin[]>(`https://api.example.com/plugins/${start}/${end}`)
    //   .pipe(
    //     map((response: any) => {
    //       return response as PrePlugin[];
    //     }),
    //     catchError(error => {
    //       console.error('Error fetching plugins:', error);
    //       return of([]);
    //     })
    //   );
  }

  getPlugins() {
    return this.loadedPlugins
    // return this.http.get('https://api.example.com/plugins');
  }
}
