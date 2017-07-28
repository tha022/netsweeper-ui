import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Merchant } from '../shared/models/merchant';
import { ConfigService } from '../../config';

@Injectable()
export class AddMerchantService {

  constructor(
    private congif: ConfigService,
    private http: Http
  ) { }

  addMerchant(merchant: Merchant): Observable<Merchant[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return this.http.post(`${this.congif.basePath}/${this.congif.merchantPath}`,
      JSON.stringify(merchant), options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

}
