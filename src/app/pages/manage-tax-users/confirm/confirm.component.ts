import { Component, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { DialogService } from '../../shared/dialog/dialog.service';
import { ManageTaxUserService } from '../manage-tax-users.service';
import { ConfigService } from '../../../config/config.service';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})

export class ConfirmationComponent {

  constructor(
    private dialogService: DialogService,
    private manageService: ManageTaxUserService,
    private config: ConfigService
  ) {}

  closeDialog() {
    this.dialogService.hideDialog();
  }

  confirmDialog() {
    const id = this['data'].id;

    this.manageService.deleteClient(this.config.taxUserPath, id).subscribe(() => {
      this.manageService.getAllClients(this.config.taxUserPath).subscribe(clients => {
        this.manageService.clientsUpdated.next(clients);
      });
    });

    this.dialogService.hideDialog();
  }
}
