import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Merchant } from '../shared/models/merchant';
import { ConfigService } from '../../config';
import { MerchantAPIService } from '../../remote-api/merchant-api.service';

@Injectable()
export class AddMerchantService {

  constructor(
    private congif: ConfigService,
    private http: Http,
    private merchantService: MerchantAPIService,
  ) { }

  addMerchant(merchant: Merchant): Observable<Merchant> {
    return this.merchantService.addMerchant(merchant);
  }

}
