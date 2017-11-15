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
  <ng2-smart-table style='width:100%;height:100%' [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"
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
      deleteButtonContent: 'Borrar',
    },
    add: {
      confirmCreate: true,
      addButtonContent:"Agregar"
    },
    edit: {
      confirmSave: true,
      editButtonContent: 'Editar',
      saveButtonContent: 'Guardar',
    },
    columns: {
      DNI: {
        title: 'DNI',
        filter: false,
        editor: {
          type: 'number',
        },
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
        filter: false,
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'Admin', title: 'Admin' },{ value: 'Profesor', title: 'Profesor' }, { value: 'Administrativo', title: 'Administrativo' }, {
              value: '<b>Profesor</b>',
              title: 'Profesor',
            }],
          },
        },
      }
      ,
      Accion: {
        title: 'Acción',
        filter: false,
        type:'custom',
        add: false,
        edit: false,  
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
ionViewDidEnter()
{
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  
}
  ionViewWillLeave()
  {
    this.screenOrientation.unlock();
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
     if(event.newData.DNI!=null && event.newData.Apellido!=null && event.newData.Nombre!=null && event.newData.Email!=null && event.newData.Perfil!=null
    && event.newData.DNI!=undefined && event.newData.Apellido!=undefined && event.newData.Nombre!=undefined && event.newData.Email!=undefined && event.newData.Perfil!=undefined &&
     event.newData.DNI!="" && event.newData.Apellido!="" && event.newData.Nombre!="" && event.newData.Email!="" && event.newData.Perfil!="")
     {
       
       if(event.newData.Email.includes('@'))
       {
         if(event.newData.DNI.length==8)
         {
           event.newData.Accion=null;
           this.fireService.addUser(event.newData);
           event.confirm.reject();
           
         }else{
           alert("DNI inválido");
           event.confirm.reject();
           
         }
       }else{
         alert("Email inválido");
         event.confirm.reject();
         
       }
     }else{
       alert("Completa los datos");
       event.confirm.reject();
       
     }
     
      
     // this.fireService.addUser(event.newData);
      alert(event.newData.DNI);
      
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
