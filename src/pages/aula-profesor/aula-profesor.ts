import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';

import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';

import { NotificacionPage } from '../notificacion/notificacion';
import { MateriaPage } from '../materia/materia';
import { EncuestasPage } from '../encuestas/encuestas';

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
  datosfaltas;

  listaAulass: any[] = [
    
      {
        "aula": "4A"
      },
      {
        "aula": "4B"
      }
     
    ];

    listaMaterias: any[] = [
      
        {
          "materia": "Programacion 4"
        },
        {
          "materia": "Practica profesional"
        }
       
      ];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,private nativeAudio: NativeAudio,private toastCtrl:ToastController ) {
    this.aula = this.navParams.get('aulaa');
    //alert(this.aula);

 


    this.db.list('/materias').
    subscribe( data => {
    this.datosMaterias=data;
    console.log(this.datosMaterias);


    });

    
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaProfesorPage');
    //mofificar por la ruta y el archivo de bienvenida
   // this.nativeAudio.preloadComplex('bienvenido', 'assets/piano/1.mp3', 1, 1, 0);
  //  this.nativeAudio.play('bienvenido');

  }

  tomaLista(){
   // alert("voy a tomar lista");
   this.navCtrl.push(TomarListaPage,{aulaa:this.aula});
  }

  crearNotificacion(){
    console.log(this.aula);
    this.navCtrl.push(NotificacionPage,{aulaa:this.aula});
    
  }

  cargarLista(){
    this.navCtrl.push(CagarArchivoPage,{aulaa:this.aula});
  //  alert("voy a cargar lista");
    //alert("voy a cargar lista");
  }

  mostrarQr(){
    //alert("voy a qr");
    this.navCtrl.push(MateriaPage,{aulaa:this.aula});
  }

  Encuestas()
  {
    this.navCtrl.push(EncuestasPage,{aulaa:this.aula}); 
  }




}
