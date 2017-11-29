import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';

import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';

import { NotificacionPage } from '../notificacion/notificacion';
import { MateriaPage } from '../materia/materia';
import { EncuestasPage } from '../encuestas/encuestas';

import { TomarListaPage } from '../tomar-lista/tomar-lista';
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
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.aula = this.navParams.get('aulaa');
    //alert(this.aula);

 


    this.db.list('/materias').
    subscribe( data => {
    this.datosMaterias=data;
    console.log(this.datosMaterias);


    });

    


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaProfesorPage');
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
