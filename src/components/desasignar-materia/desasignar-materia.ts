import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
/**
 * Generated class for the DesasignarMateriaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  template: `
  <button  ion-button color='secondary' (click)="onClick()">Desasignar Materia</button>` ,
})
export class DesasignarMateriaComponent {
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
  



  