<<<<<<< HEAD
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
=======
import { Component,ViewChild } from '@angular/core';
import { IonicPage,Content, NavController, NavParams } from 'ionic-angular';
>>>>>>> 159f14dd736e5910bae060b83d1063c6f78774cd
import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';

import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';

import { NotificacionPage } from '../notificacion/notificacion';
import { MateriaPage } from '../materia/materia';
import { EncuestasPage } from '../encuestas/encuestas';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TomarListaPage } from '../tomar-lista/tomar-lista';
import { NativeAudio } from '@ionic-native/native-audio';
/**
 * Generated class for the AulaProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aula-profesor',
  templateUrl: 'aula-profesor.html',
})
export class AulaProfesorPage {

  listaAlumnos:AlumnoItem[] = [];
  aula:string;
  datosMaterias;
<<<<<<< HEAD
  datosfaltas;
=======
  materia:string;
>>>>>>> 159f14dd736e5910bae060b83d1063c6f78774cd


<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,private nativeAudio: NativeAudio,private toastCtrl:ToastController ) {
    this.aula = this.navParams.get('aulaa');
    //alert(this.aula);
=======
  @ViewChild(Content) content: Content;  
  view: number[] = [700, 150];
  view2: number[] = [700, 150];
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showLegend: boolean;
  interval: number;
  
  listadoFaltas:Array<any>=[];
  
>>>>>>> 159f14dd736e5910bae060b83d1063c6f78774cd

  informacion: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,private nativeAudio: NativeAudio) {
    this.aula = this.navParams.get('aula');
this.materia= this.navParams.get('materia');
 


  

    
    this.nativeAudio.preloadComplex('bienvenidoProfesor', 'assets/sonidos/bienvenidoProfesor.mp3', 1, 1, 0);
    this.nativeAudio.play('bienvenidoProfesor');

    this.db.list('/notificacionFalta').
    subscribe( data => {
    this.datosfaltas=data;
    console.log(this.datosfaltas);


    for(let i=0;i<this.datosfaltas.length;i++){

      //if(localStorage.getItem("mail")==this.datosfaltas[i].mail){
        

          let toast = this.toastCtrl.create({
            message: 'El alumno'+' '+this.datosfaltas[i].alumno+' '+'tiene'+ ' '+this.datosfaltas[i].cantidadFaltas+' '+ 'faltas!!!'    ,
            duration: 4000,
            position: 'top'
          });
        
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
           
          });
        
          toast.present();
     //CIERRE IF }

                            } 
    });
  }

  applyDimensions() {
    const width = this.content.getContentDimensions().contentWidth - 50;
    const state = width >= 320;
    this.showXAxisLabel = state;
    this.showYAxisLabel = state;
    this.showLegend = state;
    this.view = [width, 150];
  }
  ionViewDidLoad() {
    this.applyDimensions();
    window.addEventListener('resize', () => {
      this.applyDimensions();
    }, false);
    this.informacion=[
      {
        'name':'Si',
        'value':4
      },
      {
        'name':'No',
        'value':5
      }
      ];
     
    //mofificar por la ruta y el archivo de bienvenida
   // this.nativeAudio.preloadComplex('bienvenido', 'assets/piano/1.mp3', 1, 1, 0);
  //  this.nativeAudio.play('bienvenido');

  }

  tomaLista(){
   // alert("voy a tomar lista");
   this.navCtrl.push(TomarListaPage,{aulaa:this.aula,materia:this.materia});
  }

  crearNotificacion(){
    console.log(this.aula);
    this.navCtrl.push(NotificacionPage,{aulaa:this.aula,materia:this.materia});
    
  }

  cargarLista(){
    this.navCtrl.push(CagarArchivoPage,{persona:"alumno"});
  //  alert("voy a cargar lista");
    //alert("voy a cargar lista");
  }

  mostrarQr(){
    //alert("voy a qr");
    this.navCtrl.push(MateriaPage,{aulaa:this.aula,materia:this.materia});
  }

  Encuestas()
  {
    this.navCtrl.push(EncuestasPage,{aulaa:this.aula,materia:this.materia}); 
  }




}
