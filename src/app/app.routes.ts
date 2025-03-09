import { Routes } from '@angular/router';
import {MainpageComponent} from './components/mainpage/mainpage.component';

export const routes: Routes = [
  {path: ':lang', component: MainpageComponent},
  {path: '', redirectTo: 'pt', pathMatch: "full"},
];
