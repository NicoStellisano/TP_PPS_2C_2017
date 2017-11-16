import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AulaProfesorItem } from '../../models/aula-profesor-item/aula-profesor.interface';

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

  miAulaProfesor = {} as AulaProfesorItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.miAulaProfesor = {
      division: "1°A",
      materia:"Programacion I",
      cantidadAlumnos:20
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaProfesorPage');
  }

  tomaLista(){
    alert("voy a tomar lista");
  }

  crearNotificacion(){
    alert("voy a tomar notificacion");
  }

  cargarLista(){
    alert("voy a cargar lista");
  }

}
