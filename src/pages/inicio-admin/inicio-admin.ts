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
import {  ViewController } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  template: `
  <ion-header>
  <ion-navbar color="dark">
    <ion-title>Control Personas<button ion-button color="light" (click)='logout()'>Salir</button> <button ion-button color="danger" icon-only style="float:right" (click)='presentModal()'><ion-icon style="size:200%" name="help-circle"></ion-icon></button> </ion-title>  
  </ion-navbar>
</ion-header>
  <ion-content padding style="background-image:url('assets/aula-administrativo.jpeg')" class="fondo">
  
  <ion-item style='float:right'>
  <ion-label>Personas</ion-label>
  <ion-select interface='action-sheet' [(ngModel)]="personas">
    <ion-option (ionSelect)="changeList('p')" value="p">Profesores</ion-option>
    <ion-option (ionSelect)="changeList('a')" value="a">Administrativos</ion-option>
  </ion-select>
</ion-item>
<ion-item>
<div style='width:100%;height:100%' *ngIf='profesor'>
  <ng2-smart-table style='width:100%;height:100%' [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"
  (editConfirm)="onSaveConfirm($event)"
  (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div></ion-item>
  <ion-item>
  <div style='width:100%;height:100%' *ngIf='!profesor'>
  <ng2-smart-table style='width:100%;height:100%'  [settings]="settings2" [source]="source2" (deleteConfirm)="onDeleteConfirm($event)"
  (editConfirm)="onSaveConfirm($event)"
  (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div></ion-item>

  <button ion-button round full *ngIf='profesor' large (click)="cargarLista()" class="animated flipInX miBoton miButton"> 
  <ion-icon name="arrow-round-back"></ion-icon> Cargar Profesores
</button>
<button ion-button round full *ngIf='!profesor' large (click)="cargarLista()" class="animated flipInX miBoton miButton"> 
<ion-icon name="arrow-round-back"></ion-icon> Cargar Administrativos
</button>
</ion-content>
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
  
  settings;

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
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation,public modalCtrl: ModalController, public alertCtrl:AlertController ) {
      this.profesor=true;
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
          ,/*
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
  changeList(event)
  {
    this.personas=event;
    if(this.personas=='a')
    {
      
      this.profesor=false;
      this.fireService.getAdministrativos().subscribe(data=>
        {
          this.source2 = new LocalDataSource(data); // create the source
          this.listadoAdministrativos=data;
          
        }); 
      
    }else if(this.personas=='p'){
      
      this.profesor=true;   
      this.fireService.getProfesores().subscribe(data=>
        {
          this.source = new LocalDataSource(data); // create the source
          this.listadoProfesores=data;
          
        }); 
     
      
    }
  }

  logout()
  {
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

  presentModal() {
    let modal = this.modalCtrl.create(TutorialPage, { img: "inicio-adminTutorial.png" });
    modal.present();
  }
ionViewDidEnter()
{ 
  this.personas='p';
  
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
            if(event.data.Perfil=="Profesor")
            {
            for (let i = 0; i <  this.listadoProfesores.length; i++) {
              const element =  this.listadoProfesores[i];
              console.log(element);          
              
              if(element.Email==event.data.Email)
              {
               
               this.fireService.removeProfesor(element['$key']);
               
                //event.confirm.reject();      
                event.confirm.resolve();
      
                this.fireService.getProfesores().subscribe(data=>
                  {
                    this.source = new LocalDataSource(data); // create the source
                    this.listadoProfesores=data;
                    
                  }); 
                        
                break;
              }
            }
          }else if(event.data.Perfil=="Administrativo")
          {
            for (let i = 0; i <  this.listadoAdministrativos.length; i++) {
              const element =  this.listadoAdministrativos[i];
              console.log(element);          
              
              if(element.Email==event.data.Email)
              {
                this.fireService.removeAdministrativo(element['$key']);
               
                //event.confirm.reject();      
                event.confirm.resolve();
      
                this.fireService.getAdministrativos().subscribe(data=>
                  {
                    this.source2 = new LocalDataSource(data); // create the source
                    this.listadoAdministrativos=data;
                    
                  }); 
                        
                break;
              }
            }
          }
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
            console.log(event.newData);  
            if(event.newData.DNI!=null && event.newData.Apellido!=null && event.newData.Nombre!=null && event.newData.Email!=null && event.newData.Perfil!=null
              && event.newData.DNI!=undefined && event.newData.Apellido!=undefined && event.newData.Nombre!=undefined && event.newData.Email!=undefined && event.newData.Perfil!=undefined &&
               event.newData.DNI!="" && event.newData.Apellido!="" && event.newData.Nombre!="" && event.newData.Email!="" && event.newData.Perfil!="")
               {
            if(event.newData.Perfil=="Profesor")
            {
              for (let i = 0; i <  this.listadoProfesores.length; i++) {
                const element =  this.listadoProfesores[i];
                console.log(element);          
                
                if(element.Email==event.newData.Email)
                {
                  let listadoAux=this.listadoProfesores;
                  listadoAux[i]=event.newData;
                  listadoAux[listadoAux.lastIndexOf(event.newData)].password=event.newData.DNI;
                  
                  console.log(element);
                  //const key = element['$key'];
                  this.fireService.updateProfesor(listadoAux);
                 
                  //event.confirm.reject();
                  this.fireService.getProfesores().subscribe(data=>
                    {
                      this.source = new LocalDataSource(data); // create the source
                      this.listadoProfesores=data;
                      
                    }); 
                          
                  break;
                }
              }
            
             event.confirm.reject();
            }else if(event.newData.Perfil=="Administrativo")
            {
              for (let i = 0; i <  this.listadoAdministrativos.length; i++) {
                const element =  this.listadoAdministrativos[i];
                console.log(element);          
                
                if(element.Email==event.newData.Email)
                {
                  let listadoAux=this.listadoAdministrativos;
                  listadoAux[i]=event.newData;
                  listadoAux[listadoAux.lastIndexOf(event.newData)].password=event.newData.DNI;
                  
                  console.log(element);
                  //const key = element['$key'];
                  this.fireService.updateAdministrativo(listadoAux);
                 
                  //event.confirm.reject();
                  this.fireService.getAdministrativos().subscribe(data=>
                    {
                      this.source2 = new LocalDataSource(data); // create the source
                      this.listadoAdministrativos=data;
                      
                    }); 
                          
                  break;
                }
              }
            
             event.confirm.reject();
            }else
            {
              let alert = this.alertCtrl.create({
                title: "Error!",
                subTitle: "Perfil inválido",
                cssClass:"miClaseDanger",
              buttons: ['Aceptar']
            });
             alert.present();
      
             
             event.confirm.reject();
            }
            
          
          }
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
           
     if(event.newData.DNI!=null && event.newData.Apellido!=null && event.newData.Nombre!=null && event.newData.Email!=null && event.newData.Perfil!=null
      && event.newData.DNI!=undefined && event.newData.Apellido!=undefined && event.newData.Nombre!=undefined && event.newData.Email!=undefined && event.newData.Perfil!=undefined &&
       event.newData.DNI!="" && event.newData.Apellido!="" && event.newData.Nombre!="" && event.newData.Email!="" && event.newData.Perfil!="")
       {
         
         if(event.newData.Email.includes('@'))
         {
           if(event.newData.DNI.length==8)
           {
             event.newData.Accion=" ";
             if(event.newData.Perfil=="Profesor")
             {
              this.listadoProfesores.push(event.newData);
             event.confirm.resolve();
              this.listadoProfesores[this.listadoProfesores.lastIndexOf(event.newData)].password=event.newData.DNI;
               this.fireService.updateProfesor(this.listadoProfesores);
               
               
               this.fireService.getProfesores().subscribe(data=>
                {
                  this.source = new LocalDataSource(data); // create the source
                  this.listadoProfesores=data;
                  
                });        
                
                
             }else if(event.newData.Perfil=="Administrativo")
             {
              this.listadoAdministrativos.push(event.newData);
              event.confirm.resolve();
              
              this.listadoAdministrativos[this.listadoAdministrativos.lastIndexOf(event.newData)].password=event.newData.DNI;
              
               this.fireService.updateAdministrativo(this.listadoAdministrativos);
               this.fireService.getAdministrativos().subscribe(data=>
                {
                  this.source2 = new LocalDataSource(data); // create the source
                  this.listadoAdministrativos=data;
                  
                }); 
  
                
             }else
             {
              let alert = this.alertCtrl.create({
                title: "Error!",
                subTitle: "Perfil inválido",
                cssClass:"miClaseDanger",
              buttons: ['Aceptar']
            });
             alert.present();
  
              
              event.confirm.reject();
             }
             
             
           }else{
            let alert = this.alertCtrl.create({
              title: "Error!",
              subTitle: "DNI inválido",
              cssClass:"miClaseDanger",
            buttons: ['Aceptar']
          });
           alert.present();
  
             event.confirm.reject();
             
           }
         }else{
          let alert = this.alertCtrl.create({
            title: "Error!",
            subTitle: "Email inválido",
            cssClass:"miClaseDanger",
            buttons: ['Aceptar']
        });
         alert.present();
  
           event.confirm.reject();
           
         }
       }else{
        let alert = this.alertCtrl.create({
          title: "Error!",
          subTitle: "Complete los datos",
          cssClass:"miClaseDanger",
          buttons: ['Aceptar']
      });
       alert.present();
  
         event.confirm.reject();
         
       }
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
    if(this.personas=='a')
    {
      this.navCtrl.push(CagarArchivoPage,{aulaa:" ",persona:"administrativo"});
      
    }else if(this.personas=='p')
    {
      this.navCtrl.push(CagarArchivoPage,{aulaa:" ",persona:"profesor"});
      
    }
    //alert("voy a cargar lista");
  }


}
