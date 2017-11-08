import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { InicioAdminPage} from '../inicio-admin/inicio-admin';
import { InicioAdministrativoPage} from '../inicio-administrativo/inicio-administrativo';
import { InicioProfesorPage} from '../inicio-profesor/inicio-profesor';
import { InicioAlumnoPage} from '../inicio-alumno/inicio-alumno';
import { ToastController } from 'ionic-angular';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireAuth } from 'angularfire2/auth';
// for database
import { AngularFireDatabase } from 'angularfire2/database';
// for Observables
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
listado:FirebaseListObservable<any>;
  usuarios:FirebaseListObservable<any[]>;
  usuario:string;
  usuarioo:any;
  password:string;
  objeto:FirebaseListObservable<any[]>;
  listadoUsuarios:any[] =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public fireService:FireBaseServiceProvider
    ,public toast:ToastController ) {
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `
         <img src="assets/spinner.gif">`,
        duration: 50000000,
        showBackdrop:false
        
      });
  loading.present();
      setTimeout(() => {
        loading.dismiss();
      }, 6000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(i:number)
  { 
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
       <img src="assets/spinner.gif">`,
      duration: 50000000,
      dismissOnPageChange:true
      
    });
    switch(i)
    {
      case 0:
      this.navCtrl.push(InicioAdminPage);
      break;
      case 1:
      this.navCtrl.push(InicioAdministrativoPage);
      break;
      case 2:
      this.navCtrl.push(InicioProfesorPage);
      break;
      case 3:
      this.navCtrl.push(InicioAlumnoPage);
      break;

    }

    
  }

  selectChange()
  {
    


     this.usuario="nicostellisano@hotmail.com";
     this.password="niconico";
 
}

}
