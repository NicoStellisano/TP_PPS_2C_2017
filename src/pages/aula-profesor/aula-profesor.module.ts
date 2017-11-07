import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulaProfesorPage } from './aula-profesor';

@NgModule({
  declarations: [
    AulaProfesorPage,
  ],
  imports: [
    IonicPageModule.forChild(AulaProfesorPage),
  ],
})
export class AulaProfesorPageModule {}
