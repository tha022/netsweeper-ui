import { NgModule, ModuleWithProviders } from '@angular/core';

import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';
import { DialogAnchorDirective } from './dialog.directive';

import { ConfirmationComponent } from '../../manage-tax-users/confirm/confirm.component';

@NgModule({
  imports: [],
  exports: [DialogComponent],
  declarations: [DialogComponent, DialogAnchorDirective, ConfirmationComponent],
  providers: [],
})
export class DialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DialogModule,
      providers: [DialogService]
    };
  }
}
