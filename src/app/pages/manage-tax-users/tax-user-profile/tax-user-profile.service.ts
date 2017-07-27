import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TaxUserAPIService } from '../../../remote-api/tax-user-api.service';

@Injectable()
export class TaxUserServiceProfile {

  constructor(
    private taxUserAPIService: TaxUserAPIService
  ) { }

  updateTaxUser(path: string, params: Object): Observable<any> {
    return this.taxUserAPIService.updateTaxClient(path, params);
  }

}
