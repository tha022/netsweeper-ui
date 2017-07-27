import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { EmailValidator } from '../../theme/validators/email.validator';
import { EqualPasswordsValidator } from '../../theme/validators/equalPasswords.validator';

import { AddTaxUserService } from './add-tax-user.service';
import { ConfigService } from '../../config/config.service';
import { mock as taxUser } from './mock-tax-user';

@Component({
  selector: 'selector-name',
  templateUrl: './add-tax-user.component.html',
  styleUrls: ['./add-tax-user.component.css']
})
export class AddTaxUserComponent implements OnInit {

  taxUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private addTaxUserService: AddTaxUserService,
    private config: ConfigService
  ) {}

  ngOnInit() {
    this.taxUserForm = this.formBuilder.group({
      'taxOfficerName': ['', this.customCharValidator()],
      'taxUserName': ['', this.customCharValidator()],
      'taxUserEmail': new FormControl('', EmailValidator.validate),
      'taxUserPassword': ['', Validators.pattern(this.config.strongPassword)],
      'taxAddressOne': ['', this.customCharValidator()],
      'taxAddressTwo': ['', this.customCharValidator()],
      'taxUserCity': ['', this.customCharValidator()],
      'taxUserState': ['', this.customCharValidator()],
      'taxUserZip': ['', Validators.pattern('[0-9]{5}')],
      'taxUserCountry': ['', this.customCharValidator()],
      'taxUserPhone': ['', Validators.pattern('[0-9]{12}')]
    });
  }

  customCharValidator() {
    return Validators.compose([
      Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(12),
      Validators.pattern(/^[a-zA-Z]+$/)
    ]);
  }

  addTaxUser() {
    this.addTaxUserService.addUser(taxUser).subscribe(v => {
      // TODO: add handler
    });
  }
}
