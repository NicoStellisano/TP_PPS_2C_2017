import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuestasAltaPage } from './encuestas-alta';

@NgModule({
  declarations: [
    EncuestasAltaPage,
  ],
  imports: [
    IonicPageModule.forChild(EncuestasAltaPage),
  ],
})
export class EncuestasAltaPageModule {}
