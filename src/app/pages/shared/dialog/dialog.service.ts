import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DialogService {
  dialogAction: Subject<any> = new Subject<any>();

  constructor() {}

  showDialog(component: any, data) {
    this.hideDialog();
    this.dialogAction.next({ action: 'show', component , data });
  }

  hideDialog() {
    this.dialogAction.next({ action: 'hide' });
  }
}
