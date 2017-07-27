import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddTaxUserComponent } from './add-tax-user.component';
import { AddTaxUserService } from './add-tax-user.service';
import { routing } from './add-tax-user.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AddTaxUserComponent
  ],
  providers: [AddTaxUserService]
})
export class AddTaxUserModule {}
