import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TaxUser } from '../shared/models/tax-user';
import { ConfigService } from '../../config';
import { TaxUserAPIService } from '../../remote-api/tax-user-api.service';

@Injectable()
export class AddTaxUserService {

  constructor(
    private congif: ConfigService,
    private http: Http,
    private taxUserService: TaxUserAPIService
  ) { }

  addUser(taxUser: TaxUser): Observable<any> {
    return this.taxUserService.addTaxClient(taxUser);
  }
}
