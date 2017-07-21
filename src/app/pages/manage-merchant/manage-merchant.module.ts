import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ManageMerchantComponent } from './manage-merchant.component';
import { routing } from './manage-merchant.routing';
import { TablesModule } from '../tables/tables.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import { ManageMerchantService } from './manage-merchant.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    Ng2SmartTableModule,
    NgaModule,
    
  ],
  declarations: [
    ManageMerchantComponent,
  ],
  providers: [ 
    ManageMerchantService,
  ],
})
export class ManageMerchantModule {}
