import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioProfesorPage } from './inicio-profesor';

@NgModule({
  declarations: [
    InicioProfesorPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioProfesorPage),
  ],
})
export class InicioProfesorPageModule {}
