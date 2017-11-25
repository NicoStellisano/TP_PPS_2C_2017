import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';
import { AlumnoListaItem } from '../../models/alumno-lista/alumno-lista.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AlumnoListaPresente } from '../../models/aulmno-lita-presente/alumno-lista-presente.interface';
import { AlumnoPresenteItem } from '../../models/alumno-presente/alumno-presente.interface';

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
  listaAlumnosCsv:AlumnoItem[] = [];
  alumnoPresenteLista:AlumnoPresenteItem[]=[];

  alumnoPresenteList:FirebaseListObservable<AlumnoListaPresente[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {
    this.aula = this.navParams.get('aulaa');

    //Toma lista para leer y crear archivo
    this.lista(this.aula).subscribe(dato => {
      //lista de alumnos en el aula
      this.listaAlumnosCsv = dato.values().next().value.alumnos;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TomarListaPage');
    
  }

  tomarLista(){

  }

  lista(aula){
    
    return this.database.list('/alumno-lista/' ,{
            query: {
              orderByChild :"aula",
              equalTo:aula
            }
           });
  }

}
