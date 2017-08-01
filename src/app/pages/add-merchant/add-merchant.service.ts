import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Merchant } from '../shared/models/merchant';
import { MerchantAPIService } from '../../remote-api/merchant-api.service';

@Injectable()
export class AddMerchantService {

  constructor(
    private merchantAPIService: MerchantAPIService,
  ) { }

  addMerchant(merchant: Merchant): Observable<Merchant> {
    return this.merchantAPIService.addMerchant(merchant);
  }

}
