
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './manage-merchant.routing';

import { MerchantProfileComponent } from './merchant-profile/merchant-profile.component';
import { ManageMerchantComponent } from './manage-merchant.component';

import { MerchantProfileService } from './merchant-profile/merchant-profile.service';
import { ManageMerchantService } from './manage-merchant.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,   
  ],
  declarations: [
    MerchantProfileComponent,
    ManageMerchantComponent,
  ],
  providers: [ 
    MerchantProfileService,
    ManageMerchantService,
  ],
})
export class ManageMerchantModule {}
