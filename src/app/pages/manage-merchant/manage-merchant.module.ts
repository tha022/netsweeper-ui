
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './manage-merchant.routing';

import { DialogModule } from '../shared/dialog/dialog.module';

import { MerchantProfileComponent } from '../shared/merchant/merchant-profile/merchant-profile.component';
import { ManageMerchantComponent } from './manage-merchant.component';

import { MerchantProfileService } from '../shared/merchant/merchant-profile/merchant-profile.service';
import { ManageMerchantService } from './manage-merchant.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,   
    DialogModule,
  ],
  declarations: [
    MerchantProfileComponent,
    ManageMerchantComponent,
  ],
})
export class ManageMerchantModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ManageMerchantModule,
      providers: [
        ManageMerchantService, 
        MerchantProfileService,
      ],
    };
  }
}
