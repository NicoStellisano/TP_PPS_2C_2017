import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';
import { AlumnoListaItem } from '../../models/alumno-lista/alumno-lista.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

import { AlumnoListaPresente } from '../../models/aulmno-lita-presente/alumno-lista-presente.interface';
import { AlumnoPresenteItem } from '../../models/alumno-presente/alumno-presente.interface';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
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

  aula:string;
  alumnoPresente = {} as AlumnoListaPresente;
  listaAlumnos:AlumnoItem[] = [];
  alumnoPresenteLista:AlumnoPresenteItem[]=[];
  
  tomarAlumnos$:FirebaseListObservable<AlumnoItem[]>;

  constructor(public navCtrl: NavController,private fbService:FireBaseServiceProvider ,
    public navParams: NavParams,private database: AngularFireDatabase) {
    this.aula = this.navParams.get('aulaa');
    
    if(this.aula == "4A"){
      this.tomarAlumnos$ = this.database.list('tomarA');
      
    }else{
      this.tomarAlumnos$ = this.database.list('tomarB');
    }

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TomarListaPage');
    
  }

  presente(alumno:AlumnoItem){
    console.log("-------------- ingreso a presente --------------");
    console.log(alumno);
 
  }

  ausente(alumno:AlumnoItem){
    console.log("-------------- ingreso a ausente ---------------");
    console.log(alumno);
  }


}
