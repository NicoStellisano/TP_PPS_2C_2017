import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
/*
  Generated class for the FireBaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireBaseServiceProvider {

  constructor(public http: Http,public afd: AngularFireDatabase) {
    
      }
    
      getItems()
      {
        return this.afd.list('/items');
        
      }

    
      getTipoCod()
      {
        return this.afd.list('/tipocodigo');
      }
    
      getCargas()
      {
        return this.afd.list('/cargas');
      }
    
      addCarga(carga)
      {
        return this.afd.list('/cargas').push(carga);
      }
    
      getUser(nombre:string)
      {
        return this.afd.list('/users/' ,{
          query: {
            orderByChild :"nombre",
            equalTo:nombre
    
          }
        });
        
      }
    
      getUsers()
      {
    
        return this.afd.list('/personas');
      }

      getProfesores()
      {
        return this.afd.list('/personas/profesores');
        
      }
      getAdministrativos()
      {
        return this.afd.list('/personas/administrativos');
        
      }
      getAlumnos()
      {
        return this.afd.list('/alumno-lista');
        
      }

      getMaterias()
      {
        return this.afd.list('/materias');
        
      }

      addMateria(materia)
      {
        return this.afd.list('/materias').push(materia);
        
      }

      getAdmins()
      {
        return this.afd.list('/personas/admins');
        
      }

      getMessages()
      {
    
        return this.afd.list('/messages');
      }

      getMessages2()
      {
    
        return this.afd.list('/messages2');
      }

      addMessage(message)
      {
        return this.afd.list("/messages").push(message);
      }

      addMessage2(message)
      {
        return this.afd.list("/messages2").push(message);
      }
    
      
      addItem(item)
      {
        return this.afd.list('/items').push(item);
        
      }

      agregarLista(alumnoLista){
       // return this.afd.object('/alumno-lista/'+key).update(alumnoLista);
        return this.afd.object('/alumno-lista/').update(alumnoLista);
        
      }

      agregarListaDENAZI(alumnoLista,key){
        // return this.afd.object('/alumno-lista/'+key).update(alumnoLista);
         return this.afd.object('/alumno-lista/'+key).update(alumnoLista);
         
       }

      agregarListaA(alumno){
        return this.afd.list('/tomarA').push(alumno);
      }

      agregarListaB(alumno){
        return this.afd.list('/tomarB').push(alumno);
      }

      getListaA(){
        return this.afd.list('/tomarA');
      }
      
      getListaB(){
        return this.afd.list('/tomarB');
      }

      updateA(contPre){
        return this.afd.list('/tomarA').update('contPresentes',contPre);
      }

      updateB(contPre){
        return this.afd.list('/tomarB').update('contPresentes',contPre);
      }

      addProfesor(item)
      {
        return this.afd.list('/personas/profesores').push(item);
        
      }
      addAdministrativo(item)
      {
        return this.afd.list('/personas/administrativos').push(item);
        
      }
      addAlumno(item,i)
      {
        return this.afd.list('/alumno-lista/'+i+'/alumnos').push(item);
        
      }
      addUser(item)
      {
        return this.afd.list('/personas').push(item);
        
      }
      updateAlumno(data,key)
      {
        return this.afd.object('/alumno-lista/'+key+'/alumnos').update(data);
      }
      updateAlumnoLista(data,key)
      {
        return this.afd.object('/alumno-lista/').update(data);
      }
      updateProfesor(data)
      {
        return this.afd.list('/personas').update('profesores',data);
      }
      updateAdministrativo(data)
      {
        return this.afd.list('/personas').update('administrativos',data);
      }

     
      removeProfesor(key)
      {
        return this.afd.list('/personas/profesores').remove(key);
      }
      removeAdministrativo(key)
      {
        return this.afd.list('/personas/administrativos').remove(key);
      }

      removeAlumno(i,key)
      {
        return this.afd.list('/alumo-lista/'+i+'/alumnos').remove(key);
        
      }

      removeMessages()
      {
        return this.afd.list('/messages').remove();
        
      }
      

      removeMessages2()
      {
        return this.afd.list('/messages2').remove();
        
      }
    
      removeItem(id)
      {
        return this.afd.list('/items').remove(id);
        
      }

      /*modifyProfesor(dni:FirebaseObjectObservable)
      {
        return this.afd.list('/personas/profesores').update(dni)
      }*/


      //MAURO
      agregarEncuesta(encuesta)
      {
        return this.afd.list('/encuestas').push(encuesta);
        
      }

      traerEncuestas()
      {
        return this.afd.list('/encuestas');
        
      }

      eliminarEncuesta(encuesta)
      {
        //return this.afd.database.ref('Encuestas/'+encuesta.$key).remove();
        console.log(encuesta.$key);
        return this.afd.list('/encuestas/'+encuesta.$key).remove();
      }

      editarEncuest(encuesta)
      {
        return this.afd.object('/encuestas/'+encuesta.$key).update(encuesta);
      }
    }
    