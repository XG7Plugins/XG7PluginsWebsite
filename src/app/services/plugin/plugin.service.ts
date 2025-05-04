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
      description: '# Baixeaq o pl legalzin \n namoral mt bom OOOO',
      iconUrl: 'https://www.spigotmc.org/data/resource_icons/112/112029.jpg?1741197551',
      price: 0,
      downloadLink: '',
      githubLink: 'asdadasdasd',
      downloads: 3,
      created: new Date(),
      updated: new Date(),
      ratingNumber: 5,
      ratings: [
        {
          userImageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAADf0lEQVR4Xu3bMYpWURBE4SciaKAYGZkYmgrm7sPcXbghN2UgmAgiuADN+8ApHvRwFar5ogn6vur607k+vH1xy7vXj2/5+P7ZLXzxLH7hrotPOp7Y8UnHF8/iF+5qAQG/cFcLCPiFu1pAwC/c1QICfuGuFhDwC3e1gIBfuKsFBPzCXS0g4BfuagEBv3BXCwj4hbtaQMAv3NUCAn7hrhYQ8At3tYCAX7jrdgH/O/5EHDc4bnAtIOAGxw2uBQTc4LjBtYCAGxw3uBYQcIPjBtcCAm5w3OBaQMANjhtcCwi4wXGDawEBNzhucC0g4AbHDa4FBNzguMG1gIAbHDe4FhBwg+MG1wICbnDc4FpAwA2OG1wLCLjBcYO7XcCXz59K8GKuBSzjxVwLWMaLuRawjBdzLWAZL+ZawDJezLWAZbyYawHLeDHXApbxYq4FLOPFXAtYxou5FrCMF3MtYBkv5lrAMl7MtYBlvJhrAct4MXf9/vnjljc35+mTR7e8evn8QX3/9vWWmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBF1wKCmScNX3QtIJh50vBFd/FPbj6YhpEcX9zFyt3Mk4Y/WdcCgpknDU/sWkAw86ThiV0LCGaeNDyxawHBzJOGJ3YtIJh50vDErgUEM08anti1gGDmScMTuxYQzDxpeGLXAoKZJw1P7FpAMPOk4YldCwhmnjQ8sWsBwcyThid2LSCYedLwxK4FBDNPGp7YtYBg5knDE7vbBXCF4wbHf3nYxRcdEzlucC0gYCLHDa4FBEzkuMG1gICJHDe4FhAwkeMG1wICJnLc4FpAwESOG1wLCJjIcYNrAQETOW5wLSBgIscNrgUETOS4wbWAgIkcN7gWEDCR4wbXAgImctzgWkDARI4bXAsImMhxg7v4ibt+3Zw//9gw0a4WEIaJdrWAMEy0qwWEYaJdLSAME+1qAWGYaFcLCMNEu1pAGCba1QLCMNGuFhCGiXa1gDBMtKsFhGGiXS0gDBPtagFhmGhXCwjDRLtaQBgm2vXgBZRrAYe1gMNawGEt4LAWcFgLOKwFHNYCDmsBh7WAw1rAYS3gsBZwWAs4rAUc9hdFD0cqytmG9AAAAABJRU5ErkJggg==',
          userName: 'DaviXG7',
          rating: 2.5,
          comment: 'Muito bom'
        }
      ],
      commands: '/lobby',
      permissions: 'xg7lobby.permission',
      categories: ["FUN", "UTILS"],
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
      iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABpklEQVR4nO3dQY7DMAwFUEXv/9f2i1Jm2kKqZk5h4',
      price: 1059,
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

  getRatingsFrom(pluginId: number) {
    const plugin = this.loadedPlugins.find(plugin => plugin.id === pluginId);
    if (plugin) {
      return plugin.ratings;
    }
    return [];
  }
}
