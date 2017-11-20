import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
//import { AulaAlumnoPage } from '../pages/aula-alumno/aula-alumno'; //test
//import { AulaAdministrativoPage } from '../pages/aula-administrativo/aula-administrativo';
//import { AulaProfesorPage } from '../pages/aula-profesor/aula-profesor';
import { CagarArchivoPage } from '../pages/cagar-archivo/cagar-archivo';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = LoginPage;
  rootPage:any = CagarArchivoPage; //test

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

