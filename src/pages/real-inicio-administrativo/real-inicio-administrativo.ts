import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
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
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,public db: AngularFireDatabase,private toastCtrl:ToastController
  ) {
    console.log("--------------- Estoy en real administrativo ------------------");
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

  ionViewDidLoad() {
    this.seleccion="";
    
    console.log('ionViewDidLoad RealInicioAdministrativoPage');
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
