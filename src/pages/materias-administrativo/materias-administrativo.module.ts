import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriasAdministrativoPage } from './materias-administrativo';

@NgModule({
  declarations: [
    MateriasAdministrativoPage,
  ],
  imports: [
    IonicPageModule.forChild(MateriasAdministrativoPage),
  ],
})
export class MateriasAdministrativoPageModule {}
