import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { InicioAdminPage} from '../inicio-admin/inicio-admin';
import { InicioAdministrativoPage} from '../inicio-administrativo/inicio-administrativo';
import { InicioProfesorPage} from '../inicio-profesor/inicio-profesor';
import { InicioAlumnoPage} from '../inicio-alumno/inicio-alumno';
import { ToastController } from 'ionic-angular';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireAuth } from 'angularfire2/auth';
// for databas
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { GooglePlus } from '@ionic-native/google-plus';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AulaAlumnoPage} from '../aula-alumno/aula-alumno';


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
  usuarios:FirebaseListObservable<any[]>;
  usuario:string;
  usuarioo:any;
  password:string;
  objeto:FirebaseListObservable<any[]>;
  listadoUsuarios:any[] =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public fireService:FireBaseServiceProvider
    ,public toast:ToastController,public googlePlus:GooglePlus ,private screenOrientation: ScreenOrientation ) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      
       this.fireService.getUsers().subscribe(data=>
        {
          this.listadoUsuarios=data;
        });  
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

  loginGoogle()
  {
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
    }, 4000);

    this.googlePlus.login({
      'webClientId': '822117994633-eau5gidg0q2f1sqltdbnq68mscsrpfui.apps.googleusercontent.com',
      'offline': true
    })
      .then((res) => {
        const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        firebase.auth().signInWithCredential(firecreds).then((res) => {
          for (var i = 0; i < this.listadoUsuarios.length; i++) {
            var element = this.listadoUsuarios[i];
            if(element.Email==firebase.auth().currentUser.email)
            {
              switch(element.Perfil)
              {
                case "admin":
                this.navCtrl.setRoot(InicioAdminPage);
                break;
                case "administrativo":
                this.navCtrl.setRoot(InicioAdministrativoPage);
                break;
                case "profesor":
                this.navCtrl.setRoot(InicioProfesorPage);
                break;
                case "alumno":
                this.navCtrl.setRoot(AulaAlumnoPage);
                break;
          
              }
            }
          }

if(element.Email!=firebase.auth().currentUser.email)
{
  this.googlePlus.disconnect();          
  const toast = this.toast.create({
    message: 'Usuario no registrado',
    duration: 3000,
    position: 'bottom'
  });


  toast.present();
}
         
        }).catch((err) => {
          alert('Autentificación fallida' + err);
        })
        
      }).catch((err) => {
        alert('Error' + err);
    });
    /*
    this.googlePlus.login({'webClientId':'822117994633-eau5gidg0q2f1sqltdbnq68mscsrpfui.apps.googleusercontent.com','offline':true})
    .then(res=>
    {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.accessToken))
      .then(suc=>
      {
        alert("Logeado");
      }).catch(ns=>
      {
        alert("No se logeo");
      })
    })*/
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
