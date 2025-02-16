import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';
import { AlumnoListaItem } from '../../models/alumno-lista/alumno-lista.interface';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

import { AlumnoListaPresente } from '../../models/aulmno-lita-presente/alumno-lista-presente.interface';
import { AlumnoPresenteItem } from '../../models/alumno-presente/alumno-presente.interface';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';

import { AlertController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
/**
 * Generated class for the TomarListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tomar-lista',
  templateUrl: 'tomar-lista.html',
})
export class TomarListaPage {

  tomarListaSubscription: Subscription;
  aula:string;
  miAula:string;
  alumnoPresente = {} as AlumnoListaPresente;
  alumnoItem = {} as AlumnoItem;
  listaAlumnos:AlumnoItem[] = [];
  alumnoPresenteLista:AlumnoPresenteItem[]=[];
  persona:string;
  
  tomarAlumnos$:FirebaseListObservable<AlumnoItem[]>;
  tomarPresente$:FirebaseObjectObservable<AlumnoItem>;

  constructor(public navCtrl: NavController,private fbService:FireBaseServiceProvider ,
    public navParams: NavParams,private database: AngularFireDatabase,private alertCtrl: AlertController,private nativeAudio: NativeAudio) {
    this.aula = this.navParams.get('aulaa');
    console.log(this.aula);
  //  this.persona = this.navParams.get('persona');
    
    if(this.aula == "4A"){
      this.tomarAlumnos$ = this.database.list('tomarA');
      this.miAula = "tomarA";
    }else{
      this.tomarAlumnos$ = this.database.list('tomarB');
      this.miAula = "tomarB";
    }

    this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
    this.nativeAudio.play('1');

  // this.notificacionFalta("pepe","ortiz@utn",3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TomarListaPage');
    //this.tomarListaSubscription.unsubscribe();
  }

  presente(alumno:AlumnoItem){
    let fecha = new Date();
    console.log("Fecha: "+fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear());
    let mifecha:string = fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear();
    this.database.list('/alumnosPresentes/').push({fecha:mifecha,nombre:alumno.nombre});
    console.log("-------------- ingreso a presente --------------");

    console.log(alumno);

    this.presentAlert("Asistencia",alumno.nombre +" :Presente");
  }

  ausente(key:any,alumno:AlumnoItem){
    let fecha = new Date();
    console.log("Fecha: "+fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear());
    let mifecha:string = fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear();
    this.database.list('/alumnosAusentes/').push({fecha:mifecha,nombre:alumno.nombre});
    console.log("-------------- ingreso a ausente ---------------");
    console.log(key);
    let cont = 0;
    
    if(alumno.contPresentes <= 3){
      //console.log("entro al menora 3");
      if(alumno.contPresentes == 3){
      //  alert("push notification");
       //this.notificacionFalta(alumno.nombre,alumno.mail,alumno.contPresentes)
        this.notificacionFalta(alumno.nombre,alumno.mail,alumno.contPresentes);
        return;
      }else{
        console.log("entro al contador ++");
        //cont++;
        alumno.contPresentes += 1;
      }
    }

    this.tomarPresente$ = this.database.object(`${this.miAula}/${key}`);
    //console.log(alumno.contPresentes++);
    this.tomarListaSubscription = this.tomarPresente$.subscribe(alumnoItem => this.alumnoItem = alumnoItem);
    this.tomarPresente$.update(alumno);

    this.presentAlert("Asistencia",alumno.nombre +" :Ausente");
  }

  presentAlert(titulo,subtitulo) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      cssClass:"miClaseAlert",
      buttons: ['Aceptar']
    });
    alert.present();
  }

  notificacionFalta(nombre,mail,contAusentes)
  {
    console.log(nombre,contAusentes);
   
   this.database.list('/notificacionFalta/').push({
    alumno: nombre,
    mail: mail,
    cantidadFaltas: contAusentes
    
  }).then( () => {
    
  })
  .catch( () => {
  });

  }




}
