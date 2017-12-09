import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController ,Content} from 'ionic-angular';
import { MateriasPage} from '../materias/materias';
import { InicioAdministrativoPage} from '../inicio-administrativo/inicio-administrativo';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireAuth } from 'angularfire2/auth';
// for databas
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MateriaPage } from '../materia/materia';
import { AulaAdministrativoPage } from '../aula-administrativo/aula-administrativo';
import { MateriasAdministrativoPage } from '../materias-administrativo/materias-administrativo';
import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';
import { TomarListaPage } from '../tomar-lista/tomar-lista';


/**
 * Generated class for the RealInicioAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-real-inicio-administrativo',
  templateUrl: 'real-inicio-administrativo.html',
})
export class RealInicioAdministrativoPage {
listadoProfesores:any[] =[];
listadoAlumnos:any[] =[];

seleccion:string;
listaMaterias: any[] = [];
listaAux: any[] = [];
datosfaltas;


@ViewChild(Content) content: Content;  
view: number[] = [700, 150];
view2: number[] = [700, 150];
showXAxisLabel: boolean;
showYAxisLabel: boolean;
showLegend: boolean;
interval: number;
listFaltantes:any[] =[];
listFaltantesB:any[] =[];

aula:string;
materia:string;

listadoFaltas:Array<any>=[];


informacion: any[] = [];
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,public db: AngularFireDatabase,private toastCtrl:ToastController
  ) {
      this.fireService.getAlumnos().subscribe(data=>
        {
          this.listadoAlumnos=data;
          
        }); 

        this.fireService.getMaterias().subscribe(data=>
          {
            this.listaMaterias=data;
            
          }); 

        this.fireService.getProfesores().subscribe(data=>
          {
            this.listadoProfesores=data;
            
          }); 


          this.db.list('/notificacionFalta').
          subscribe( data => {
          this.datosfaltas=data;
          console.log(this.datosfaltas);
      
          let bandera=false;
          for(let i=0;i<this.datosfaltas.length;i++){
      
            //if(localStorage.getItem("mail")==this.datosfaltas[i].mail){
            
        
                
      let toast = this.toastCtrl.create({
        message: 'El alumno'+' '+this.datosfaltas[i].alumno+' '+'tiene'+ ' '+this.datosfaltas[i].cantidadFaltas+' '+ 'faltas!!!'    ,
        duration: 4000,
        position: 'top'
      });
      
      toast.onDidDismiss(() => {
      
      });
      
      toast.present();
      
                                  } 
          });

          
 

      }


      applyDimensions() {
        const width = this.content.getContentDimensions().contentWidth - 50;
        const state = width >= 320;
        this.showXAxisLabel = state;
        this.showYAxisLabel = state;
        this.showLegend = state;
        this.view = [width, 150];
      }

      cursar(curso)
      {
        this.aula=curso.aula;
        this.materia=curso.materia;

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
        if(this.aula=="4A" && this.materia=="PPS")
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
          }else if(this.aula=="4B" && this.materia=="PPS")
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
          }else{
            let contador=0;
            let cantidad=0;
            for (let i = 0; i < this.listadoAlumnos.length; i++) {
              const element = this.listadoAlumnos[i];
              if(element.aula==this.aula && element.materia==this.materia)
              {
                cantidad=element.alumnos.length;
                contador=Math.random()*cantidad;
              }
              
             
            }
            this.informacion=[
              {
                'name':'Con al menos una falta',
                'value':contador
              },
              {
                'name':'Sin faltas',
                'value':cantidad-contador
              }
              ];
          }
      }
  ionViewDidLoad() {
    this.aula="4A";
    this.materia="PPS";
    this.seleccion="";
    
    console.log('ionViewDidLoad RealInicioAdministrativoPage');

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
    if(this.aula=="4A" && this.materia=="PPS")
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
      }else if(this.aula=="4B" && this.materia=="PPS")
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
      }else{
        let contador=0;
        let cantidad=0;
        for (let i = 0; i < this.listadoAlumnos.length; i++) {
          const element = this.listadoAlumnos[i];
          if(element.aula==this.aula && element.materia==this.materia)
          {
            cantidad=element.alumnos.length;
            contador=Math.random()*cantidad;
          }
          
         
        }
        this.informacion=[
          {
            'name':'Con al menos una falta',
            'value':contador
          },
          {
            'name':'Sin faltas',
            'value':cantidad-contador
          }
          ];
      }
  }

  Redireccion(direccion)
  {
    console.log(this.listadoProfesores);
    switch(direccion)
    {
      case "aulas":
          this.seleccion="";
      this.navCtrl.push(AulaAdministrativoPage);
      break;

      case "profesores":
      this.seleccion="profesores";
      break;

      case "alumnos":
      this.seleccion="aulasAlumnos";
      
      break;

      case "materias":
      this.listaAux=[];
      for (let i = 0; i < this.listadoAlumnos.length; i++) {
        const element = this.listadoAlumnos[i];
       
        
          this.listaAux.push({aula:element.aula,profesor:element.profesor,nombre:element.materia});
        
      }
      this.seleccion="materias";
      break;
    }
  }

  cargarLista(){
    this.navCtrl.push(CagarArchivoPage,{persona:"alumno"});
    //  alert("voy a cargar lista");
    //alert("voy a cargar lista");
  }

  aparecer()
  {
    this.seleccion="";
  }

  tomaLista(){
    // alert("voy a tomar lista");
    this.navCtrl.push(TomarListaPage,{aulaa:"",materia:""});
   }
  Seleccion(data)
  {
    console.log(this.listadoAlumnos);
    switch(this.seleccion)
    {

     
      case "profesores":
     this.listaAux=[];
      for (let i = 0; i < this.listadoAlumnos.length; i++) {
        const element = this.listadoAlumnos[i];
        if(element.profesor==data)
        {
          this.listaAux.push({aula:element.aula,profesor:element.profesor,materia:element.materia});
        }
      }
      this.seleccion="materiasProfesor";
      break;

      case "aulasAlumnos":
      if(data=="a")
      {
        this.listaAux=[];
        for (let i = 0; i < this.listadoAlumnos.length; i++) {
          const element = this.listadoAlumnos[i];
          if(element.aula=="4A")
          {
            for (let j = 0; j < element.alumnos.length; j++) {
              const element2 = element.alumnos[j];
              this.listaAux.push(element2);
            }
            
          }
        }
      }else if(data=="b")
      {
        this.listaAux=[];        
        for (let i = 0; i < this.listadoAlumnos.length; i++) {
          const element = this.listadoAlumnos[i];
          if(element.aula=="4B")
          {
            for (let j = 0; j < element.alumnos.length; j++) {
              const element2 = element.alumnos[j];
              this.listaAux.push(element2);
            }
            
          }
        }
      }
      
      this.seleccion=data;
      console.log(this.listaAux);
      break;

      case "a":
      this.listaAux=[];
      for (let i = 0; i < this.listadoAlumnos.length; i++) {
        const element = this.listadoAlumnos[i];
        if(element.aula=="4A")
        {
          this.listaAux.push({aula:element.aula,profesor:element.profesor,materia:element.materia});
        }
      }
      
      this.seleccion="materiasProfesor";
      
      break;

      case "b":
      this.listaAux=[];
      for (let i = 0; i < this.listadoAlumnos.length; i++) {
        const element = this.listadoAlumnos[i];
        if(element.aula=="4B")
        {
          this.listaAux.push({aula:element.aula,profesor:element.profesor,materia:element.materia});
        }
      }
      this.seleccion="materiasProfesor";
      
      break;

      case "materias":
   
      
      this.navCtrl.push(MateriasAdministrativoPage,{materia:data.nombre,aula:data.aula});
      this.seleccion="";
      break;

      case "materiasProfesor":
     
      
     this.navCtrl.push(MateriasAdministrativoPage,{materia:data.materia,aula:data.aula});
     this.seleccion="";
      break;
    }
  }

}
