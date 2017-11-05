import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

/**
 * Generated class for the InicioAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-admin',
  templateUrl: 'inicio-admin.html',
})
export class InicioAdminPage {
  settings = {
    columns: {
      DNI: {
        title: 'DNI',
        filter: false
      },
      Apellido: {
        title: 'Apellido',
        filter: false
      },
      Nombre: {
        title: 'Nombre',
        filter: false
      },
      Email: {
        title: 'Email',
        filter: false
      }
      ,
      Perfil: {
        title: 'Perfil',
        filter: false
      }
      ,
      Accion: {
        title: 'Acción',
        filter: false,
        valuePrepareFunction:(cell,row)=>{
          return `<button ion-button color='secondary' (click)='asignar(row.DNI)'>Asignar Materia</button>`
        },
      }
    }
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  asignar(dni:number)
  {
    alert(dni);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioAdminPage');
  }


}
