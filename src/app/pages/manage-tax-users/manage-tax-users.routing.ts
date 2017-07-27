import { Routes, RouterModule } from '@angular/router';

import { ManageTaxUserComponent } from './manage-tax-users.component';
import { TaxUserProfileComponent } from './tax-user-profile/tax-user-profile.component';

const routes: Routes = [
  { path: 'users', component: ManageTaxUserComponent },
  { path: 'users/:id', component: TaxUserProfileComponent }
];

export const routing = RouterModule.forChild(routes);
