import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AulaAdministrativoItem } from '../../models/aula-administrativo-item/aula-administrativo.interface';
import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';

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

  aula:string;
  //miAulaAdministrativo = {} as AulaAdministrativoItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*this.miAulaAdministrativo = {
      profesor:"Juan Peralta",
      division:"2°B",
      materia:"Laboratorio IV",
      cantidadAlumno:25
    };*/
    this.aula = this.navParams.get('aulaa');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaAdministrativoPage');
  }

  mostrarQR(){
    
  }

  cargarLista(){
    this.navCtrl.push(CagarArchivoPage,{aulaa:this.aula});
    alert("voy a cargar lista");
  }

}
