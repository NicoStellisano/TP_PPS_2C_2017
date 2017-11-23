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

/**
 * Generated class for the AlumnosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alumnos',
  template: `
  <ion-item style='float:right'>
  
<div style='width:100%;height:100%' >
  <ng2-smart-table style='width:100%;height:100%' [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"
  (editConfirm)="onSaveConfirm($event)"
  (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div>
`,
})
export class AlumnosPage {
  listadoAlumnos:any[] =[];
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
      addButtonContent:"Agregar",
      createButtonContent:'Crear',
      cancelButtonContent:'Cancelar'
    },
    edit: {
      confirmSave: true,
      editButtonContent: 'Editar',
      saveButtonContent: 'Guardar',
      cancelButtonContent:'Cancelar'
    },
    columns: {
      Legajo: {
        title: 'Legajo',
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
        defaultValue:'Alumno',        
        isEditable:false,
        isAddable:false,
        editor: {
          type: 'text',
          defaultValue:'Alumno'
         
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
            alert(`${row.Legajo} `)
          });
        }
        
        
      
    }
  }
};
  source:LocalDataSource;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation ) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

      this.fireService.getAlumnos().subscribe(data=>
        {
          this.source = new LocalDataSource(data); // create the source
          this.listadoAlumnos=data;
          
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
      }, 3000);

      

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
      
        for (let i = 0; i <  this.listadoAlumnos.length; i++) {
          const element =  this.listadoAlumnos[i];
          console.log(element);          
          
          if(element.Email==event.data.Email)
          {
           
           this.fireService.removeAlumno(element['$key']);
           
            //event.confirm.reject();      
            event.confirm.resolve();
  
            this.fireService.getAlumnos().subscribe(data=>
              {
                this.source = new LocalDataSource(data); // create the source
                this.listadoAlumnos=data;
                
              }); 
                    
            break;
          }
        }
    
        
      } else {
        event.confirm.reject();
      }
    }
  
  
    onSaveConfirm(event) {
      if (window.confirm('¿Editar?')) {
        console.log(event.newData);  
        if(event.newData.Legajo!=null && event.newData.Apellido!=null && event.newData.Nombre!=null && event.newData.Email!=null && event.newData.Perfil!=null
          && event.newData.Legajo!=undefined && event.newData.Apellido!=undefined && event.newData.Nombre!=undefined && event.newData.Email!=undefined && event.newData.Perfil!=undefined &&
           event.newData.Legajo!="" && event.newData.Apellido!="" && event.newData.Nombre!="" && event.newData.Email!="" && event.newData.Perfil!="")
           {
        if(event.newData.Perfil=="Alumno")
        {
          for (let i = 0; i <  this.listadoAlumnos.length; i++) {
            const element =  this.listadoAlumnos[i];
            console.log(element);          
            
            if(element.Email==event.newData.Email)
            {
              let listadoAux=this.listadoAlumnos;
              listadoAux[i]=event.newData;
              console.log(element);
              //const key = element['$key'];

              this.fireService.updateAlumno(listadoAux);
             
              //event.confirm.reject();
              this.fireService.getAlumnos().subscribe(data=>
                {
                  this.source = new LocalDataSource(data); // create the source
                  this.listadoAlumnos=data;
                  
                }); 
                      
              break;
            }
          }
        
         event.confirm.reject();
        
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
       if(event.newData.Legajo!=null && event.newData.Apellido!=null && event.newData.Nombre!=null && event.newData.Email!=null && event.newData.Perfil!=null
      && event.newData.Legajo!=undefined && event.newData.Apellido!=undefined && event.newData.Nombre!=undefined && event.newData.Email!=undefined && event.newData.Perfil!=undefined &&
       event.newData.Legajo!="" && event.newData.Apellido!="" && event.newData.Nombre!="" && event.newData.Email!="" && event.newData.Perfil!="")
       {
         
         if(event.newData.Email.includes('@'))
         {
           
             event.newData.Accion=" ";
             if(event.newData.Perfil=="Alumno")
             {
              this.listadoAlumnos.push(event.newData);
              this.listadoAlumnos[this.listadoAlumnos.lastIndexOf(event.newData)].password=event.newData.Legajo;
              
               this.fireService.updateAlumno(this.listadoAlumnos);
               event.confirm.resolve();
               
               this.fireService.getAlumnos().subscribe(data=>
                {
                  this.source = new LocalDataSource(data); // create the source
                  this.listadoAlumnos=data;
                  
                });        
                
                
             }else
             {
              alert("Perfil inválido");
              
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
        
      } else {
        event.confirm.reject();
      }
  
      
        event.confirm.reject();
        
      
      
    }

}
