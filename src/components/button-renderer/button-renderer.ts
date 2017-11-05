import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
  <button  ion-button color='secondary' (click)="onClick()">Asignar Materia</button>` ,
})
export class ButtonRenderComponent  implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}