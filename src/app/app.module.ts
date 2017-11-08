import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InicioAdminPage} from '../pages/inicio-admin/inicio-admin';
import { InicioAdministrativoPage} from '../pages//inicio-administrativo/inicio-administrativo';
import { InicioProfesorPage} from '../pages/inicio-profesor/inicio-profesor';
import { InicioAlumnoPage} from '../pages/inicio-alumno/inicio-alumno';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FireBaseServiceProvider } from '../providers/fire-base-service/fire-base-service';
import {HttpModule} from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ButtonRenderComponent } from '../components/button-renderer/button-renderer';
import { MateriasPage} from '../pages/materias/materias';
import { MateriasProfesorPage} from '../pages/materias-profesor/materias-profesor';

var config = {
  apiKey: "AIzaSyAyMMkFUgvDYxYawz6yGUWlSaHyyk32QAo",
  authDomain: "controlalumnos-6cbb9.firebaseapp.com",
  databaseURL: "https://controlalumnos-6cbb9.firebaseio.com",
  projectId: "controlalumnos-6cbb9",
  storageBucket: "",
  messagingSenderId: "822117994633"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    InicioAdminPage,
    InicioAdministrativoPage,
    InicioProfesorPage,
    InicioAlumnoPage,
    ButtonRenderComponent,
    MateriasPage,
    MateriasProfesorPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2SmartTableModule,    
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,    
    AngularFireModule.initializeApp(config)

    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    InicioAdminPage,
    InicioAdministrativoPage,
    InicioProfesorPage,
    InicioAlumnoPage,
    ButtonRenderComponent,
    MateriasPage,
    MateriasProfesorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FireBaseServiceProvider
  ]
})
export class AppModule {}
