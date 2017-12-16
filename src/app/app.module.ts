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
import { AulaAlumnoPage } from '../pages/aula-alumno/aula-alumno';
import { AulaAdministrativoPage } from '../pages/aula-administrativo/aula-administrativo';
import { AulaProfesorPage } from '../pages/aula-profesor/aula-profesor';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FireBaseServiceProvider } from '../providers/fire-base-service/fire-base-service';
import {HttpModule} from '@angular/http';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { ButtonRenderComponent } from '../components/button-renderer/button-renderer';
import { MateriasPage} from '../pages/materias/materias';
import { MateriasProfesorPage} from '../pages/materias-profesor/materias-profesor';
import { GooglePlus } from '@ionic-native/google-plus';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { CuestionariosPage} from '../pages/cuestionarios/cuestionarios';
import { CagarArchivoPage } from '../pages/cagar-archivo/cagar-archivo';
import { AlumnosPage } from '../pages/alumnos/alumnos';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MateriaPage } from '../pages/materia/materia';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { DescargarArchivoPage } from '../pages/descargar-archivo/descargar-archivo';

import { NotificacionPage } from '../pages/notificacion/notificacion';
import { RealInicioAdministrativoPage } from '../pages/real-inicio-administrativo/real-inicio-administrativo';
import { AsignarMateriaPage } from '../pages/asignar-materia/asignar-materia';
import { EncuestasPage } from '../pages/encuestas/encuestas';
import { EncuestasAltaPage } from '../pages/encuestas-alta/encuestas-alta';
import { EncuestasEditarPage } from '../pages/encuestas-editar/encuestas-editar';
import { TomarListaPage } from '../pages/tomar-lista/tomar-lista';
import { NativeAudio } from '@ionic-native/native-audio';
import { RespuestaEncuestaPage } from '../pages/respuesta-encuesta/respuesta-encuesta';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MateriasAdministrativoPage } from '../pages/materias-administrativo/materias-administrativo';
import { QrencuestaPage } from '../pages/qrencuesta/qrencuesta';
<<<<<<< HEAD
=======
//import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { AbmAlumnosPage } from '../pages/abm-alumnos/abm-alumnos';

>>>>>>> 2de6d8c9e2607984395047e4389c3c24b03b136b




var config = {
  apiKey: "AIzaSyAyMMkFUgvDYxYawz6yGUWlSaHyyk32QAo",
  authDomain: "controlalumnos-6cbb9.firebaseapp.com",
  databaseURL: "https://controlalumnos-6cbb9.firebaseio.com",
  projectId: "controlalumnos-6cbb9",
  storageBucket: "controlalumnos-6cbb9.appspot.com",
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
    AulaAlumnoPage,
    AulaProfesorPage,
    AulaAdministrativoPage,
    ButtonRenderComponent,
    MateriasPage,
    MateriasProfesorPage,
    CuestionariosPage,
    CagarArchivoPage,
    AlumnosPage,
    MateriaPage,
    EditarPerfilPage,
    DescargarArchivoPage,
    NotificacionPage,
    RealInicioAdministrativoPage,
    AsignarMateriaPage,
    EncuestasPage,
    EncuestasAltaPage,
    EncuestasEditarPage,
    TomarListaPage,
    RespuestaEncuestaPage,
    MateriasAdministrativoPage,
    QrencuestaPage,
    AbmAlumnosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2SmartTableModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,  
    NgxChartsModule,    
    BrowserAnimationsModule,
    NoopAnimationsModule,
    
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
    AulaAlumnoPage,
    AulaAdministrativoPage,
    AulaProfesorPage,
    ButtonRenderComponent,
    MateriasPage,
    MateriasProfesorPage,
    CuestionariosPage,
    CagarArchivoPage,
    AlumnosPage,
    MateriaPage,
    EditarPerfilPage,
    DescargarArchivoPage,
    NotificacionPage,
    RealInicioAdministrativoPage,
    AsignarMateriaPage,
    EncuestasPage,
    EncuestasAltaPage,
    EncuestasEditarPage,
    TomarListaPage,
    RespuestaEncuestaPage,
    MateriasAdministrativoPage,
    QrencuestaPage,
    AbmAlumnosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FireBaseServiceProvider,
    BarcodeScanner,
    NativeAudio
  ]
})
export class AppModule {}
