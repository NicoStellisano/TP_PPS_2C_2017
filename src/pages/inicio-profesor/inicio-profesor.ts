import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriasProfesorPage} from '../materias-profesor/materias-profesor';
import { AulaProfesorPage } from '../aula-profesor/aula-profesor';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireAuth } from 'angularfire2/auth';
// for databas
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MateriaPage } from '../materia/materia';
import { AulaAdministrativoPage } from '../aula-administrativo/aula-administrativo';
/**
 * Generated class for the InicioProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-profesor',
  templateUrl: 'inicio-profesor.html',
})
export class InicioProfesorPage {
  aula: string;
  listaMateriasProfesor: any[]=[];
  listaAlumnos: any[]=[];
  apellido:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider) {
    this.fireService.getAlumnos().subscribe(data=>
      {
        this.listaAlumnos=data;
      });
      this.apellido=localStorage.getItem("Apellido");                
      
      this.listaMateriasProfesor=[];
      for (let i = 0; i < this.listaAlumnos.length; i++) {
        const element = this.listaAlumnos[i];
       if(this.apellido==element.profesor)
        
          this.listaMateriasProfesor.push({aula:element.aula,profesor:element.profesor,materia:element.materia});
        
      }
  }

  ionViewDidEnter() {
  
      }

    

    RedireccionMateria(elemento:any)
    {
      this.navCtrl.push(AulaProfesorPage,{aula:elemento.aula,materia:elemento.materia,profesor:elemento.profesor});
      /*
        switch(materia)
        {
        
          case "Programacion 3":
          alert("Se redireccionara a la materia: Programacion 3");
         //this.navCtrl.push();
          break;
          case "Laboratorio 3":
          alert("Se redireccionara a la materia: Laboratorio 3");
         // this.navCtrl.push();
          break;
          case "Practica Profesional":
          alert("Se redireccionara a la materia: Practica Profesional");
          // this.navCtrl.push();
          break;
          case "Laboratorio 4":
          alert("Se redireccionara a la materia: Laboratorio 4");
          // this.navCtrl.push();
          break;
    
        }
    */  
    }
    

    /*RedireccionAula(aula: string)
    {
      switch(aula)
      {
      
        case "2° B":
       // alert("Se redireccionara al aula: 2° B ");
       this.navCtrl.push(MateriasProfesorPage,{aulaa:aula});
        break;
        case "3° A":
       //redirecciono y paso el aula
        this.navCtrl.push(MateriasProfesorPage,{aulaa:aula});
        break;
        case "4A":
        //alert("Se redireccionara al aula: 4° A ");
        this.navCtrl.push(AulaProfesorPage,{aulaa:aula});
        break;
        case "4B":
       // alert("Se redireccionara al aula: 4° B ");
        this.navCtrl.push(AulaProfesorPage,{aulaa:aula});
        break;
  
      }
    }*/

}
