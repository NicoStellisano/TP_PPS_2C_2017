import { Component,ViewChild } from '@angular/core';

import { IonicPage, NavController, NavParams,LoadingController,Platform,AlertController,Content } from 'ionic-angular';
//import { AulaAdministrativoItem } from '../../models/aula-administrativo-item/aula-administrativo.interface';
import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { ButtonRenderComponent } from '../../components/button-renderer/button-renderer';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireAuth } from 'angularfire2/auth';
// for databas
import  firebase  from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';

import { NotificacionPage } from '../notificacion/notificacion';
import { MateriaPage } from '../materia/materia';
import { EncuestasPage } from '../encuestas/encuestas';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TomarListaPage } from '../tomar-lista/tomar-lista';
import { NativeAudio } from '@ionic-native/native-audio';
/**
 * Generated class for the AulaProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materias-administrativo',
  templateUrl: 'materias-administrativo.html',
})
export class MateriasAdministrativoPage {

  listaAlumnos:AlumnoItem[] = [];
  aula:string;
  datosMaterias;
  materia:string;

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

  @ViewChild(Content) content: Content;  
  view: number[] = [700, 150];
  view2: number[] = [700, 150];
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showLegend: boolean;
  interval: number;
  listFaltantes:any[] =[];
  listFaltantesB:any[] =[];
  
  
  listadoFaltas:Array<any>=[];
  

  informacion: any[] = [];


  constructor( public db: AngularFireDatabase,private nativeAudio: NativeAudio,public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation ,public platform:Platform,public afd:AngularFireDatabase
    ,public alertCtrl:AlertController) {
      this.db.list("/tomarA").subscribe(data=>
        {
          this.listFaltantes=data;
        });

        this.db.list("/tomarB").subscribe(data=>
          {
            this.listFaltantesB=data;
          });
    this.aula = this.navParams.get('aula');
this.materia= this.navParams.get('materia');
 
this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);


  

    
    this.nativeAudio.preloadComplex('bienvenidoProfesor', 'assets/sonidos/1.mp3', 1, 1, 0);
    this.nativeAudio.play('bienvenidoProfesor');
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
  applyDimensions() {
    const width = this.content.getContentDimensions().contentWidth - 50;
    const state = width >= 320;
    this.showXAxisLabel = state;
    this.showYAxisLabel = state;
    this.showLegend = state;
    this.view = [width, 150];
  }
  ionViewDidEnter() {
    this.db.list("/tomarA").subscribe(data=>
      {
        this.listFaltantes=data;
      });

      this.db.list("/tomarB").subscribe(data=>
        {
          this.listFaltantesB=data;
        });
    this.applyDimensions();
    window.addEventListener('resize', () => {
      this.applyDimensions();
    }, false);
    if(this.aula=="4A")
      {
        let contador=0;
        for (let i = 0; i < this.listFaltantes.length; i++) {
          const element = this.listFaltantes[i];
          if(element.contPresentes!=0)
          {
            contador++;
          }
        }
        this.informacion=[
          {
            'name':'Con al menos una falta',
            'value':contador
          },
          {
            'name':'Sin faltas',
            'value':this.listFaltantes.length-contador
          }
          ];
      }else if(this.aula=="4B")
      {
        let contador=0;
        for (let i = 0; i < this.listFaltantesB.length; i++) {
          const element = this.listFaltantesB[i];
          if(element.contPresentes!=0)
          {
            contador++;
          }
        }
        this.informacion=[
          {
            'name':'Con al menos una falta',
            'value':contador
          },
          {
            'name':'Sin faltas',
            'value':this.listFaltantesB.length-contador
          }
          ];
      }
    
     
    //mofificar por la ruta y el archivo de bienvenida
   // this.nativeAudio.preloadComplex('bienvenido', 'assets/piano/1.mp3', 1, 1, 0);
  //  this.nativeAudio.play('bienvenido');

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
ionViewWillLeave()
{
  this.screenOrientation.unlock();
}
  tomaLista(){
   // alert("voy a tomar lista");
   this.navCtrl.push(TomarListaPage,{aulaa:this.aula,materia:this.materia});
  }

  crearNotificacion(){
    console.log(this.aula);
    this.navCtrl.push(NotificacionPage,{aulaa:this.aula,materia:this.materia});
    
  }

  cargarLista(){
    this.navCtrl.push(CagarArchivoPage,{persona:"alumno"});
    //  alert("voy a cargar lista");
    //alert("voy a cargar lista");
  }

  mostrarQr(){
    //alert("voy a qr");
    this.navCtrl.push(MateriaPage,{aulaa:this.aula,materia:this.materia});
  }

  Encuestas()
  {
    this.navCtrl.push(EncuestasPage,{aulaa:this.aula,materia:this.materia}); 
  }
/*
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
            if(event.newData.legajo!=null && event.newData.nombre!=null && event.newData.mail!=null && event.newData.turno!=null
              && event.newData.legajo!=undefined  && event.newData.nombre!=undefined && event.newData.mail!=undefined && event.newData.turno!=undefined &&
               event.newData.legajo!=""  && event.newData.nombre!="" && event.newData.mail!="" && event.newData.turno!="")
               {
                 
                 if(event.newData.mail.includes('@'))
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
              
              
              event.confirm.reject();
             }
             
             
          
         }else{
          let alert = this.alertCtrl.create({
            title: "Info",
            subTitle: "Correo Inválido",
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
*/

}
