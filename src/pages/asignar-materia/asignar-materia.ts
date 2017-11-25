import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireAuth } from 'angularfire2/auth';
// for databas
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MateriaPage } from '../materia/materia';
import { ViewController } from 'ionic-angular';
/* Generated class for the AsignarMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asignar-materia',
  templateUrl: 'asignar-materia.html',
})
export class AsignarMateriaPage {
profesor:string;
curso:string;
materia:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,public viewCtrl: ViewController,public alertCtrl:AlertController) {
    this.profesor=this.navParams.get("profesor");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsignarMateriaPage');
  }

  asignar()
  {
    try {
      this.fireService.addMateria({profesor:this.profesor,curso:this.curso,nombre:this.materia});
      let alert = this.alertCtrl.create({
        title: "Exito!",
        subTitle: "Materia asignada",
        cssClass:"miClaseAlert",
      buttons: ['OK']
    });
     alert.present();
      this.viewCtrl.dismiss();
    } catch (error) {
      let alert = this.alertCtrl.create({
        title: "Error!",
        subTitle: "No se pudo cargar la materia",
        cssClass:"miClaseAlert",
      buttons: ['OK']
    });
     alert.present();
      console.log(error);
    }
      
  }

}
