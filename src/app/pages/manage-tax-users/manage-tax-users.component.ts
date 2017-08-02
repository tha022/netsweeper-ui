import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { ManageTaxUserService } from './manage-tax-users.service';
import { ConfigService } from '../../config/config.service';
import { DialogService } from '../shared/dialog/dialog.service';
import { ConfirmationComponent } from './confirm/confirm.component';

@Component({
  selector: 'manage-tax-user',
  templateUrl: './manage-tax-users.component.html',
  styleUrls: ['./manage-tax-users.component.css']
})
export class ManageTaxUserComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<any> = new Subject<any>();
  clients: any;

  constructor(
    private manageTaxUserService: ManageTaxUserService,
    private config: ConfigService,
    private dialogService: DialogService,
    private route: Router
  ) {}

  ngOnInit() {
    this.manageTaxUserService.getAllClients(this.config.taxUserPath)
      .takeUntil(this.unsubscribe)
      .subscribe(clients => {
        this.clients = clients;
      });
  }

  editClient(id: number): void {
    this.route.navigateByUrl(`pages/users/${id}`);
  }

  deleteClient(id: number): void {
    this.dialogService.showDialog(ConfirmationComponent, { id });

    this.manageTaxUserService.clientsUpdated
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
