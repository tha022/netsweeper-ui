import { NgModule, ModuleWithProviders } from '@angular/core';
import { GenericHttpService } from './generic-http.service';
import { TaxUserAPIService } from './tax-user-api.service';

@NgModule({})
export class RemoteAPIModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RemoteAPIModule,
      providers: [
        GenericHttpService,
        TaxUserAPIService
      ]
    };
  }
}
