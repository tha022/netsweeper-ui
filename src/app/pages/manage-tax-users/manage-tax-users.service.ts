import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TaxUserAPIService } from '../../remote-api/tax-user-api.service';

@Injectable()
export class ManageTaxUserService {
  
  constructor(
    private taxUserAPIService: TaxUserAPIService
  ) {}

  getAllClients(path: string): Observable<any> {
    return this.taxUserAPIService.getTaxClients(path);
  }

  deleteClient(path: string, id: number): Observable<any> {
    return this.taxUserAPIService.deleteClient(path, id);
  }

}
