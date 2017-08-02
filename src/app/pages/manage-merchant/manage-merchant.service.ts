import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Merchant } from '../shared/models/merchant';
import { MerchantAPIService } from '../../remote-api/merchant-api.service';

@Injectable()
export class ManageMerchantService {

  clientsUpdated: Subject<any> = new Subject<any>();
  
  constructor(
    private merchantAPIService: MerchantAPIService
  ) {}

  getAllClients(path: string): Observable<Merchant[]> {
    return this.merchantAPIService.getMerchants(path);
  }

  deleteClient(path: string, id: string): Observable<Merchant> {
    return this.merchantAPIService.deleteMerchant(path, id);
  }

}

