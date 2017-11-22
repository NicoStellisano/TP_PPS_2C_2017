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
        return this.afd.list('/personas/alumnos');
        
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

      addProfesor(item)
      {
        return this.afd.list('/personas/profesores').push(item);
        
      }
      addAdministrativo(item)
      {
        return this.afd.list('/personas/administrativos').push(item);
        
      }
      addAlumno(item)
      {
        return this.afd.list('/personas/alumnos').push(item);
        
      }
      addUser(item)
      {
        return this.afd.list('/personas').push(item);
        
      }
      updateAlumno(data)
      {
        return this.afd.list('/personas').update('alumnos',data);
      }
      updateProfesor(data)
      {
        return this.afd.list('/personas').update('profesores',data);
      }
      updateAdministrativo(data)
      {
        return this.afd.list('/personas').update('administrativos',data);
      }

      removeAlumno(key)
      {
        return this.afd.list('/personas/alumnos').remove(key);
      }
      removeProfesor(key)
      {
        return this.afd.list('/personas/profesores').remove(key);
      }
      removeAdministrativo(key)
      {
        return this.afd.list('/personas/administrativos').remove(key);
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
    }
    