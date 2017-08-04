import { NgModule, ModuleWithProviders } from '@angular/core';

import { ConfirmationComponent } from '../../manage-tax-users/confirm/confirm.component';
import { ConfirmDeleteComponent } from '../../manage-merchant/confirm-delete/confirm-delete.component';

import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';
import { DialogAnchorDirective } from './dialog.directive';

import { ManageTaxUserService } from '../../manage-tax-users/manage-tax-users.service';
import { TaxUserProfileService } from '../../manage-tax-users/tax-user-profile/tax-user-profile.service';

import { ManageMerchantService } from '../../manage-merchant/manage-merchant.service';
import { MerchantProfileService } from '../merchant/merchant-profile/merchant-profile.service';

@NgModule({
  exports: [DialogComponent],
  declarations: [
    DialogComponent,
    DialogAnchorDirective,
    ConfirmationComponent,
    ConfirmDeleteComponent
  ],
})
export class DialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DialogModule,
      providers: [
        DialogService,
        ManageTaxUserService,
        TaxUserProfileService,
        ManageMerchantService,
        MerchantProfileService,
      ]
    };
  }
}
