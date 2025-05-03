import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PrePlugin, Plugin} from '../../../assets/types/plugin';
import {catchError, map, Observable, of, throwError} from 'rxjs';

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
      rating: 5,
      categories: ["FUN","UTILS"]
    },
    {
      id: 2,
      name: 'XG7RandomKits',
      version: '2.0',
      slogan: 'Melhor plugin de rk',
      iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABpklEQVR4nO3dQY7DMAwFUEXv/9f2i1Jm2kKqZk5h4',
      price: 1499,
      downloadLink: '',
      downloads: 10,
      updated: new Date(),
      rating: 5,
      categories: ["FUN","UTILS"]
    },
  ];
  loadedPlugins: Plugin[] = [
    {
      id: 1,
      name: 'XG7Lobby',
      version: '2.0',
      slogan: 'Melhor plugin de lobby',
      description: '# Baixeaq',
      iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABpklEQVR4nO3dQY7DMAwFUEXv/9f2i1Jm2kKqZk5h4',
      price: 0,
      downloadLink: '',
      githubLink: 'linkuin',
      downloads: 3,
      created: new Date(),
      updated: new Date(),
      ratingNumber: 5,
      ratings: [],
      commands: '/lobby',
      permissions: 'xg7lobby.permission',
      categories: ["FUN", "UTILS"],
      changelog: [
        {
          title: 'Novo plugin',
          version: '2.0',
          description: 'Plugin de lobby para servidores de Minecraft.',
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
      iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABpklEQVR4nO3dQY7DMAwFUEXv/9f2i1Jm2kKqZk5h4',
      price: 0,
      downloadLink: '',
      githubLink: 'linkuin',
      downloads: 3,
      created: new Date(),
      updated: new Date(),
      ratingNumber: 5,
      ratings: [],
      commands: '/rk',
      permissions: 'xg7rk.permission',
      categories: ["FUN", "UTILS"],
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
  getPlugin(id: number) {
    return this.http.get(`https://api.example.com/plugins/${id}`);
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
