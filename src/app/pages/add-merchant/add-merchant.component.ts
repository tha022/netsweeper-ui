import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfigService } from '../../config/config.service';
import { ValidationService } from '../shared/services/validation.service';
import { AddMerchantService } from './add-merchant.service';

@Component({
  selector: 'add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.css'],
})
export class AddMerchantComponent implements OnInit {

  addMerchantForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: Router,
    private addMerchantService: AddMerchantService,
    private config: ConfigService,
  ) { }

 ngOnInit() {
    this.addMerchantForm = this.formBuilder.group({
      merchantName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
    });
  }

  onAdd(): void {

      const formData = this.addMerchantForm.value;

      const merchantName = formData.merchantName,
        username = formData.username,
        email = formData.email,
        password = formData.password,
        id = String(Date.now());
      
      const merchant = { 
        id,
        merchantName, 
        username, 
        email, 
        password, 
      };

      this.addMerchantService.addMerchant(merchant)
        .subscribe(response => {
          this.route.navigateByUrl(`pages/merchants/${merchant.id}`);
          // this.addMerchantForm.reset();
        } 
      );

    }
}
