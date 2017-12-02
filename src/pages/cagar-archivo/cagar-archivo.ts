import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';
import { AlumnoListaItem } from '../../models/alumno-lista/alumno-lista.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GeneratedFile } from '@angular/compiler';
import { AulaAlumnoItem } from '../../models/aula-alumno-item/aula-alumno.interface';
import { DescargarArchivoPage } from '../descargar-archivo/descargar-archivo';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { NativeAudio } from '@ionic-native/native-audio';
import { AdministrativoItem } from '../../models/administrativo-item/administrativo.inteface';

import { AlertController } from 'ionic-angular';
import { AsignarMateriaPage } from '../asignar-materia/asignar-materia';

export class GeochemComponent implements OnInit {
  
    static muestras:string[][]=[];
    static muestras2:string[][]=[];
    ngOnInit(){}
  }

@IonicPage()
@Component({
  selector: 'page-cagar-archivo',
  templateUrl: 'cagar-archivo.html',
})
export class CagarArchivoPage {

  //Atributos de descarga
  listaAlumnos:AlumnoItem[] = [];

  listaA = {} as AlumnoListaItem;
  
  listaAlumnoItem:AlumnoListaItem[]=[];
  
  nombreArchivo:string;
  sizeArchivo:string;
  aula:string = "";
  persona:string;
listaProfesores:any[]=[];
listaAdministrativos:any[]=[];;
  alumnoLista$: FirebaseListObservable<AlumnoItem[]>;
  alumnoListaItem$: FirebaseListObservable<AlumnoListaItem[]>;

  banderita:boolean;

  constructor(public navCtrl: NavController, public modalCtrl:ModalController,public navParams: NavParams,private firebaseService: FireBaseServiceProvider,private database: AngularFireDatabase,private alertCtrl: AlertController,private nativeAudio: NativeAudio) {
    //this.aula = this.navParams.get('aulaa');
    this.persona = this.navParams.get('persona');
    if(this.persona=="alumno")
    {

    
    this.alumnoLista$ = this.database.list('alumno-lista');
    
    this.alumnoListaItem$ = this.database.list('alumno-lista');

    this.alumnoListaItem$.subscribe(alumLista =>{
      this.listaAlumnoItem = alumLista;
    });
  }else if(this.persona=="profesor")
  {
    this.database.list('personas/profesores').subscribe(data=>
      {
        this.listaProfesores=data;
      });
   
  }else if(this.persona=="administrativo")
  {
    this.database.list('personas/administrativos').subscribe(data=>
      {
        this.listaAdministrativos=data;
      });
  }
    this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
    this.nativeAudio.play('1');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagarArchivoPage');
    
  }
  
  leeArchivos(numarchivo:number,file:any) {

    if(this.persona=="alumno")
    {

  
    let alumno = {} as AlumnoItem;
    let lista:any[] = [];
    var fr = new FileReader();
    var arrayFilas:string[][];
    var archivoNom:string[][];

    //--------------------- Lectura del archivo -------------------------//
    fr.onload = function(e) {
      var text = fr.result;
      var rows = text.split("\n");
      arrayFilas=[];
      
      //guardo todas las filas en un array separando cada atributo que tenga ;
      for (var t=0;t<rows.length-1;t++) {
        if (rows[t].length!=0) {
          //console.log(rows[t].split(";"));
          arrayFilas.push(rows[t].split(";"));
        }
      }

      //Tomo cada elemento del arrayFilas y lo transformo en un alumnno para guardalos en listaAlumno
      for (let index = 0; index < arrayFilas.length; index++) {
        const elemento = arrayFilas[index];
        console.log(elemento);
        alumno.legajo = elemento[0].trim();
        alumno.nombre = elemento[1].trim();
        alumno.turno = elemento[2].trim();
        alumno.mail = elemento[3].trim();
        alumno.password = elemento[0].trim();
        alumno.contPresentes = 0;
        
        lista.push(alumno);

        alumno = {} as AlumnoItem;
      }

      if(numarchivo==0) {
        GeochemComponent.muestras=arrayFilas.slice();
      } else if (numarchivo==1) {
        GeochemComponent.muestras2=arrayFilas.slice();
      }
    };

    fr.readAsText(file,'ISO-8859-4');
    
    this.listaAlumnos = lista;
    //console.log(this.listaAlumnos);
    //console.log(file.name);
    //console.log(file.size);
    this.nombreArchivo = file.name;
    this.sizeArchivo = file.size/1000 + " Kb";

  }else if(this.persona=="profesor")
  {
    let admin = {} as AdministrativoItem;
    let lista:any[] = [];
    var fr = new FileReader();
    var arrayFilas:string[][];
    var archivoNom:string[][];

    //--------------------- Lectura del archivo -------------------------//
    fr.onload = function(e) {
      var text = fr.result;
      var rows = text.split("\n");
      arrayFilas=[];
      
      //guardo todas las filas en un array separando cada atributo que tenga ;
      for (var t=0;t<rows.length-1;t++) {
        if (rows[t].length!=0) {
          //console.log(rows[t].split(";"));
          arrayFilas.push(rows[t].split(";"));
        }
      }

      //Tomo cada elemento del arrayFilas y lo transformo en un alumnno para guardalos en listaAlumno
      for (let index = 0; index < arrayFilas.length; index++) {
        const elemento = arrayFilas[index];
        console.log(elemento);
        admin.dni = elemento[0].trim();
        admin.apellido = elemento[1].trim();
        admin.nombre = elemento[2].trim();
        admin.email = elemento[3].trim();
      
        
        lista.push(admin);

        admin = {} as AdministrativoItem;
      }

      if(numarchivo==0) {
        GeochemComponent.muestras=arrayFilas.slice();
      } else if (numarchivo==1) {
        GeochemComponent.muestras2=arrayFilas.slice();
      }
    };

    fr.readAsText(file,'ISO-8859-4');
    
    this.listaAlumnos = lista;
    //console.log(this.listaAlumnos);
    //console.log(file.name);
    //console.log(file.size);
    this.nombreArchivo = file.name;
    this.sizeArchivo = file.size/1000 + " Kb";
    this.firebaseService.updateProfesor(lista);

  }else if(this.persona=="administrativo")
  {
    let admin = {} as AdministrativoItem;
    let lista:any[] = [];
    var fr = new FileReader();
    var arrayFilas:string[][];
    var archivoNom:string[][];

    //--------------------- Lectura del archivo -------------------------//
    fr.onload = function(e) {
      var text = fr.result;
      var rows = text.split("\n");
      arrayFilas=[];
      
      //guardo todas las filas en un array separando cada atributo que tenga ;
      for (var t=0;t<rows.length-1;t++) {
        if (rows[t].length!=0) {
          //console.log(rows[t].split(";"));
          arrayFilas.push(rows[t].split(";"));
        }
      }

      //Tomo cada elemento del arrayFilas y lo transformo en un alumnno para guardalos en listaAlumno
      for (let index = 0; index < arrayFilas.length; index++) {
        const elemento = arrayFilas[index];
        console.log(elemento);
        admin.dni = elemento[0].trim();
        admin.apellido = elemento[1].trim();
        admin.nombre = elemento[2].trim();
        admin.email = elemento[3].trim();
      
        
        lista.push(admin);

        admin = {} as AdministrativoItem;
      }

      if(numarchivo==0) {
        GeochemComponent.muestras=arrayFilas.slice();
      } else if (numarchivo==1) {
        GeochemComponent.muestras2=arrayFilas.slice();
      }
    };

    fr.readAsText(file,'ISO-8859-4');
    
    this.listaAlumnos = lista;
    //console.log(this.listaAlumnos);
    //console.log(file.name);
    //console.log(file.size);
    this.nombreArchivo = file.name;
    this.sizeArchivo = file.size/1000 + " Kb";
    this.firebaseService.updateAdministrativo(lista);
  }
}

  onFileSelect(input: HTMLInputElement) {
    var files = input.files;
    var len = files.length;
    for (var b=0;b<len;b++) {
      this.leeArchivos(b,files[b]);
    }
  }

  cargarLista(){
    this.banderita=false;
if(this.persona=="alumno")
{

    var rows = this.nombreArchivo.split("-");
    console.log(rows);
    this.listaA.aula =rows[1];
    this.aula=rows[1];
    this.listaA.alumnos=this.listaAlumnos;
    this.listaA.materia=rows[0];
    
    let cont:number;
    cont = this.listaAlumnoItem.length;

    for (let o = 0; o < this.listaAlumnoItem.length; o++) {
      let element = this.listaAlumnoItem[o];
      if(element.materia==this.listaA.materia)
      {
        let listaAux:any[]=[];
        listaAux=this.listaAlumnoItem;
        listaAux[o].alumnos=this.listaA.alumnos;
      
        this.firebaseService.agregarLista(listaAux);
        this.banderita=true;
  break;        

      }
      
    }
    if(this.banderita==false)
    { 
      this.firebaseService.agregarListaDENAZI(this.listaA,cont);
      
    }
    
    console.log(this.aula);
    if(this.aula == "4A"){
      console.log("entro a A");
      this.listaAlumnos.forEach(alumno => {
        this.firebaseService.agregarListaA(alumno);
      });
    }else{
      console.log("entro a B");
      this.listaAlumnos.forEach(alumno => {
        this.firebaseService.agregarListaB(alumno);
      })
    }

//    this.presentAlert("Guardar Lista","Se guado correcetamente la lista");
    let alert = this.alertCtrl.create({
      title: "Guardar Lista",
      subTitle: "La lista se guardó correctamente",
      cssClass:"miClaseAlert",
    buttons: [{text:'Aceptar',
    handler: () => {
      let profileModal = this.modalCtrl.create(AsignarMateriaPage, {materia:this.listaA.materia,aula:this.listaA.aula});
      profileModal.present();
      
    }
    }
   ]
  });
   alert.present();

 
   
   
    
  }else if(this.persona=="profesor")
  {

  }else if(this.persona=="administrativo")
  {
    
  }
}

  descargarArchivo(){
    let miAula:string;

    this.listaAlumnoItem.forEach(aula => {
      console.log(aula);
      if(aula.aula == this.aula){
        miAula = aula.aula;
      }
    });

    if(miAula == this.aula){
      //alert("Ir a descarga");
      this.navCtrl.push(DescargarArchivoPage,{aulaa:this.aula});
    }else{
      //alert("No hya nada que descargar");
     // this.presentAlert("Sin alumnos","No hay nada que descargar");
      let alert = this.alertCtrl.create({
        title: "Sin Alumnos",
        subTitle: "No hay nada que descargar",
        cssClass:"miClaseDanger",
      buttons: ['Aceptar']
    });
     alert.present();
    }
    
  }

  presentAlert(titulo,subtitulo) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      cssClass:"miClaseAlert",
      buttons: ['Aceptar']
    });
    alert.present();
  }

}


