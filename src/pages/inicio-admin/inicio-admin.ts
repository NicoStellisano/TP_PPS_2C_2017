import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { ButtonRenderComponent } from '../../components/button-renderer/button-renderer';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireAuth } from 'angularfire2/auth';
// for databas
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { GooglePlus } from '@ionic-native/google-plus';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@IonicPage()
@Component({
  template: `
  <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"
  (editConfirm)="onSaveConfirm($event)"
  (createConfirm)="onCreateConfirm($event)"></ng2-smart-table>
`,
  selector: 'page-inicio-admin',
})
export class InicioAdminPage {
  listadoUsuarios:any[] =[];
  source:LocalDataSource;
  settings = {
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
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
        type:'custom',
        renderComponent: ButtonRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.DNI} `)
          });
        }
        ,
        editable:false,
        isAddable:false,
      
    }
  }
};
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation ) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      
    this.fireService.getUsers().subscribe(data=>
      {
        this.source = new LocalDataSource(data); // create the source
        
      }); 
      
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `
         <img src="assets/spinner.gif">`,
        duration: 50000000,
        showBackdrop:false
        
      });
  loading.present();
      setTimeout(() => {
        loading.dismiss();
      }, 6000);

      

  }
  onDeleteConfirm(event) {
    if (window.confirm('¿Eliminar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('¿Editar?')) {
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('¿Crear?')) {
      event.confirm.resolve(event.newData);
     // this.fireService.addUser(event.newData);
      alert(event.newData);
      
    } else {
      event.confirm.reject();
    }
  }

  asignar(dni:number)
  {
    alert(dni);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioAdminPage');
  }


}
