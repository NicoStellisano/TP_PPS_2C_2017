import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams,LoadingController,Platform } from 'ionic-angular';
>>>>>>> d68d65fc0cc5ab3d97f55d528ed5232233c616d8
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
  <ion-label>Curso</ion-label>
  <ion-select [(ngModel)]="seleccion" (ionChange)="changeList($event)">
    <ion-option value="a">4ºA</ion-option>
    <ion-option value="b">4ºB</ion-option>
  </ion-select>
</ion-item>
<div style='width:100%;height:100%' *ngIf='seleccion=="a"'>
  <ng2-smart-table style='width:100%;height:100%' [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"
  (editConfirm)="onSaveConfirm($event)"
  (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div>
  <div style='width:100%;height:100%' *ngIf='seleccion=="b"'>
  <ng2-smart-table style='width:100%;height:100%'  [settings]="settings" [source]="source2" (deleteConfirm)="onDeleteConfirm($event)"
  (editConfirm)="onSaveConfirm($event)"
  (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div>

`,
})
export class AlumnosPage {
  listadoAlumnos:any[] =[];
  listaAux:any[]=[];
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
      legajo: {
        title: 'legajo',
        filter: false,
        editor: {
          type: 'number',
        },
      },
      mail: {
        title: 'mail',
        filter: false
      },
      nombre: {
        title: 'nombre',
        filter: false
      },
      turno: {
        title: 'Turno',
        filter: false
      },
     
      
     
      }
    
  
};
  source:LocalDataSource;
  source2:LocalDataSource;
  flag:boolean;
  seleccion:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,
<<<<<<< HEAD
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation, public alertCtrl:AlertController ) {
=======
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation ,public platform:Platform,public afd:AngularFireDatabase) {
>>>>>>> d68d65fc0cc5ab3d97f55d528ed5232233c616d8
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      
      
      this.afd.list("/alumno-lista").subscribe(data=>
        {
          this.listadoAlumnos=data;
          if(!this.flag)
          {
            this.flag=true;
            this.activar();
          }
         
          
        }); 
    
      
        
      
    }
      

     activar()
     {
      this.seleccion="a";
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
     
      
  
        for (let i = 0; i < this.listadoAlumnos.length; i++) {
          const element = this.listadoAlumnos[i];
          if(element.aula=="4° A")
          {
            for (let j = 0; j < element.alumnos.length; j++) {
              const element2 = element.alumnos[j];
              this.listaAux.push(element2);
            }
            
          }
        }
        this.source= new LocalDataSource(this.listaAux);
        this.seleccion="a";
        console.log(this.listaAux);
        
        
      
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
  
  ionViewDidLoad()
  {
    


    
  }
    ionViewWillLeave()
    {
      this.screenOrientation.unlock();
    }

    onDeleteConfirm(event) {
     /* 
      if (window.confirm('¿Eliminar?')) {
      
        for (let i = 0; i < this.listadoAlumnos.length; i++) {
          const element = this.listadoAlumnos[i];
          if(element.aula=="4° A")
          {
            for (let j = 0; j < element.alumnos.length; j++) {
              const element2 = element.alumnos[j];
              if(element2.mail==event.data.mail)
              {
                const index: number = this.listaAux.indexOf(element2);
                if (index !== -1) {
                    this.listaAux.splice(index, 1);
                } 
                element.alumnos=this.listaAux;
                this.fireService.updateAlumno(this.listaAux,element['$key']); 
                
                this.fireService.getAlumnos().subscribe(data=>
                  {
                    this.listadoAlumnos=data;
                    
                  });      
                  for (let i = 0; i < this.listadoAlumnos.length; i++) {
                    const element = this.listadoAlumnos[i];
                    if(element.aula=="4° A")
                    {
                      for (let j = 0; j < element.alumnos.length; j++) {
                        const element2 = element.alumnos[j];
                        this.listaAux.push(element2);
                      }
                      
                    }
                  }
                  this.source= new LocalDataSource(this.listaAux);
                 
                                  
                break;
              }
            }
            
          }else  if(element.aula=="4° B")
          {
            for (let j = 0; j < element.alumnos.length; j++) {
              const element2 = element.alumnos[j];
              if(element2.mail==event.data.mail)
              {
                const index: number = this.listaAux.indexOf(element2);
                if (index !== -1) {
                  this.listaAux=  this.listaAux.splice(index, 1);
                } 
                element.alumnos=this.listaAux;
                this.fireService.updateAlumno(this.listaAux,element['$key']); 
                event.confirm.resolve();
                
                this.fireService.getAlumnos().subscribe(data=>
                  {
                    this.listadoAlumnos=data;
                    
                  });      
                  for (let i = 0; i < this.listadoAlumnos.length; i++) {
                    const element = this.listadoAlumnos[i];
                    if(element.aula=="4° B")
                    {
                      for (let j = 0; j < element.alumnos.length; j++) {
                        const element2 = element.alumnos[j];
                        this.listaAux.push(element2);
                      }
                      
                    }
                  }
                  this.source2= new LocalDataSource(this.listaAux);
                                  
                break;
              }
            }
        }
       
        }
    
        
      } else {
        event.confirm.reject();
      }*/
    }
    
  
  
    onSaveConfirm(event) {
      if (window.confirm('¿Editar?')) {
          if(event.newData.legajo!=null && event.newData.nombre!=null && event.newData.mail!=null && event.newData.turno!=null
         && event.newData.legajo!=undefined  && event.newData.nombre!=undefined && event.newData.mail!=undefined && event.newData.turno!=undefined &&
          event.newData.legajo!=""  && event.newData.nombre!="" && event.newData.mail!="" && event.newData.turno!="")
          {
            
            if(event.newData.mail.includes('@'))
            {
             if(this.seleccion=="a")
             {
              this.listaAux.push(event.newData);
              for (var indox = 0;indox < this.listadoAlumnos.length; indox++) {
                let element = this.listadoAlumnos[indox];
                if(element.aula=="4° A")
                {
                 element.alumnos=this.listaAux;
                 this.fireService.updateAlumno(this.listaAux,element['$key']);  
                  break;     
                }
              }
              
               event.confirm.resolve();
               
               this.fireService.getAlumnos().subscribe(data=>
                {
                  this.listadoAlumnos=data;
                  
                });
                
                for (let i = 0; i < this.listadoAlumnos.length; i++) {
                  const element = this.listadoAlumnos[i];
                  if(element.aula=="4° A")
                  {
                    for (let j = 0; j < element.alumnos.length; j++) {
                      const element2 = element.alumnos[j];
                      this.listaAux.push(element2);
                    }
                    
                  }
                }
                this.source= new LocalDataSource(this.listaAux);
                
                
             }else if(this.seleccion=="b")
             {
              this.listaAux.push(event.newData);
              for (var index = 0; index < this.listadoAlumnos.length; index++) {
                let element = this.listadoAlumnos[index];
                if(element.aula=="4° B")
                {
                 element.alumnos=this.listaAux;
                 this.fireService.updateAlumno(this.listaAux,element['$key']);  
                  break;     
                  
                  
                }
              }
                     event.confirm.resolve();
               
               this.fireService.getAlumnos().subscribe(data=>
                {
                  this.listadoAlumnos=data;
                  
                });      
                for (let i = 0; i < this.listadoAlumnos.length; i++) {
                  const element = this.listadoAlumnos[i];
                  if(element.aula=="4° B")
                  {
                    for (let j = 0; j < element.alumnos.length; j++) {
                      const element2 = element.alumnos[j];
                      this.listaAux.push(element2);
                    }
                    
                  }
                }
                this.source2= new LocalDataSource(this.listaAux);
         
          event.confirm.reject();
         
                   
                }else{
                 alert("turno inválido");
                 
                 event.confirm.reject();
                }
                
                
             
            }else{
              alert("mail inválido");
              event.confirm.reject();
              
            }
          }else{
            alert("Completa los datos");
            event.confirm.reject();
            
          }
<<<<<<< HEAD
        
         event.confirm.reject();
        
          }
        
         event.confirm.reject();
        }else
        {
          let alert = this.alertCtrl.create({
            title: "Error!",
            subTitle: "Perfil inválido",
            cssClass:"miClaseAlert",
          buttons: ['OK']
        });
         alert.present();
=======
          
           
           
             // this.fireService.addUser(event.newData);
           
>>>>>>> d68d65fc0cc5ab3d97f55d528ed5232233c616d8
         
         
           event.confirm.reject();
           
         
         
       }
   
      }
    
  
    changeList(event)
    {
      this.listaAux=[];
      this.seleccion=event;
      if(this.seleccion=='a')
      {
        
        this.fireService.getAlumnos().subscribe(data=>
          {
            this.listadoAlumnos=data;
            
          }); 
    
          for (let i = 0; i < this.listadoAlumnos.length; i++) {
            const element = this.listadoAlumnos[i];
            if(element.aula=="4° A")
            {
              for (let j = 0; j < element.alumnos.length; j++) {
                const element2 = element.alumnos[j];
                this.listaAux.push(element2);
              }
              
            }
          }
          this.source= new LocalDataSource(this.listaAux);
        
      }else if(this.seleccion=='b'){
        
        this.fireService.getAlumnos().subscribe(data=>
          {
            this.listadoAlumnos=data;
            
          }); 
    
          for (let i = 0; i < this.listadoAlumnos.length; i++) {
            const element = this.listadoAlumnos[i];
            if(element.aula=="4° B")
            {
              for (let j = 0; j < element.alumnos.length; j++) {
                const element2 = element.alumnos[j];
                this.listaAux.push(element2);
              }
              
            }
          }
          this.source2= new LocalDataSource(this.listaAux);
       
        
      }
    }
  
    onCreateConfirm(event) {
      if (window.confirm('¿Crear?')) {
       if(event.newData.legajo!=null && event.newData.nombre!=null && event.newData.mail!=null && event.newData.turno!=null
      && event.newData.legajo!=undefined  && event.newData.nombre!=undefined && event.newData.mail!=undefined && event.newData.turno!=undefined &&
       event.newData.legajo!=""  && event.newData.nombre!="" && event.newData.mail!="" && event.newData.turno!="")
       {
         
         if(event.newData.mail.includes('@'))
         {
          if(this.seleccion=="a")
          {
           this.listaAux.push(event.newData);
           for (var indox = 0;indox < this.listadoAlumnos.length; indox++) {
             let element = this.listadoAlumnos[indox];
             if(element.aula=="4° A")
             {
              element.alumnos=this.listaAux;
              this.fireService.updateAlumno(this.listaAux,element['$key']);  
               break;     
             }
           }
           
            event.confirm.resolve();
            
            this.fireService.getAlumnos().subscribe(data=>
             {
               this.listadoAlumnos=data;
               
             });
             
             for (let i = 0; i < this.listadoAlumnos.length; i++) {
               const element = this.listadoAlumnos[i];
               if(element.aula=="4° A")
               {
                 for (let j = 0; j < element.alumnos.length; j++) {
                   const element2 = element.alumnos[j];
                   this.listaAux.push(element2);
                 }
                 
               }
             }
             this.source= new LocalDataSource(this.listaAux);
             
             
          }else if(this.seleccion=="b")
          {
           this.listaAux.push(event.newData);
           for (var index = 0; index < this.listadoAlumnos.length; index++) {
             let element = this.listadoAlumnos[index];
             if(element.aula=="4° B")
             {
              element.alumnos=this.listaAux;
              this.fireService.updateAlumno(this.listaAux,element['$key']);  
               break;     
               
               
             }
           }
                  event.confirm.resolve();
            
            this.fireService.getAlumnos().subscribe(data=>
             {
<<<<<<< HEAD
              let alert = this.alertCtrl.create({
                title: "Error!",
                subTitle: "Perfil inválido",
                cssClass:"miClaseAlert",
              buttons: ['OK']
            });
             alert.present();
             
=======
               this.listadoAlumnos=data;
               
             });      
             for (let i = 0; i < this.listadoAlumnos.length; i++) {
               const element = this.listadoAlumnos[i];
               if(element.aula=="4° B")
               {
                 for (let j = 0; j < element.alumnos.length; j++) {
                   const element2 = element.alumnos[j];
                   this.listaAux.push(element2);
                 }
                 
               }
             }
             this.source2= new LocalDataSource(this.listaAux);
      
       event.confirm.reject();
      
                
             }else{
              alert("turno inválido");
>>>>>>> d68d65fc0cc5ab3d97f55d528ed5232233c616d8
              
              event.confirm.reject();
             }
             
             
          
         }else{
<<<<<<< HEAD
          let alert = this.alertCtrl.create({
            title: "Error!",
            subTitle: "Email inválido",
            cssClass:"miClaseAlert",
          buttons: ['OK']
        });
         alert.present();
=======
           alert("mail inválido");
>>>>>>> d68d65fc0cc5ab3d97f55d528ed5232233c616d8
           event.confirm.reject();
           
         }
       }else{
        let alert = this.alertCtrl.create({
          title: "Error!",
          subTitle: "Complete los datos",
          cssClass:"miClaseAlert",
        buttons: ['OK']
      });
       alert.present();
         event.confirm.reject();
         
       }
       
        
        
          // this.fireService.addUser(event.newData);
        
      
      
        event.confirm.reject();
        
      
      
    }

}
}

