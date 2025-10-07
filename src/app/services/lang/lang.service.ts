import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private langSubject = new BehaviorSubject<string>('pt');
  lang$ = this.langSubject.asObservable();

  langs: { [key: string]: any } = {};

  constructor(
    private http: HttpClient
  ) {}


  setLang(lang: string) {
    this.langSubject.next(lang);
  }


  loadTranslations(lang: string) {
    this.http.get(`langs/${lang}.json`).subscribe(data => {
      if (!data) {
        this.http.get(`langs/pt.json`).subscribe(data => {
          this.langs = data
        })
        return;
      }
      this.langs = data
    });
  }

  getTranslation(key: string) {
    const translations = this.langs;

    const value = translations[key];

    if (value === undefined) {
      console.warn(`Chave '${key}' não encontrada '.`);
      return "Chave não encontrada!";
    }

    return translations[key];
  }

  getLang() {
    return this.langSubject.value;
  }
}
