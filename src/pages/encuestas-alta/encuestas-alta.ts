import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { EncuestasPage } from '../encuestas/encuestas';
/**
 * Generated class for the EncuestasAltaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuestas-alta',
  templateUrl: 'encuestas-alta.html',
})
export class EncuestasAltaPage {

  nombre="";
  pregunta="";
  respuesta1="";
  respuesta2="";
  duracion="";
  formato="";
  fechaInicio ="";
  fechaFinalizacion= "";
  creadorEncuesta;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,private alertCtrl:AlertController) {
    this.creadorEncuesta=localStorage.getItem("Email");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestasAltaPage');
  }

  Guardar()
  {
    this.fireService.agregarEncuesta({nombre:this.nombre,pregunta:this.pregunta,respuesta1:this.respuesta1,
    respuesta2:this.respuesta2,formato:this.formato,duracion:this.duracion,fechaInicio:this.fechaInicio,fechaFinalizacion:this.fechaFinalizacion,creadorEncuesta:this.creadorEncuesta});

    let alert = this.alertCtrl.create({
      title: 'Exito!',
      subTitle: 'Encuesta cargada exitosamente',
      cssClass:"miClaseAlert",
    buttons: ['Listo']
  });
   alert.present();

    this.navCtrl.push(EncuestasPage);
  }
}
