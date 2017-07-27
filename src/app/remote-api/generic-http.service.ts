import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  URLSearchParams 
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

import { ConfigService } from '../config/config.service';

@Injectable()
export class GenericHttpService {
  accessError: Observable<boolean>;
  accessErrorSource: BehaviorSubject<boolean>;

  private apiPath: string;
  private headers: Object = {
    'Content-Type': 'application/json;charset=utf-8',
    'Accept': 'application/json'
  };

  constructor(
    private http: Http,
    private config: ConfigService
  ) {
    this.apiPath = config.basePath;
    this.accessErrorSource = new BehaviorSubject<boolean>(false);
    this.accessError = this.accessErrorSource.asObservable();
  }

  post(path: string, body: Object = {}): Observable<any> {
    const fullPath: string = `${this.apiPath}/${path}`;
    const jsonBody: string = JSON.stringify(body);
    const options: RequestOptions = new RequestOptions({
      headers: this.shapeHeaders(this.headers)
    });

    return this.http.post(fullPath, jsonBody, options)
      .map(this.checkForError)
      .catch(this.handleError.bind(this))
      .map(this.getJson);
  }

  private shapeHeaders(defaultHeaders: Object): Headers {
    const headers: Headers = new Headers(defaultHeaders);

    return headers;
  }

  private getJson(response: Response): JSON {
    let body: any = {};

    if (response.text()) {
      body = response.json();
    }

    return body;
  }

  private checkForError(response: Response): Response | Observable<any> {
    let currResponse: Response,
      error: Error;

    if (response.status >= 200 && response.status < 300) {
      currResponse = response;
    } else {
      error = new Error(response.statusText);
      error['response'] = response;
      throw error;
    }

    return currResponse;
  }

  private handleError(error: Response): Observable<any> {
    console.log(error.json().message);

    if (error.status === 401) {
      this.accessErrorSource.next(true);
    }

    return Observable.throw(error);
  }
}
