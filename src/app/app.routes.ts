import { Routes } from '@angular/router';
import {MainpageComponent} from './components/pages/mainpage/mainpage.component';
import {TermsComponent} from './components/pages/terms/terms.component';
import {ErrorComponent} from './components/error/error.component';


export const routes: Routes = [
  {
    path: ':lang',
    children: [
      { path: '', component: MainpageComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: 'error', data: { code: 404, message: 'Página não encontrada!' } }
    ]
  },
  { path: '', redirectTo: 'pt', pathMatch: 'full' },
  { path: '**', redirectTo: 'pt/error', data: { code: 404, message: 'Página não encontrada!' }  }
];

