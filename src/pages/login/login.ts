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
import { RealInicioAdministrativoPage } from '../real-inicio-administrativo/real-inicio-administrativo';



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
  email:string;
  usuarioo:any;
  password:string;
  objeto:FirebaseListObservable<any[]>;
  listadoAdmins:any[] =[];
  listadoAlumnos:any[] =[];
  listadoProfesores:any[] =[];
  listadoAdministrativos:any[] =[];
  google:boolean;
  listaAux: any[]=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public fireService:FireBaseServiceProvider
    ,public toast:ToastController,public googlePlus:GooglePlus ,private screenOrientation: ScreenOrientation ) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.google=false;
       this.fireService.getAdmins().subscribe(data=>
        {
          this.listadoAdmins=data;
        });  
        this.fireService.getAdministrativos().subscribe(data=>
          {
            this.listadoAdministrativos=data;
          });
          this.fireService.getProfesores().subscribe(data=>
            {
              this.listadoProfesores=data;
            });
            this.fireService.getAlumnos().subscribe(data=>
              {
                this.listadoAlumnos=data;
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
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  ionViewWillLeave()
  {
    this.screenOrientation.unlock();
  }

  loginGoogle()
  {
    let flag:boolean=false;
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
          for (var i = 0; i < this.listadoAdmins.length; i++) {
            var element = this.listadoAdmins[i];
            if(element.Email==firebase.auth().currentUser.email)
            {                
               element.password=null;
                this.navCtrl.setRoot(InicioAdminPage);
                flag=true;
                break;
              }
            }
            if(!flag)
            {
              for (var i = 0; i < this.listadoAdministrativos.length; i++) {
                var element = this.listadoAdministrativos[i];
                if(element.Email==firebase.auth().currentUser.email)
                {            
                  element.password=null;                  
                    this.navCtrl.setRoot(RealInicioAdministrativoPage);
                    flag=true;
                    break;
                  }
                }
            }
            if(!flag)
            {
              for (var i = 0; i < this.listadoAlumnos.length; i++) {
                var element = this.listadoAlumnos[i];
                if(element.Email==firebase.auth().currentUser.email)
                {      
                   element.password=null;
                  
                    this.navCtrl.setRoot(AulaAlumnoPage);
                    flag=true;
                    break;
                  }
                }
            }
            if(!flag)
            {
              for (var i = 0; i < this.listadoProfesores.length; i++) {
                var element = this.listadoProfesores[i];
                if(element.Email==firebase.auth().currentUser.email)
                {      
                  element.password=null;                  
                    this.navCtrl.setRoot(InicioProfesorPage);
                    flag=true;
                    break;
                  }
                }
            }
                /*
                case "Administrativo":
                this.navCtrl.setRoot(InicioAdministrativoPage);
                break;
                case "Profesor":
                this.navCtrl.setRoot(InicioProfesorPage);
                break;
                case "Alumno":
                this.navCtrl.setRoot(AulaAlumnoPage);
                break;
          */
            
          

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
      this.navCtrl.push(RealInicioAdministrativoPage);
      break;
      case 2:
      this.navCtrl.push(InicioProfesorPage);
      break;
      case 3:
      this.navCtrl.push(InicioAlumnoPage);
      break;

    }

    
  }

  loginNormal()
  {
    
    let flag:boolean;
    for (var i = 0; i < this.listadoAdmins.length; i++) {
      var element = this.listadoAdmins[i];
      if(element.Email==this.email && element.password==this.password)
      {                
          this.navCtrl.setRoot(InicioAdminPage);
          flag=true;
          break;
        }else if(element.Email==this.email && element.password==null)
        {
          alert("Inicia Sesión con Google porfavor");
          this.google=true;
        }
      }
      if(!flag)
      {
        for (var i = 0; i < this.listadoAdministrativos.length; i++) {
          var element = this.listadoAdministrativos[i];
          if(element.Email==this.email && element.password==this.password)
          {                
              this.navCtrl.setRoot(RealInicioAdministrativoPage);
              flag=true;
              break;
            }else if(element.Email==this.email && element.password==null)
            {
              alert("Inicia Sesión con Google porfavor");
              this.google=true;
            }
          }
      }
      if(!flag)
      {

       
        for (let i = 0; i < this.listadoAlumnos.length; i++) {
          const element = this.listadoAlumnos[i];
          if(element.aula=="4° A")
          {
            for (let j = 0; j < element.alumnos.length; j++) {
              const element2 = element.alumnos[j];
              if(element2.mail==this.email && element2.legajo == this.password)
              {
                localStorage.setItem("nombre",element2.nombre);
                localStorage.setItem("mail",element2.mail);
                localStorage.setItem("legajo",element2.legajo);
                localStorage.setItem("turno",element2.turno);
                this.navCtrl.setRoot(AulaAlumnoPage);
                flag=true;
                break;
              }else if(element2.mail==this.email && element2.legajo==this.password)
              {
                alert("Inicia Sesión con Google porfavor");
                this.google=true;
              } 
            }
            
          }
        }


       /* for (var i = 0; i < this.listadoAlumnos.length; i++) {
          var element = this.listadoAlumnos[i];
          if(element.Email==this.email && element.password==this.password)
          {                
              this.navCtrl.setRoot(AulaAlumnoPage);
              flag=true;
              break;
            }else if(element.Email==this.email && element.password==null)
            {
              alert("Inicia Sesión con Google porfavor");
              this.google=true;
            }
          }*/
      }
      if(!flag)
      {
        for (var i = 0; i < this.listadoProfesores.length; i++) {
          var element = this.listadoProfesores[i];
          if(element.Email==this.email && element.password==this.password)
          {                
              this.navCtrl.setRoot(InicioProfesorPage);
              flag=true;
              break;
            }else if(element.Email==this.email && element.password==null)
            {
              alert("Inicia Sesión con Google porfavor");
              this.google=true;
            }
          }
      }
          /*
          case "Administrativo":
          this.navCtrl.setRoot(InicioAdministrativoPage);
          break;
          case "Profesor":
          this.navCtrl.setRoot(InicioProfesorPage);
          break;
          case "Alumno":
          this.navCtrl.setRoot(AulaAlumnoPage);
          break;
    */
      
    
    if(!flag)
{
this.googlePlus.disconnect();          
const toast = this.toast.create({
message: 'Usuario no registrado o contraseña incorrecta',
duration: 3000,
position: 'bottom'
});


toast.present();
}
  }

  /*selectChange()
  {
    


     this.email="nicostellisano@hotmail.com";
     this.password="niconico";
 
}*/

}
