import { Routes, RouterModule } from '@angular/router';

import { AddTaxUserComponent } from './add-tax-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'add' },
  { path: 'add', component: AddTaxUserComponent, pathMatch: 'full' }
];

export const routing = RouterModule.forChild(routes);
