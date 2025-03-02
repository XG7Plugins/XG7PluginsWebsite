import { Routes } from '@angular/router';
import {MainpageComponent} from './components/mainpage/mainpage.component';

export const routes: Routes = [
  {path: 'inicio', component: MainpageComponent},
  {path: '', redirectTo: 'inicio', pathMatch: "full"},
];
