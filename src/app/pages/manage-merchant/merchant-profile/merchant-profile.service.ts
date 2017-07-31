import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Merchant } from '../../shared/models/merchant';
import { MerchantAPIService } from '../../../remote-api/merchant-api.service';

@Injectable()
export class MerchantProfileService {

  constructor(
    private merchantAPIService: MerchantAPIService
  ) { }

  updateMerchant(path: string, params: Object): Observable<Merchant> {
    return this.merchantAPIService.updateMerchant(path, params);
  }

}
