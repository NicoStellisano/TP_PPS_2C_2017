import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

 
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,
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
      this.navCtrl.push(InicioAdministrativoPage);
      break;

      case "profesores":
      this.seleccion="profesores";
      break;

      case "alumnos":
      this.seleccion="aulasAlumnos";
      
      break;

      case "materias":
      this.seleccion="materias";
      break;
    }
  }

  Seleccion(data)
  {
    console.log(this.listadoAlumnos);
    switch(this.seleccion)
    {

     
      case "profesores":
     this.listaAux=[];
      for (let i = 0; i < this.listaMaterias.length; i++) {
        const element = this.listaMaterias[i];
        if(element.profesor.startsWith(data))
        {
          this.listaAux.push(element);
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
          if(element.aula=="4° A")
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
          if(element.aula=="4° B")
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
      for (let i = 0; i < this.listaMaterias.length; i++) {
        const element = this.listaMaterias[i];
        if(element.curso=='4º A')
        {
          this.listaAux.push(element);
        }
      }
      this.seleccion="materiasProfesor";
      
      break;

      case "b":
      this.listaAux=[];
      for (let i = 0; i < this.listaMaterias.length; i++) {
        const element = this.listaMaterias[i];
        if(element.curso=='4º B')
        {
          this.listaAux.push(element);
        }
      }
      this.seleccion="materiasProfesor";
      
      break;

      case "materias":
      this.seleccion="";
      
      this.navCtrl.push(MateriaPage,{materiaa:data.nombre,aulaaa:data.curso});
      break;

      case "materiasProfesor":
      this.seleccion="";
      
     this.navCtrl.push(MateriaPage,{materiaa:data.nombre,aulaaa:data.curso});
      break;
    }
  }

}
