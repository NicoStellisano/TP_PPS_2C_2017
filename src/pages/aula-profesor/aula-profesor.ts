import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';
;

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

  
  aula:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aula = this.navParams.get('aulaa');
    //alert(this.aula);
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
    this.navCtrl.push(CagarArchivoPage,{aulaa:this.aula});
    alert("voy a cargar lista");
  }

  mostrarQr(){
    alert("voy a qr");
  }

}
