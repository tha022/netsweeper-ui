import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddMerchantComponent } from './add-merchant.component';
import { routing } from './add-merchant.routing';
import { ValidationService } from '../shared/services/validation.service';
import { AddMerchantService } from './add-merchant.service';


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
    AddMerchantService,
    ValidationService, 
  ],
})
export class AddMerchantModule {}
