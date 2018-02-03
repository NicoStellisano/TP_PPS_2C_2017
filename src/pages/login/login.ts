import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
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
import { MateriasPage } from '../materias/materias';
import { EncuestasAltaPage } from '../encuestas-alta/encuestas-alta';
import { EncuestasPage } from '../encuestas/encuestas';
import { QrEncuestasPage } from '../qr-encuestas/qr-encuestas';


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

  oct = {email:'octaviovillegas@gmail.com',password:'28123654'};
  dal = {email:'adiliberti@utn',password:'103295'};
  mauroo= {email:'mauro.suppan@gmail.com',password:'28123654'};
  maxii= {email:'maxineiner@gmail.com',password:'29134587'};
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public fireService:FireBaseServiceProvider
    ,public toast:ToastController,public googlePlus:GooglePlus ,private screenOrientation: ScreenOrientation, public alertCtrl:AlertController ) {
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
            }

  octa(){
    this.email = this.oct.email;
    this.password = this.oct.password;
  }

  dale(){
    this.email = this.dal.email;
    this.password = this.dal.password;
  }

  mauro()
  {
    this.email = this.mauroo.email;
    this.password = this.mauroo.password;
  }
maxi()
{
  this.email = this.maxii.email;
  this.password = this.maxii.password;
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
    localStorage.clear();
    

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
          for (let i = 0; i < this.listadoAdmins.length; i++) {
            let element = this.listadoAdmins[i];
            if(element.Email==firebase.auth().currentUser.email)
            {                
              
               localStorage.setItem("Nombre",element.Nombre);
               localStorage.setItem("Email",element.Email);
               localStorage.setItem("Apellido",element.Apellido);                
               localStorage.setItem("DNI",element.DNI);
               localStorage.setItem("password",element.password);
               localStorage.setItem("Perfil",element.Perfil);
               
               this.navCtrl.setRoot(InicioAdminPage);
                flag=true;
                break;
              }
            }
            if(!flag)
            {
              for (let i = 0; i < this.listadoAdministrativos.length; i++) {
                let element = this.listadoAdministrativos[i];
                if(element.Email==firebase.auth().currentUser.email)
                {            
                  element.password=null;  
                  localStorage.setItem("Nombre",element.Nombre);
                  localStorage.setItem("Email",element.Email);
                  localStorage.setItem("Apellido",element.Apellido);                
                  localStorage.setItem("DNI",element.DNI);
                  localStorage.setItem("password",element.password);
                  localStorage.setItem("Perfil",element.Perfil);                
                    this.navCtrl.setRoot(RealInicioAdministrativoPage);
                    flag=true;
                    break;
                  }
                }
            }
            if(!flag)
            {

              for (let i = 0; i < this.listadoAlumnos.length; i++) {
                if(flag)
                {
                  break;
                }
                let element = this.listadoAlumnos[i];
               
                  for (let j = 0; j < element.alumnos.length; j++) {
                    let element2 = element.alumnos[j];
                    if(element2.mail==firebase.auth().currentUser.email)
                    {
                      localStorage.setItem("nombre",element2.nombre);
                      localStorage.setItem("mail",element2.mail);
                      localStorage.setItem("curso",element.aula);                
                      localStorage.setItem("legajo",element2.legajo);
                      localStorage.setItem("turno",element2.turno);
                      this.navCtrl.setRoot(MateriasPage);
                      flag=true;
                      break;
                    }else if(element2.mail==this.email && element2.legajo==this.password)
                    {
                      let alert = this.alertCtrl.create({
                        title: "Info",
                        subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                        cssClass:"miClaseDanger",
                      buttons: ['Aceptar']
                    });
                     alert.present();
                     
              //        this.google=true;
                    } 
                  }
                  
                
                }
              
                
            }
            if(!flag)
            {
              for (let k = 0; k < this.listadoProfesores.length; k++) {
                let elementk = this.listadoProfesores[k];
                if(elementk.Email==firebase.auth().currentUser.email)
                {      
                  elementk.password=null;               
                  localStorage.setItem("Nombre",elementk.Nombre);
                  localStorage.setItem("Email",elementk.Email);
                  localStorage.setItem("Apellido",elementk.Apellido);                
                  localStorage.setItem("DNI",elementk.DNI);
                  localStorage.setItem("password",elementk.password);
                  localStorage.setItem("Perfil","Profesor");   
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
            
          

if(!flag)
{


  this.googlePlus.disconnect();   
  
  let alert = this.alertCtrl.create({
    title: "Info!",
    subTitle: "Usuario no registrado",
    cssClass:"miClaseDanger",
  buttons: ['Aceptar']
});
 alert.present();
 
}
          
        }).catch((err) => {
          let alert = this.alertCtrl.create({
            title: "Info!",
            subTitle: "Autentificacion fallida",
            cssClass:"miClaseDanger",
          buttons: ['Aceptar']
        });
         alert.present();
        })
        
      }).catch((err) => {
        
        let alert = this.alertCtrl.create({
          title: "Info!",
          subTitle: "Error Desconocido",
          cssClass:"miClaseDanger",
        buttons: ['Aceptar']
      });
       alert.present();
    });
    /*
    this.googlePlus.login({'webClientId':'822117994633-eau5gidg0q2f1sqltdbnq68mscsrpfui.apps.googleusercontent.com','offline':true})
    .then(res=>
    {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.accessTAceptaren))
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
    localStorage.clear();
    
    let flag:boolean;
    for (let i = 0; i < this.listadoAdmins.length; i++) {
      let element = this.listadoAdmins[i];
      if(element.Email==this.email && element.password==this.password)
      {                
          this.navCtrl.setRoot(InicioAdminPage);
          localStorage.setItem("Nombre",element.Nombre);
          localStorage.setItem("Email",element.Email);
          localStorage.setItem("Apellido",element.Apellido);                
          localStorage.setItem("DNI",element.DNI);
          localStorage.setItem("password",element.password);
          localStorage.setItem("Perfil",element.Perfil);
          flag=true;
          break;
        }else if(element.Email==this.email && element.password==null)
        {
          let alert = this.alertCtrl.create({
            title: "Info!",
            subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
            cssClass:"miClaseDanger",
          buttons: ['Aceptar']
        });
         alert.present();
         // this.google=true;
        }
      }
      if(!flag)
      {
        for (let i = 0; i < this.listadoAdministrativos.length; i++) {
          let element = this.listadoAdministrativos[i];
          if(element.Email==this.email && element.password==this.password)
          {                
            localStorage.setItem("Nombre",element.Nombre);
            localStorage.setItem("Email",element.Email);
            localStorage.setItem("Apellido",element.Apellido);                
            localStorage.setItem("DNI",element.DNI);
            localStorage.setItem("password",element.password);
            localStorage.setItem("Perfil",element.Perfil);
              this.navCtrl.setRoot(RealInicioAdministrativoPage);
              flag=true;
              break;
            }else if(element.Email==this.email && element.password==null)
            {
              let alert = this.alertCtrl.create({
                title: "Info!",
                subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                cssClass:"miClaseAlert",
              buttons: ['Aceptar']
            });
             alert.present();
              //this.google=true;
            }
          }
      }
      if(!flag)
      {

       
        for (let i = 0; i < this.listadoAlumnos.length; i++) {
          if(flag)
          {
            break;
          }
          let element = this.listadoAlumnos[i];
         
            for (let j = 0; j < element.alumnos.length; j++) {
              let element2 = element.alumnos[j];
              if(element2.mail==this.email && element2.legajo == this.password)
              {
                localStorage.setItem("nombre",element2.nombre);
                localStorage.setItem("mail",element2.mail);
                localStorage.setItem("curso",element.aula);                
                localStorage.setItem("legajo",element2.legajo);
                localStorage.setItem("turno",element2.turno);
                this.navCtrl.setRoot(MateriasPage);
                flag=true;
                break;
               
              }else if(element2.mail==this.email && element2.legajo!=this.password)
              {
                let alert = this.alertCtrl.create({
                  title: "Info!",
                  subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                  cssClass:"miClaseDanger",
                buttons: ['Aceptar']
              });
               alert.present();
              //  this.google=true;
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
              alert("Contraseña incorrecta,prueba iniciar Sesión con Google porfavor");
              //this.google=true;
            }
          }*/
      
      if(!flag)
      {
        for (let h = 0; h < this.listadoProfesores.length; h++) {
          let elementh = this.listadoProfesores[h];
          if(elementh.Email==this.email && elementh.password==this.password)
          {                
            localStorage.setItem("Nombre",elementh.Nombre);
            localStorage.setItem("Email",elementh.Email);
            localStorage.setItem("Apellido",elementh.Apellido);                
            localStorage.setItem("DNI",elementh.DNI);
            localStorage.setItem("password",elementh.password);
            localStorage.setItem("Perfil","Profesor");
            flag=true;
            
              this.navCtrl.setRoot(InicioProfesorPage);
        
              break;
            }else if(elementh.Email==this.email && elementh.password==null)
            {
              let alert = this.alertCtrl.create({
                title: "Info!",
                subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                cssClass:"miClaseDanger",
              buttons: ['Aceptar']
            });
             alert.present();
              //this.google=true;
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

let alert = this.alertCtrl.create({
  title: "Info!",
  subTitle: "Usuario no registrado o contraseña incorrecta",
  cssClass:"miClaseDanger",
buttons: ['Aceptar']
});
alert.present();

}
  }

  /*selectChange()
  {
    


     this.email="nicostellisano@hotmail.com";
     this.password="niconico";
 
}*/
}
    

