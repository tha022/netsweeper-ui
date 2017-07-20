import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddMerchantComponent } from './add-merchant.component';
import { routing } from './add-merchant.routing';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
  ],
  declarations: [
    AddMerchantComponent,
  ],
})
export class AddMerchantModule {}
