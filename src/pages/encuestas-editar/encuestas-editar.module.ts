import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuestasEditarPage } from './encuestas-editar';

@NgModule({
  declarations: [
    EncuestasEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(EncuestasEditarPage),
  ],
})
export class EncuestasEditarPageModule {}
