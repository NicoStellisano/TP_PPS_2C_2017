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
  listaAlumnos:AlumnoItem[] = [];
  alumnoPresenteLista:AlumnoPresenteItem[]=[];
  key:number;
  alumnoPresenteList$:FirebaseListObservable<AlumnoListaItem[]>;
  updateador:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {
    this.aula = this.navParams.get('aulaa');

    this.alumnoPresenteList$ = this.database.list('alumno-lista');
    this.updateador = this.database.object('alumno-lista');
    
    this.alumnoPresenteList$.subscribe(dato => {
      console.log(dato.values().next().value.alumnos);
      this.listaAlumnos = dato.values().next().value.alumnos;
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TomarListaPage');
    console.log(this.listaAlumnos);
  }

  presente(alumno:AlumnoItem){
    console.log("ingreso a presente");
    console.log(alumno);
    let rows:AlumnoItem[]=[];

    this.lista(this.aula).subscribe(dato => {
      
    })
    /*this.alumnoPresenteList$.forEach(dato => {
      rows = dato.values().next().value.alumnos;
      for (let index = 0; index < rows.length; index++) {
        const element = rows[index];
        if(element.legajo == alumno.legajo){
          console.log(element);
          if(alumno.contPresentes < 3){
            console.log("ingreso al if");
            alumno.contPresentes += 1;
            console.log(alumno.contPresentes);
            element.contPresentes = alumno.contPresentes;
            console.log(element.contPresentes);
          }
        }
      }
    });*/
    
 
  }

  ausente(alumno:AlumnoItem){

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
