import { Routes } from '@angular/router';
import {MainpageComponent} from './components/pages/mainpage/mainpage.component';
import {PluginpageComponent} from './components/pages/pluginpage/pluginpage.component';
import {LoginComponent} from './components/pages/auth/login/login.component';

export const routes: Routes = [
  {
    path: ':lang',
    children: [
      { path: '', component: MainpageComponent },
      { path: 'plugins', component: PluginpageComponent },
      {
        path: 'auth',
        children: [
          { path: "login", component: LoginComponent }
        ]
      },
    ]
  },
  { path: '', redirectTo: 'pt', pathMatch: 'full' },
];
