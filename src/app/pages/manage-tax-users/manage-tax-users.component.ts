import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ManageTaxUserService } from './manage-tax-users.service';
import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'manage-tax-user',
  templateUrl: './manage-tax-users.component.html',
  styleUrls: ['./manage-tax-users.component.css']
})
export class ManageTaxUserComponent implements OnInit {
  clients: any;

  constructor(
    private manageTaxUserService: ManageTaxUserService,
    private config: ConfigService,
    private route: Router
  ) {}

  ngOnInit() {
    this.manageTaxUserService.getAllClients('taxusers').subscribe(clients => {
      this.clients = clients;
    });
  }

  editClient(id: number): void {
    this.route.navigateByUrl(`pages/users/${id}`);
  }

  deleteClient(id: number): void {
    this.manageTaxUserService.deleteClient(this.config.taxUserPath, id).subscribe(v => {
      this.manageTaxUserService.getAllClients('taxusers').subscribe(clients => {
        this.clients = clients;
      });
    });
  }

}
