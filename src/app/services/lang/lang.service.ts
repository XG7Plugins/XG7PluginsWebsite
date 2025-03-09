import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private langSubject = new BehaviorSubject<string>('pt');
  lang$ = this.langSubject.asObservable();

  langs = new Map<string, { [key: string]: any }>();

  constructor(
    private http: HttpClient
  ) {}


  setLang(lang: string) {
    this.langSubject.next(lang);
  }


  loadTranslations(path: string, lang: string) {
    this.http.get(`langs/${path}/${lang}.json`).subscribe(data => {
      if (!data) {
        this.http.get(`langs/${path}/pt.json`).subscribe(data => {
          this.langs.set(path, data);
        })
        return;
      }
      this.langs.set(path, data);
    });
  }

  getTranslation(path: string, key: string) {
    const translations = this.langs.get(path);

    if (!translations) {
      console.warn(`Traduções para '${path}' não encontradas.`);
      return null;
    }

    const value = translations[key];

    if (value === undefined) {
      console.warn(`Chave '${key}' não encontrada em '${path}'.`);
      return null;
    }

    return translations[key];
  }
}
