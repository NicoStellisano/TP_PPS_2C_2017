import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioAlumnoPage } from './inicio-alumno';

@NgModule({
  declarations: [
    InicioAlumnoPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioAlumnoPage),
  ],
})
export class InicioAlumnoPageModule {}
