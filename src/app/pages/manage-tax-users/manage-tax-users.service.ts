import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TaxUserAPIService } from '../../remote-api/tax-user-api.service';

@Injectable()
export class ManageTaxUserService {

  clientsUpdated: Subject<any> = new Subject<any>();

  constructor(private taxUserAPIService: TaxUserAPIService) {}

  getAllClients(path: string): Observable<any> {
    return this.taxUserAPIService.getTaxClients(path);
  }

  deleteClient(path: string, id: number): Observable<any> {
    return this.taxUserAPIService.deleteClient(path, id);
  }

}
