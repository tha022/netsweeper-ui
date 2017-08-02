import { NgModule, ModuleWithProviders } from '@angular/core';

import { DialogComponent } from './dialog.component';
import { ConfirmationComponent } from '../../manage-tax-users/confirm/confirm.component';
import { DialogService } from './dialog.service';
import { ManageTaxUserService } from '../../manage-tax-users/manage-tax-users.service';
import { TaxUserProfileService } from '../../manage-tax-users/tax-user-profile/tax-user-profile.service';
import { DialogAnchorDirective } from './dialog.directive';

@NgModule({
  exports: [DialogComponent],
  declarations: [
    DialogComponent,
    DialogAnchorDirective,
    ConfirmationComponent
  ],
})
export class DialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DialogModule,
      providers: [
        DialogService,
        ManageTaxUserService,
        TaxUserProfileService
      ]
    };
  }
}
