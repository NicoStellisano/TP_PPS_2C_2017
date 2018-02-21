import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
import {MateriasProfesorPage} from '../materias-profesor/materias-profesor';
import { NativeAudio } from '@ionic-native/native-audio';

import { SettingProvider } from '../../providers/setting/setting';

import { TemaCustom } from '../../models/tema-custom/tema-custom';
/**
 * Generated class for the NotificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificacion',
  templateUrl: 'notificacion.html',
})
export class NotificacionPage {
  
aula;
titulo;
mensaje;

selectTheme:String;
miTema:TemaCustom;
tema:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,private alertCtrl: AlertController,private nativeAudio: NativeAudio) {
    //tema custom
    this.miTema = {colorFondo:"",colorLetra:"",colorBoton:"",colorNav:"",sizeLetra:"",tipoLetra:"",radioButton:"",iconoAgregar:"",iconoTema:""};
    this.tema = localStorage.getItem('tema');
    localStorage.setItem('home',"profesor");
    console.log("-- *** Tema constructor: "+this.tema);

    if(this.tema == "custom"){
      console.log("Ingresa a custom");
      this.miTema = JSON.parse(localStorage.getItem('miTema'));
    }else{
      this.miTema.iconoAgregar = "basket";
      this.miTema.iconoTema = "brush";
      console.log(this.miTema);
    }

    this.aula = this.navParams.get('aulaa');
    console.log("dsadada"+this.aula);

    this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
    this.nativeAudio.play('1');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionPage');
  }

  Guardar()
  {


    this.db.list('/notificacionesProfesor/').push({
      titulo: this.titulo,
      mensaje: this.mensaje,
      curso: this.aula    
    }).then( () => {
      
      this.titulo="";
      this.mensaje="";
    



      let alert = this.alertCtrl.create({
        title: "Exitosamente!",
        subTitle: "Se envío el mensaje de importancia",
        cssClass:"miClaseAlert",
      buttons: ['Aceptar']
    });
     alert.present();

    })
    .catch( () => {
    });




    //this.navCtrl.setRoot(AulaProfesorPage);



  }










}
