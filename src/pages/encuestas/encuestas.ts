import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DescargarArchivoPage } from '../descargar-archivo/descargar-archivo';
import { EncuestasAltaPage } from '../encuestas-alta/encuestas-alta';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { EncuestasEditarPage } from '../encuestas-editar/encuestas-editar';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the EncuestasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuestas',
  templateUrl: 'encuestas.html',
})
export class EncuestasPage {

  encuestas: any=[];
respuesta;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider, public db:AngularFireDatabase, public alertCtrl:AlertController,private nativeAudio: NativeAudio) {

    this.db.list('/encuestas').
    subscribe( data => {
    this.encuestas=data;

   // console.log(this.encuestas);

   this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
   this.nativeAudio.play('1');

  });

  //console.log(this.encuestas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestasPage');
  }

  RedireccionCrearCuestionario()
  {
    this.navCtrl.push(EncuestasAltaPage); 
  }


  eliminarEncuesta(encuesta){
    let alert = this.alertCtrl.create({
      title: 'Atencion!!!',
      cssClass:"miClaseAlert",
      subTitle: 'Desea eliminar la encuesta?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('se canceloooo');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.fireService.eliminarEncuesta(encuesta);
          }
        }
      ]
    });
    alert.present();    
  }

  modificarEncuesta(e)
  {
    this.navCtrl.push(EncuestasEditarPage,{encuesta:e});   
  }

}
