import { Routes, RouterModule } from '@angular/router';

import { ExportMerchantComponent } from './export-merchant.component';

const routes: Routes = [
  { path: 'export', component: ExportMerchantComponent },
  { path: '**', redirectTo: 'export' }
];

export const routing = RouterModule.forChild(routes);
