webpackJsonp([11],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireBaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the FireBaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FireBaseServiceProvider = (function () {
    function FireBaseServiceProvider(http, afd) {
        this.http = http;
        this.afd = afd;
    }
    FireBaseServiceProvider.prototype.getItems = function () {
        return this.afd.list('/items');
    };
    FireBaseServiceProvider.prototype.getTipoCod = function () {
        return this.afd.list('/tipocodigo');
    };
    FireBaseServiceProvider.prototype.getCargas = function () {
        return this.afd.list('/cargas');
    };
    FireBaseServiceProvider.prototype.addCarga = function (carga) {
        return this.afd.list('/cargas').push(carga);
    };
    FireBaseServiceProvider.prototype.getUser = function (nombre) {
        return this.afd.list('/users/', {
            query: {
                orderByChild: "nombre",
                equalTo: nombre
            }
        });
    };
    FireBaseServiceProvider.prototype.getUsers = function () {
        return this.afd.list('/personas');
    };
    FireBaseServiceProvider.prototype.getMessages = function () {
        return this.afd.list('/messages');
    };
    FireBaseServiceProvider.prototype.getMessages2 = function () {
        return this.afd.list('/messages2');
    };
    FireBaseServiceProvider.prototype.addMessage = function (message) {
        return this.afd.list("/messages").push(message);
    };
    FireBaseServiceProvider.prototype.addMessage2 = function (message) {
        return this.afd.list("/messages2").push(message);
    };
    FireBaseServiceProvider.prototype.addItem = function (item) {
        return this.afd.list('/items').push(item);
    };
    FireBaseServiceProvider.prototype.addUser = function (item) {
        return this.afd.list('/personas').push(item);
    };
    FireBaseServiceProvider.prototype.removeMessages = function () {
        return this.afd.list('/messages').remove();
    };
    FireBaseServiceProvider.prototype.removeMessages2 = function () {
        return this.afd.list('/messages2').remove();
    };
    FireBaseServiceProvider.prototype.removeItem = function (id) {
        return this.afd.list('/items').remove(id);
    };
    return FireBaseServiceProvider;
}());
FireBaseServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
], FireBaseServiceProvider);

//# sourceMappingURL=fire-base-service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InicioAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioAdministrativoPage = (function () {
    function InicioAdministrativoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //harcodeado para mostrar, despues se debe eliminar y tomarar las aulas de firebase
        this.listaAulas = [
            {
                "nombre": "1° A"
            },
            {
                "nombre": "1° B"
            },
            {
                "nombre": "2° A"
            },
            {
                "nombre": "2° B"
            },
            {
                "nombre": "3° A"
            },
            {
                "nombre": "3° B"
            },
            {
                "nombre": "4° A"
            },
            {
                "nombre": "4° B"
            }
        ];
    }
    InicioAdministrativoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioAdministrativoPage');
    };
    InicioAdministrativoPage.prototype.RedireccionAula = function (aula) {
        switch (aula) {
            case "1° A":
                alert("Se redireccionara al aula: 1° A ");
                //this.navCtrl.push();
                break;
            case "1° B":
                alert("Se redireccionara al aula: 1° B");
                //this.navCtrl.push();
                break;
            case "2° A":
                alert("Se redireccionara al aula: 2° A ");
                //this.navCtrl.push();
                break;
            case "2° B":
                alert("Se redireccionara al aula: 2° B ");
                //this.navCtrl.push();
                break;
            case "3° A":
                alert("Se redireccionara al aula: 3° A ");
                //this.navCtrl.push();
                break;
            case "3° B":
                alert("Se redireccionara al aula: 3° B ");
                //this.navCtrl.push();
                break;
            case "4° A":
                alert("Se redireccionara al aula: 4° A ");
                //this.navCtrl.push();
                break;
            case "4° B":
                alert("Se redireccionara al aula: 4° B ");
                //this.navCtrl.push();
                break;
        }
    };
    return InicioAdministrativoPage;
}());
InicioAdministrativoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio-administrativo',template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\pages\inicio-administrativo\inicio-administrativo.html"*/'<!--\n\n  Generated template for the InicioAdministrativoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione un aula</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n\n\n\n    <div *ngFor="let lista of listaAulas; let i = index"> \n\n        <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionAula(lista.nombre)">{{ lista.nombre }}</button> \n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\pages\inicio-administrativo\inicio-administrativo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], InicioAdministrativoPage);

//# sourceMappingURL=inicio-administrativo.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_admin_inicio_admin__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_administrativo_inicio_administrativo__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_profesor_inicio_profesor__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_alumno_inicio_alumno__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fire_base_service_fire_base_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, fireService, toast, googlePlus, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.fireService = fireService;
        this.toast = toast;
        this.googlePlus = googlePlus;
        this.screenOrientation = screenOrientation;
        this.listadoUsuarios = [];
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.fireService.getUsers().subscribe(function (data) {
            _this.listadoUsuarios = data;
        });
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n         <img src=\"assets/spinner.gif\">",
            duration: 50000000,
            showBackdrop: false
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 6000);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginGoogle = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n       <img src=\"assets/spinner.gif\">",
            duration: 50000000,
            showBackdrop: false
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 4000);
        this.googlePlus.login({
            'webClientId': '822117994633-eau5gidg0q2f1sqltdbnq68mscsrpfui.apps.googleusercontent.com',
            'offline': true
        })
            .then(function (res) {
            var firecreds = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken);
            __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().signInWithCredential(firecreds).then(function (res) {
                for (var i = 0; i < _this.listadoUsuarios.length; i++) {
                    var element = _this.listadoUsuarios[i];
                    if (element.Email == __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().currentUser.email) {
                        switch (element.Perfil) {
                            case "admin":
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__inicio_admin_inicio_admin__["a" /* InicioAdminPage */]);
                                break;
                            case "administrativo":
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_administrativo_inicio_administrativo__["a" /* InicioAdministrativoPage */]);
                                break;
                            case "profesor":
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */]);
                                break;
                            case "alumno":
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__inicio_alumno_inicio_alumno__["a" /* InicioAlumnoPage */]);
                                break;
                        }
                    }
                }
                if (element.Email != __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().currentUser.email) {
                    _this.googlePlus.disconnect();
                    var toast = _this.toast.create({
                        message: 'Usuario no registrado',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }).catch(function (err) {
                alert('Autentificación fallida' + err);
            });
        }).catch(function (err) {
            alert('Error' + err);
        });
        /*
        this.googlePlus.login({'webClientId':'822117994633-eau5gidg0q2f1sqltdbnq68mscsrpfui.apps.googleusercontent.com','offline':true})
        .then(res=>
        {
          firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.accessToken))
          .then(suc=>
          {
            alert("Logeado");
          }).catch(ns=>
          {
            alert("No se logeo");
          })
        })*/
    };
    LoginPage.prototype.login = function (i) {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n       <img src=\"assets/spinner.gif\">",
            duration: 50000000,
            dismissOnPageChange: true
        });
        switch (i) {
            case 0:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inicio_admin_inicio_admin__["a" /* InicioAdminPage */]);
                break;
            case 1:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_administrativo_inicio_administrativo__["a" /* InicioAdministrativoPage */]);
                break;
            case 2:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */]);
                break;
            case 3:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inicio_alumno_inicio_alumno__["a" /* InicioAlumnoPage */]);
                break;
        }
    };
    LoginPage.prototype.selectChange = function () {
        this.usuario = "nicostellisano@hotmail.com";
        this.password = "niconico";
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Inicio de Sesión</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n\n \n\n<div style="width:100%;height:100%">\n\n  <br><br><br><br><br>\n\n  \n\n<button ion-button icon-only color="danger" style="margin:auto;text-align:center;display:block;width:60%;height:30%"  round (click)="loginGoogle()">\n\n  <ion-icon style="font-size:700%;margin:auto;text-align:center;display:block;" name="logo-googleplus"></ion-icon>\n\n</button>\n\n</div>\n\n    <br><br><br>\n\n   <!-- <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n      <ion-label  style="color:white" floating>Usuario</ion-label>\n\n<ion-input clearInput type="text"  [(ngModel)]="usuario" name="usuario" id="usuario"></ion-input></ion-item>\n\n<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n    <ion-label style="color:white" floating>Contraseña</ion-label>      \n\n<ion-input type="password"  [(ngModel)]="password" name="password" id="password"></ion-input></ion-item>\n\n<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n  <ion-label style="color:white">Elige tu usuario</ion-label>\n\n  <ion-select style="background-color:rgba(0, 0, 0, 0.747);color:white" [(ngModel)]="usuarioo" name="usuarioo" id="usuarioo" (ionChange)="selectChange()">\n\n   <!-- <ion-option *ngFor="let usuario of usuarios | async"  [value]="usuario">{{usuario.nombre}}</ion-option>\n\n   <ion-option>nicostellisano@hotmail.com</ion-option>\n\n  </ion-select>\n\n</ion-item>-->\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(0)">Iniciar Sesión(Admin)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(1)">Iniciar Sesión(Administrativo)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(2)">Iniciar Sesión(Profesor)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(3)">Iniciar Sesión(Alumno)</button>\n\n\n\n<br><br><br><br>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_button_renderer_button_renderer__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InicioAdminPage = (function () {
    function InicioAdminPage(navCtrl, navParams, fireService, loadingCtrl, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.listadoUsuarios = [];
        this.settings = {
            delete: {
                confirmDelete: true,
            },
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true,
            },
            columns: {
                DNI: {
                    title: 'DNI',
                    filter: false
                },
                Apellido: {
                    title: 'Apellido',
                    filter: false
                },
                Nombre: {
                    title: 'Nombre',
                    filter: false
                },
                Email: {
                    title: 'Email',
                    filter: false
                },
                Perfil: {
                    title: 'Perfil',
                    filter: false
                },
                Accion: {
                    title: 'Acción',
                    filter: false,
                    type: 'custom',
                    renderComponent: __WEBPACK_IMPORTED_MODULE_3__components_button_renderer_button_renderer__["a" /* ButtonRenderComponent */],
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (row) {
                            alert(row.DNI + " ");
                        });
                    },
                    editable: false,
                    isAddable: false,
                }
            }
        };
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.fireService.getUsers().subscribe(function (data) {
            _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
        });
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n         <img src=\"assets/spinner.gif\">",
            duration: 50000000,
            showBackdrop: false
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 6000);
    }
    InicioAdminPage.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('¿Eliminar?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    InicioAdminPage.prototype.onSaveConfirm = function (event) {
        if (window.confirm('¿Editar?')) {
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    InicioAdminPage.prototype.onCreateConfirm = function (event) {
        if (window.confirm('¿Crear?')) {
            event.confirm.resolve(event.newData);
            // this.fireService.addUser(event.newData);
            alert(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    InicioAdminPage.prototype.asignar = function (dni) {
        alert(dni);
    };
    InicioAdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioAdminPage');
    };
    return InicioAdminPage;
}());
InicioAdminPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n  <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table>\n",
        selector: 'page-inicio-admin',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], InicioAdminPage);

//# sourceMappingURL=inicio-admin.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias_profesor_materias_profesor__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InicioProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioProfesorPage = (function () {
    function InicioProfesorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //harcodeado para mostrar, despues se debe eliminar y tomarar las aulas del profesor de firebase
        this.listaAulasProfesor = [
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
    }
    InicioProfesorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioProfesorPage');
    };
    InicioProfesorPage.prototype.RedireccionAula = function (aula) {
        switch (aula) {
            case "2° B":
                // alert("Se redireccionara al aula: 2° B ");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materias_profesor_materias_profesor__["a" /* MateriasProfesorPage */], { aulaa: aula });
                break;
            case "3° A":
                //redirecciono y paso el aula
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materias_profesor_materias_profesor__["a" /* MateriasProfesorPage */], { aulaa: aula });
                break;
            case "4° A":
                //alert("Se redireccionara al aula: 4° A ");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materias_profesor_materias_profesor__["a" /* MateriasProfesorPage */], { aulaa: aula });
                break;
            case "4° B":
                // alert("Se redireccionara al aula: 4° B ");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materias_profesor_materias_profesor__["a" /* MateriasProfesorPage */], { aulaa: aula });
                break;
        }
    };
    return InicioProfesorPage;
}());
InicioProfesorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio-profesor',template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\pages\inicio-profesor\inicio-profesor.html"*/'<!--\n\n  Generated template for the InicioProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione un aula</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n\n  \n\n      <div *ngFor="let lista of listaAulasProfesor; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionAula(lista.aula)">{{ lista.aula }}</button> \n\n      </div>\n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\pages\inicio-profesor\inicio-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], InicioProfesorPage);

//# sourceMappingURL=inicio-profesor.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MateriasProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MateriasProfesorPage = (function () {
    function MateriasProfesorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aula = this.navParams.get('aulaa');
        // alert(this.aula);
        switch (this.aula) {
            case "2° B":
                break;
            case "3° A":
                this.listaMateriasProfesor = [
                    { "materia": "Laboratorio 3" },
                    { "materia": "Programacion 3" }
                ];
                break;
            case "4° A":
                this.listaMateriasProfesor = [
                    { "materia": "Laboratorio 4" },
                    { "materia": "Practica Profesional" }
                ];
                break;
            case "4° B":
                this.listaMateriasProfesor = [
                    { "materia": "Practica Profesional" },
                ];
                break;
        }
    }
    MateriasProfesorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MateriasProfesorPage');
    };
    MateriasProfesorPage.prototype.RedireccionMaterias = function () {
    };
    MateriasProfesorPage.prototype.RedireccionMateria = function (materia) {
        switch (materia) {
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
    };
    return MateriasProfesorPage;
}());
MateriasProfesorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-materias-profesor',template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\pages\materias-profesor\materias-profesor.html"*/'<!--\n\n  Generated template for the MateriasProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione una materia</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n\n  \n\n      <div *ngFor="let lista of listaMateriasProfesor; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(lista.materia)">{{ lista.materia }}</button> \n\n      </div>\n\n  \n\n  </ion-content>'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\pages\materias-profesor\materias-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MateriasProfesorPage);

//# sourceMappingURL=materias-profesor.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAlumnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InicioAlumnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioAlumnoPage = (function () {
    function InicioAlumnoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InicioAlumnoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioAlumnoPage');
    };
    return InicioAlumnoPage;
}());
InicioAlumnoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio-alumno',template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\pages\inicio-alumno\inicio-alumno.html"*/'<!--\n\n  Generated template for the InicioAlumnoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>InicioAlumno</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\pages\inicio-alumno\inicio-alumno.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], InicioAlumnoPage);

//# sourceMappingURL=inicio-alumno.js.map

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aula-administrativo/aula-administrativo.module": [
		553,
		10
	],
	"../pages/aula-alumno/aula-alumno.module": [
		552,
		9
	],
	"../pages/aula-profesor/aula-profesor.module": [
		561,
		8
	],
	"../pages/inicio-admin/inicio-admin.module": [
		562,
		7
	],
	"../pages/inicio-administrativo/inicio-administrativo.module": [
		554,
		6
	],
	"../pages/inicio-alumno/inicio-alumno.module": [
		556,
		5
	],
	"../pages/inicio-profesor/inicio-profesor.module": [
		557,
		4
	],
	"../pages/login/login.module": [
		555,
		3
	],
	"../pages/materias-profesor/materias-profesor.module": [
		558,
		2
	],
	"../pages/materias/materias.module": [
		560,
		1
	],
	"../pages/perfil/perfil.module": [
		559,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 230;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonRenderComponent = (function () {
    function ButtonRenderComponent() {
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ButtonRenderComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    ButtonRenderComponent.prototype.onClick = function () {
        this.save.emit(this.rowData);
    };
    return ButtonRenderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ButtonRenderComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ButtonRenderComponent.prototype, "rowData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ButtonRenderComponent.prototype, "save", void 0);
ButtonRenderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n  <button  ion-button color='secondary' (click)=\"onClick()\">Asignar Materia</button>",
    })
], ButtonRenderComponent);

//# sourceMappingURL=button-renderer.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaAlumnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AulaAlumnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulaAlumnoPage = (function () {
    function AulaAlumnoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.miAulaAlumno = {};
        this.miAulaAlumno = {
            turno: "tarde",
            profesor: "Pepe",
            materia: "Literatura"
        };
    }
    AulaAlumnoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AulaAlumnoPage');
    };
    return AulaAlumnoPage;
}());
AulaAlumnoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aula-alumno',template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\pages\aula-alumno\aula-alumno.html"*/'<!--\n\n  Generated template for the AulaAlumnoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Aula Alumno</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula.jpg\')" class="fondo">\n\n\n\n  <ion-list>\n\n\n\n   <!-- <ion-item>\n\n      <ion-label>Toppings</ion-label>\n\n        <ion-select [(ngModel)]="miAulaAlumno.turno"cancelText="cancelar" okText="elegir">\n\n          <ion-option value="nulo" selected="true">Elegir turno</ion-option>\n\n          <ion-option value="mañana">Mañana</ion-option>\n\n          <ion-option value="tarde" selected="true">Tarde</ion-option>\n\n          <ion-option value="noche">Noche</ion-option>\n\n        </ion-select>\n\n    </ion-item> -->\n\n\n\n    <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Turno</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.turno" disabled="true"></ion-input> \n\n    </ion-item>\n\n            \n\n     <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Profesor</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.profesor" disabled="true"></ion-input>\n\n     </ion-item>\n\n        \n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Materia</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.materia" disabled="true"></ion-input>\n\n    </ion-item> \n\n  </ion-list>\n\n      \n\n  <div>\n\n    <button ion-button round full large  class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Volver\n\n    </button>\n\n  </div>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\pages\aula-alumno\aula-alumno.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AulaAlumnoPage);

//# sourceMappingURL=aula-alumno.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AulaAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulaAdministrativoPage = (function () {
    function AulaAdministrativoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.miAulaAdministrativo = {};
        this.miAulaAdministrativo = {
            profesor: "Juan Peralta",
            division: "2°B",
            materia: "Laboratorio IV",
            cantidadAlumno: 25
        };
    }
    AulaAdministrativoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AulaAdministrativoPage');
    };
    return AulaAdministrativoPage;
}());
AulaAdministrativoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aula-administrativo',template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\pages\aula-administrativo\aula-administrativo.html"*/'<!--\n\n  Generated template for the AulaAdministrativoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Aula Administrativo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n\n\n  <ion-list>\n\n        \n\n    <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Profesor</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.profesor" disabled="true"></ion-input> \n\n    </ion-item>\n\n              \n\n    <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Divicion</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.division" disabled="true"></ion-input>\n\n    </ion-item>\n\n          \n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Materia</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.materia" disabled="true"></ion-input>\n\n    </ion-item> \n\n\n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n\n      <ion-input type="number" [(ngModel)]="miAulaAdministrativo.cantidadAlumno" disabled="true"></ion-input>\n\n    </ion-item> \n\n\n\n  </ion-list>\n\n\n\n  <div>\n\n    <button ion-button round full large  class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Volver\n\n    </button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\pages\aula-administrativo\aula-administrativo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AulaAdministrativoPage);

//# sourceMappingURL=aula-administrativo.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MateriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MateriasPage = (function () {
    function MateriasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //harcodeado para mostrar, despues se debe eliminar y tomarar las aulamateriass de firebase
        this.listaMateriasAlumno = [
            {
                "materia": "Programacion 3"
            },
            {
                "materia": "Laboratorio 3"
            },
            {
                "materia": "Base de datos 1"
            },
            {
                "materia": "Practica profesional"
            },
            {
                "materia": "Ingles 2"
            },
        ];
    }
    MateriasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MateriasPage');
    };
    MateriasPage.prototype.RedireccionMateria = function (materia) {
        switch (materia) {
            case "Programacion 3":
                alert("Se redireccionara a la materia: Programacion 3 ");
                //this.navCtrl.push();
                break;
            case "Laboratorio 3":
                alert("Se redireccionara a la materia: Laboratorio 3 ");
                //this.navCtrl.push();
                break;
            case "Base de datos 1":
                alert("Se redireccionara a la materia: Base de datos 1");
                //this.navCtrl.push();
                break;
            case "Practica profesional":
                alert("Se redireccionara a la materia: Practica profesional ");
                //this.navCtrl.push();
                break;
            case "Ingles 2":
                alert("Se redireccionara a la materia: Ingles 2");
                //this.navCtrl.push();
                break;
        }
    };
    return MateriasPage;
}());
MateriasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-materias',template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\pages\materias\materias.html"*/'<!--\n\n  Generated template for the MateriasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Materias</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/halloween-Materias.png\')" class="fondo">\n\n  \n\n      <div *ngFor="let lista of listaMateriasAlumno; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(lista.materia)">{{ lista.materia }}</button> \n\n      </div>\n\n  \n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\pages\materias\materias.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MateriasPage);

//# sourceMappingURL=materias.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AulaProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulaProfesorPage = (function () {
    function AulaProfesorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.miAulaProfesor = {};
        this.miAulaProfesor = {
            division: "1°A",
            materia: "Programacion I",
            cantidadAlumnos: 20
        };
    }
    AulaProfesorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AulaProfesorPage');
    };
    return AulaProfesorPage;
}());
AulaProfesorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aula-profesor',template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\pages\aula-profesor\aula-profesor.html"*/'<!--\n\n  Generated template for the AulaProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Aula Profesor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-profesor.jpg\')" class="fondo">\n\n\n\n  <ion-list>\n\n              \n\n    <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Divicion</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.division" disabled="true"></ion-input> \n\n    </ion-item>\n\n                    \n\n    <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Materia</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.materia" disabled="true"></ion-input>\n\n    </ion-item>\n\n                \n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.cantidadAlumno" disabled="true"></ion-input>\n\n    </ion-item> \n\n  \n\n  </ion-list>\n\n\n\n  <div>\n\n    <button ion-button round full large  class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Volver\n\n    </button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\pages\aula-profesor\aula-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AulaProfesorPage);

//# sourceMappingURL=aula-profesor.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_admin_inicio_admin__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inicio_administrativo_inicio_administrativo__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inicio_profesor_inicio_profesor__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inicio_alumno_inicio_alumno__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aula_alumno_aula_alumno__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_aula_administrativo_aula_administrativo__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aula_profesor_aula_profesor__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_fire_base_service_fire_base_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_button_renderer_button_renderer__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_materias_materias__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_materias_profesor_materias_profesor__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_screen_orientation__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var config = {
    apiKey: "AIzaSyAyMMkFUgvDYxYawz6yGUWlSaHyyk32QAo",
    authDomain: "controlalumnos-6cbb9.firebaseapp.com",
    databaseURL: "https://controlalumnos-6cbb9.firebaseio.com",
    projectId: "controlalumnos-6cbb9",
    storageBucket: "controlalumnos-6cbb9.appspot.com",
    messagingSenderId: "822117994633"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_inicio_admin_inicio_admin__["a" /* InicioAdminPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_inicio_administrativo_inicio_administrativo__["a" /* InicioAdministrativoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_inicio_alumno_inicio_alumno__["a" /* InicioAlumnoPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_aula_alumno_aula_alumno__["a" /* AulaAlumnoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_aula_profesor_aula_profesor__["a" /* AulaProfesorPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_aula_administrativo_aula_administrativo__["a" /* AulaAdministrativoPage */],
            __WEBPACK_IMPORTED_MODULE_20__components_button_renderer_button_renderer__["a" /* ButtonRenderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_materias_materias__["a" /* MateriasPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_materias_profesor_materias_profesor__["a" /* MateriasProfesorPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__["b" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/aula-alumno/aula-alumno.module#AulaAlumnoPageModule', name: 'AulaAlumnoPage', segment: 'aula-alumno', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/aula-administrativo/aula-administrativo.module#AulaAdministrativoPageModule', name: 'AulaAdministrativoPage', segment: 'aula-administrativo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-administrativo/inicio-administrativo.module#InicioAdministrativoPageModule', name: 'InicioAdministrativoPage', segment: 'inicio-administrativo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-alumno/inicio-alumno.module#InicioAlumnoPageModule', name: 'InicioAlumnoPage', segment: 'inicio-alumno', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-profesor/inicio-profesor.module#InicioProfesorPageModule', name: 'InicioProfesorPage', segment: 'inicio-profesor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/materias-profesor/materias-profesor.module#MateriasProfesorPageModule', name: 'MateriasProfesorPage', segment: 'materias-profesor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/materias/materias.module#MateriasPageModule', name: 'MateriasPage', segment: 'materias', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/aula-profesor/aula-profesor.module#AulaProfesorPageModule', name: 'AulaProfesorPage', segment: 'aula-profesor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-admin/inicio-admin.module#InicioAdminPageModule', name: 'InicioAdminPage', segment: 'inicio-admin', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_inicio_admin_inicio_admin__["a" /* InicioAdminPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_inicio_administrativo_inicio_administrativo__["a" /* InicioAdministrativoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_inicio_alumno_inicio_alumno__["a" /* InicioAlumnoPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_aula_alumno_aula_alumno__["a" /* AulaAlumnoPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_aula_administrativo_aula_administrativo__["a" /* AulaAdministrativoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_aula_profesor_aula_profesor__["a" /* AulaProfesorPage */],
            __WEBPACK_IMPORTED_MODULE_20__components_button_renderer_button_renderer__["a" /* ButtonRenderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_materias_materias__["a" /* MateriasPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_materias_profesor_materias_profesor__["a" /* MateriasProfesorPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { AulaAlumnoPage } from '../pages/aula-alumno/aula-alumno'; //test
//import { AulaAdministrativoPage } from '../pages/aula-administrativo/aula-administrativo';
//import { AulaProfesorPage } from '../pages/aula-profesor/aula-profesor';
var MyApp = (function () {
    //rootPage:any = AulaProfesorPage; //test
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Nico\TP_PPS_2C_2017\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\TP_PPS_2C_2017\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[339]);
//# sourceMappingURL=main.js.map