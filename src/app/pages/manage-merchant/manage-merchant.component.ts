import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { ConfigService } from '../../config/config.service';
import { ManageMerchantService } from './manage-merchant.service';
import { DialogService } from '../shared/dialog/dialog.service';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@Component({
  selector: 'manage-merchant',
  templateUrl: './manage-merchant.component.html',
  styleUrls: ['./manage-merchant.component.scss'],
})
export class ManageMerchantComponent implements OnInit, OnDestroy {
    unsubscribe: Subject<any> = new Subject<any>();
    clients: any;

  constructor(
    private manageMerchantService: ManageMerchantService,
    private config: ConfigService,
    private dialogService: DialogService,
    private route: Router,
  ) {}

  ngOnInit() {
    this.manageMerchantService.getAllClients(this.config.merchantPath)
      .takeUntil(this.unsubscribe)
      .subscribe(clients => {
        this.clients = clients;
      });
  }

  editClient(id: string): void {
    this.route.navigateByUrl(`pages/merchants/${id}`);
  }

  deleteClient(id: string): void {
    this.dialogService.showDialog(ConfirmDeleteComponent, { id });

    this.manageMerchantService.clientsUpdated
      .takeUntil(this.unsubscribe)
      .subscribe(clients => {
        this.clients = clients;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
