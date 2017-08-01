import {
  Directive,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  Output,
  EventEmitter,
  ViewContainerRef } from '@angular/core';

import { DialogComponent } from './dialog.component';

@Directive({
  selector: '[dialogAnchor]'
})
export class DialogAnchorDirective {
  @Output() confirmation = new EventEmitter<boolean>();
  componentRef: any;

  constructor(
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  createDialog(component: any, data) {
    this.viewContainer.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.viewContainer.createComponent(factory);
    this.componentRef._component.data = data;

    return this.componentRef;
  }

  removeDialog() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}
