import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioAdminPage } from './inicio-admin';

@NgModule({
  declarations: [
    InicioAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioAdminPage),
  ],
})
export class InicioAdminPageModule {}
