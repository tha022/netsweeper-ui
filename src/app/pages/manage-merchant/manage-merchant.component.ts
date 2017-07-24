import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ManageMerchantService } from './manage-merchant.service';

@Component({
  selector: 'manage-merchant',
  templateUrl: './manage-merchant.component.html',
  styleUrls: ['./manage-merchant.component.scss'],
})
export class ManageMerchantComponent {
    query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'string',
      },
      merchantName: {
        title: 'Merchant Name',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      phoneNumber: {
        title: 'Phone Number',
        type: 'string',
      },
      vatNumber: {
        title: 'VAT Number',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

   constructor(protected service: ManageMerchantService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
