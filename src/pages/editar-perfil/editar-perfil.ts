import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';

import { InicioAlumnoPage } from '../inicio-alumno/inicio-alumno';
/**
 * Generated class for the EditarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {
  public datos;
  datosUsuario:any= {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public alertCtrl:AlertController) {
    //deberia traer que usuario esta logueado y hacer una busqueda en firebase, mostrar los datos y modificar
    let mail= "mauro@algo.com"

    this.db.list('/personas/alumnos').
    subscribe( data => {
    this.datos=data;
    console.log(this.datos);

    for(let i=0;i<this.datos.length;i++)
      {
        if(this.datos[i].Email==mail)
          {
         //   this.datosUsuario.password=this.datos[i].password;
            
          }
      }

    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPerfilPage');
  }





  Guardar()
  {
    let alert = this.alertCtrl.create({
      title: "Exitoso!",
      subTitle: "Su contraseña ha sido modificada",
      cssClass:"miClaseLaert",
    buttons: ['Aceptar']
  });
   alert.present();
    
   this.navCtrl.push(InicioAlumnoPage);
  }








}
