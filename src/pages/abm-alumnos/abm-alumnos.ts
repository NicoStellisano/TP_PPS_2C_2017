



import { Component } from '@angular/core';
import { IonicPage,ModalController, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
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
import { AsignarMateriaPage } from '../asignar-materia/asignar-materia';
import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';

@IonicPage()
@Component({
  template: `
  <ion-content padding style="background-image:url('assets/aula-administrativo.jpeg')" class="fondo">
 
<ion-item>
<div style='width:100%;height:100%' >
  <ng2-smart-table style='width:100%;height:100%' [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"
  (editConfirm)="onSaveConfirm($event)"
  (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div></ion-item>
  

  <button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> 
  <ion-icon name="arrow-round-back"></ion-icon> Cargar Alumnos
</button>

</ion-content>
`,
  selector: 'page-abm-alumnos',
})
export class AbmAlumnosPage {

  personas:string;

  listadoAlumnos:any[] =[];
  listaAux:any[] =[];
  source:LocalDataSource;
  
  settings;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation,public modalCtrl: ModalController, public alertCtrl:AlertController ) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      
      this.settings = {
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
          legajo: {
            title: 'Legajo',
            filter: false,
            editor: {
              type: 'number',
            },
          },
         
          nombre: {
            title: 'Nombre',
            filter: false
          },
          mail: {
            title: 'Correo',
            filter: false
          }
          ,
      
          /*
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
            onComponentInitFunction: this.actions.bind(this)
             
            }
            
            */
          
        }
      }
     
      

  }
  actions(instance) {
    instance.save.subscribe(row => {
      let nombreCompleto = row.Nombre +" "+row.Apellido;
      let profileModal = this.modalCtrl.create(AsignarMateriaPage, { profesor: nombreCompleto });
      profileModal.present();
    });
  }
  
ionViewDidEnter()
{ 
  
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

      
  
  this.fireService.getABMAlumnos().subscribe(data=>
    {
      this.listadoAlumnos=data;
      
    });
    
    this.listaAux=[];
    for (let i = 0; i < this.listadoAlumnos.length; i++) {
      const element = this.listadoAlumnos[i];
     
        
          if(element!=undefined && (element.vigente==null || element.vigente==undefined))      
          
          this.listaAux.push(element);
        
        
      
    }
    this.source= new LocalDataSource(this.listaAux);
      
      
    
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
    }, 2000);

    

  
}
  ionViewWillLeave()
  {
    this.screenOrientation.unlock();
  }
  onDeleteConfirm(event) {
    let alert = this.alertCtrl.create({
      title: '¿Eliminar?',
      cssClass:'miClaseAlert',
      message: '¿Seguro quieres eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            event.confirm.reject();
            
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
           
              for (let i = 0; i < this.listaAux.length; i++) {
                const element = this.listaAux[i];
              
                 try {
                
                 
                    if(element.mail==event.data.mail)
                    {
                      this.listaAux[i].vigente=false;
                      this.fireService.updateABMAlumno(this.listaAux);
                
                      event.confirm.reject();
                   
                      
                      break;
                      
                    }
                  
                 } catch (error) {
                   console.log(error);
                 }
              
                 //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
               //ACA
             }
             
              
             this.fireService.getABMAlumnos().subscribe(data=>
              {
                this.listadoAlumnos=data;
                
              });
              
              this.listaAux=[];
              for (let i = 0; i < this.listadoAlumnos.length; i++) {
                const element = this.listadoAlumnos[i];
               
                  
                    if(element!=undefined && (element.vigente==null || element.vigente==undefined))      
                    
                    this.listaAux.push(element);
          
              }
              this.source= new LocalDataSource(this.listaAux);
               
             
          
        }
      }
      ]
   
    
  });
  alert.present();

  }

  onSaveConfirm(event) {
    
    let alert = this.alertCtrl.create({
      title: '¿Editar?',
      cssClass:'miClaseAlert',
      message: '¿Seguro quieres editar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            event.confirm.reject();
            
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            if(event.newData.legajo!=null && event.newData.nombre!=null && event.newData.mail!=null && event.newData.turno!=null
              && event.newData.legajo!=undefined  && event.newData.nombre!=undefined && event.newData.mail!=undefined && event.newData.turno!=undefined &&
               event.newData.legajo!=""  && event.newData.nombre!="" && event.newData.mail!="" && event.newData.turno!="")
               {
                 
                 if(event.newData.mail.includes('@'))
                 {
                   
                      
                       for (let i = 0; i < this.listaAux.length; i++) {
                         const element = this.listaAux[i];
                      
                          try {
                           
                              if(element.mail==event.newData.mail)
                              {
                               
                                this.listaAux[i]=event.newData;
          
                                this.listaAux[i].password=event.newData.legajo;
                                
                                this.fireService.updateABMAlumno(this.listaAux);
                                event.confirm.reject();
                                
                                break;
                                
                              }
                                // this.fireService.updateAlumno(this.listaAux,element['$key']); 
                            
                          } catch (error) {
                            console.log(error);
                          }
                        
                          //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                        } //ACA
                    
                      
                       
                       this.fireService.getABMAlumnos().subscribe(data=>
                        {
                          this.listadoAlumnos=data;
                          
                        });
                        this.listaAux=[];
                        
                        for (let i = 0; i < this.listadoAlumnos.length; i++) {
                          const element = this.listadoAlumnos[i];
                        
                            for (let j = 0; j < element.alumnos.length; j++) {
                              const element2 = element.alumnos[j];
                              if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
                              this.listaAux.push(element2);
                            }
                            
                          
                        }
                        this.source= new LocalDataSource(this.listaAux);
                      
                        
    
                    
                     }else{
                      let alert = this.alertCtrl.create({
                        title: "Info",
                        subTitle: "Correo inválido",
                        cssClass:"miClaseDanger",
                      buttons: ['Aceptar']
                    });
                     alert.present();
                       event.confirm.reject();
                       
                     }
                     
                     
                  
                 
                
               }else{
                let alert = this.alertCtrl.create({
                  title: "Info",
                  subTitle: "Completa Los Datos",
                  cssClass:"miClaseDanger",
                buttons: ['Aceptar']
              });
               alert.present();
                 event.confirm.reject();
                 
               }         
                event.confirm.reject();
                
              
        }
      }
      ]
   
    
  });
  alert.present();


  }
   

  onCreateConfirm(event) {
 
    let alert = this.alertCtrl.create({
      title: '¿Crear?',
      cssClass:'miClaseAlert',
      message: '¿Seguro quieres crear?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            event.confirm.reject();
            
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
           
            if(event.newData.legajo!=null && event.newData.nombre!=null && event.newData.mail!=null && event.newData.turno!=null
              && event.newData.legajo!=undefined  && event.newData.nombre!=undefined && event.newData.mail!=undefined && event.newData.turno!=undefined &&
               event.newData.legajo!=""  && event.newData.nombre!="" && event.newData.mail!="" && event.newData.turno!="")
               {
                 
                 if(event.newData.mail.includes('@'))
                 {
                   
                   
                      
                       for (let i = 0; i < this.listaAux.length; i++) {
                         const element = this.listaAux[i];
                      
                          try {
                           
                             
                               
                                event.confirm.resolve();
                                this.listaAux[this.listaAux.lastIndexOf(event.newData)].password=event.newData.legajo;
                                
                                
                             //    this.listaAux[this.listaAux.lastIndexOf(event.newData)].password=event.newData.DNI;
                                  this.fireService.updateABMAlumno(this.listaAux);
                                  
                                  break;
                               
                                
                              
                                // this.fireService.updateAlumno(this.listaAux,element['$key']); 
                            
                          } catch (error) {
                            console.log(error);
                          }
                        
                          //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                        } //ACA
                    
                      
                       
                       this.fireService.getABMAlumnos().subscribe(data=>
                        {
                          this.listadoAlumnos=data;
                          
                        });
                        this.listaAux=[];
                        
                        for (let i = 0; i < this.listadoAlumnos.length; i++) {
                          const element = this.listadoAlumnos[i];
                        
                            for (let j = 0; j < element.alumnos.length; j++) {
                              const element2 = element.alumnos[j];
                              if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
                              this.listaAux.push(element2);
                            }
                            
                          
                        }
                        this.source= new LocalDataSource(this.listaAux);
                      
                        
    
                    
                     }else{
                      let alert = this.alertCtrl.create({
                        title: "Info",
                        subTitle: "Correo inválido",
                        cssClass:"miClaseDanger",
                      buttons: ['Aceptar']
                    });
                     alert.present();
                       event.confirm.reject();
                       
                     }
                     
                     
                  
                 
                
               }else{
                let alert = this.alertCtrl.create({
                  title: "Info",
                  subTitle: "Completa Los Datos",
                  cssClass:"miClaseDanger",
                buttons: ['Aceptar']
              });
               alert.present();
                 event.confirm.reject();
                 
               }         
                event.confirm.reject();
               
       
        }
      }
      ]
   
    
  });
  alert.present();

   
  
}

  asignar(dni:number)
  {
    //alert(dni);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioAdminPage');
  }

  cargarLista(){
    
      this.navCtrl.push(CagarArchivoPage,{aulaa:" ",persona:"alumno"});
      
   
    //alert("voy a cargar lista");
  }


}
