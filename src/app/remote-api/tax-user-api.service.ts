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

  addTaxClient(user: TaxUser): Observable<TaxUser> {
    return this.httpService.post(`${this.config.taxUserPath}`, user);
  }

  getTaxClients(path: string): Observable<TaxUser[]> {
    return this.httpService.get(path);
  }

  deleteClient(path: string, id: number): Observable<TaxUser> {
    return this.httpService.delete(`${path}/${id}`);
  }

  getTaxClient(path: string, id: number): Observable<TaxUser> {
    return this.httpService.get(`${path}/${id}`);
  }

  updateTaxClient(path: string, params: Object = {}): Observable<any> {
    return this.httpService.patch(path, params);
  }

}
