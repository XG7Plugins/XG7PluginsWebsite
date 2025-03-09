import { Routes } from '@angular/router';
import {MainpageComponent} from './components/pages/mainpage/mainpage.component';
import {PluginpageComponent} from './components/pages/pluginpage/pluginpage.component';

export const routes: Routes = [
  {
    path: ':lang',
    children: [
      { path: '', component: MainpageComponent },
      { path: 'plugins', component: PluginpageComponent },
    ]
  },
  { path: '', redirectTo: 'pt', pathMatch: 'full' },
];
