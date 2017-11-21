import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriasProfesorPage} from '../materias-profesor/materias-profesor';
import { AulaProfesorPage } from '../aula-profesor/aula-profesor';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioProfesorPage');
  }

    //harcodeado para mostrar, despues se debe eliminar y tomarar las aulas del profesor de firebase
    listaAulasProfesor: any[] = [
      {
        "aula": "3° A"
      },
      {
        "aula": "4° A"
      },
      {
        "aula": "4° B"
      }
     
    ];

    RedireccionAula(aula: string)
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
        case "4° A":
        //alert("Se redireccionara al aula: 4° A ");
        this.navCtrl.push(AulaProfesorPage,{aulaa:aula});
        break;
        case "4° B":
       // alert("Se redireccionara al aula: 4° B ");
        this.navCtrl.push(AulaProfesorPage,{aulaa:aula});
        break;
  
      }
    }

}
