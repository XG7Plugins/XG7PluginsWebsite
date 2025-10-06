import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category, LoadedPlugin} from '../../../assets/types/loadedPlugin';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  loadedPlugins: LoadedPlugin[] = [];

  constructor(
    private http: HttpClient
  ) {}

  loadPlugins(): Promise<LoadedPlugin[]> {

    if (this.loadedPlugins.length !== 0) return Promise.resolve(this.loadedPlugins);

    return new Promise((resolve, reject) => {  // ← Adicione resolve e reject
      this.http.get<LoadedPlugin[]>('https://xg7pluginsapi.onrender.com/api/plugins').subscribe({
        next: (response) => {
          this.loadedPlugins = response;
          resolve(response);  // ← Resolva a promise aqui
        },
        error: (error) => {
          console.error('Erro:', error);
          reject(error);  // ← Rejeite em caso de erro
        },
        complete: () => {
          console.log('Requisição completa');
        }
      });
    });
  }

  getPlugins() {
    return this.loadedPlugins
  }

  getSomePlugins(start: number, end: number): Observable<LoadedPlugin[]> {
    return of(this.loadedPlugins.slice(start, end));
  }

  getPlugin(id: number) {
    // return this.http.get(`https://api.example.com/plugins/${id}`);
    return of(this.loadedPlugins.find(plugin => plugin.id === id) || null);
  }
}
