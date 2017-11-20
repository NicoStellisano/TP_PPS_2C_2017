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
  <ion-item style='float:right'>
  <ion-label>Personas</ion-label>
  <ion-select [(ngModel)]="personas" (ionChange)="changeList($event)">
    <ion-option value="p">Profesores</ion-option>
    <ion-option value="a">Administrativos</ion-option>
  </ion-select>
</ion-item>
<div style='width:100%;height:100%' *ngIf='profesor'>
  <ng2-smart-table style='width:100%;height:100%' [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"
  (editConfirm)="onSaveConfirm($event)"
  (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div>
  <div style='width:100%;height:100%' *ngIf='!profesor'>
  <ng2-smart-table style='width:100%;height:100%'  [settings]="settings2" [source]="source2" (deleteConfirm)="onDeleteConfirm($event)"
  (editConfirm)="onSaveConfirm($event)"
  (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div>
`,
  selector: 'page-inicio-admin',
})
export class InicioAdminPage {
  personas:string;
  profesor:boolean = true;
  listadoProfesores:any[] =[];
  listadoAdministrativos:any[] =[];
  
  source:LocalDataSource;
  source2:LocalDataSource;
  
  settings = {
    actions:{
      columnTitle:'',
    },
    noDataMessage:"No se encuentran registros",
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
        type: 'text',
        add: false,
        edit: false,  
        addable: false,
        editable:false,
        defaultValue:'Profesor',        
        isEditable:false,
        isAddable:false,
        editor: {
          type: 'text',
          defaultValue:'Profesor'
         
        }
      }
      ,
      Accion: {
        title: 'Acción',
        filter: false,
        type:'custom',
        add: false,
        edit: false,  
        addable: false,
        editable:false,
        isEditable:false,
        isAddable:false,
        renderComponent: ButtonRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.DNI} `)
          });
        }
        
        
      
    }
  }
};

settings2 = {
  actions:{
    columnTitle:'',
  },
  noDataMessage:"No se encuentran registros",  
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
      type: 'text',
      add: false,
      edit: false,  
      defaultValue:'Administrativo',      
      addable: false,
      editable:false,
      isEditable:false,
      isAddable:false,
      editor: {
        type: 'text',
        defaultValue:'Administrativo'
       
      }
    }
    
    
}
};
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation ) {
      this.profesor=true;
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      
    this.fireService.getProfesores().subscribe(data=>
      {
        this.source = new LocalDataSource(data); // create the source
        this.listadoProfesores=data;
        
      }); 
      this.fireService.getAdministrativos().subscribe(data=>
        {
          this.source2 = new LocalDataSource(data); // create the source
          this.listadoAdministrativos=data;
          
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

  changeList(event)
  {
    this.personas=event;
    if(this.personas=='a')
    {
      
      this.profesor=false;
      
    }else if(this.personas=='p'){
      
      this.profesor=true;   
      
    }
  }
ionViewDidEnter()
{
  this.personas='p';
  
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
      console.log(event.newData);  
      if(event.newData.Perfil=="Profesor")
      {
        for (let i = 0; i <  this.listadoProfesores.length; i++) {
          const element =  this.listadoProfesores[i];
          console.log(element);          
          
          if(element.Email==event.newData.Email)
          {
            alert('entre');
            console.log(element);
            event.confirm.reject();
          }
        }
      
       event.confirm.reject();
      }else if(event.newData.Perfil=="Administrativo")
      {
        for (let i = 0; i <  this.listadoAdministrativos.length; i++) {
          const element =  this.listadoAdministrativos[i];
          if(element.Email==event.newData.Email)
          {
            alert(element.getKey());
            event.confirm.reject();
          }
        }
      
       event.confirm.reject();
      }else
      {
       alert("Perfil inválido");
       
       event.confirm.reject();
      }
      
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
           if(event.newData.Perfil="Profesor")
           {
            this.fireService.addProfesor(event.newData);
            event.confirm.reject();
           }else if(event.newData.Perfil="Administrativo")
           {
            this.fireService.addAdministrativo(event.newData);
            event.confirm.reject();
           }else
           {
            alert("Perfil inválido");
            
            event.confirm.reject();
           }
           
           
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
