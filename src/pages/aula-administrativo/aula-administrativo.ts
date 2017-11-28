import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Platform } from 'ionic-angular';
//import { AulaAdministrativoItem } from '../../models/aula-administrativo-item/aula-administrativo.interface';
import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';
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
 * Generated class for the AulaAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aula-administrativo',
  templateUrl: 'aula-administrativo.html',
})
export class AulaAdministrativoPage {
  listadoAlumnos:any[] =[];
  listaAux:any[]=[];
  settings = {
    actions:{
      columnTitle:'',
      /*add:false,
      edit:false,
      delete:false*/
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
  aula:string;
  //miAulaAdministrativo = {} as AulaAdministrativoItem;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation ,public platform:Platform,public afd:AngularFireDatabase) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    /*this.miAulaAdministrativo = {
      profesor:"Juan Peralta",
      division:"2°B",
      materia:"Laboratorio IV",


      cantidadAlumno:25
    };*/

    
  }

  activar()
  {
   this.seleccion="a";
   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  
   

     for (let i = 0; i < this.listadoAlumnos.length; i++) {
       const element = this.listadoAlumnos[i];
       if(element.aula=="4A")
       {
         for (let j = 0; j < element.alumnos.length; j++) {
           const element2 = element.alumnos[j];
            if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
           this.listaAux.push(element2);
         }
         
       }
     }
     this.source= new LocalDataSource(this.listaAux);
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


  ionViewDidLoad() {
    this.afd.list("/alumno-lista").subscribe(data=>
      {
        this.listadoAlumnos=data;
        if(!this.flag)
        {
          this.flag=true;
          this.activar();
        }
       
        
      }); 
    this.aula = this.navParams.get('aulaa');
  }
  ionViewWillLeave()
  {
    this.screenOrientation.unlock();
  }
  

  cargarLista(){
    this.navCtrl.push(CagarArchivoPage,{aulaa:this.aula});
    //alert("voy a cargar lista");
  }

  onDeleteConfirm(event) {
    if (window.confirm('¿Eliminar?')) {
    
      if(this.seleccion=="a")
      {
       
        for (let i = 0; i < this.listadoAlumnos.length; i++) {
          const element = this.listadoAlumnos[i];
         if(element.aula=="4A")
         {
           try {
          
            for (let j = 0; j < element.alumnos.length; j++) {
              const element2 = element.alumnos[j];
              if(element2.mail==event.data.mail)
              {
                this.listaAux[j].vigente=false;
                this.fireService.updateAlumno(this.listaAux,element['$key']);
          
                event.confirm.reject();
             
                
                break;
                
              }
            }
           } catch (error) {
             console.log(error);
           }
        
           //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
         } //ACA
       }
       
        
        this.fireService.getAlumnos().subscribe(data=>
         {
           this.listadoAlumnos=data;
           
         });
         this.listaAux=[];
         
         for (let i = 0; i < this.listadoAlumnos.length; i++) {
           const element = this.listadoAlumnos[i];
           if(element.aula=="4A")
           {
             for (let j = 0; j < element.alumnos.length; j++) {
               const element2 = element.alumnos[j];
               if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
               
               this.listaAux.push(element2);
             }
             
           }
         }
         this.source= new LocalDataSource(this.listaAux);
         
       
      }else if(this.seleccion=="b")
      {
       
        for (let i = 0; i < this.listadoAlumnos.length; i++) {
          const element = this.listadoAlumnos[i];
         if(element.aula=="4B")
         {
           try {
            for (let j = 0; j < element.alumnos.length; j++) {
              const element2 = element.alumnos[j];
              if(element2.mail==event.data.mail)
              {
                this.listaAux[j].vigente=false;
                this.fireService.updateAlumno(this.listaAux,element['$key']);
                event.confirm.reject();
                
               // this.fireService.removeAlumno(element['$key'],j);
                break;
                
              }
            }
               
               break;
           } catch (error) {
             console.log(error);
           }
         }
           //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
         }   
         this.listaAux=[];
         
         for (let i = 0; i < this.listadoAlumnos.length; i++) {
           const element = this.listadoAlumnos[i];
           if(element.aula=="4B")
           {
             for (let j = 0; j < element.alumnos.length; j++) {
               const element2 = element.alumnos[j];
               if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
               this.listaAux.push(element2);
             }
             
           }
         }
         this.source2= new LocalDataSource(this.listaAux);
  
      
    } else {
      event.confirm.reject();
    }
  }
  }
  


  onSaveConfirm(event) {
    if (window.confirm('¿Editar?')) {
     if(event.newData.legajo!=null && event.newData.nombre!=null && event.newData.mail!=null && event.newData.turno!=null
    && event.newData.legajo!=undefined  && event.newData.nombre!=undefined && event.newData.mail!=undefined && event.newData.turno!=undefined &&
     event.newData.legajo!=""  && event.newData.nombre!="" && event.newData.mail!="" && event.newData.turno!="")
     {
       
       if(event.newData.mail.includes('@') && event.newData.mail.includes('.com'))
       {
         
           if(this.seleccion=="a")
           {
            
             for (let i = 0; i < this.listadoAlumnos.length; i++) {
               const element = this.listadoAlumnos[i];
              if(element.aula=="4A")
              {
                try {
                  for (let j = 0; j < element.alumnos.length; j++) {
                    const element2 = element.alumnos[j];
                    if(element2.mail==event.newData.mail)
                    {
                      this.listaAux[j]=event.newData;

                      element.alumnos=this.listaAux;
                      this.fireService.updateAlumno(this.listaAux,element['$key']);
                      event.confirm.reject();
                      
                      break;
                      
                    }
                    }  // this.fireService.updateAlumno(this.listaAux,element['$key']); 
                  
                } catch (error) {
                  console.log(error);
                }
              }
                //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
              } //ACA
          
            
             
             this.fireService.getAlumnos().subscribe(data=>
              {
                this.listadoAlumnos=data;
                
              });
              this.listaAux=[];
              
              for (let i = 0; i < this.listadoAlumnos.length; i++) {
                const element = this.listadoAlumnos[i];
                if(element.aula=="4A")
                {
                  for (let j = 0; j < element.alumnos.length; j++) {
                    const element2 = element.alumnos[j];
                    if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
                    this.listaAux.push(element2);
                  }
                  
                }
              }
              this.source= new LocalDataSource(this.listaAux);
            
              
           }else if(this.seleccion=="b")
           {
            for (let i = 0; i < this.listadoAlumnos.length; i++) {
              const element = this.listadoAlumnos[i];
             if(element.aula=="4B")
             {
               try {
                 for (let j = 0; j < element.alumnos.length; j++) {
                   const element2 = element.alumnos[j];
                   if(element2.mail==event.newData.mail)
                   {
                     this.listaAux[j]=event.newData;

                     element.alumnos=this.listaAux;
                     this.fireService.updateAlumno(this.listaAux,element['$key']);
                     event.confirm.reject();
                     
                     break;
                     
                   }
                   }  // this.fireService.updateAlumno(this.listaAux,element['$key']); 
                 
               } catch (error) {
                 console.log(error);
               }
             }
               //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
             } //ACA
         
           
            
            this.fireService.getAlumnos().subscribe(data=>
             {
               this.listadoAlumnos=data;
               
             });
             this.listaAux=[];
             
             for (let i = 0; i < this.listadoAlumnos.length; i++) {
               const element = this.listadoAlumnos[i];
               if(element.aula=="4B")
               {
                 for (let j = 0; j < element.alumnos.length; j++) {
                   const element2 = element.alumnos[j];
                   if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
                   this.listaAux.push(element2);
                 }
                 
               }
             }
             this.source2= new LocalDataSource(this.listaAux);
             
            
            
          
           }
           
           
        
       }else{
         alert("mail inválido");
         event.confirm.reject();
         
       }
      
     }else{
       alert("Completa los datos");
       event.confirm.reject();
       
     }
     
      
      
        // this.fireService.addUser(event.newData);
      
    
    
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
          if(element.aula=="4A")
          {
            for (let j = 0; j < element.alumnos.length; j++) {
              const element2 = element.alumnos[j];
              if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
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
          if(element.aula=="4B")
          {
            for (let j = 0; j < element.alumnos.length; j++) {
              const element2 = element.alumnos[j];
              if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
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
       
      if(event.newData.mail.includes('@') && event.newData.mail.includes('.com'))
      {
         
           if(this.seleccion=="a")
           {
            this.listaAux.push(event.newData);
            
             for (let i = 0; i < this.listadoAlumnos.length; i++) {
               const element = this.listadoAlumnos[i];
              if(element.aula=="4A")
              {
                try {
                  element.alumnos=this.listaAux;
                  event.confirm.resolve();
                  this.listaAux[this.listaAux.lastIndexOf(event.newData)].password=event.newData.legajo;
                  this.listaAux[this.listaAux.lastIndexOf(event.newData)].contPresentes=0;
                  
                  
               //    this.listaAux[this.listaAux.lastIndexOf(event.newData)].password=event.newData.DNI;
                    this.fireService.updateAlumno(this.listaAux,element['$key']);
                    
                    break;
                    
                  //this.fireService.addAlumno(event.newData,indox)
                // element.alumnos=this.listaAux;
                 // this.fireService.updateAlumno(this.listaAux,element['$key']); 
                  
                } catch (error) {
                  console.log(error);
                }
             
                //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
              } //ACA
            }
            
             
             this.fireService.getAlumnos().subscribe(data=>
              {
                this.listadoAlumnos=data;
                
              });
              this.listaAux=[];
              
              for (let i = 0; i < this.listadoAlumnos.length; i++) {
                const element = this.listadoAlumnos[i];
                if(element.aula=="4A")
                {
                  for (let j = 0; j < element.alumnos.length; j++) {
                    const element2 = element.alumnos[j];
                    if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
                    this.listaAux.push(element2);
                  }
                  
                }
              }
              this.source= new LocalDataSource(this.listaAux);
              
            
           }else if(this.seleccion=="b")
           {
            this.listaAux.push(event.newData);
            
             for (let i = 0; i < this.listadoAlumnos.length; i++) {
               const element = this.listadoAlumnos[i];
              if(element.aula=="4B")
              {
                try {
                  element.alumnos=this.listaAux;
                  event.confirm.resolve();
                  this.listaAux[this.listaAux.lastIndexOf(event.newData)].password=event.newData.legajo;
                  this.listaAux[this.listaAux.lastIndexOf(event.newData)].contPresentes=0;
               //    this.listaAux[this.listaAux.lastIndexOf(event.newData)].password=event.newData.DNI;
                    this.fireService.updateAlumno(this.listaAux,element['$key']);
                    
                    break;
                } catch (error) {
                  console.log(error);
                }
              }
                //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
              }   
              this.listaAux=[];
              
              for (let i = 0; i < this.listadoAlumnos.length; i++) {
                const element = this.listadoAlumnos[i];
                if(element.aula=="4B")
                {
                  for (let j = 0; j < element.alumnos.length; j++) {
                    const element2 = element.alumnos[j];
                    if(element2!=undefined && (element2.vigente==null || element2.vigente==undefined))      
                    this.listaAux.push(element2);
                  }
                  
                }
              }
              this.source2= new LocalDataSource(this.listaAux);
              
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
     
      
      
        // this.fireService.addUser(event.newData);
      
    
    
      event.confirm.reject();
      
    
    
  }

}
}
