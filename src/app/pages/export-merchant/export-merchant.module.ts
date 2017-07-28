import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExportMerchantComponent } from './export-merchant.component';
import { ExportMerchantService } from './export-merchant.service';
import { routing } from './export-merchant.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [ExportMerchantComponent],
  providers: [ExportMerchantService]
})
export class ExportMerchantModule {}
