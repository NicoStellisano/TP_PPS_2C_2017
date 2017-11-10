import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AulaAdministrativoItem } from '../../models/aula-administrativo-item/aula-administrativo.interface';

/**
 * Generated class for the AulaAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aula-administrativo',
  templateUrl: 'aula-administrativo.html',
})
export class AulaAdministrativoPage {

  miAulaAdministrativo = {} as AulaAdministrativoItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.miAulaAdministrativo = {
      profesor:"Juan Peralta",
      divicion:"2°B",
      materia:"Laboratorio IV",
      cantidadAlumno:35
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaAdministrativoPage');
  }

}
