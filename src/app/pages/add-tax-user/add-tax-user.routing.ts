import { Routes, RouterModule } from '@angular/router';

import { AddTaxUserComponent } from './add-tax-user.component';

const routes: Routes = [
  { path: 'add', component: AddTaxUserComponent },
  { path: '**', redirectTo: 'add' }
];

export const routing = RouterModule.forChild(routes);
