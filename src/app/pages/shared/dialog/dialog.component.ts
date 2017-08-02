import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { DialogAnchorDirective } from './dialog.directive';
import { DialogService } from './dialog.service';

@Component({
  selector: 'dialog-message',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {
  @ViewChild(DialogAnchorDirective) dialog: DialogAnchorDirective;
  dialogAction: Subject<any>;

  constructor(private dialogService: DialogService) {
    this.dialogAction = dialogService.dialogAction;
  }

  ngOnInit() {
    this.dialogAction.subscribe((dialog: any) => {
      switch (dialog.action) {
        case 'show':
          this.hideDialog();
          this.showDialog(dialog.component, dialog.data);
          break;
        case 'hide':
          this.hideDialog();
          break;
      }
    });
  }

  showDialog(component: any, data) {
    this.dialog.createDialog(component, data);
  }

  hideDialog() {
    this.dialog.removeDialog();
  }
}
