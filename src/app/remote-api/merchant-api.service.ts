import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GenericHttpService } from './generic-http.service';
import { ConfigService } from '../config/config.service';
import { Merchant } from '../pages/shared/models/merchant';

@Injectable()
export class MerchantAPIService {
  constructor(
    private config: ConfigService,
    private httpService: GenericHttpService,
  ) {}

  addMerchant(merchant: Merchant): Observable<Merchant> {
    return this.httpService.post(`${this.config.merchantPath}`, merchant);
  }

  getMerchants(path: string): Observable<Merchant[]> {
    return this.httpService.get(path);
  }

  deleteMerchant(path: string, id: number): Observable<Merchant> {
    return this.httpService.delete(`${path}/${id}`);
  }

  getMerchant(path: string, id: number): Observable<Merchant> {
    return this.httpService.get(`${path}/${id}`);
  }

  updateMerchant(path: string, params: Object = {}): Observable<any> {
    return this.httpService.patch(path, params);
  }

}
