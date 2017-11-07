import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AulaItem } from '../../models/aula-item/aula.interface';

@IonicPage()
@Component({
  selector: 'page-aula',
  templateUrl: 'aula.html',
})
export class AulaAlumnoPage {

  miAula : AulaItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.miAula = {
      turno:"tarde",
      profesor:"Pepe",
      materia:"Literatura"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaPage');
   
  }

}
