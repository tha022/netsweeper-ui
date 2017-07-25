import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Merchant } from '../merchant';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MerchantService {
     
     constructor (private http: Http) {}
     
     private merchantsUrl = 'http://localhost:3000/merchants'; 

     addMerchant (merchant: Merchant): Observable<Merchant[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' }); 
        const options = new RequestOptions({ headers }); 

        return this.http.post(this.merchantsUrl, JSON.stringify(merchant), options) 
                         .map((res: Response) => res.json()) 
                         .catch((error: any) => 
                            Observable.throw(error.json().error || 'Server error'),
                            ); 
    }   

}
