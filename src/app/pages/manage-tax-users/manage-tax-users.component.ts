import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ManageTaxUserService } from './manage-tax-users.service';
import { ConfigService } from '../../config/config.service';
import { DialogService } from '../shared/dialog/dialog.service';
import { ConfirmationComponent } from './confirm/confirm.component';

@Component({
  selector: 'manage-tax-user',
  templateUrl: './manage-tax-users.component.html',
  styleUrls: ['./manage-tax-users.component.css'],
  entryComponents: [ConfirmationComponent]
})
export class ManageTaxUserComponent implements OnInit {
  clients: any;

  constructor(
    private manageTaxUserService: ManageTaxUserService,
    private config: ConfigService,
    private dialogService: DialogService,
    private route: Router
  ) {}

  ngOnInit() {
    this.manageTaxUserService.getAllClients(this.config.taxUserPath)
      .subscribe(clients => {
        this.clients = clients;
      });
  }

  editClient(id: number): void {
    this.route.navigateByUrl(`pages/users/${id}`);
  }

  deleteClient(id: number): void {
    this.dialogService.showDialog(ConfirmationComponent, { id });

    this.manageTaxUserService.clientsUpdated.subscribe(clients => {
      this.clients = clients;
    });
  }
}
