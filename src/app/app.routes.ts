import { Routes } from '@angular/router';
import {MainpageComponent} from './components/pages/mainpage/mainpage.component';
import {LoginComponent} from './components/pages/auth/login/login.component';
import {RegisterComponent} from './components/pages/auth/register/register.component';
import {TermsComponent} from './components/pages/terms/terms.component';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';
import {MainComponent} from './components/pages/dashboard/main/main.component';
import {YourPluginsComponent} from './components/pages/dashboard/your-plugins/your-plugins.component';
import {PurchasesComponent} from './components/pages/dashboard/purchases/purchases.component';
import {AffiliatedComponent} from './components/pages/dashboard/affiliated/affiliated.component';
import {UsersComponent} from './components/pages/dashboard/users/users.component';
import {SellsComponent} from './components/pages/dashboard/sells/sells.component';
import {PluginsComponent} from './components/pages/dashboard/plugins/plugins.component';
import {CouponsComponent} from './components/pages/dashboard/coupons/coupons.component';
import {ProfileComponent} from './components/pages/dashboard/profile/profile.component';
import {ErrorComponent} from './components/error/error.component';


export const routes: Routes = [
  {
    path: ':lang',
    children: [
      { path: '', component: MainpageComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'error', component: ErrorComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: '', component: MainComponent },
          { path: 'your-plugins', component: YourPluginsComponent },
          { path: 'purchases', component: PurchasesComponent },
          { path: 'affiliated', component: AffiliatedComponent },
          { path: 'users', component: UsersComponent },
          { path: 'sells', component: SellsComponent },
          { path: 'plugins', component: PluginsComponent },
          { path: 'coupons', component: CouponsComponent },
          { path: 'profile', component: ProfileComponent },
        ]
      },
      {
        path: 'auth',
        children: [
          { path: "login", component: LoginComponent },
          { path: "register", component: RegisterComponent }
        ]
      },
      { path: '**', redirectTo: 'error', data: { code: 404, message: 'Página não encontrada!' } }
    ]
  },
  { path: '', redirectTo: 'pt', pathMatch: 'full' },
  { path: '**', redirectTo: 'pt/error', data: { code: 404, message: 'Página não encontrada!' }  }
];

