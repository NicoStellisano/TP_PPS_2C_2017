import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrencuestaPage } from './qrencuesta';

@NgModule({
  declarations: [
    QrencuestaPage,
  ],
  imports: [
    IonicPageModule.forChild(QrencuestaPage),
  ],
})
export class QrencuestaPageModule {}
