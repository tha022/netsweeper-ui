import { Routes, RouterModule } from '@angular/router';

import { ManageMerchantComponent } from './manage-merchant.component';
import { MerchantProfileComponent } from '../shared/merchant/merchant-profile/merchant-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ManageMerchantComponent,
  },
  {
    path: ':id',
    component: MerchantProfileComponent
  },
  
];

export const routing = RouterModule.forChild(routes);
