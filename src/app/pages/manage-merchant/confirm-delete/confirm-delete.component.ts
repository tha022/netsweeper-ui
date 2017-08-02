import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../../../config/config.service';
import { DialogService } from '../../shared/dialog/dialog.service';

import { ManageMerchantService } from '../manage-merchant.service';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})

export class ConfirmDeleteComponent {

  constructor(
    private config: ConfigService,
    private dialogService: DialogService,
    private manageMerchantService: ManageMerchantService,
  ) {}

  closeDialog() {
    this.dialogService.hideDialog();
  }

  confirmDialog() {
    const id = this['data'].id;

    this.manageMerchantService.deleteClient(this.config.merchantPath, id)
      .flatMapTo(this.manageMerchantService.getAllClients(this.config.merchantPath))
      .subscribe(clients => this.manageMerchantService.clientsUpdated.next(clients));

    this.dialogService.hideDialog();
  }
}
