import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ManageMerchantComponent } from './manage-merchant.component';
import { routing } from './manage-merchant.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    ManageMerchantComponent,
  ],
})
export class ManageMerchantModule {}
