import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PrePlugin} from './plugin';
import {catchError, map, Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  constructor(
    private http: HttpClient
  ) { }

  getPrePlugins() {
    return this.http.get('https://api.example.com/plugins');
  }
  getPlugin(id: number) {
    return this.http.get(`https://api.example.com/plugins/${id}`);
  }
  getSomePrePlugins(limit: number): Observable<PrePlugin[]> {
    return this.http.get<PrePlugin[]>(`https://api.example.com/plugins?limit=${limit}`)
      .pipe(
        map((response: any) => {
          return response as PrePlugin[];
        }),
        catchError(error => {
          console.error('Error fetching plugins:', error);
          return of([]);
        })
      );
  }

}
