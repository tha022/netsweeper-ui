import { Routes, RouterModule } from '@angular/router';

import { ManageMerchantComponent } from './manage-merchant.component';

const routes: Routes = [
  {
    path: '',
    component: ManageMerchantComponent
  },
];

export const routing = RouterModule.forChild(routes);
