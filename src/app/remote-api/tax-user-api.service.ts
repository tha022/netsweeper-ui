import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GenericHttpService } from './generic-http.service';
import { ConfigService } from '../config/config.service';
import { TaxUser } from '../pages/shared/models/tax-user';

@Injectable()
export class TaxUserAPIService {
  constructor(
    private config: ConfigService,
    private httpService: GenericHttpService
  ) {}

  addTaxClientUser(user: TaxUser) {
    return this.httpService.post(`${this.config.taxUserPath}`, user);
  }

}
