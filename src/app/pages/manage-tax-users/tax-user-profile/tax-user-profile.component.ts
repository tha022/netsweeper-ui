import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { TaxUserAPIService } from '../../../remote-api/tax-user-api.service';
import { ConfigService } from '../../../config/config.service';
import { TaxUser } from '../../../pages/shared/models/tax-user';
import { EmailValidator } from '../../../theme/validators/email.validator';
import { EqualPasswordsValidator } from '../../../theme/validators/equalPasswords.validator';
import { TaxUserProfileService } from './tax-user-profile.service';

@Component({
  selector: 'tax-user-profile',
  templateUrl: './tax-user-profile.component.html'
})

export class TaxUserProfileComponent implements OnInit {
  taxUserForm: FormGroup;
  taxUser: TaxUser;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private config: ConfigService,
    private taxUserAPIService: TaxUserAPIService,
    private formBuilder: FormBuilder,
    private taxUserServiceProfile: TaxUserProfileService
  ) {}

  ngOnInit() {
    this.taxUserForm = this.formBuilder.group({
      'taxOfficerName': ['', this.customCharValidator()],
      'taxUserName': ['', this.customCharValidator()],
      'taxUserEmail': new FormControl('', EmailValidator.validate),
      'taxUserPassword': ['', Validators.pattern(this.config.strongPassword)]
    });

    this.route.params.subscribe(url => {
      this.id = url['id'];

      this.taxUserAPIService.getTaxClient(this.config.taxUserPath, this.id)
        .subscribe(client => {
          this.taxUserForm.patchValue( { ...client } );
        });
    });
  }

  customCharValidator(): any {
    return Validators.compose([
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_ ]*$/i)
    ]);
  }

  submit(): void {
    const taxUser: TaxUser = this.taxUserForm.value;
    this.taxUserServiceProfile
      .updateTaxUser(`${this.config.taxUserPath}/${this.id}`, taxUser)
      .subscribe();
  }
}

