import { Routes, RouterModule } from '@angular/router';

import { AddMerchantComponent } from './add-merchant.component';

const routes: Routes = [
  {
    path: '',
    component: AddMerchantComponent,
  },
  { 
    path: '**', 
    redirectTo: 'add' 
  },
];

export const routing = RouterModule.forChild(routes);
