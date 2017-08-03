import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfigService } from '../../../config/config.service';
import { ValidationService } from '../../shared/services/validation.service';

import { Merchant } from '../../../pages/shared/models/merchant';
import { MerchantProfileService } from './merchant-profile.service';
import { MerchantAPIService } from '../../../remote-api/merchant-api.service';

import { Location } from '@angular/common';

@Component({
  selector: 'merchant-profile',
  templateUrl: './merchant-profile.component.html',
  // styleUrls: ['./merchant-profile.component.css'],
})
export class MerchantProfileComponent implements OnInit {

  merchantForm: FormGroup;
  merchant: Merchant;
  id: string;

  constructor(
    private formBuilder: FormBuilder, 
    private config: ConfigService,
    private route: ActivatedRoute,
    private router: Router,
    private merchantProfileService: MerchantProfileService,
    private merchantAPIService: MerchantAPIService,
  ) { }

 ngOnInit() {
    this.merchantForm = this.formBuilder.group({
      merchantName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      adressOne: [''],
      adressTwo: [''],
      city: [''],
      state: [''],
      postal: [''],
      country: [''],
      phone: [''],
      vat: [''],
    });

    this.route.params.subscribe(url => {
      this.id = url['id'];
      this.merchantAPIService.getMerchant(this.config.merchantPath, this.id).subscribe(client => {
        this.merchantForm.patchValue( { ...client } );
      });
    });
  }

  onChange(): void {
    const merchant: Merchant = this.merchantForm.value;
    this.merchantProfileService
      .updateMerchant(`${this.config.merchantPath}/${this.id}`, merchant)
      .subscribe(response => {
        this.router.navigateByUrl('pages/merchants');
      });
    }
}
