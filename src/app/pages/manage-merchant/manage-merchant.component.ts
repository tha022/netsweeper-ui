import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from '../../config/config.service';
import { ManageMerchantService } from './manage-merchant.service';

@Component({
  selector: 'manage-merchant',
  templateUrl: './manage-merchant.component.html',
  styleUrls: ['./manage-merchant.component.scss'],
})
export class ManageMerchantComponent {
    clients: any;

  constructor(
    private manageMerchantService: ManageMerchantService,
    private config: ConfigService,
    private route: Router,
  ) {}

  ngOnInit() {
    this.manageMerchantService.getAllClients('merchants').subscribe(clients => {
      this.clients = clients;
    });
  }

  editClient(id: string): void {
    this.route.navigateByUrl(`pages/merchants/${id}`);
  }

  deleteClient(id: string): void {
    this.manageMerchantService.deleteClient(this.config.merchantPath, id).subscribe(v => {
      this.manageMerchantService.getAllClients('merchants').subscribe(clients => {
        this.clients = clients;
      });
    });
  }
    // edit: {
    //   editButtonContent: '<i class="ion-edit"></i>',
    //   saveButtonContent: '<i class="ion-checkmark"></i>',
    //   cancelButtonContent: '<i class="ion-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="ion-trash-a"></i>',
    //   confirmDelete: true,
    // },
    

  //  constructor(protected service: ManageMerchantService) {
  //   this.service.getData().then((data) => {
  //     this.source.load(data);
  //   });
  // }

  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }
}
