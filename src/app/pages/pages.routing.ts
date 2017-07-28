import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'add-merchant', loadChildren: './add-merchant/add-merchant.module#AddMerchantModule' },
      { path: 'user', loadChildren: './add-tax-user/add-tax-user.module#AddTaxUserModule' },
      { path: '', loadChildren: './manage-tax-users/manage-tax-users.module#ManageTaxUserModule' },
      { path: 'manage-merchant', loadChildren: './manage-merchant/manage-merchant.module#ManageMerchantModule' },
      { path: 'export-merchant', loadChildren: './export-merchant/export-merchant.module#ExportMerchantModule' },
      // { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      // { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      // { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      // { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      // { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
