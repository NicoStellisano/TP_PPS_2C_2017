import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { EncuestasPage } from '../encuestas/encuestas';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,private alertCtrl:AlertController) {
   this.encuestaAmodificar= this.navParams.get('encuesta');
  // console.log(this.encuestaAmodificar)
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
