import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioAdministrativoPage } from './inicio-administrativo';

@NgModule({
  declarations: [
    InicioAdministrativoPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioAdministrativoPage),
  ],
})
export class InicioAdministrativoPageModule {}
