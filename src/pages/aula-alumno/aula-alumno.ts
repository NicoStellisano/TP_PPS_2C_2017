import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AulaAlumnoItem } from '../../models/aula-alumno-item/aula-alumno.interface';
/**
 * Generated class for the AulaAlumnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aula-alumno',
  templateUrl: 'aula-alumno.html',
})

export class AulaAlumnoPage {

  miAulaAlumno = {} as AulaAlumnoItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.miAulaAlumno = {
      turno:"tarde",
      profesor:"Pepe",
      materia:"Literatura"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaAlumnoPage');    
  }

}
