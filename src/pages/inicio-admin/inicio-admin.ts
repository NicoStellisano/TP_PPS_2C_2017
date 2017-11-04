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
      id: {
        title: 'DNI',
        filter: false
      },
      name: {
        title: 'Apellido',
        filter: false
      },
      username: {
        title: 'Nombre',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      }
      ,
      perfil: {
        title: 'Perfil',
        filter: false
      }
      ,
      accion: {
        title: 'Acción',
        filter: false
      }
    }
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioAdminPage');
  }


}
