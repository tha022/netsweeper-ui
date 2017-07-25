import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MerchantService } from '../shared/services/merchant.service';

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
    private merchantService: MerchantService,
  ) { }

 ngOnInit() {
    this.addMerchantForm = this.formBuilder.group({
      merchantName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      adressOne: ['', Validators.required],
      adressTwo: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postal: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
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

      this.merchantService.addMerchant(merchant)
        .subscribe(
          data => console.log(JSON.stringify(data)),
          error => alert(`${error.status} ${error.error}`),
          () => alert('Merchant is successfully saved'),
        );

    }
}
