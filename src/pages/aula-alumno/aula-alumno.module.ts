import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulaAlumnoPage } from './aula-alumno';

@NgModule({
  declarations: [
    AulaAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(AulaAlumnoPage),
  ],
})
export class AulaAlumnoPageModule {}
