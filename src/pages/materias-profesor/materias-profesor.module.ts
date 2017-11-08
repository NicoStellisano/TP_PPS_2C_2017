import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriasProfesorPage } from './materias-profesor';

@NgModule({
  declarations: [
    MateriasProfesorPage,
  ],
  imports: [
    IonicPageModule.forChild(MateriasProfesorPage),
  ],
})
export class MateriasProfesorPageModule {}
