import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddMerchantComponent } from './add-merchant.component';
import { routing } from './add-merchant.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    AddMerchantComponent,
  ],
})
export class AddMerchantModule {}
