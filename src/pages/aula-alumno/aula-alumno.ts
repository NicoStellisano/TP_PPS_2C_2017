import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AulaAlumnoItem } from '../../models/aula-alumno-item/aula-alumno.interface';

@IonicPage()
@Component({
  selector: 'page-aula',
  templateUrl: 'aula.html',
})
export class AulaAlumnoPage {

  miAulaAlumno : AulaAlumnoItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.miAulaAlumno = {
      turno:"tarde",
      profesor:"Pepe",
      materia:"Literatura"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaPage');
  }

}
