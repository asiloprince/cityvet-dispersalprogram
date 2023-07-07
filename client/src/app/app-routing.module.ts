import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/auth/signup/signup.module').then(
        (m) => m.SignupPageModule
      ),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/auth/welcome/welcome.module').then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'admin-login-page',
    loadChildren: () =>
      import('./pages/auth/admin-login-page/admin-login-page.module').then(
        (m) => m.AdminLoginPagePageModule
      ),
  },
  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardPageModule
      ),
  },
  {
    path: 'livestock',
    loadChildren: () =>
      import('./pages/livestock/livestock.module').then(
        (m) => m.LivestockPageModule
      ),
  },
  {
    path: 'user-tabs',
    loadChildren: () =>
      import('./pages/user-tabs/user-tabs.module').then(
        (m) => m.UserTabsPageModule
      ),
  },
  {
    path: 'records',
    loadChildren: () =>
      import('./pages/records/records.module').then((m) => m.RecordsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
