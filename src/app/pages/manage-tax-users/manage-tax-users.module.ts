import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ReactiveFormsModule } from '@angular/forms';
import { TablesModule } from '../tables/tables.module';
import { ManageTaxUserComponent } from './manage-tax-users.component';
import { ManageTaxUserService } from './manage-tax-users.service';
import { TaxUserProfileComponent } from './tax-user-profile/tax-user-profile.component';
import { TaxUserServiceProfile } from './tax-user-profile/tax-user-profile.service';
import { routing } from './manage-tax-users.routing';

@NgModule({
  imports: [
    CommonModule,
    TablesModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [ManageTaxUserComponent, TaxUserProfileComponent],
  providers: [ManageTaxUserService, TaxUserServiceProfile]
})
export class ManageTaxUserModule {}
