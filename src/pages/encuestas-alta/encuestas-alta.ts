import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { EncuestasPage } from '../encuestas/encuestas';
import { NativeAudio } from '@ionic-native/native-audio';
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
  horaActual;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,private alertCtrl:AlertController,private nativeAudio: NativeAudio) {
    this.creadorEncuesta=localStorage.getItem("Email");
    this.nativeAudio.preloadComplex('2', 'assets/sonidos/2.mp3', 1, 1, 0);
    this.nativeAudio.play('2');

    this.horaActual= new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestasAltaPage');
  }

  Guardar()
  {

    if(this.respuesta1 || this.respuesta2 )
      {
        
        switch(this.duracion)
        {
          case '5 minutos':
          this.horaActual.setMinutes(this.horaActual.getMinutes()+5);
          break;
          case '30 minutos':
          this.horaActual.setMinutes(this.horaActual.getMinutes()+30);
          break;
          case '55 minutos':
          this.horaActual.setMinutes(this.horaActual.getMinutes()+55);
          break;

        }
        switch(this.formato)
        {
          case 'Radio botones':
          this.formato="Radio botones";
          break;
          case 'Botones':
          this.formato="Botones";
          break;
          case 'Selección de opciones':
          this.formato="Selección de opciones";
          break;

        }
        
        this.fireService.agregarEncuesta({
          nombre:this.nombre,
          pregunta:this.pregunta,
          respuesta1:this.respuesta1,
          respuesta2:this.respuesta2,
          formato:this.formato,
          duracion:this.duracion,
          horaFinalizacion: this.horaActual.getHours()+ ":" +  this.horaActual.getMinutes(),
          creadorEncuesta:this.creadorEncuesta});

          let alert = this.alertCtrl.create({
            title: 'Exito!',
            subTitle: 'Encuesta cargada exitosamente',
            cssClass:"miClaseAlert",
          buttons: ['Listo']
        });
         alert.present();
      
          this.navCtrl.push(EncuestasPage);
          
 
    }
      else
        {
          let alert = this.alertCtrl.create({
            title: "Info",
            subTitle: "Faltan datos",
            cssClass:"miClaseDanger",
          buttons: ['Aceptar']
        });
         alert.present();
        }

    /*
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
    */
  }

}
