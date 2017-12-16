import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { EncuestasPage } from '../encuestas/encuestas';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the EncuestasEditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuestas-editar',
  templateUrl: 'encuestas-editar.html',
})
export class EncuestasEditarPage {
  encuestaAmodificar;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,private alertCtrl:AlertController,private nativeAudio: NativeAudio) {
   this.encuestaAmodificar= this.navParams.get('encuesta');
  // console.log(this.encuestaAmodificar)
  this.nativeAudio.preloadComplex('2', 'assets/sonidos/2.mp3', 1, 1, 0);
  this.nativeAudio.play('2');
  console.log("-------------- Estoy en encuesta editar --------------");
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestasEditarPage');
  }

  EditarEncuestaa(encuesta)
  {
    this.fireService.editarEncuest(encuesta);

    let alert = this.alertCtrl.create({
      title: 'Exito!',
      subTitle: 'Encuesta modificada exitosamente',
      cssClass:"miClaseAlert",
    buttons: ['Listo']
  });
   alert.present();

    this.navCtrl.push(EncuestasPage);
  }

}
