import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import { DialogModule } from './pages/shared/dialog/dialog.module';
import { RemoteAPIModule } from './remote-api/remote-api.module';

import { ConfigService } from './config';
import { ConfirmationComponent } from './pages/manage-tax-users/confirm/confirm.component';
import { ConfirmDeleteComponent } from './pages/manage-merchant/confirm-delete/confirm-delete.component';

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState,
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void,
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing,
    RemoteAPIModule.forRoot(),
    DialogModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    ConfigService
  ],
  entryComponents: [
    ConfirmationComponent,
    ConfirmDeleteComponent,
    ]
})
export class AppModule {

  constructor(public appState: AppState) {
  }
}
