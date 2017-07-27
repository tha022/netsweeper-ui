import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailValidator } from '../../theme/validators/email.validator';
import { EqualPasswordsValidator } from '../../theme/validators/equalPasswords.validator';

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
    private addMerchantService: AddMerchantService,
    private config: ConfigService,
  ) { }

 ngOnInit() {
    this.addMerchantForm = this.formBuilder.group({
      merchantName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      adressOne: ['', Validators.required],
      adressTwo: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postal: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', [Validators.required, ValidationService.phoneValidator]],
      vat: ['', Validators.required],
    });
  }

  onAdd(): void {

      const formData = this.addMerchantForm.value;

      const merchantName = formData.merchantName,
        username = formData.username,
        email = formData.email,
        password = formData.password,
        adressOne = formData.adressOne,
        adressTwo = formData.adresstwo,
        city = formData.city,
        state = formData.state,
        postal = formData.postal,
        country = formData.country,
        phone = formData.phone,
        vat = formData.vat,
        id = String(Date.now());
      
      const merchant = { 
        id,
        merchantName, 
        username, 
        email, 
        password, 
        adressOne, 
        adressTwo, 
        city, 
        state, 
        postal, 
        country, 
        phone, 
        vat, 
      };

      this.addMerchantService.addMerchant(merchant)
        .subscribe(
          data => console.log(JSON.stringify(data)),
          error => alert(`${error.status} ${error.error}`),
          () => alert('Merchant is successfully saved'),
        );

    }
}
