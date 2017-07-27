import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TaxUser } from '../shared/models/tax-user';
import { ConfigService } from '../../config';

@Injectable()
export class AddTaxUserService {

  constructor(
    private congif: ConfigService,
    private http: Http
  ) { }

  addUser(taxUser: TaxUser) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return this.http.post(`${this.congif.basePath}/${this.congif.taxUserPath}`,
      JSON.stringify(taxUser), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error
      || 'Server Error'));
  }
}
