import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddMerchantComponent } from './add-merchant.component';
import { routing } from './add-merchant.routing';
import { MerchantService } from '../shared/services/merchant.service';
import { ValidationService } from '../shared/services/validation.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
  ],
  declarations: [
    AddMerchantComponent,
  ],
  providers: [
    MerchantService,
    ValidationService, 
  ],
})
export class AddMerchantModule {}
