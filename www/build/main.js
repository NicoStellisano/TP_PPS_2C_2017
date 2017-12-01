webpackJsonp([24],{

<<<<<<< HEAD
/***/ 107:
=======
/***/ 112:
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignarMateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materia_materia__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* Generated class for the AsignarMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AsignarMateriaPage = (function () {
    function AsignarMateriaPage(navCtrl, navParams, fireService, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.listaAlumnos = [];
        this.listaAux = [];
        this.listaProfesores = [];
        this.materiaD = this.navParams.get("materia");
        this.aula = this.navParams.get("aula");
    }
    AsignarMateriaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listaAlumnos = data;
        });
        this.fireService.getProfesores().subscribe(function (data) {
            _this.listaProfesores = data;
        });
    };
    AsignarMateriaPage.prototype.asignar = function () {
        var _this = this;
        try {
            //  this.fireService.addMateria({materiaD:this.materiaD,curso:this.curso,nombre:this.materia});
            for (var i = 0; i < this.listaAlumnos.length; i++) {
                var element = this.listaAlumnos[i];
                if (element.aula == this.aula && element.materia == this.materiaD) {
                    this.listaAux = this.listaAlumnos;
                    this.listaAux[i].profesor = this.profesor.Apellido;
                    //this.listaAux[i]=
                    this.fireService.updateAlumnoLista(this.listaAux, element['$key']);
                    this.fireService.getAlumnos().subscribe(function (data) {
                        _this.listaAlumnos = data;
                    });
                }
            }
            var alert_1 = this.alertCtrl.create({
                title: "Exito!",
                subTitle: "Profesor asignado",
                cssClass: "miClaseAlert",
                buttons: ['Aceptar']
            });
            alert_1.present();
            this.viewCtrl.dismiss();
        }
        catch (error) {
            var alert_2 = this.alertCtrl.create({
                title: "Error!",
                subTitle: "No se pudo asignar el profesor",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert_2.present();
            console.log(error);
        }
    };
    return AsignarMateriaPage;
}());
AsignarMateriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-asignar-materia',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/asignar-materia/asignar-materia.html"*/'<!--\n  Generated template for the AsignarmateriaDPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Asignar Profesor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n        <ion-label  style="color:white" floating>Aula</ion-label>\n    <ion-input disabled clearInput type="text"  [(ngModel)]="aula" name="aula" id="aula"></ion-input></ion-item>\n  <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n    <ion-label  style="color:white" floating>Materia</ion-label>\n<ion-input disabled clearInput type="text"  [(ngModel)]="materiaD" name="materiaD" id="materiaD"></ion-input></ion-item>\n<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n  <ion-label style="color:white">Profesor</ion-label>\n <ion-select style="background-color:rgba(0, 0, 0, 0.747);color:white" [(ngModel)]="profesor" name="profesor" id="profesor">\n   <ion-option *ngFor="let profesor of listaProfesores" [value]="profesor">{{profesor.Nombre}} {{profesor.Apellido}}</ion-option>\n   \n  </ion-select>\n</ion-item>\n<br> <br>\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="asignar()">Asignar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/asignar-materia/asignar-materia.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AsignarMateriaPage);

//# sourceMappingURL=asignar-materia.js.map

/***/ }),

<<<<<<< HEAD
/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignarMateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* Generated class for the AsignarMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AsignarMateriaPage = (function () {
    function AsignarMateriaPage(navCtrl, navParams, fireService, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.listaAlumnos = [];
        this.listaAux = [];
        this.listaProfesores = [];
        this.materiaD = this.navParams.get("materia");
        this.aula = this.navParams.get("aula");
    }
    AsignarMateriaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listaAlumnos = data;
        });
        this.fireService.getProfesores().subscribe(function (data) {
            _this.listaProfesores = data;
        });
    };
    AsignarMateriaPage.prototype.asignar = function () {
        var _this = this;
        try {
            //  this.fireService.addMateria({materiaD:this.materiaD,curso:this.curso,nombre:this.materia});
            for (var i = 0; i < this.listaAlumnos.length; i++) {
                var element = this.listaAlumnos[i];
                if (element.aula == this.aula && element.materia == this.materiaD) {
                    this.listaAux = this.listaAlumnos;
                    this.listaAux[i].profesor = this.profesor.Apellido;
                    //this.listaAux[i]=
                    this.fireService.updateAlumnoLista(this.listaAux, element['$key']);
                    this.fireService.getAlumnos().subscribe(function (data) {
                        _this.listaAlumnos = data;
                    });
                }
            }
            var alert_1 = this.alertCtrl.create({
                title: "Exito!",
                subTitle: "Profesor asignado",
                cssClass: "miClaseAlert",
                buttons: ['Aceptar']
            });
            alert_1.present();
            this.viewCtrl.dismiss();
        }
        catch (error) {
            var alert_2 = this.alertCtrl.create({
                title: "Error!",
                subTitle: "No se pudo asignar el profesor",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert_2.present();
            console.log(error);
        }
    };
    return AsignarMateriaPage;
}());
AsignarMateriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-asignar-materia',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\asignar-materia\asignar-materia.html"*/'<!--\n\n  Generated template for the AsignarmateriaDPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Asignar Profesor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n        <ion-label  style="color:white" floating>Aula</ion-label>\n\n    <ion-input disabled clearInput type="text"  [(ngModel)]="aula" name="aula" id="aula"></ion-input></ion-item>\n\n  <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n    <ion-label  style="color:white" floating>Materia</ion-label>\n\n<ion-input disabled clearInput type="text"  [(ngModel)]="materiaD" name="materiaD" id="materiaD"></ion-input></ion-item>\n\n<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n  <ion-label style="color:white">Profesor</ion-label>\n\n <ion-select style="background-color:rgba(0, 0, 0, 0.747);color:white" [(ngModel)]="profesor" name="profesor" id="profesor">\n\n   <ion-option *ngFor="let profesor of listaProfesores" [value]="profesor">{{profesor.Nombre}} {{profesor.Apellido}}</ion-option>\n\n   \n\n  </ion-select>\n\n</ion-item>\n\n<br> <br>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="asignar()">Asignar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\asignar-materia\asignar-materia.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AsignarMateriaPage);

//# sourceMappingURL=asignar-materia.js.map

/***/ }),

/***/ 146:
=======
/***/ 113:
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(126);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(104);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AulaAdministrativoItem } from '../../models/aula-administrativo-item/aula-administrativo.interface';



// for databas


/**
 * Generated class for the AulaAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulaAdministrativoPage = (function () {
    //miAulaAdministrativo = {} as AulaAdministrativoItem;
    function AulaAdministrativoPage(navCtrl, navParams, fireService, loadingCtrl, screenOrientation, platform, afd, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.afd = afd;
        this.alertCtrl = alertCtrl;
        this.listadoAlumnos = [];
        this.listaAux = [];
        this.settings = {
            actions: {
                columnTitle: '',
            },
            noDataMessage: "No se encuentran registros",
            delete: {
                confirmDelete: true,
                deleteButtonContent: 'Borrar',
            },
            add: {
                confirmCreate: true,
                addButtonContent: "Agregar",
                createButtonContent: 'Crear',
                cancelButtonContent: 'Cancelar'
            },
            edit: {
                confirmSave: true,
                editButtonContent: 'Editar',
                saveButtonContent: 'Guardar',
                cancelButtonContent: 'Cancelar'
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
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        /*this.miAulaAdministrativo = {
          profesor:"Juan Peralta",
          division:"2°B",
          materia:"Laboratorio IV",
    
    
          cantidadAlumno:25
        };*/
    }
    AulaAdministrativoPage.prototype.activar = function () {
        this.seleccion = "a";
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            var element = this.listadoAlumnos[i];
            if (element.aula == "4A") {
                for (var j = 0; j < element.alumnos.length; j++) {
                    var element2 = element.alumnos[j];
                    if (element2 != undefined && (element2.vigente == null || element2.vigente == undefined))
                        this.listaAux.push(element2);
                }
            }
        }
        this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */](this.listaAux);
        console.log(this.listaAux);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n      <img src=\"assets/spinner.gif\">",
            duration: 50000000,
            showBackdrop: false
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    AulaAdministrativoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afd.list("/alumno-lista").subscribe(function (data) {
            _this.listadoAlumnos = data;
            if (!_this.flag) {
                _this.flag = true;
                _this.activar();
            }
        });
        this.aula = this.navParams.get('aulaa');
    };
    AulaAdministrativoPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.unlock();
    };
    AulaAdministrativoPage.prototype.cargarLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { aulaa: this.aula, persona: "alumno" });
        //alert("voy a cargar lista");
    };
    AulaAdministrativoPage.prototype.onDeleteConfirm = function (event) {
<<<<<<< HEAD
=======
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Eliminar?',
            cssClass: 'miClaseAlert',
            message: '¿Seguro quieres eliminar?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        event.confirm.reject();
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        if (_this.seleccion == "a") {
                            for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                var element = _this.listadoAlumnos[i];
                                if (element.aula == "4A") {
                                    try {
                                        for (var j = 0; j < element.alumnos.length; j++) {
                                            var element2 = element.alumnos[j];
                                            if (element2.mail == event.data.mail) {
                                                _this.listaAux[j].vigente = false;
                                                _this.fireService.updateAlumno(_this.listaAux, element['$key']);
                                                event.confirm.reject();
                                                break;
                                            }
                                        }
                                    }
                                    catch (error) {
                                        console.log(error);
                                    }
                                    //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                                } //ACA
                            }
                            _this.fireService.getAlumnos().subscribe(function (data) {
                                _this.listadoAlumnos = data;
                            });
                            _this.listaAux = [];
                            for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                var element = _this.listadoAlumnos[i];
                                if (element.aula == "4A") {
                                    for (var j = 0; j < element.alumnos.length; j++) {
                                        var element2 = element.alumnos[j];
                                        if (element2 != undefined && (element2.vigente == null || element2.vigente == undefined))
                                            _this.listaAux.push(element2);
                                    }
                                }
                            }
                            _this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */](_this.listaAux);
                        }
                        else if (_this.seleccion == "b") {
                            for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                var element = _this.listadoAlumnos[i];
                                if (element.aula == "4B") {
                                    try {
                                        for (var j = 0; j < element.alumnos.length; j++) {
                                            var element2 = element.alumnos[j];
                                            if (element2.mail == event.data.mail) {
                                                _this.listaAux[j].vigente = false;
                                                _this.fireService.updateAlumno(_this.listaAux, element['$key']);
                                                event.confirm.reject();
                                                // this.fireService.removeAlumno(element['$key'],j);
                                                break;
                                            }
                                        }
                                        break;
                                    }
                                    catch (error) {
                                        console.log(error);
                                    }
                                }
                                //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                            }
                            _this.listaAux = [];
                            for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                var element = _this.listadoAlumnos[i];
                                if (element.aula == "4B") {
                                    for (var j = 0; j < element.alumnos.length; j++) {
                                        var element2 = element.alumnos[j];
                                        if (element2 != undefined && (element2.vigente == null || element2.vigente == undefined))
                                            _this.listaAux.push(element2);
                                    }
                                }
                            }
                            _this.source2 = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */](_this.listaAux);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AulaAdministrativoPage.prototype.onSaveConfirm = function (event) {
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Editar?',
            cssClass: 'miClaseAlert',
            message: '¿Seguro quieres editar?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        event.confirm.reject();
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        if (event.newData.legajo != null && event.newData.nombre != null && event.newData.mail != null && event.newData.turno != null
                            && event.newData.legajo != undefined && event.newData.nombre != undefined && event.newData.mail != undefined && event.newData.turno != undefined &&
                            event.newData.legajo != "" && event.newData.nombre != "" && event.newData.mail != "" && event.newData.turno != "") {
                            if (event.newData.mail.includes('@')) {
                                if (_this.seleccion == "a") {
                                    for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                        var element = _this.listadoAlumnos[i];
                                        if (element.aula == "4A") {
                                            try {
                                                for (var j = 0; j < element.alumnos.length; j++) {
                                                    var element2 = element.alumnos[j];
                                                    if (element2.mail == event.newData.mail) {
                                                        _this.listaAux[j] = event.newData;
                                                        element.alumnos = _this.listaAux;
                                                        _this.fireService.updateAlumno(_this.listaAux, element['$key']);
                                                        event.confirm.reject();
                                                        break;
                                                    }
                                                } // this.fireService.updateAlumno(this.listaAux,element['$key']); 
                                            }
                                            catch (error) {
                                                console.log(error);
                                            }
                                        }
                                        //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                                    } //ACA
                                    _this.fireService.getAlumnos().subscribe(function (data) {
                                        _this.listadoAlumnos = data;
                                    });
                                    _this.listaAux = [];
                                    for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                        var element = _this.listadoAlumnos[i];
                                        if (element.aula == "4A") {
                                            for (var j = 0; j < element.alumnos.length; j++) {
                                                var element2 = element.alumnos[j];
                                                if (element2 != undefined && (element2.vigente == null || element2.vigente == undefined))
                                                    _this.listaAux.push(element2);
                                            }
                                        }
                                    }
                                    _this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */](_this.listaAux);
                                }
                                else if (_this.seleccion == "b") {
                                    for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                        var element = _this.listadoAlumnos[i];
                                        if (element.aula == "4B") {
                                            try {
                                                for (var j = 0; j < element.alumnos.length; j++) {
                                                    var element2 = element.alumnos[j];
                                                    if (element2.mail == event.newData.mail) {
                                                        _this.listaAux[j] = event.newData;
                                                        element.alumnos = _this.listaAux;
                                                        _this.fireService.updateAlumno(_this.listaAux, element['$key']);
                                                        event.confirm.reject();
                                                        break;
                                                    }
                                                } // this.fireService.updateAlumno(this.listaAux,element['$key']); 
                                            }
                                            catch (error) {
                                                console.log(error);
                                            }
                                        }
                                        //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                                    } //ACA
                                    _this.fireService.getAlumnos().subscribe(function (data) {
                                        _this.listadoAlumnos = data;
                                    });
                                    _this.listaAux = [];
                                    for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                        var element = _this.listadoAlumnos[i];
                                        if (element.aula == "4B") {
                                            for (var j = 0; j < element.alumnos.length; j++) {
                                                var element2 = element.alumnos[j];
                                                if (element2 != undefined && (element2.vigente == null || element2.vigente == undefined))
                                                    _this.listaAux.push(element2);
                                            }
                                        }
                                    }
                                    _this.source2 = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */](_this.listaAux);
                                }
                            }
                            else {
                                var alert_1 = _this.alertCtrl.create({
                                    title: "Info",
                                    subTitle: "Correo inválido",
                                    cssClass: "miClaseDanger",
                                    buttons: ['Aceptar']
                                });
                                alert_1.present();
                                event.confirm.reject();
                            }
                        }
                        else {
                            var alert_2 = _this.alertCtrl.create({
                                title: "Info",
                                subTitle: "Completa Los Datos",
                                cssClass: "miClaseDanger",
                                buttons: ['Aceptar']
                            });
                            alert_2.present();
                            event.confirm.reject();
                        }
                        event.confirm.reject();
                    }
                }
            ]
        });
        alert.present();
    };
    AulaAdministrativoPage.prototype.changeList = function (event) {
        var _this = this;
        this.listaAux = [];
        this.seleccion = event;
        if (this.seleccion == 'a') {
            this.fireService.getAlumnos().subscribe(function (data) {
                _this.listadoAlumnos = data;
            });
            for (var i = 0; i < this.listadoAlumnos.length; i++) {
                var element = this.listadoAlumnos[i];
                if (element.aula == "4A") {
                    for (var j = 0; j < element.alumnos.length; j++) {
                        var element2 = element.alumnos[j];
                        if (element2 != undefined && (element2.vigente == null || element2.vigente == undefined))
                            this.listaAux.push(element2);
                    }
                }
            }
            this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */](this.listaAux);
        }
        else if (this.seleccion == 'b') {
            this.fireService.getAlumnos().subscribe(function (data) {
                _this.listadoAlumnos = data;
            });
            for (var i = 0; i < this.listadoAlumnos.length; i++) {
                var element = this.listadoAlumnos[i];
                if (element.aula == "4B") {
                    for (var j = 0; j < element.alumnos.length; j++) {
                        var element2 = element.alumnos[j];
                        if (element2 != undefined && (element2.vigente == null || element2.vigente == undefined))
                            this.listaAux.push(element2);
                    }
                }
            }
            this.source2 = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */](this.listaAux);
        }
    };
    AulaAdministrativoPage.prototype.onCreateConfirm = function (event) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Crear?',
            cssClass: 'miClaseAlert',
            message: '¿Seguro quieres crear?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        event.confirm.reject();
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        if (event.newData.legajo != null && event.newData.nombre != null && event.newData.mail != null && event.newData.turno != null
                            && event.newData.legajo != undefined && event.newData.nombre != undefined && event.newData.mail != undefined && event.newData.turno != undefined &&
                            event.newData.legajo != "" && event.newData.nombre != "" && event.newData.mail != "" && event.newData.turno != "") {
                            if (event.newData.mail.includes('@') && event.newData.mail.includes('.com')) {
                                if (_this.seleccion == "a") {
                                    _this.listaAux.push(event.newData);
                                    for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                        var element = _this.listadoAlumnos[i];
                                        if (element.aula == "4A") {
                                            try {
                                                element.alumnos = _this.listaAux;
                                                event.confirm.resolve();
                                                _this.listaAux[_this.listaAux.lastIndexOf(event.newData)].password = event.newData.legajo;
                                                _this.listaAux[_this.listaAux.lastIndexOf(event.newData)].contPresentes = 0;
                                                //    this.listaAux[this.listaAux.lastIndexOf(event.newData)].password=event.newData.DNI;
                                                _this.fireService.updateAlumno(_this.listaAux, element['$key']);
                                                break;
                                                //this.fireService.addAlumno(event.newData,indox)
                                                // element.alumnos=this.listaAux;
                                                // this.fireService.updateAlumno(this.listaAux,element['$key']); 
                                            }
                                            catch (error) {
                                                console.log(error);
                                            }
                                            //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                                        } //ACA
                                    }
                                    _this.fireService.getAlumnos().subscribe(function (data) {
                                        _this.listadoAlumnos = data;
                                    });
                                    _this.listaAux = [];
                                    for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                        var element = _this.listadoAlumnos[i];
                                        if (element.aula == "4A") {
                                            for (var j = 0; j < element.alumnos.length; j++) {
                                                var element2 = element.alumnos[j];
                                                if (element2 != undefined && (element2.vigente == null || element2.vigente == undefined))
                                                    _this.listaAux.push(element2);
                                            }
                                        }
                                    }
                                    _this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */](_this.listaAux);
                                }
                                else if (_this.seleccion == "b") {
                                    _this.listaAux.push(event.newData);
                                    for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                        var element = _this.listadoAlumnos[i];
                                        if (element.aula == "4B") {
                                            try {
                                                element.alumnos = _this.listaAux;
                                                event.confirm.resolve();
                                                _this.listaAux[_this.listaAux.lastIndexOf(event.newData)].password = event.newData.legajo;
                                                _this.listaAux[_this.listaAux.lastIndexOf(event.newData)].contPresentes = 0;
                                                //    this.listaAux[this.listaAux.lastIndexOf(event.newData)].password=event.newData.DNI;
                                                _this.fireService.updateAlumno(_this.listaAux, element['$key']);
                                                break;
                                            }
                                            catch (error) {
                                                console.log(error);
                                            }
                                        }
                                        //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                                    }
                                    _this.listaAux = [];
                                    for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                        var element = _this.listadoAlumnos[i];
                                        if (element.aula == "4B") {
                                            for (var j = 0; j < element.alumnos.length; j++) {
                                                var element2 = element.alumnos[j];
                                                if (element2 != undefined && (element2.vigente == null || element2.vigente == undefined))
                                                    _this.listaAux.push(element2);
                                            }
                                        }
                                    }
                                    _this.source2 = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */](_this.listaAux);
                                }
                                else {
                                    event.confirm.reject();
                                }
                            }
                            else {
                                var alert_3 = _this.alertCtrl.create({
                                    title: "Info",
                                    subTitle: "Correo Inválido",
                                    cssClass: "miClaseDanger",
                                    buttons: ['Aceptar']
                                });
                                alert_3.present();
                                event.confirm.reject();
                            }
                        }
                        else {
                            var alert_4 = _this.alertCtrl.create({
                                title: "Info",
                                subTitle: "Completa Los Datos",
                                cssClass: "miClaseDanger",
                                buttons: ['Aceptar']
                            });
                            alert_4.present();
                            event.confirm.reject();
                        }
                        event.confirm.reject();
                    }
                }
            ]
        });
        alert.present();
    };
    return AulaAdministrativoPage;
}());
AulaAdministrativoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aula-administrativo',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/aula-administrativo/aula-administrativo.html"*/'<!--\n  Generated template for the AulaAdministrativoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Aula Administrativo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n <!-- <ion-list>\n        \n    <ion-item class="animated flipInX miItem">\n      <ion-label class="miLabel" floating>Profesor</ion-label>\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.profesor" disabled="true"></ion-input> \n    </ion-item>\n              \n    <ion-item class="animated flipInY miItem">\n      <ion-label class="miLabel" floating>Divicion</ion-label>\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.division" disabled="true"></ion-input>\n    </ion-item>\n          \n    <ion-item class="animated flipInX miItem" >\n      <ion-label class="miLabel" floating >Materia</ion-label>\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.materia" disabled="true"></ion-input>\n    </ion-item> \n\n    <ion-item class="animated flipInX miItem" >\n      <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n      <ion-input type="number" [(ngModel)]="miAulaAdministrativo.cantidadAlumno" disabled="true"></ion-input>\n    </ion-item> \n\n  </ion-list>-->\n\n  \n  \n      <ion-item >\n        <ion-label>Curso</ion-label>\n        <ion-select interface=\'action-sheet\' [(ngModel)]="seleccion" (ionChange)="changeList($event)">\n          <ion-option (ionSelect)="changeList(\'a\')" value="a">4ºA</ion-option>\n          <ion-option (ionSelect)="changeList(\'b\')" value="b">4ºB</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item >\n      <div style=\'width:100%;height:100%\' *ngIf=\'seleccion=="a"\'>\n        <ng2-smart-table style=\'width:100%;height:100%\' [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"\n        (editConfirm)="onSaveConfirm($event)"\n        (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div>\n      </ion-item>\n      <ion-item >\n        <div style=\'width:100%;height:100%\' *ngIf=\'seleccion=="b"\'>\n        <ng2-smart-table style=\'width:100%;height:100%\'  [settings]="settings" [source]="source2" (deleteConfirm)="onDeleteConfirm($event)"\n        (editConfirm)="onSaveConfirm($event)"\n        (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div>\n   </ion-item> \n\n\n   \n  \n    <button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n      <ion-icon name="arrow-round-back"></ion-icon> Cargar Alumnos\n    </button>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/aula-administrativo/aula-administrativo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AulaAdministrativoPage);

//# sourceMappingURL=aula-administrativo.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescargarArchivoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(23);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
 * Generated class for the DescargarArchivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DescargarArchivoPage = (function () {
    function DescargarArchivoPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.listaAlumnosCsv = [];
        this.aula = this.navParams.get('aulaa');
        //Toma lista para leer y crear archivo
        this.lista(this.aula).subscribe(function (dato) {
            //lista de alumnos en el aula
            _this.listaAlumnosCsv = dato.values().next().value.alumnos;
        });
    }
    DescargarArchivoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescargarArchivoPage');
    };
    DescargarArchivoPage.prototype.generaCSV = function () {
        var _this = this;
        var csvContent = "data:text/csv;charset=utf-8,";
        this.listaAlumnosCsv.forEach(function (alumno) {
            //alumno
            console.log(alumno);
            csvContent += _this.generarLinea(alumno);
        });
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "alumnos.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
    };
    DescargarArchivoPage.prototype.generarLinea = function (alumno) {
        var texto;
        texto = alumno.legajo + ";" + alumno.mail + ";" + alumno.nombre + ";" + alumno.turno + ";\r\n";
        console.log("genera linea: " + texto);
        return texto;
    };
    DescargarArchivoPage.prototype.lista = function (aula) {
        return this.database.list('/alumno-lista/', {
            query: {
                orderByChild: "aula",
                equalTo: aula
            }
        });
    };
    return DescargarArchivoPage;
}());
DescargarArchivoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-descargar-archivo',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/descargar-archivo/descargar-archivo.html"*/'<!--\n  Generated template for the DescargarArchivoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Descargar Archivo {{aula}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="generaCSV()">\n        <ion-icon name="logo-dropbox"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-image:url(\'assets/descarga-archivo.png\')" class="fondo">\n  <ion-list>\n    <ion-item *ngFor="let alumno of listaAlumnosCsv " class="animated flipInX miItem">\n      <h3>Legajo: {{alumno.legajo}}</h3>\n      <h2>Mail: {{alumno.mail}}</h2>\n      <h2>Nombre: {{alumno.nombre}}</h2>\n      <h2>Tuno: {{alumno.turno}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/descargar-archivo/descargar-archivo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], DescargarArchivoPage);

//# sourceMappingURL=descargar-archivo.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notificacion_notificacion__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materia_materia__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__encuestas_encuestas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tomar_lista_tomar_lista__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__ = __webpack_require__(36);
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
    function AulaProfesorPage(navCtrl, navParams, db, nativeAudio, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.nativeAudio = nativeAudio;
        this.toastCtrl = toastCtrl;
        this.listaAlumnos = [];
        this.view = [700, 150];
        this.view2 = [700, 150];
        this.listadoFaltas = [];
        this.informacion = [];
        this.aula = this.navParams.get('aula');
        this.materia = this.navParams.get('materia');
        this.nativeAudio.preloadComplex('bienvenidoProfesor', 'assets/sonidos/bienvenidoProfesor.mp3', 1, 1, 0);
        this.nativeAudio.play('bienvenidoProfesor');
        this.db.list('/notificacionFalta').
            subscribe(function (data) {
            _this.datosfaltas = data;
            console.log(_this.datosfaltas);
            for (var i = 0; i < _this.datosfaltas.length; i++) {
                //if(localStorage.getItem("mail")==this.datosfaltas[i].mail){
                var toast = _this.toastCtrl.create({
                    message: 'El alumno' + ' ' + _this.datosfaltas[i].alumno + ' ' + 'tiene' + ' ' + _this.datosfaltas[i].cantidadFaltas + ' ' + 'faltas!!!',
                    duration: 4000,
                    position: 'top'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
                //CIERRE IF }
            }
        });
    }
    AulaProfesorPage.prototype.applyDimensions = function () {
        var width = this.content.getContentDimensions().contentWidth - 50;
        var state = width >= 320;
        this.showXAxisLabel = state;
        this.showYAxisLabel = state;
        this.showLegend = state;
        this.view = [width, 150];
    };
    AulaProfesorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.applyDimensions();
        window.addEventListener('resize', function () {
            _this.applyDimensions();
        }, false);
        this.informacion = [
            {
                'name': 'Si',
                'value': 4
            },
            {
                'name': 'No',
                'value': 5
            }
        ];
        //mofificar por la ruta y el archivo de bienvenida
        // this.nativeAudio.preloadComplex('bienvenido', 'assets/piano/1.mp3', 1, 1, 0);
        //  this.nativeAudio.play('bienvenido');
    };
    AulaProfesorPage.prototype.tomaLista = function () {
        // alert("voy a tomar lista");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tomar_lista_tomar_lista__["a" /* TomarListaPage */], { aulaa: this.aula, materia: this.materia });
    };
    AulaProfesorPage.prototype.crearNotificacion = function () {
        console.log(this.aula);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notificacion_notificacion__["a" /* NotificacionPage */], { aulaa: this.aula, materia: this.materia });
    };
    AulaProfesorPage.prototype.cargarLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { persona: "alumno" });
        //  alert("voy a cargar lista");
        //alert("voy a cargar lista");
    };
    AulaProfesorPage.prototype.mostrarQr = function () {
        //alert("voy a qr");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__materia_materia__["a" /* MateriaPage */], { aulaa: this.aula, materia: this.materia });
    };
    AulaProfesorPage.prototype.Encuestas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__encuestas_encuestas__["a" /* EncuestasPage */], { aulaa: this.aula, materia: this.materia });
    };
    return AulaProfesorPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
], AulaProfesorPage.prototype, "content", void 0);
AulaProfesorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aula-profesor',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/aula-profesor/aula-profesor.html"*/'<!--\n  Generated template for the AulaProfesorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Aula:{{aula}}, Materia {{materia}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-image:url(\'assets/aula-profesor.jpg\')" class="fondo">\n\n <!--gi <ion-list>\n              \n    <ion-item class="animated flipInX miItem">\n      <ion-label class="miLabel" floating>Divicion</ion-label>\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.division" disabled="true"></ion-input> \n    </ion-item>\n                    \n    <ion-item class="animated flipInY miItem">\n      <ion-label class="miLabel" floating>Materia</ion-label>\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.materia" disabled="true"></ion-input>\n    </ion-item>\n                \n    <ion-item class="animated flipInX miItem" >\n      <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.cantidadAlumno" disabled="true"></ion-input>\n    </ion-item> \n  \n  </ion-list>-->\n\n  <div style="height:40%;width:100%">\n   \n    <button ion-button round full large (click)="crearNotificacion()" class="animated flipInX miBoton miButton"> \n      <ion-icon name="arrow-round-back"></ion-icon> Crear Notificacion\n    </button>\n    <!--<button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n      <ion-icon name="arrow-round-back"></ion-icon> Cargar Alumnos\n    </button>-->\n    <button ion-button round full large  (click)="mostrarQr()" class="animated flipInX miBoton miButton"> \n        <ion-icon name="arrow-round-back"></ion-icon> Escaner QR\n      </button>\n      <button ion-button round full large  (click)="Encuestas()" class="animated flipInX miBoton miButton"> \n        <ion-icon name="arrow-round-back"></ion-icon> Ver Encuestas\n      </button>\n\n    <button ion-button round full large  (click)="tomaLista()" class="animated flipInX miBoton miButton"> \n      <ion-icon name="arrow-round-back"></ion-icon> Tomar Lista\n    </button>\n  </div>\n<div style="height:10%"></div>\n<div style="height:50%;width:100%">\n  <ion-grid style="background-color:white;">\n    <h4>Faltas</h4>\n     <ion-row >\n       <ion-col >\n         <ngx-charts-bar-horizontal \n           [view]="view"\n           [results]="informacion"\n           xAxis="true"\n           yAxis="true"\n         >\n         </ngx-charts-bar-horizontal>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n  </div>\n  <!--  [legend]="showLegend"\n           legendTitle="Votos"\n           [showXAxisLabel]="showXAxisLabel"\n           [showYAxisLabel]="showYAxisLabel"\n           xAxisLabel="votos"\n           yAxisLabel="resultado" -->\n  \n    \n\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/aula-profesor/aula-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__["a" /* NativeAudio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__["a" /* NativeAudio */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _f || Object])
], AulaProfesorPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=aula-profesor.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(34);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias_materias__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_perfil_editar_perfil__ = __webpack_require__(195);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
 * Generated class for the NotificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacionPage = (function () {
    function NotificacionPage(navCtrl, navParams, db, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.aula = this.navParams.get('aulaa');
        this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
        this.nativeAudio.play('1');
    }
    NotificacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacionPage');
    };
    NotificacionPage.prototype.Guardar = function () {
        var _this = this;
        this.db.list('/notificacionesProfesor').push({
            titulo: this.titulo,
            mensaje: this.mensaje,
            curso: this.aula
        }).then(function () {
            _this.titulo = "";
            _this.mensaje = "";
            var alert = _this.alertCtrl.create({
                title: "Exitosamente!",
                subTitle: "Se envío el mensaje de importancia",
                cssClass: "miClaseAlert",
                buttons: ['Aceptar']
            });
            alert.present();
        })
            .catch(function () {
        });
        //this.navCtrl.setRoot(AulaProfesorPage);
    };
    return NotificacionPage;
}());
NotificacionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notificacion',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\notificacion\notificacion.html"*/'<!--\n\n  Generated template for the NotificacionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Creación de notificación</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n  \n\n<ion-list>\n\n<ion-item class="animated flipInX miItem">\n\n<ion-label class="miLabel" floating>Titulo</ion-label>\n\n<ion-input type="text" [(ngModel)]="titulo" disabled="false"></ion-input> \n\n</ion-item>\n\n          \n\n<ion-item class="animated flipInY miItem">\n\n<ion-label class="miLabel" floating>Mensaje</ion-label>\n\n<ion-input type="text" [(ngModel)]="mensaje" disabled="false"></ion-input>\n\n</ion-item>\n\n<button  ion-button round class="botonGuardar"  (click)="Guardar()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar</button>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\notificacion\notificacion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */]])
], NotificacionPage);

//# sourceMappingURL=notificacion.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TomarListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(34);
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
 * Generated class for the TomarListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TomarListaPage = (function () {
    function TomarListaPage(navCtrl, fbService, navParams, database, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.fbService = fbService;
        this.navParams = navParams;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.alumnoPresente = {};
        this.alumnoItem = {};
        this.listaAlumnos = [];
        this.alumnoPresenteLista = [];
        this.aula = this.navParams.get('aulaa');
        if (this.aula == "4A") {
            this.tomarAlumnos$ = this.database.list('tomarA');
            this.miAula = "tomarA";
        }
        else {
            this.tomarAlumnos$ = this.database.list('tomarB');
            this.miAula = "tomarB";
        }
        this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
        this.nativeAudio.play('1');
        // this.notificacionFalta("pepe","ortiz@utn",3);
    }
    TomarListaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TomarListaPage');
        //this.tomarListaSubscription.unsubscribe();
    };
    TomarListaPage.prototype.presente = function (alumno) {
        console.log("-------------- ingreso a presente --------------");
        console.log(alumno);
        this.presentAlert("Asistencia", alumno.nombre + " :Presente");
    };
    TomarListaPage.prototype.ausente = function (key, alumno) {
        var _this = this;
        console.log("-------------- ingreso a ausente ---------------");
        console.log(key);
        var cont = 0;
        if (alumno.contPresentes <= 3) {
            console.log("entro al menora 3");
            if (alumno.contPresentes == 3) {
                alert("push notification");
                return;
            }
            else {
                console.log("entro al contador ++");
                cont++;
                alumno.contPresentes = cont;
            }
        }
        this.tomarPresente$ = this.database.object(this.miAula + "/" + key);
        //console.log(alumno.contPresentes++);
        this.tomarListaSubscription = this.tomarPresente$.subscribe(function (alumnoItem) { return _this.alumnoItem = alumnoItem; });
        this.tomarPresente$.update(alumno);
        this.presentAlert("Asistencia", alumno.nombre + " :Ausente");
    };
    TomarListaPage.prototype.presentAlert = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: "miClaseAlert",
            buttons: ['Aceptar']
        });
        alert.present();
    };
    TomarListaPage.prototype.notificacionFalta = function (nombre, mail, contAusentes) {
        this.database.list('/notificacionFalta').push({
            alumno: nombre,
            mail: mail,
            cantidadFaltas: contAusentes
        }).then(function () {
        })
            .catch(function () {
        });
    };
    return TomarListaPage;
}());
TomarListaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tomar-lista',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\tomar-lista\tomar-lista.html"*/'<!--\n\n  Generated template for the TomarListaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Tomar Lista</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/descarga-archivo.png\')" class="fondo">\n\n  <ion-list>\n\n    <ion-item *ngFor="let alumno of tomarAlumnos$ | async" class="miItem animated flipInX">\n\n      <ion-avatar item-end>\n\n        <img src="./assets/icon/bien.png" (click)="presente(alumno.$key)">  \n\n      </ion-avatar>\n\n        \n\n      <ion-avatar item-end>\n\n        <img src="./assets/icon/mal.png" (click)="ausente(alumno.$key,alumno)">  \n\n      </ion-avatar>\n\n\n\n      <h2>{{alumno.legajo}} - {{alumno.nombre}}</h2>\n\n    </ion-item>  \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\tomar-lista\tomar-lista.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]])
], TomarListaPage);

//# sourceMappingURL=tomar-lista.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAlumnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias_materias__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_perfil_editar_perfil__ = __webpack_require__(261);
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
        this.listaAulasProfesor = [
            {
                "aula": "4A"
            },
            {
                "aula": "4B"
            }
        ];
    }
    InicioAlumnoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioAlumnoPage');
    };
    InicioAlumnoPage.prototype.RedireccionAula = function (aula) {
        switch (aula) {
            case "2° B":
                // alert("Se redireccionara al aula: 2° B ");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materias_materias__["a" /* MateriasPage */], { aulaa: aula });
                break;
            case "3° A":
                //redirecciono y paso el aula
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materias_materias__["a" /* MateriasPage */], { aulaa: aula });
                break;
            case "4A":
                //alert("Se redireccionara al aula: 4° A ");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materias_materias__["a" /* MateriasPage */], { aulaa: aula });
                break;
            case "4B":
                // alert("Se redireccionara al aula: 4° B ");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materias_materias__["a" /* MateriasPage */], { aulaa: aula });
                break;
        }
    };
    InicioAlumnoPage.prototype.EditarPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editar_perfil_editar_perfil__["a" /* EditarPerfilPage */]);
    };
    return InicioAlumnoPage;
}());
InicioAlumnoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio-alumno',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/inicio-alumno/inicio-alumno.html"*/'<!--\n  Generated template for the InicioAlumnoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Seleccione un aula</ion-title>\n   \n  </ion-navbar>\n  <button  ion-button round class="botonEditar"  (click)="EditarPerfil()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Editar perfil</button>\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n\n  \n      <div *ngFor="let lista of listaAulasProfesor; let i = index"> \n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionAula(lista.aula)">{{ lista.aula }}</button> \n      </div>\n     \n  \n  </ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/inicio-alumno/inicio-alumno.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], InicioAlumnoPage);

//# sourceMappingURL=inicio-alumno.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireBaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(579);
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
    FireBaseServiceProvider.prototype.getProfesores = function () {
        return this.afd.list('/personas/profesores');
    };
    FireBaseServiceProvider.prototype.getAdministrativos = function () {
        return this.afd.list('/personas/administrativos');
    };
    FireBaseServiceProvider.prototype.getAlumnos = function () {
        return this.afd.list('/alumno-lista');
    };
    FireBaseServiceProvider.prototype.getMaterias = function () {
        return this.afd.list('/materias');
    };
    FireBaseServiceProvider.prototype.addMateria = function (materia) {
        return this.afd.list('/materias').push(materia);
    };
    FireBaseServiceProvider.prototype.getAdmins = function () {
        return this.afd.list('/personas/admins');
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
    FireBaseServiceProvider.prototype.agregarLista = function (alumnoLista) {
        // return this.afd.object('/alumno-lista/'+key).update(alumnoLista);
        return this.afd.object('/alumno-lista/').update(alumnoLista);
    };
    FireBaseServiceProvider.prototype.agregarListaDENAZI = function (alumnoLista, key) {
        // return this.afd.object('/alumno-lista/'+key).update(alumnoLista);
        return this.afd.object('/alumno-lista/' + key).update(alumnoLista);
    };
    FireBaseServiceProvider.prototype.agregarListaA = function (alumno) {
        return this.afd.list('/tomarA').push(alumno);
    };
    FireBaseServiceProvider.prototype.agregarListaB = function (alumno) {
        return this.afd.list('/tomarB').push(alumno);
    };
    FireBaseServiceProvider.prototype.getListaA = function () {
        return this.afd.list('/tomarA');
    };
    FireBaseServiceProvider.prototype.getListaB = function () {
        return this.afd.list('/tomarB');
    };
    FireBaseServiceProvider.prototype.updateA = function (contPre) {
        return this.afd.list('/tomarA').update('contPresentes', contPre);
    };
    FireBaseServiceProvider.prototype.updateB = function (contPre) {
        return this.afd.list('/tomarB').update('contPresentes', contPre);
    };
    FireBaseServiceProvider.prototype.addProfesor = function (item) {
        return this.afd.list('/personas/profesores').push(item);
    };
    FireBaseServiceProvider.prototype.addAdministrativo = function (item) {
        return this.afd.list('/personas/administrativos').push(item);
    };
    FireBaseServiceProvider.prototype.addAlumno = function (item, i) {
        return this.afd.list('/alumno-lista/' + i + '/alumnos').push(item);
    };
    FireBaseServiceProvider.prototype.addUser = function (item) {
        return this.afd.list('/personas').push(item);
    };
    FireBaseServiceProvider.prototype.updateAlumno = function (data, key) {
        return this.afd.object('/alumno-lista/' + key + '/alumnos').update(data);
    };
    FireBaseServiceProvider.prototype.updateAlumnoLista = function (data, key) {
        return this.afd.object('/alumno-lista/').update(data);
    };
    FireBaseServiceProvider.prototype.updateProfesor = function (data) {
        return this.afd.list('/personas').update('profesores', data);
    };
    FireBaseServiceProvider.prototype.updateAdministrativo = function (data) {
        return this.afd.list('/personas').update('administrativos', data);
    };
    FireBaseServiceProvider.prototype.removeProfesor = function (key) {
        return this.afd.list('/personas/profesores').remove(key);
    };
    FireBaseServiceProvider.prototype.removeAdministrativo = function (key) {
        return this.afd.list('/personas/administrativos').remove(key);
    };
    FireBaseServiceProvider.prototype.removeAlumno = function (i, key) {
        return this.afd.list('/alumo-lista/' + i + '/alumnos').remove(key);
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
    /*modifyProfesor(dni:FirebaseObjectObservable)
    {
      return this.afd.list('/personas/profesores').update(dni)
    }*/
    //MAURO
    FireBaseServiceProvider.prototype.agregarEncuesta = function (encuesta) {
        return this.afd.list('/encuestas').push(encuesta);
    };
    FireBaseServiceProvider.prototype.traerEncuestas = function () {
        //no lo uso
        return this.afd.list('/encuestas');
    };
    FireBaseServiceProvider.prototype.eliminarEncuesta = function (encuesta) {
        //return this.afd.database.ref('Encuestas/'+encuesta.$key).remove();
        console.log(encuesta.$key);
        return this.afd.list('/encuestas/' + encuesta.$key).remove();
    };
    FireBaseServiceProvider.prototype.editarEncuest = function (encuesta) {
        return this.afd.object('/encuestas/' + encuesta.$key).update(encuesta);
    };
    FireBaseServiceProvider.prototype.agregarRespEncuesta = function (respuesta) {
        return this.afd.list('/encuestaRespuestas').push(respuesta);
    };
    return FireBaseServiceProvider;
}());
FireBaseServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
], FireBaseServiceProvider);

//# sourceMappingURL=fire-base-service.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespuestaEncuestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(36);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
 * Generated class for the NotificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacionPage = (function () {
    function NotificacionPage(navCtrl, navParams, db, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.aula = this.navParams.get('aulaa');
        this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
        this.nativeAudio.play('1');
    }
    NotificacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacionPage');
    };
    NotificacionPage.prototype.Guardar = function () {
        var _this = this;
        this.db.list('/notificacionesProfesor').push({
            titulo: this.titulo,
            mensaje: this.mensaje,
            curso: this.aula
        }).then(function () {
            _this.titulo = "";
            _this.mensaje = "";
            var alert = _this.alertCtrl.create({
                title: "Exitosamente!",
                subTitle: "Se envío el mensaje de importancia",
                cssClass: "miClaseAlert",
                buttons: ['Aceptar']
            });
            alert.present();
        })
            .catch(function () {
        });
        //this.navCtrl.setRoot(AulaProfesorPage);
    };
    return NotificacionPage;
}());
NotificacionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notificacion',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/notificacion/notificacion.html"*/'<!--\n  Generated template for the NotificacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Creación de notificación</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n  \n<ion-list>\n<ion-item class="animated flipInX miItem">\n<ion-label class="miLabel" floating>Titulo</ion-label>\n<ion-input type="text" [(ngModel)]="titulo" disabled="false"></ion-input> \n</ion-item>\n          \n<ion-item class="animated flipInY miItem">\n<ion-label class="miLabel" floating>Mensaje</ion-label>\n<ion-input type="text" [(ngModel)]="mensaje" disabled="false"></ion-input>\n</ion-item>\n<button  ion-button round class="botonGuardar"  (click)="Guardar()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar</button>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/notificacion/notificacion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */]])
], NotificacionPage);

//# sourceMappingURL=notificacion.js.map

/***/ }),

<<<<<<< HEAD
/***/ 258:
=======
/***/ 192:
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestasAltaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notificacion_notificacion__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materia_materia__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__encuestas_encuestas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tomar_lista_tomar_lista__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__ = __webpack_require__(34);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encuestas_encuestas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(36);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
 * Generated class for the EncuestasAltaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EncuestasAltaPage = (function () {
    function EncuestasAltaPage(navCtrl, navParams, fireService, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
<<<<<<< HEAD
        this.toastCtrl = toastCtrl;
        this.listaAlumnos = [];
        this.view = [700, 150];
        this.view2 = [700, 150];
        this.listadoFaltas = [];
        this.informacion = [];
        this.aula = this.navParams.get('aula');
        this.materia = this.navParams.get('materia');
        this.nativeAudio.preloadComplex('bienvenidoProfesor', 'assets/sonidos/bienvenidoProfesor.mp3', 1, 1, 0);
        this.nativeAudio.play('bienvenidoProfesor');
        this.db.list('/notificacionFalta').
            subscribe(function (data) {
            _this.datosfaltas = data;
            console.log(_this.datosfaltas);
            for (var i = 0; i < _this.datosfaltas.length; i++) {
                //if(localStorage.getItem("mail")==this.datosfaltas[i].mail){
                var toast = _this.toastCtrl.create({
                    message: 'El alumno' + ' ' + _this.datosfaltas[i].alumno + ' ' + 'tiene' + ' ' + _this.datosfaltas[i].cantidadFaltas + ' ' + 'faltas!!!',
                    duration: 4000,
                    position: 'top'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
                //CIERRE IF }
            }
        });
    }
    AulaProfesorPage.prototype.applyDimensions = function () {
        var width = this.content.getContentDimensions().contentWidth - 50;
        var state = width >= 320;
        this.showXAxisLabel = state;
        this.showYAxisLabel = state;
        this.showLegend = state;
        this.view = [width, 150];
    };
    AulaProfesorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.applyDimensions();
        window.addEventListener('resize', function () {
            _this.applyDimensions();
        }, false);
        this.informacion = [
            {
                'name': 'Si',
                'value': 4
            },
            {
                'name': 'No',
                'value': 5
            }
        ];
        //mofificar por la ruta y el archivo de bienvenida
        // this.nativeAudio.preloadComplex('bienvenido', 'assets/piano/1.mp3', 1, 1, 0);
        //  this.nativeAudio.play('bienvenido');
    };
    AulaProfesorPage.prototype.tomaLista = function () {
        // alert("voy a tomar lista");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tomar_lista_tomar_lista__["a" /* TomarListaPage */], { aulaa: this.aula, materia: this.materia });
    };
    AulaProfesorPage.prototype.crearNotificacion = function () {
        console.log(this.aula);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notificacion_notificacion__["a" /* NotificacionPage */], { aulaa: this.aula, materia: this.materia });
    };
    AulaProfesorPage.prototype.cargarLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { persona: "alumno" });
        //  alert("voy a cargar lista");
        //alert("voy a cargar lista");
    };
    AulaProfesorPage.prototype.mostrarQr = function () {
        //alert("voy a qr");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__materia_materia__["a" /* MateriaPage */], { aulaa: this.aula, materia: this.materia });
    };
    AulaProfesorPage.prototype.Encuestas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__encuestas_encuestas__["a" /* EncuestasPage */], { aulaa: this.aula, materia: this.materia });
    };
    return AulaProfesorPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], AulaProfesorPage.prototype, "content", void 0);
AulaProfesorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-aula-profesor',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\aula-profesor\aula-profesor.html"*/'<!--\n\n  Generated template for the AulaProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Aula:{{aula}}, Materia {{materia}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-profesor.jpg\')" class="fondo">\n\n\n\n <!--gi <ion-list>\n\n              \n\n    <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Divicion</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.division" disabled="true"></ion-input> \n\n    </ion-item>\n\n                    \n\n    <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Materia</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.materia" disabled="true"></ion-input>\n\n    </ion-item>\n\n                \n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.cantidadAlumno" disabled="true"></ion-input>\n\n    </ion-item> \n\n  \n\n  </ion-list>-->\n\n\n\n  <div style="height:40%;width:100%">\n\n   \n\n    <button ion-button round full large (click)="crearNotificacion()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Crear Notificacion\n\n    </button>\n\n    <!--<button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Cargar Alumnos\n\n    </button>-->\n\n    <button ion-button round full large  (click)="mostrarQr()" class="animated flipInX miBoton miButton"> \n\n        <ion-icon name="arrow-round-back"></ion-icon> Escaner QR\n\n      </button>\n\n      <button ion-button round full large  (click)="Encuestas()" class="animated flipInX miBoton miButton"> \n\n        <ion-icon name="arrow-round-back"></ion-icon> Ver Encuestas\n\n      </button>\n\n\n\n    <button ion-button round full large  (click)="tomaLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Tomar Lista\n\n    </button>\n\n  </div>\n\n<div style="height:10%"></div>\n\n<div style="height:50%;width:100%">\n\n  <ion-grid style="background-color:white;">\n\n    <h4>Faltas</h4>\n\n     <ion-row >\n\n       <ion-col >\n\n         <ngx-charts-bar-horizontal \n\n           [view]="view"\n\n           [results]="informacion"\n\n           xAxis="true"\n\n           yAxis="true"\n\n         >\n\n         </ngx-charts-bar-horizontal>\n\n       </ion-col>\n\n     </ion-row>\n\n   </ion-grid>\n\n  </div>\n\n  <!--  [legend]="showLegend"\n\n           legendTitle="Votos"\n\n           [showXAxisLabel]="showXAxisLabel"\n\n           [showYAxisLabel]="showYAxisLabel"\n\n           xAxisLabel="votos"\n\n           yAxisLabel="resultado" -->\n\n  \n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\aula-profesor\aula-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], AulaProfesorPage);

//# sourceMappingURL=aula-profesor.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestasAltaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encuestas_encuestas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(34);
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
 * Generated class for the EncuestasAltaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EncuestasAltaPage = (function () {
    function EncuestasAltaPage(navCtrl, navParams, fireService, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
=======
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
        this.nombre = "";
        this.pregunta = "";
        this.respuesta1 = "";
        this.respuesta2 = "";
        this.duracion = "";
        this.formato = "";
        this.fechaInicio = "";
        this.fechaFinalizacion = "";
        this.creadorEncuesta = localStorage.getItem("Email");
        this.nativeAudio.preloadComplex('2', 'assets/sonidos/2.mp3', 1, 1, 0);
        this.nativeAudio.play('2');
        this.horaActual = new Date();
    }
    EncuestasAltaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncuestasAltaPage');
    };
    EncuestasAltaPage.prototype.Guardar = function () {
        if (this.respuesta1 || this.respuesta2) {
            switch (this.duracion) {
                case '5 minutos':
                    this.horaActual.setMinutes(this.horaActual.getMinutes() + 5);
                    break;
                case '30 minutos':
                    this.horaActual.setMinutes(this.horaActual.getMinutes() + 30);
                    break;
                case '55 minutos':
                    this.horaActual.setMinutes(this.horaActual.getMinutes() + 55);
                    break;
            }
            switch (this.formato) {
                case 'Radio botones':
                    this.formato = "Radio botones";
                    break;
                case 'Botones':
                    this.formato = "Botones";
                    break;
                case 'Selección de opciones':
                    this.formato = "Selección de opciones";
                    break;
            }
            this.fireService.agregarEncuesta({
                nombre: this.nombre,
                pregunta: this.pregunta,
                respuesta1: this.respuesta1,
                respuesta2: this.respuesta2,
                formato: this.formato,
                duracion: this.duracion,
                horaFinalizacion: this.horaActual.getHours() + ":" + this.horaActual.getMinutes(),
                creadorEncuesta: this.creadorEncuesta
            });
            var alert = this.alertCtrl.create({
                title: 'Exito!',
                subTitle: 'Encuesta cargada exitosamente',
                cssClass: "miClaseAlert",
                buttons: ['Listo']
            });
            alert.present();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__encuestas_encuestas__["a" /* EncuestasPage */]);
        }
        else {
            var alert = this.alertCtrl.create({
                title: "Info",
                subTitle: "Faltan datos",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert.present();
        }
        /*
        this.fireService.agregarEncuesta({nombre:this.nombre,pregunta:this.pregunta,respuesta1:this.respuesta1,
        respuesta2:this.respuesta2,formato:this.formato,duracion:this.duracion,fechaInicio:this.fechaInicio,fechaFinalizacion:this.fechaFinalizacion,creadorEncuesta:this.creadorEncuesta});
    
        let alert = this.alertCtrl.create({
          title: 'Exito!',
          subTitle: 'Encuesta cargada exitosamente',
          cssClass:"miClaseAlert",
        buttons: ['Listo']
      });
       alert.present();
    
        this.navCtrl.push(EncuestasPage);
        */
    };
    return EncuestasAltaPage;
}());
EncuestasAltaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-encuestas-alta',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/encuestas-alta/encuestas-alta.html"*/'<!--\n  Generated template for the EncuestasAltaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Crear encuesta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenCuestionarios.jpg\')" class="fondo">\n   \n  <ion-card-content>\n    \n    <ion-list >  \n      <ion-item class="animated flipInX miItem">\n      <ion-label class="miLabel" floating>Nombre de la encuesta</ion-label>\n      <ion-input type="text" [(ngModel)]="nombre" disabled="false"></ion-input> \n      </ion-item>\n    \n  \n      <ion-item class="animated flipInX miItem">\n      <ion-label class="miLabel" floating>Pregunta</ion-label>\n      <ion-input type="text" [(ngModel)]="pregunta" disabled="false"></ion-input> \n      </ion-item>\n\n      <ion-item class="animated flipInX miItem">\n        <ion-label class="miLabel" floating>Primera opción</ion-label>\n        <ion-input type="text" [(ngModel)]="respuesta1" disabled="false"></ion-input> \n        </ion-item>\n\n        <ion-item class="animated flipInX miItem">\n          <ion-label class="miLabel" floating>Segunda opción</ion-label>\n          <ion-input type="text" [(ngModel)]="respuesta2" disabled="false"></ion-input> \n          </ion-item>\n\n          <ion-item class="animated flipInX miItem">\n            <ion-label class="miLabel" floating>Formato</ion-label>\n          <ion-select [(ngModel)]="formato">\n         \n            <ion-option>Radio botones</ion-option> \n           <!-- <ion-option>Checkbox</ion-option> -->\n            <ion-option>Botones</ion-option> \n            <ion-option>Selección de opciones</ion-option> \n          </ion-select>\n        </ion-item>\n\n      <ion-item class="animated flipInX miItem">\n        <ion-label class="miLabel" floating>Duración</ion-label>\n      <ion-select [(ngModel)]="duracion">\n      \n        <ion-option>5 minutos</ion-option> \n        <ion-option>30 minutos</ion-option> \n        <ion-option>55 minutos</ion-option> \n      </ion-select>\n    </ion-item>\n\n    <!--\n    <ion-item class="animated flipInX miItem">\n        <ion-label class="miLabel" floating>Fecha y hora de inicio (opcional)</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="fechaInicio"></ion-datetime>\n      </ion-item>\n\n      <ion-item class="animated flipInX miItem">\n          <ion-label class="miLabel" floating>Fecha y hora de finalización (opcional)</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="fechaFinalizacion"></ion-datetime>\n        </ion-item>\n      -->\n\n\n    <button  ion-button round class="botonGuardar"  (click)="Guardar()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar</button>\n\n\n    </ion-list>\n\n\n          </ion-card-content>\n\n\n\n          \n        </ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/encuestas-alta/encuestas-alta.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]) === "function" && _e || Object])
], EncuestasAltaPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=encuestas-alta.js.map

/***/ }),

<<<<<<< HEAD
/***/ 260:
=======
/***/ 193:
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestasEditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encuestas_encuestas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(34);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encuestas_encuestas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(36);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
 * Generated class for the EncuestasEditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EncuestasEditarPage = (function () {
    function EncuestasEditarPage(navCtrl, navParams, fireService, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.encuestaAmodificar = this.navParams.get('encuesta');
        // console.log(this.encuestaAmodificar)
        this.nativeAudio.preloadComplex('2', 'assets/sonidos/2.mp3', 1, 1, 0);
        this.nativeAudio.play('2');
    }
    EncuestasEditarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncuestasEditarPage');
    };
    EncuestasEditarPage.prototype.EditarEncuestaa = function (encuesta) {
        this.fireService.editarEncuest(encuesta);
        var alert = this.alertCtrl.create({
            title: 'Exito!',
            subTitle: 'Encuesta modificada exitosamente',
            cssClass: "miClaseAlert",
            buttons: ['Listo']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__encuestas_encuestas__["a" /* EncuestasPage */]);
    };
    return EncuestasEditarPage;
}());
EncuestasEditarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-encuestas-editar',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/encuestas-editar/encuestas-editar.html"*/'<!--\n  Generated template for the EncuestasEditarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="dark">\n      <ion-title>Editar encuesta "{{encuestaAmodificar.nombre}}"</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding style="background-image:url(\'assets/hallowenCuestionarios.jpg\')" class="fondo">\n     \n    <ion-card-content>\n      \n      <ion-list >  \n        <ion-item class="animated flipInX miItem">\n        <ion-label class="miLabel" floating>Nombre de la encuesta</ion-label>\n        <ion-input type="text" [(ngModel)]="encuestaAmodificar.nombre" disabled="false"></ion-input> \n        </ion-item>\n      \n    \n        <ion-item class="animated flipInX miItem">\n        <ion-label class="miLabel" floating>Pregunta</ion-label>\n        <ion-input type="text" [(ngModel)]="encuestaAmodificar.pregunta" disabled="false"></ion-input> \n        </ion-item>\n  \n        <ion-item class="animated flipInX miItem">\n          <ion-label class="miLabel" floating>Primera opción</ion-label>\n          <ion-input type="text" [(ngModel)]="encuestaAmodificar.respuesta1" disabled="false"></ion-input> \n          </ion-item>\n  \n          <ion-item class="animated flipInX miItem">\n            <ion-label class="miLabel" floating>Segunda opción</ion-label>\n            <ion-input type="text" [(ngModel)]="encuestaAmodificar.respuesta2" disabled="false"></ion-input> \n            </ion-item>\n  \n            <ion-item class="animated flipInX miItem">\n              <ion-label class="miLabel" floating>Formato</ion-label>\n            <ion-select [(ngModel)]="encuestaAmodificar.formato">\n           \n              <ion-option>Radio botones</ion-option> \n             <!-- <ion-option>Checkbox</ion-option> -->\n              <ion-option>Botones</ion-option> \n              <ion-option>Selección de opciones</ion-option> \n            </ion-select>\n          </ion-item>\n  <!--\n          <ion-item class="animated flipInX miItem">\n            <ion-label class="miLabel" floating>Duración</ion-label>\n          <ion-select [(ngModel)]="encuestaAmodificar.duracion">\n          \n            <ion-option>5 minutos</ion-option> \n            <ion-option>30 minutos</ion-option> \n            <ion-option>55 minutos</ion-option> \n          </ion-select>\n        </ion-item>\n      -->\n\n      <!--\n    <ion-item class="animated flipInX miItem">\n        <ion-label class="miLabel" floating>Fecha y hora de inicio (opcional)</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="encuestaAmodificar.fechaInicio"></ion-datetime>\n      </ion-item>\n\n      <ion-item class="animated flipInX miItem">\n          <ion-label class="miLabel" floating>Fecha y hora de finalización (opcional)</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="encuestaAmodificar.fechaFinalizacion"></ion-datetime>\n        </ion-item>\n      -->        \n  \n  \n      <button  ion-button round class="botonGuardar"  (click)="EditarEncuestaa(encuestaAmodificar)"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar Modificación</button>\n  \n  \n      </ion-list>\n  \n  \n            </ion-card-content>\n  \n  \n  \n            \n          </ion-content>\n  '/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/encuestas-editar/encuestas-editar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]])
], EncuestasEditarPage);

//# sourceMappingURL=encuestas-editar.js.map

/***/ }),

<<<<<<< HEAD
/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_alumno_inicio_alumno__ = __webpack_require__(150);
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
 * Generated class for the EditarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarPerfilPage = (function () {
    function EditarPerfilPage(navCtrl, navParams, db, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.datosUsuario = {};
        //deberia traer que usuario esta logueado y hacer una busqueda en firebase, mostrar los datos y modificar
        var mail = "mauro@algo.com";
        this.db.list('/personas/alumnos').
            subscribe(function (data) {
            _this.datos = data;
            console.log(_this.datos);
            for (var i = 0; i < _this.datos.length; i++) {
                if (_this.datos[i].Email == mail) {
                    //   this.datosUsuario.password=this.datos[i].password;
                }
            }
        });
    }
    EditarPerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarPerfilPage');
    };
    EditarPerfilPage.prototype.Guardar = function () {
        var alert = this.alertCtrl.create({
            title: "Exitoso!",
            subTitle: "Su contraseña ha sido modificada",
            cssClass: "miClaseLaert",
            buttons: ['Aceptar']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_alumno_inicio_alumno__["a" /* InicioAlumnoPage */]);
    };
    return EditarPerfilPage;
}());
EditarPerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editar-perfil',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\editar-perfil\editar-perfil.html"*/'<!--\n\n  Generated template for the EditarPerfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Modifique su contraseña</ion-title>\n\n   </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n\n\n  <ion-list >  \n\n<ion-item class="animated flipInX miItem">\n\n<ion-label class="miLabel" floating>Contraseña</ion-label>\n\n<ion-input type="text" [(ngModel)]="datosUsuario.password" disabled="false"></ion-input> \n\n</ion-item>\n\n\n\n\n\n\n\n\n\n</ion-list>\n\n<button  ion-button round class="botonGuardar"  (click)="Guardar()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\editar-perfil\editar-perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditarPerfilPage);

//# sourceMappingURL=editar-perfil.js.map

/***/ }),

/***/ 262:
=======
/***/ 194:
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TomarListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__asignar_materia_asignar_materia__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cagar_archivo_cagar_archivo__ = __webpack_require__(69);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(36);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
 * Generated class for the TomarListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TomarListaPage = (function () {
    function TomarListaPage(navCtrl, fbService, navParams, database, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.fbService = fbService;
        this.navParams = navParams;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.alumnoPresente = {};
        this.alumnoItem = {};
        this.listaAlumnos = [];
        this.alumnoPresenteLista = [];
        this.aula = this.navParams.get('aulaa');
        if (this.aula == "4A") {
            this.tomarAlumnos$ = this.database.list('tomarA');
            this.miAula = "tomarA";
        }
        else {
            this.tomarAlumnos$ = this.database.list('tomarB');
            this.miAula = "tomarB";
        }
        this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
        this.nativeAudio.play('1');
    }
    TomarListaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TomarListaPage');
        //this.tomarListaSubscription.unsubscribe();
    };
    TomarListaPage.prototype.presente = function (alumno) {
        var fecha = new Date();
        console.log("Fecha: " + fecha.getDate);
        console.log("-------------- ingreso a presente --------------");
        console.log(alumno);
        this.presentAlert("Asistencia", alumno.nombre + " :Presente");
    };
    TomarListaPage.prototype.ausente = function (key, alumno) {
        var _this = this;
        console.log("-------------- ingreso a ausente ---------------");
        console.log(key);
        var cont = 0;
        if (alumno.contPresentes <= 3) {
            console.log("entro al menora 3");
            if (alumno.contPresentes == 3) {
                alert("push notification");
                return;
            }
            else {
                console.log("entro al contador ++");
                cont++;
                alumno.contPresentes = cont;
            }
        }
        this.tomarPresente$ = this.database.object(this.miAula + "/" + key);
        //console.log(alumno.contPresentes++);
        this.tomarListaSubscription = this.tomarPresente$.subscribe(function (alumnoItem) { return _this.alumnoItem = alumnoItem; });
        this.tomarPresente$.update(alumno);
        this.presentAlert("Asistencia", alumno.nombre + " :Ausente");
    };
    TomarListaPage.prototype.presentAlert = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: "miClaseAlert",
            buttons: ['Aceptar']
        });
        alert.present();
    };
    return TomarListaPage;
}());
TomarListaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tomar-lista',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/tomar-lista/tomar-lista.html"*/'<!--\n  Generated template for the TomarListaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Tomar Lista</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/descarga-archivo.png\')" class="fondo">\n  <ion-list>\n    <ion-item *ngFor="let alumno of tomarAlumnos$ | async" class="miItem animated flipInX">\n      <ion-avatar item-end>\n        <img src="./assets/icon/bien.png" (click)="presente(alumno.$key)">  \n      </ion-avatar>\n        \n      <ion-avatar item-end>\n        <img src="./assets/icon/mal.png" (click)="ausente(alumno.$key,alumno)">  \n      </ion-avatar>\n\n      <h2>{{alumno.legajo}} - {{alumno.nombre}}</h2>\n    </ion-item>  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/tomar-lista/tomar-lista.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]])
], TomarListaPage);

//# sourceMappingURL=tomar-lista.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_alumno_inicio_alumno__ = __webpack_require__(116);
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
 * Generated class for the EditarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarPerfilPage = (function () {
    function EditarPerfilPage(navCtrl, navParams, db, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.datosUsuario = {};
        //deberia traer que usuario esta logueado y hacer una busqueda en firebase, mostrar los datos y modificar
        var mail = "mauro@algo.com";
        this.db.list('/personas/alumnos').
            subscribe(function (data) {
            _this.datos = data;
            console.log(_this.datos);
            for (var i = 0; i < _this.datos.length; i++) {
                if (_this.datos[i].Email == mail) {
                    //   this.datosUsuario.password=this.datos[i].password;
                }
            }
        });
    }
    EditarPerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarPerfilPage');
    };
    EditarPerfilPage.prototype.Guardar = function () {
        var alert = this.alertCtrl.create({
            title: "Exitoso!",
            subTitle: "Su contraseña ha sido modificada",
            cssClass: "miClaseLaert",
            buttons: ['Aceptar']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_alumno_inicio_alumno__["a" /* InicioAlumnoPage */]);
    };
    return EditarPerfilPage;
}());
EditarPerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editar-perfil',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/editar-perfil/editar-perfil.html"*/'<!--\n  Generated template for the EditarPerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Modifique su contraseña</ion-title>\n   </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n  <ion-list >  \n<ion-item class="animated flipInX miItem">\n<ion-label class="miLabel" floating>Contraseña</ion-label>\n<ion-input type="text" [(ngModel)]="datosUsuario.password" disabled="false"></ion-input> \n</ion-item>\n\n\n\n\n</ion-list>\n<button  ion-button round class="botonGuardar"  (click)="Guardar()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar</button>\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/editar-perfil/editar-perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditarPerfilPage);

//# sourceMappingURL=editar-perfil.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__asignar_materia_asignar_materia__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cagar_archivo_cagar_archivo__ = __webpack_require__(81);
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
    function InicioAdminPage(navCtrl, navParams, fireService, loadingCtrl, screenOrientation, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.profesor = true;
        this.listadoProfesores = [];
        this.listadoAdministrativos = [];
        this.settings2 = {
            actions: {
                columnTitle: '',
            },
            noDataMessage: "No se encuentran registros",
            delete: {
                confirmDelete: true,
                deleteButtonContent: 'Borrar',
            },
            add: {
                confirmCreate: true,
                addButtonContent: "Agregar",
                createButtonContent: 'Crear',
                cancelButtonContent: 'Cancelar'
            },
            edit: {
                confirmSave: true,
                editButtonContent: 'Editar',
                saveButtonContent: 'Guardar',
                cancelButtonContent: 'Cancelar'
            },
            columns: {
                DNI: {
                    title: 'DNI',
                    filter: false,
                    editor: {
                        type: 'number',
                    },
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
                    filter: false,
                    type: 'text',
                    add: false,
                    edit: false,
                    defaultValue: 'Administrativo',
                    addable: false,
                    editable: false,
                    isEditable: false,
                    isAddable: false,
                    editor: {
                        type: 'text',
                        defaultValue: 'Administrativo'
                    }
                }
            }
        };
        this.profesor = true;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.settings = {
            actions: {
                columnTitle: '',
            },
            noDataMessage: "No se encuentran registros",
            delete: {
                confirmDelete: true,
                deleteButtonContent: 'Borrar',
            },
            add: {
                confirmCreate: true,
                addButtonContent: "Agregar",
                createButtonContent: 'Crear',
                cancelButtonContent: 'Cancelar'
            },
            edit: {
                confirmSave: true,
                editButtonContent: 'Editar',
                saveButtonContent: 'Guardar',
                cancelButtonContent: 'Cancelar'
            },
            columns: {
                DNI: {
                    title: 'DNI',
                    filter: false,
                    editor: {
                        type: 'number',
                    },
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
                    filter: false,
                    type: 'text',
                    add: false,
                    edit: false,
                    addable: false,
                    editable: false,
                    defaultValue: 'Profesor',
                    isEditable: false,
                    isAddable: false,
                    editor: {
                        type: 'text',
                        defaultValue: 'Profesor'
                    }
                },
            }
        };
    }
    InicioAdminPage.prototype.actions = function (instance) {
        var _this = this;
        instance.save.subscribe(function (row) {
            var nombreCompleto = row.Nombre + " " + row.Apellido;
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__asignar_materia_asignar_materia__["a" /* AsignarMateriaPage */], { profesor: nombreCompleto });
            profileModal.present();
        });
    };
    InicioAdminPage.prototype.changeList = function (event) {
        var _this = this;
        this.personas = event;
        if (this.personas == 'a') {
            this.profesor = false;
            this.fireService.getAdministrativos().subscribe(function (data) {
                _this.source2 = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                _this.listadoAdministrativos = data;
            });
        }
        else if (this.personas == 'p') {
            this.profesor = true;
            this.fireService.getProfesores().subscribe(function (data) {
                _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                _this.listadoProfesores = data;
            });
        }
    };
    InicioAdminPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.personas = 'p';
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.fireService.getProfesores().subscribe(function (data) {
            _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
            _this.listadoProfesores = data;
        });
        this.fireService.getAdministrativos().subscribe(function (data) {
            _this.source2 = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
            _this.listadoAdministrativos = data;
        });
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n       <img src=\"assets/spinner.gif\">",
            duration: 50000000,
            showBackdrop: false
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    InicioAdminPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.unlock();
    };
    InicioAdminPage.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Eliminar?',
            cssClass: 'miClaseAlert',
            message: '¿Seguro quieres eliminar?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        event.confirm.reject();
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        if (event.data.Perfil == "Profesor") {
                            for (var i = 0; i < _this.listadoProfesores.length; i++) {
                                var element = _this.listadoProfesores[i];
                                console.log(element);
                                if (element.Email == event.data.Email) {
                                    _this.fireService.removeProfesor(element['$key']);
                                    //event.confirm.reject();      
                                    event.confirm.resolve();
                                    _this.fireService.getProfesores().subscribe(function (data) {
                                        _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                        _this.listadoProfesores = data;
                                    });
                                    break;
                                }
                            }
                        }
                        else if (event.data.Perfil == "Administrativo") {
                            for (var i = 0; i < _this.listadoAdministrativos.length; i++) {
                                var element = _this.listadoAdministrativos[i];
                                console.log(element);
                                if (element.Email == event.data.Email) {
                                    _this.fireService.removeAdministrativo(element['$key']);
                                    //event.confirm.reject();      
                                    event.confirm.resolve();
                                    _this.fireService.getAdministrativos().subscribe(function (data) {
                                        _this.source2 = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                        _this.listadoAdministrativos = data;
                                    });
                                    break;
                                }
                            }
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    InicioAdminPage.prototype.onSaveConfirm = function (event) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Editar?',
            cssClass: 'miClaseAlert',
            message: '¿Seguro quieres editar?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        event.confirm.reject();
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        console.log(event.newData);
                        if (event.newData.DNI != null && event.newData.Apellido != null && event.newData.Nombre != null && event.newData.Email != null && event.newData.Perfil != null
                            && event.newData.DNI != undefined && event.newData.Apellido != undefined && event.newData.Nombre != undefined && event.newData.Email != undefined && event.newData.Perfil != undefined &&
                            event.newData.DNI != "" && event.newData.Apellido != "" && event.newData.Nombre != "" && event.newData.Email != "" && event.newData.Perfil != "") {
                            if (event.newData.Perfil == "Profesor") {
                                for (var i = 0; i < _this.listadoProfesores.length; i++) {
                                    var element = _this.listadoProfesores[i];
                                    console.log(element);
                                    if (element.Email == event.newData.Email) {
                                        var listadoAux = _this.listadoProfesores;
                                        listadoAux[i] = event.newData;
                                        console.log(element);
                                        //const key = element['$key'];
                                        _this.fireService.updateProfesor(listadoAux);
                                        //event.confirm.reject();
                                        _this.fireService.getProfesores().subscribe(function (data) {
                                            _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                            _this.listadoProfesores = data;
                                        });
                                        break;
                                    }
                                }
                                event.confirm.reject();
                            }
                            else if (event.newData.Perfil == "Administrativo") {
                                for (var i = 0; i < _this.listadoAdministrativos.length; i++) {
                                    var element = _this.listadoAdministrativos[i];
                                    console.log(element);
                                    if (element.Email == event.newData.Email) {
                                        var listadoAux = _this.listadoAdministrativos;
                                        listadoAux[i] = event.newData;
                                        console.log(element);
                                        //const key = element['$key'];
                                        _this.fireService.updateAdministrativo(listadoAux);
                                        //event.confirm.reject();
                                        _this.fireService.getAdministrativos().subscribe(function (data) {
                                            _this.source2 = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                            _this.listadoAdministrativos = data;
                                        });
                                        break;
                                    }
                                }
                                event.confirm.reject();
                            }
                            else {
                                var alert_1 = _this.alertCtrl.create({
                                    title: "Error!",
                                    subTitle: "Perfil inválido",
                                    cssClass: "miClaseDanger",
                                    buttons: ['Aceptar']
                                });
                                alert_1.present();
                                event.confirm.reject();
                            }
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    InicioAdminPage.prototype.onCreateConfirm = function (event) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Crear?',
            cssClass: 'miClaseAlert',
            message: '¿Seguro quieres crear?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        event.confirm.reject();
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        if (event.newData.DNI != null && event.newData.Apellido != null && event.newData.Nombre != null && event.newData.Email != null && event.newData.Perfil != null
                            && event.newData.DNI != undefined && event.newData.Apellido != undefined && event.newData.Nombre != undefined && event.newData.Email != undefined && event.newData.Perfil != undefined &&
                            event.newData.DNI != "" && event.newData.Apellido != "" && event.newData.Nombre != "" && event.newData.Email != "" && event.newData.Perfil != "") {
                            if (event.newData.Email.includes('@')) {
                                if (event.newData.DNI.length == 8) {
                                    event.newData.Accion = " ";
                                    if (event.newData.Perfil == "Profesor") {
                                        _this.listadoProfesores.push(event.newData);
                                        event.confirm.resolve();
                                        _this.listadoProfesores[_this.listadoProfesores.lastIndexOf(event.newData)].password = event.newData.DNI;
                                        _this.fireService.updateProfesor(_this.listadoProfesores);
                                        _this.fireService.getProfesores().subscribe(function (data) {
                                            _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                            _this.listadoProfesores = data;
                                        });
                                    }
                                    else if (event.newData.Perfil == "Administrativo") {
                                        _this.listadoAdministrativos.push(event.newData);
                                        event.confirm.resolve();
                                        _this.listadoAdministrativos[_this.listadoAdministrativos.lastIndexOf(event.newData)].password = event.newData.DNI;
                                        _this.fireService.updateAdministrativo(_this.listadoAdministrativos);
                                        _this.fireService.getAdministrativos().subscribe(function (data) {
                                            _this.source2 = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                            _this.listadoAdministrativos = data;
                                        });
                                    }
                                    else {
                                        var alert_2 = _this.alertCtrl.create({
                                            title: "Error!",
                                            subTitle: "Perfil inválido",
                                            cssClass: "miClaseDanger",
                                            buttons: ['Aceptar']
                                        });
                                        alert_2.present();
                                        event.confirm.reject();
                                    }
                                }
                                else {
                                    var alert_3 = _this.alertCtrl.create({
                                        title: "Error!",
                                        subTitle: "DNI inválido",
                                        cssClass: "miClaseDanger",
                                        buttons: ['Aceptar']
                                    });
                                    alert_3.present();
                                    event.confirm.reject();
                                }
                            }
                            else {
                                var alert_4 = _this.alertCtrl.create({
                                    title: "Error!",
                                    subTitle: "Email inválido",
                                    cssClass: "miClaseDanger",
                                    buttons: ['Aceptar']
                                });
                                alert_4.present();
                                event.confirm.reject();
                            }
                        }
                        else {
                            var alert_5 = _this.alertCtrl.create({
                                title: "Error!",
                                subTitle: "Complete los datos",
                                cssClass: "miClaseDanger",
                                buttons: ['Aceptar']
                            });
                            alert_5.present();
                            event.confirm.reject();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    InicioAdminPage.prototype.asignar = function (dni) {
        //alert(dni);
    };
    InicioAdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioAdminPage');
    };
    InicioAdminPage.prototype.cargarLista = function () {
        if (this.personas == 'a') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { aulaa: " ", persona: "administrativo" });
        }
        else if (this.personas == 'p') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { aulaa: " ", persona: "profesor" });
        }
        //alert("voy a cargar lista");
    };
    return InicioAdminPage;
}());
InicioAdminPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n  <ion-content padding style=\"background-image:url('assets/aula-administrativo.jpeg')\" class=\"fondo\">\n  \n  <ion-item style='float:right'>\n  <ion-label>Personas</ion-label>\n  <ion-select interface='action-sheet' [(ngModel)]=\"personas\">\n    <ion-option (ionSelect)=\"changeList('p')\" value=\"p\">Profesores</ion-option>\n    <ion-option (ionSelect)=\"changeList('a')\" value=\"a\">Administrativos</ion-option>\n  </ion-select>\n</ion-item>\n<ion-item>\n<div style='width:100%;height:100%' *ngIf='profesor'>\n  <ng2-smart-table style='width:100%;height:100%' [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div></ion-item>\n  <ion-item>\n  <div style='width:100%;height:100%' *ngIf='!profesor'>\n  <ng2-smart-table style='width:100%;height:100%'  [settings]=\"settings2\" [source]=\"source2\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div></ion-item>\n\n  <button ion-button round full *ngIf='profesor' large (click)=\"cargarLista()\" class=\"animated flipInX miBoton miButton\"> \n  <ion-icon name=\"arrow-round-back\"></ion-icon> Cargar Profesores\n</button>\n<button ion-button round full *ngIf='!profesor' large (click)=\"cargarLista()\" class=\"animated flipInX miBoton miButton\"> \n<ion-icon name=\"arrow-round-back\"></ion-icon> Cargar Administrativos\n</button>\n</ion-content>\n",
        selector: 'page-inicio-admin',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], InicioAdminPage);

//# sourceMappingURL=inicio-admin.js.map

/***/ }),

<<<<<<< HEAD
/***/ 263:
=======
/***/ 197:
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula_profesor_aula_profesor__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula_profesor_aula_profesor__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
    function InicioProfesorPage(navCtrl, navParams, fireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.listaMateriasProfesor = [];
        this.listaAlumnos = [];
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listaAlumnos = data;
        });
        this.apellido = localStorage.getItem("Apellido");
        this.listaMateriasProfesor = [];
        for (var i = 0; i < this.listaAlumnos.length; i++) {
            var element = this.listaAlumnos[i];
            if (this.apellido == element.profesor)
                this.listaMateriasProfesor.push({ aula: element.aula, profesor: element.profesor, materia: element.materia });
        }
    }
    InicioProfesorPage.prototype.ionViewDidEnter = function () {
    };
    InicioProfesorPage.prototype.RedireccionMateria = function (elemento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aula_profesor_aula_profesor__["a" /* AulaProfesorPage */], { aula: elemento.aula, materia: elemento.materia, profesor: elemento.profesor });
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
    };
    return InicioProfesorPage;
}());
InicioProfesorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio-profesor',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/inicio-profesor/inicio-profesor.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Seleccione una materia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n  \n      <div *ngFor="let lista of listaMateriasProfesor; let i = index"> \n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(lista)">{{lista.aula}}, {{lista.materia}}</button> \n      </div>\n  \n  </ion-content>'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/inicio-profesor/inicio-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]) === "function" && _c || Object])
], InicioProfesorPage);

var _a, _b, _c;
//# sourceMappingURL=inicio-profesor.js.map

/***/ }),

<<<<<<< HEAD
/***/ 264:
=======
/***/ 198:
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_admin_inicio_admin__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_alumno_inicio_alumno__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__real_inicio_administrativo_real_inicio_administrativo__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__materias_materias__ = __webpack_require__(107);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula_profesor_aula_profesor__ = __webpack_require__(115);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aula_profesor_aula_profesor__["a" /* AulaProfesorPage */]);
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
    };
    return MateriasProfesorPage;
}());
MateriasProfesorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-materias-profesor',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/materias-profesor/materias-profesor.html"*/'<!--\n  Generated template for the MateriasProfesorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Seleccione una materia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n  \n      <div *ngFor="let lista of listaMateriasProfesor; let i = index"> \n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(lista.materia)">{{ lista.materia }}</button> \n      </div>\n  \n  </ion-content>'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/materias-profesor/materias-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MateriasProfesorPage);

//# sourceMappingURL=materias-profesor.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_admin_inicio_admin__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_alumno_inicio_alumno__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__real_inicio_administrativo_real_inicio_administrativo__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__materias_materias__ = __webpack_require__(82);
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
    function LoginPage(navCtrl, navParams, loadingCtrl, fireService, toast, googlePlus, screenOrientation, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.fireService = fireService;
        this.toast = toast;
        this.googlePlus = googlePlus;
        this.screenOrientation = screenOrientation;
        this.alertCtrl = alertCtrl;
        this.listadoAdmins = [];
        this.listadoAlumnos = [];
        this.listadoProfesores = [];
        this.listadoAdministrativos = [];
        this.listaAux = [];
        this.oct = { email: 'octaviovillegas@gmail.com', password: '20123456' };
        this.dal = { email: 'ortiz@utn', password: '104300' };
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.google = false;
        this.fireService.getAdmins().subscribe(function (data) {
            _this.listadoAdmins = data;
        });
        this.fireService.getAdministrativos().subscribe(function (data) {
            _this.listadoAdministrativos = data;
        });
        this.fireService.getProfesores().subscribe(function (data) {
            _this.listadoProfesores = data;
        });
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listadoAlumnos = data;
        });
    }
    LoginPage.prototype.octa = function () {
        this.email = this.oct.email;
        this.password = this.oct.password;
    };
    LoginPage.prototype.dale = function () {
        this.email = this.dal.email;
        this.password = this.dal.password;
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.unlock();
    };
    LoginPage.prototype.loginGoogle = function () {
        var _this = this;
        localStorage.clear();
        var flag = false;
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
            var firecreds = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.GoogleAuthProvider.credential(res.idTAceptaren);
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().signInWithCredential(firecreds).then(function (res) {
                for (var i = 0; i < _this.listadoAdmins.length; i++) {
                    var element = _this.listadoAdmins[i];
                    if (element.Email == __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.email) {
                        element.password = null;
                        localStorage.setItem("Nombre", element.Nombre);
                        localStorage.setItem("Email", element.Email);
                        localStorage.setItem("Apellido", element.Apellido);
                        localStorage.setItem("DNI", element.DNI);
                        localStorage.setItem("password", element.password);
                        localStorage.setItem("Perfil", element.Perfil);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__inicio_admin_inicio_admin__["a" /* InicioAdminPage */]);
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    for (var i = 0; i < _this.listadoAdministrativos.length; i++) {
                        var element = _this.listadoAdministrativos[i];
                        if (element.Email == __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.email) {
                            element.password = null;
                            localStorage.setItem("Nombre", element.Nombre);
                            localStorage.setItem("Email", element.Email);
                            localStorage.setItem("Apellido", element.Apellido);
                            localStorage.setItem("DNI", element.DNI);
                            localStorage.setItem("password", element.password);
                            localStorage.setItem("Perfil", element.Perfil);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__real_inicio_administrativo_real_inicio_administrativo__["a" /* RealInicioAdministrativoPage */]);
                            flag = true;
                            break;
                        }
                    }
                }
                if (!flag) {
                    for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                        if (flag) {
                            break;
                        }
                        var element = _this.listadoAlumnos[i];
                        if (element.aula == "4A") {
                            for (var j = 0; j < element.alumnos.length; j++) {
                                var element2 = element.alumnos[j];
                                if (element2.mail == __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.email) {
                                    localStorage.setItem("nombre", element2.nombre);
                                    localStorage.setItem("mail", element2.mail);
                                    localStorage.setItem("curso", "4° A");
                                    localStorage.setItem("legajo", element2.legajo);
                                    localStorage.setItem("turno", element2.turno);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__materias_materias__["a" /* MateriasPage */]);
                                    flag = true;
                                    break;
                                }
                                else if (element2.mail == _this.email && element2.legajo == _this.password) {
                                    var alert = _this.alertCtrl.create({
                                        title: "Info",
                                        subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                                        cssClass: "miClaseDanger",
                                        buttons: ['Aceptar']
                                    });
                                    alert.present();
                                    //        this.google=true;
                                }
                            }
                        }
                        else if (element.aula == "4B") {
                            for (var j = 0; j < element.alumnos.length; j++) {
                                var element2 = element.alumnos[j];
                                if (element2.mail == __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.email) {
                                    localStorage.setItem("nombre", element2.nombre);
                                    localStorage.setItem("mail", element2.mail);
                                    localStorage.setItem("curso", "4° B");
                                    localStorage.setItem("legajo", element2.legajo);
                                    localStorage.setItem("turno", element2.turno);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__materias_materias__["a" /* MateriasPage */]);
                                    flag = true;
                                    break;
                                }
                                else if (element2.mail == _this.email && element2.legajo == _this.password) {
                                    var alert = _this.alertCtrl.create({
                                        title: "Info!",
                                        subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                                        cssClass: "miClaseDanger",
                                        buttons: ['Aceptar']
                                    });
                                    alert.present();
                                    //        this.google=true;
                                }
                            }
                        }
                    }
                }
                if (!flag) {
                    for (var k = 0; k < _this.listadoProfesores.length; k++) {
                        var elementk = _this.listadoProfesores[k];
                        if (elementk.Email == __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.email) {
                            elementk.password = null;
                            localStorage.setItem("Nombre", elementk.Nombre);
                            localStorage.setItem("Email", elementk.Email);
                            localStorage.setItem("Apellido", elementk.Apellido);
                            localStorage.setItem("DNI", elementk.DNI);
                            localStorage.setItem("password", elementk.password);
                            localStorage.setItem("Perfil", elementk.Perfil);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */]);
                            flag = true;
                            break;
                        }
                    }
                }
                /*
                case "Administrativo":
                this.navCtrl.setRoot(InicioAdministrativoPage);
                break;
                case "Profesor":
                this.navCtrl.setRoot(InicioProfesorPage);
                break;
                case "Alumno":
                this.navCtrl.setRoot(AulaAlumnoPage);
                break;
          */
                if (!flag) {
                    _this.googlePlus.disconnect();
                    var alert = _this.alertCtrl.create({
                        title: "Info!",
                        subTitle: "Usuario no registrado",
                        cssClass: "miClaseDanger",
                        buttons: ['Aceptar']
                    });
                    alert.present();
                }
            }).catch(function (err) {
                var alert = _this.alertCtrl.create({
                    title: "Info!",
                    subTitle: "Autentificacion fallida",
                    cssClass: "miClaseDanger",
                    buttons: ['Aceptar']
                });
                alert.present();
            });
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: "Info!",
                subTitle: "Error Desconocido",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert.present();
        });
        /*
        this.googlePlus.login({'webClientId':'822117994633-eau5gidg0q2f1sqltdbnq68mscsrpfui.apps.googleusercontent.com','offline':true})
        .then(res=>
        {
          firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.accessTAceptaren))
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
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__real_inicio_administrativo_real_inicio_administrativo__["a" /* RealInicioAdministrativoPage */]);
                break;
            case 2:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */]);
                break;
            case 3:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_alumno_inicio_alumno__["a" /* InicioAlumnoPage */]);
                break;
        }
    };
    LoginPage.prototype.loginNormal = function () {
        localStorage.clear();
        var flag;
        for (var i = 0; i < this.listadoAdmins.length; i++) {
            var element = this.listadoAdmins[i];
            if (element.Email == this.email && element.password == this.password) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__inicio_admin_inicio_admin__["a" /* InicioAdminPage */]);
                localStorage.setItem("Nombre", element.Nombre);
                localStorage.setItem("Email", element.Email);
                localStorage.setItem("Apellido", element.Apellido);
                localStorage.setItem("DNI", element.DNI);
                localStorage.setItem("password", element.password);
                localStorage.setItem("Perfil", element.Perfil);
                flag = true;
                break;
            }
            else if (element.Email == this.email && element.password == null) {
                var alert = this.alertCtrl.create({
                    title: "Info!",
                    subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                    cssClass: "miClaseDanger",
                    buttons: ['Aceptar']
                });
                alert.present();
                // this.google=true;
            }
        }
        if (!flag) {
            for (var i = 0; i < this.listadoAdministrativos.length; i++) {
                var element = this.listadoAdministrativos[i];
                if (element.Email == this.email && element.password == this.password) {
                    localStorage.setItem("Nombre", element.Nombre);
                    localStorage.setItem("Email", element.Email);
                    localStorage.setItem("Apellido", element.Apellido);
                    localStorage.setItem("DNI", element.DNI);
                    localStorage.setItem("password", element.password);
                    localStorage.setItem("Perfil", element.Perfil);
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__real_inicio_administrativo_real_inicio_administrativo__["a" /* RealInicioAdministrativoPage */]);
                    flag = true;
                    break;
                }
                else if (element.Email == this.email && element.password == null) {
                    var alert = this.alertCtrl.create({
                        title: "Info!",
                        subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                        cssClass: "miClaseAlert",
                        buttons: ['Aceptar']
                    });
                    alert.present();
                    //this.google=true;
                }
            }
        }
        if (!flag) {
            for (var i = 0; i < this.listadoAlumnos.length; i++) {
                if (flag) {
                    break;
                }
                var element = this.listadoAlumnos[i];
                if (element.aula == "4A") {
                    for (var j = 0; j < element.alumnos.length; j++) {
                        var element2 = element.alumnos[j];
                        if (element2.mail == this.email && element2.legajo == this.password) {
                            localStorage.setItem("nombre", element2.nombre);
                            localStorage.setItem("mail", element2.mail);
                            localStorage.setItem("curso", "4A");
                            localStorage.setItem("legajo", element2.legajo);
                            localStorage.setItem("turno", element2.turno);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__materias_materias__["a" /* MateriasPage */]);
                            flag = true;
                            break;
                        }
                        else if (element2.mail == this.email && element2.legajo != this.password) {
<<<<<<< HEAD
                            var alert_6 = this.alertCtrl.create({
=======
                            var alert = this.alertCtrl.create({
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
                                title: "Info!",
                                subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                                cssClass: "miClaseDanger",
                                buttons: ['Aceptar']
                            });
<<<<<<< HEAD
                            alert_6.present();
=======
                            alert.present();
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
                            //  this.google=true;
                        }
                    }
                }
                else if (element.aula == "4B") {
                    for (var j = 0; j < element.alumnos.length; j++) {
                        var element2 = element.alumnos[j];
                        if (element2.mail == this.email && element2.legajo == this.password) {
                            localStorage.setItem("nombre", element2.nombre);
                            localStorage.setItem("mail", element2.mail);
                            localStorage.setItem("curso", "4B");
                            localStorage.setItem("legajo", element2.legajo);
                            localStorage.setItem("turno", element2.turno);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__materias_materias__["a" /* MateriasPage */]);
                            flag = true;
                            break;
                        }
                        else if (element2.mail == this.email && element2.legajo != this.password) {
<<<<<<< HEAD
                            var alert_7 = this.alertCtrl.create({
=======
                            var alert = this.alertCtrl.create({
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
                                title: "Info!",
                                subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                                cssClass: "miClaseDanger",
                                buttons: ['Aceptar']
                            });
<<<<<<< HEAD
                            alert_7.present();
=======
                            alert.present();
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
                            //  this.google=true;
                        }
                    }
                }
<<<<<<< HEAD
            }
        }
        /* for (var i = 0; i < this.listadoAlumnos.length; i++) {
           var element = this.listadoAlumnos[i];
           if(element.Email==this.email && element.password==this.password)
           {
               this.navCtrl.setRoot(AulaAlumnoPage);
               flag=true;
               break;
             }else if(element.Email==this.email && element.password==null)
             {
               alert("Contraseña incorrecta,prueba iniciar Sesión con Google porfavor");
               //this.google=true;
             }
           }*/
        if (!flag) {
            for (var h = 0; h < this.listadoProfesores.length; h++) {
                var elementh = this.listadoProfesores[h];
                if (elementh.Email == this.email && elementh.password == this.password) {
                    localStorage.setItem("Nombre", elementh.Nombre);
                    localStorage.setItem("Email", elementh.Email);
                    localStorage.setItem("Apellido", elementh.Apellido);
                    localStorage.setItem("DNI", elementh.DNI);
                    localStorage.setItem("password", elementh.password);
                    localStorage.setItem("Perfil", elementh.Perfil);
                    flag = true;
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */]);
                    break;
                }
                else if (elementh.Email == this.email && elementh.password == null) {
                    var alert_8 = this.alertCtrl.create({
                        title: "Info!",
                        subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                        cssClass: "miClaseDanger",
                        buttons: ['Aceptar']
                    });
                    alert_8.present();
                    //this.google=true;
                }
            }
        }
        /*
        case "Administrativo":
        this.navCtrl.setRoot(InicioAdministrativoPage);
        break;
        case "Profesor":
        this.navCtrl.setRoot(InicioProfesorPage);
        break;
        case "Alumno":
        this.navCtrl.setRoot(AulaAlumnoPage);
        break;
  */
        if (!flag) {
            this.googlePlus.disconnect();
            var alert_9 = this.alertCtrl.create({
                title: "Info!",
                subTitle: "Usuario no registrado o contraseña incorrecta",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert_9.present();
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Inicio de Sesión</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n\n \n\n<div style="width:100%;height:100%">\n\n  <br>\n\n  <div style="width:50%;height:10%;margin:auto;text-align:center;display:block;">\n\n<button ion-button icon-right color="danger" style="font-size:11pt;margin:auto;text-align:center;display:block;" round (click)="loginGoogle()">\n\nIniciar sesión con Google<ion-icon style="font-size:250%;margin:auto;text-align:center;display:block;" name="logo-googleplus"></ion-icon>\n\n</button>\n\n</div>\n\n    <br><br><br>\n\n    <div *ngIf="!google">\n\n   <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n      <ion-label  style="color:white" floating>Email</ion-label>\n\n<ion-input clearInput type="text"  [(ngModel)]="email" name="email" id="email"></ion-input></ion-item>\n\n<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n    <ion-label style="color:white" floating>Contraseña</ion-label>      \n\n<ion-input type="password"  [(ngModel)]="password" name="password" id="password"></ion-input></ion-item>\n\n <!--<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n  <ion-label style="color:white">Elige tu usuario</ion-label>\n\n <ion-select style="background-color:rgba(0, 0, 0, 0.747);color:white" [(ngModel)]="usuarioo" name="usuarioo" id="usuarioo" (ionChange)="selectChange()">\n\n   <ion-option *ngFor="let usuario of usuarios | async"  [value]="usuario">{{usuario.nombre}}</ion-option>\n\n   <ion-option>nicostellisano@hotmail.com</ion-option>\n\n  </ion-select>\n\n</ion-item>-->\n\n<br>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="loginNormal()">Iniciar Sesión</button>\n\n</div>\n\n</div>\n\n<!--<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(0)">Iniciar Sesión(Admin)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(1)">Iniciar Sesión(Administrativo)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(2)">Iniciar Sesión(Profesor)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(3)">Iniciar Sesión(Alumno)</button>\n\n-->\n\n<br><br><br><br>\n\n<button ion-button full (click)="octa()">Octavio</button>\n\n<button ion-button full (click)="dale()">Ortiz 4A </button>\n\n<br><br><br><br>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealInicioAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aula_administrativo_aula_administrativo__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__materias_administrativo_materias_administrativo__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cagar_archivo_cagar_archivo__ = __webpack_require__(69);
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
 * Generated class for the RealInicioAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RealInicioAdministrativoPage = (function () {
    function RealInicioAdministrativoPage(navCtrl, navParams, fireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.listadoProfesores = [];
        this.listadoAlumnos = [];
        this.listaMaterias = [];
        this.listaAux = [];
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listadoAlumnos = data;
        });
        this.fireService.getMaterias().subscribe(function (data) {
            _this.listaMaterias = data;
        });
        this.fireService.getProfesores().subscribe(function (data) {
            _this.listadoProfesores = data;
        });
    }
    RealInicioAdministrativoPage.prototype.ionViewDidLoad = function () {
        this.seleccion = "";
        console.log('ionViewDidLoad RealInicioAdministrativoPage');
    };
    RealInicioAdministrativoPage.prototype.Redireccion = function (direccion) {
        console.log(this.listadoProfesores);
        switch (direccion) {
            case "aulas":
                this.seleccion = "";
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aula_administrativo_aula_administrativo__["a" /* AulaAdministrativoPage */]);
                break;
            case "profesores":
                this.seleccion = "profesores";
                break;
            case "alumnos":
                this.seleccion = "aulasAlumnos";
                break;
            case "materias":
                this.listaAux = [];
                for (var i = 0; i < this.listadoAlumnos.length; i++) {
                    var element = this.listadoAlumnos[i];
                    this.listaAux.push({ aula: element.aula, profesor: element.profesor, nombre: element.materia });
                }
                this.seleccion = "materias";
                break;
        }
    };
    RealInicioAdministrativoPage.prototype.cargarLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { persona: "alumno" });
        //  alert("voy a cargar lista");
        //alert("voy a cargar lista");
    };
    RealInicioAdministrativoPage.prototype.aparecer = function () {
        this.seleccion = "";
    };
    RealInicioAdministrativoPage.prototype.Seleccion = function (data) {
        console.log(this.listadoAlumnos);
        switch (this.seleccion) {
            case "profesores":
                this.listaAux = [];
                for (var i = 0; i < this.listadoAlumnos.length; i++) {
                    var element = this.listadoAlumnos[i];
                    if (element.profesor == data) {
                        this.listaAux.push({ aula: element.aula, profesor: element.profesor, materia: element.materia });
                    }
                }
                this.seleccion = "materiasProfesor";
                break;
            case "aulasAlumnos":
                if (data == "a") {
                    this.listaAux = [];
                    for (var i = 0; i < this.listadoAlumnos.length; i++) {
                        var element = this.listadoAlumnos[i];
                        if (element.aula == "4A") {
                            for (var j = 0; j < element.alumnos.length; j++) {
                                var element2 = element.alumnos[j];
                                this.listaAux.push(element2);
                            }
                        }
                    }
                }
                else if (data == "b") {
                    this.listaAux = [];
                    for (var i = 0; i < this.listadoAlumnos.length; i++) {
                        var element = this.listadoAlumnos[i];
                        if (element.aula == "4B") {
                            for (var j = 0; j < element.alumnos.length; j++) {
                                var element2 = element.alumnos[j];
                                this.listaAux.push(element2);
                            }
                        }
                    }
                }
                this.seleccion = data;
                console.log(this.listaAux);
                break;
            case "a":
                this.listaAux = [];
                for (var i = 0; i < this.listadoAlumnos.length; i++) {
                    var element = this.listadoAlumnos[i];
                    if (element.aula == "4A") {
                        this.listaAux.push({ aula: element.aula, profesor: element.profesor, materia: element.materia });
                    }
                }
                this.seleccion = "materiasProfesor";
                break;
            case "b":
                this.listaAux = [];
                for (var i = 0; i < this.listadoAlumnos.length; i++) {
                    var element = this.listadoAlumnos[i];
                    if (element.aula == "4B") {
                        this.listaAux.push({ aula: element.aula, profesor: element.profesor, materia: element.materia });
                    }
                }
                this.seleccion = "materiasProfesor";
                break;
            case "materias":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__materias_administrativo_materias_administrativo__["a" /* MateriasAdministrativoPage */], { materia: data.nombre, aula: data.aula });
                this.seleccion = "";
                break;
            case "materiasProfesor":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__materias_administrativo_materias_administrativo__["a" /* MateriasAdministrativoPage */], { materia: data.materia, aula: data.aula });
                this.seleccion = "";
                break;
        }
    };
    return RealInicioAdministrativoPage;
}());
RealInicioAdministrativoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-real-inicio-administrativo',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\real-inicio-administrativo\real-inicio-administrativo.html"*/'<!--\n\n  Generated template for the RealInicioAdministrativoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Buscar Por:</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n\n  <div *ngIf="seleccion==\'\'">\n\n      <button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n\n          <ion-icon name="arrow-round-back"></ion-icon> Cargar Alumnos\n\n        </button>\n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'aulas\')">Aulas</button> \n\n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'profesores\')">Profesores</button>           \n\n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'alumnos\')">Alumnos</button> \n\n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'materias\')">Materias</button> \n\n        </div>\n\n        <button *ngIf="seleccion!=\'\'" ion-button icon-only round color="primary" (click)="aparecer()" style="margin:auto;text-align:center;display:block;"><ion-icon md="md-arrow-back"></ion-icon></button>\n\n\n\n        <div *ngIf="seleccion==\'alumnos\'" > \n\n          <span *ngFor="let alumno of listaAlumnos">  <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.legajo)">{{alumno.nombre}}</button>  </span>\n\n      </div>\n\n\n\n      <div *ngIf="seleccion==\'materias\'"> \n\n        <span *ngFor="let materia of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(materia)">Materia:{{materia.nombre}},Aula:{{materia.aula}}</button> </span> \n\n    </div>\n\n\n\n      \n\n    <div *ngIf="seleccion==\'profesores\'" > \n\n        <span *ngFor="let profesor of listadoProfesores"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(profesor.Apellido)">{{profesor.Nombre}},{{profesor.Apellido}}</button> </span> \n\n     </div>\n\n\n\n    <div *ngIf="seleccion==\'materiasProfesor\'" > \n\n     <span *ngFor="let mp of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(mp)">Materia:{{mp.materia}},Aula:{{mp.aula}} </button>  </span>\n\n  </div>\n\n    \n\n  <div *ngIf="seleccion==\'aulasAlumnos\'" > \n\n      <span > <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(\'a\')">4º A </button>  </span>\n\n      <span > <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(\'b\')">4º B </button>  </span>\n\n      \n\n    </div>\n\n\n\n    <div *ngIf="seleccion==\'a\'" > \n\n        <span *ngFor="let alumno of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.nombre)">{{alumno.nombre}}</button>  </span>\n\n     </div>\n\n\n\n     <div *ngIf="seleccion==\'b\'" > \n\n        <span *ngFor="let alumno of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.nombre)">{{alumno.nombre}} </button>  </span>\n\n     </div>\n\n          \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\real-inicio-administrativo\real-inicio-administrativo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]])
], RealInicioAdministrativoPage);

//# sourceMappingURL=real-inicio-administrativo.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notificacion_notificacion__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materia_materia__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__encuestas_encuestas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tomar_lista_tomar_lista__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__ = __webpack_require__(34);
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
var MateriasAdministrativoPage = (function () {
    function MateriasAdministrativoPage(navCtrl, navParams, db, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.nativeAudio = nativeAudio;
        this.listaAlumnos = [];
        this.view = [700, 150];
        this.view2 = [700, 150];
        this.listadoFaltas = [];
        this.informacion = [];
        this.aula = this.navParams.get('aula');
        this.materia = this.navParams.get('materia');
        this.nativeAudio.preloadComplex('bienvenidoProfesor', 'assets/sonidos/bienvenidoProfesor.mp3', 1, 1, 0);
        this.nativeAudio.play('bienvenidoProfesor');
    }
    MateriasAdministrativoPage.prototype.applyDimensions = function () {
        var width = this.content.getContentDimensions().contentWidth - 50;
        var state = width >= 320;
        this.showXAxisLabel = state;
        this.showYAxisLabel = state;
        this.showLegend = state;
        this.view = [width, 150];
    };
    MateriasAdministrativoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.applyDimensions();
        window.addEventListener('resize', function () {
            _this.applyDimensions();
        }, false);
        this.informacion = [
            {
                'name': 'Si',
                'value': 4
            },
            {
                'name': 'No',
                'value': 5
            }
        ];
        //mofificar por la ruta y el archivo de bienvenida
        // this.nativeAudio.preloadComplex('bienvenido', 'assets/piano/1.mp3', 1, 1, 0);
        //  this.nativeAudio.play('bienvenido');
    };
    MateriasAdministrativoPage.prototype.tomaLista = function () {
        // alert("voy a tomar lista");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tomar_lista_tomar_lista__["a" /* TomarListaPage */], { aulaa: this.aula, materia: this.materia });
    };
    MateriasAdministrativoPage.prototype.crearNotificacion = function () {
        console.log(this.aula);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notificacion_notificacion__["a" /* NotificacionPage */], { aulaa: this.aula, materia: this.materia });
    };
    MateriasAdministrativoPage.prototype.cargarLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { persona: "alumno" });
        //  alert("voy a cargar lista");
        //alert("voy a cargar lista");
    };
    MateriasAdministrativoPage.prototype.mostrarQr = function () {
        //alert("voy a qr");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__materia_materia__["a" /* MateriaPage */], { aulaa: this.aula, materia: this.materia });
    };
    MateriasAdministrativoPage.prototype.Encuestas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__encuestas_encuestas__["a" /* EncuestasPage */], { aulaa: this.aula, materia: this.materia });
    };
    return MateriasAdministrativoPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], MateriasAdministrativoPage.prototype, "content", void 0);
MateriasAdministrativoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-materias-administrativo',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\materias-administrativo\materias-administrativo.html"*/'<!--\n\n  Generated template for the AulaProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar color="dark">\n\n      <ion-title>Aula:{{aula}}, Materia {{materia}}</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content padding style="background-image:url(\'assets/aula-profesor.jpg\')" class="fondo">\n\n  \n\n   <!--gi <ion-list>\n\n                \n\n      <ion-item class="animated flipInX miItem">\n\n        <ion-label class="miLabel" floating>Divicion</ion-label>\n\n        <ion-input type="text" [(ngModel)]="miAulaProfesor.division" disabled="true"></ion-input> \n\n      </ion-item>\n\n                      \n\n      <ion-item class="animated flipInY miItem">\n\n        <ion-label class="miLabel" floating>Materia</ion-label>\n\n        <ion-input type="text" [(ngModel)]="miAulaProfesor.materia" disabled="true"></ion-input>\n\n      </ion-item>\n\n                  \n\n      <ion-item class="animated flipInX miItem" >\n\n        <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n\n        <ion-input type="text" [(ngModel)]="miAulaProfesor.cantidadAlumno" disabled="true"></ion-input>\n\n      </ion-item> \n\n    \n\n    </ion-list>-->\n\n  \n\n    <div style="height:40%;width:100%">\n\n     \n\n     \n\n      <button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n\n        <ion-icon name="arrow-round-back"></ion-icon> Actualizar Alumnos\n\n      </button>\n\n    \n\n      \n\n  \n\n      <button ion-button round full large  (click)="tomaLista()" class="animated flipInX miBoton miButton"> \n\n        <ion-icon name="arrow-round-back"></ion-icon> Tomar Lista\n\n      </button>\n\n    </div>\n\n  <div style="height:10%"></div>\n\n  <div style="height:50%;width:100%">\n\n    <ion-grid style="background-color:white;">\n\n      <h4>Faltas</h4>\n\n       <ion-row >\n\n         <ion-col >\n\n           <ngx-charts-bar-horizontal \n\n             [view]="view"\n\n             [results]="informacion"\n\n             xAxis="true"\n\n             yAxis="true"\n\n           >\n\n           </ngx-charts-bar-horizontal>\n\n         </ion-col>\n\n       </ion-row>\n\n     </ion-grid>\n\n    </div>\n\n    <!--  [legend]="showLegend"\n\n             legendTitle="Votos"\n\n             [showXAxisLabel]="showXAxisLabel"\n\n             [showYAxisLabel]="showYAxisLabel"\n\n             xAxisLabel="votos"\n\n             yAxisLabel="resultado" -->\n\n    \n\n      \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\materias-administrativo\materias-administrativo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__["a" /* NativeAudio */]])
], MateriasAdministrativoPage);

//# sourceMappingURL=materias-administrativo.js.map

/***/ }),

/***/ 271:
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
webpackEmptyAsyncContext.id = 271;

/***/ }),

/***/ 312:
=======
            }
        }
        /* for (var i = 0; i < this.listadoAlumnos.length; i++) {
           var element = this.listadoAlumnos[i];
           if(element.Email==this.email && element.password==this.password)
           {
               this.navCtrl.setRoot(AulaAlumnoPage);
               flag=true;
               break;
             }else if(element.Email==this.email && element.password==null)
             {
               alert("Contraseña incorrecta,prueba iniciar Sesión con Google porfavor");
               //this.google=true;
             }
           }*/
        if (!flag) {
            for (var h = 0; h < this.listadoProfesores.length; h++) {
                var elementh = this.listadoProfesores[h];
                if (elementh.Email == this.email && elementh.password == this.password) {
                    localStorage.setItem("Nombre", elementh.Nombre);
                    localStorage.setItem("Email", elementh.Email);
                    localStorage.setItem("Apellido", elementh.Apellido);
                    localStorage.setItem("DNI", elementh.DNI);
                    localStorage.setItem("password", elementh.password);
                    localStorage.setItem("Perfil", elementh.Perfil);
                    flag = true;
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */]);
                    break;
                }
                else if (elementh.Email == this.email && elementh.password == null) {
                    var alert = this.alertCtrl.create({
                        title: "Info!",
                        subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                        cssClass: "miClaseDanger",
                        buttons: ['Aceptar']
                    });
                    alert.present();
                    //this.google=true;
                }
            }
        }
        /*
        case "Administrativo":
        this.navCtrl.setRoot(InicioAdministrativoPage);
        break;
        case "Profesor":
        this.navCtrl.setRoot(InicioProfesorPage);
        break;
        case "Alumno":
        this.navCtrl.setRoot(AulaAlumnoPage);
        break;
  */
        if (!flag) {
            this.googlePlus.disconnect();
            var alert = this.alertCtrl.create({
                title: "Info!",
                subTitle: "Usuario no registrado o contraseña incorrecta",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert.present();
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Inicio de Sesión</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n \n<div style="width:100%;height:100%">\n  <br>\n  <div style="width:50%;height:10%;margin:auto;text-align:center;display:block;">\n<button ion-button icon-right color="danger" style="font-size:11pt;margin:auto;text-align:center;display:block;" round (click)="loginGoogle()">\nIniciar sesión con Google<ion-icon style="font-size:250%;margin:auto;text-align:center;display:block;" name="logo-googleplus"></ion-icon>\n</button>\n</div>\n    <br><br><br>\n    <div *ngIf="!google">\n   <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n      <ion-label  style="color:white" floating>Email</ion-label>\n<ion-input clearInput type="text"  [(ngModel)]="email" name="email" id="email"></ion-input></ion-item>\n<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n    <ion-label style="color:white" floating>Contraseña</ion-label>      \n<ion-input type="password"  [(ngModel)]="password" name="password" id="password"></ion-input></ion-item>\n <!--<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n  <ion-label style="color:white">Elige tu usuario</ion-label>\n <ion-select style="background-color:rgba(0, 0, 0, 0.747);color:white" [(ngModel)]="usuarioo" name="usuarioo" id="usuarioo" (ionChange)="selectChange()">\n   <ion-option *ngFor="let usuario of usuarios | async"  [value]="usuario">{{usuario.nombre}}</ion-option>\n   <ion-option>nicostellisano@hotmail.com</ion-option>\n  </ion-select>\n</ion-item>-->\n<br>\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="loginNormal()">Iniciar Sesión</button>\n</div>\n</div>\n<!--<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(0)">Iniciar Sesión(Admin)</button>\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(1)">Iniciar Sesión(Administrativo)</button>\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(2)">Iniciar Sesión(Profesor)</button>\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(3)">Iniciar Sesión(Alumno)</button>\n-->\n<br><br><br><br>\n<button ion-button full (click)="octa()">Octavio</button>\n<button ion-button full (click)="dale()">Ortiz 4A </button>\n<br><br><br><br>\n\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealInicioAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__materia_materia__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aula_administrativo_aula_administrativo__ = __webpack_require__(113);
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
 * Generated class for the RealInicioAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RealInicioAdministrativoPage = (function () {
    function RealInicioAdministrativoPage(navCtrl, navParams, fireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.listadoProfesores = [];
        this.listadoAlumnos = [];
        this.listaMaterias = [];
        this.listaAux = [];
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listadoAlumnos = data;
        });
        this.fireService.getMaterias().subscribe(function (data) {
            _this.listaMaterias = data;
        });
        this.fireService.getProfesores().subscribe(function (data) {
            _this.listadoProfesores = data;
        });
    }
    RealInicioAdministrativoPage.prototype.ionViewDidLoad = function () {
        this.seleccion = "";
        console.log('ionViewDidLoad RealInicioAdministrativoPage');
    };
    RealInicioAdministrativoPage.prototype.Redireccion = function (direccion) {
        console.log(this.listadoProfesores);
        switch (direccion) {
            case "aulas":
                this.seleccion = "";
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aula_administrativo_aula_administrativo__["a" /* AulaAdministrativoPage */]);
                break;
            case "profesores":
                this.seleccion = "profesores";
                break;
            case "alumnos":
                this.seleccion = "aulasAlumnos";
                break;
            case "materias":
                this.listaAux = [];
                for (var i = 0; i < this.listadoAlumnos.length; i++) {
                    var element = this.listadoAlumnos[i];
                    this.listaAux.push({ aula: element.aula, profesor: element.profesor, nombre: element.materia });
                }
                this.seleccion = "materias";
                break;
        }
    };
    RealInicioAdministrativoPage.prototype.aparecer = function () {
        this.seleccion = "";
    };
    RealInicioAdministrativoPage.prototype.Seleccion = function (data) {
        console.log(this.listadoAlumnos);
        switch (this.seleccion) {
            case "profesores":
                this.listaAux = [];
                for (var i = 0; i < this.listadoAlumnos.length; i++) {
                    var element = this.listadoAlumnos[i];
                    if (element.profesor == data) {
                        this.listaAux.push({ aula: element.aula, profesor: element.profesor, materia: element.materia });
                    }
                }
                this.seleccion = "materiasProfesor";
                break;
            case "aulasAlumnos":
                if (data == "a") {
                    this.listaAux = [];
                    for (var i = 0; i < this.listadoAlumnos.length; i++) {
                        var element = this.listadoAlumnos[i];
                        if (element.aula == "4A") {
                            for (var j = 0; j < element.alumnos.length; j++) {
                                var element2 = element.alumnos[j];
                                this.listaAux.push(element2);
                            }
                        }
                    }
                }
                else if (data == "b") {
                    this.listaAux = [];
                    for (var i = 0; i < this.listadoAlumnos.length; i++) {
                        var element = this.listadoAlumnos[i];
                        if (element.aula == "4B") {
                            for (var j = 0; j < element.alumnos.length; j++) {
                                var element2 = element.alumnos[j];
                                this.listaAux.push(element2);
                            }
                        }
                    }
                }
                this.seleccion = data;
                console.log(this.listaAux);
                break;
            case "a":
                this.listaAux = [];
                for (var i = 0; i < this.listadoAlumnos.length; i++) {
                    var element = this.listadoAlumnos[i];
                    if (element.aula == "4A") {
                        this.listaAux.push({ aula: element.aula, profesor: element.profesor, materia: element.materia });
                    }
                }
                this.seleccion = "materiasProfesor";
                break;
            case "b":
                this.listaAux = [];
                for (var i = 0; i < this.listadoAlumnos.length; i++) {
                    var element = this.listadoAlumnos[i];
                    if (element.aula == "4B") {
                        this.listaAux.push({ aula: element.aula, profesor: element.profesor, materia: element.materia });
                    }
                }
                this.seleccion = "materiasProfesor";
                break;
            case "materias":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__materia_materia__["a" /* MateriaPage */], { materiaa: data.nombre, aulaaa: data.aula });
                this.seleccion = "";
                break;
            case "materiasProfesor":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__materia_materia__["a" /* MateriaPage */], { materiaa: data.materia, aulaaa: data.aula });
                this.seleccion = "";
                break;
        }
    };
    return RealInicioAdministrativoPage;
}());
RealInicioAdministrativoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-real-inicio-administrativo',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/real-inicio-administrativo/real-inicio-administrativo.html"*/'<!--\n  Generated template for the RealInicioAdministrativoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Buscar Por:</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n  <div *ngIf="seleccion==\'\'">\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'aulas\')">Aulas</button> \n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'profesores\')">Profesores</button>           \n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'alumnos\')">Alumnos</button> \n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'materias\')">Materias</button> \n        </div>\n        <button *ngIf="seleccion!=\'\'" ion-button icon-only round color="primary" (click)="aparecer()" style="margin:auto;text-align:center;display:block;"><ion-icon md="md-arrow-back"></ion-icon></button>\n\n        <div *ngIf="seleccion==\'alumnos\'" > \n          <span *ngFor="let alumno of listaAlumnos">  <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.legajo)">{{alumno.nombre}}</button>  </span>\n      </div>\n\n      <div *ngIf="seleccion==\'materias\'"> \n        <span *ngFor="let materia of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(materia)">Materia:{{materia.nombre}},Aula:{{materia.aula}}</button> </span> \n    </div>\n\n      \n    <div *ngIf="seleccion==\'profesores\'" > \n        <span *ngFor="let profesor of listadoProfesores"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(profesor.Apellido)">{{profesor.Nombre}},{{profesor.Apellido}}</button> </span> \n     </div>\n\n    <div *ngIf="seleccion==\'materiasProfesor\'" > \n     <span *ngFor="let mp of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(mp)">Materia:{{mp.materia}},Aula:{{mp.aula}} </button>  </span>\n  </div>\n    \n  <div *ngIf="seleccion==\'aulasAlumnos\'" > \n      <span > <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(\'a\')">4º A </button>  </span>\n      <span > <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(\'b\')">4º B </button>  </span>\n      \n    </div>\n\n    <div *ngIf="seleccion==\'a\'" > \n        <span *ngFor="let alumno of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.nombre)">{{alumno.nombre}}</button>  </span>\n     </div>\n\n     <div *ngIf="seleccion==\'b\'" > \n        <span *ngFor="let alumno of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.nombre)">{{alumno.nombre}} </button>  </span>\n     </div>\n          \n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/real-inicio-administrativo/real-inicio-administrativo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]])
], RealInicioAdministrativoPage);

//# sourceMappingURL=real-inicio-administrativo.js.map

/***/ }),

/***/ 205:
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
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 246:
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alumnos/alumnos.module": [
		567,
		23
	],
	"../pages/asignar-materia/asignar-materia.module": [
		568,
		22
	],
	"../pages/aula-administrativo/aula-administrativo.module": [
		569,
		21
	],
	"../pages/aula-alumno/aula-alumno.module": [
		570,
		20
	],
	"../pages/aula-profesor/aula-profesor.module": [
		571,
		19
	],
	"../pages/cagar-archivo/cagar-archivo.module": [
		572,
		18
	],
	"../pages/cuestionarios/cuestionarios.module": [
		573,
		17
	],
	"../pages/descargar-archivo/descargar-archivo.module": [
		574,
		16
	],
	"../pages/editar-perfil/editar-perfil.module": [
		575,
		15
	],
	"../pages/encuestas-alta/encuestas-alta.module": [
		576,
		14
	],
	"../pages/encuestas-editar/encuestas-editar.module": [
		577,
		13
	],
	"../pages/encuestas/encuestas.module": [
		578,
		12
	],
	"../pages/inicio-admin/inicio-admin.module": [
		579,
		11
	],
	"../pages/inicio-administrativo/inicio-administrativo.module": [
		580,
		10
	],
	"../pages/inicio-alumno/inicio-alumno.module": [
		581,
		9
	],
	"../pages/inicio-profesor/inicio-profesor.module": [
		582,
		8
	],
	"../pages/login/login.module": [
		583,
		7
	],
	"../pages/materia/materia.module": [
		584,
		6
	],
	"../pages/materias-profesor/materias-profesor.module": [
		585,
		5
	],
	"../pages/materias/materias.module": [
		586,
		4
	],
	"../pages/notificacion/notificacion.module": [
		587,
		3
	],
	"../pages/perfil/perfil.module": [
		588,
		0
	],
	"../pages/real-inicio-administrativo/real-inicio-administrativo.module": [
		589,
		2
	],
	"../pages/tomar-lista/tomar-lista.module": [
		590,
		1
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
webpackAsyncContext.id = 246;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireBaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(451);
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
    FireBaseServiceProvider.prototype.getProfesores = function () {
        return this.afd.list('/personas/profesores');
    };
    FireBaseServiceProvider.prototype.getAdministrativos = function () {
        return this.afd.list('/personas/administrativos');
    };
    FireBaseServiceProvider.prototype.getAlumnos = function () {
        return this.afd.list('/alumno-lista');
    };
    FireBaseServiceProvider.prototype.getMaterias = function () {
        return this.afd.list('/materias');
    };
    FireBaseServiceProvider.prototype.addMateria = function (materia) {
        return this.afd.list('/materias').push(materia);
    };
    FireBaseServiceProvider.prototype.getAdmins = function () {
        return this.afd.list('/personas/admins');
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
    FireBaseServiceProvider.prototype.agregarLista = function (alumnoLista, key) {
        return this.afd.object('/alumno-lista/' + key).update(alumnoLista);
    };
    FireBaseServiceProvider.prototype.agregarListaA = function (alumno) {
        return this.afd.list('/tomarA').push(alumno);
    };
    FireBaseServiceProvider.prototype.agregarListaB = function (alumno) {
        return this.afd.list('/tomarB').push(alumno);
    };
    FireBaseServiceProvider.prototype.getListaA = function () {
        return this.afd.list('/tomarA');
    };
    FireBaseServiceProvider.prototype.getListaB = function () {
        return this.afd.list('/tomarB');
    };
    FireBaseServiceProvider.prototype.updateA = function (contPre) {
        return this.afd.list('/tomarA').update('contPresentes', contPre);
    };
    FireBaseServiceProvider.prototype.updateB = function (contPre) {
        return this.afd.list('/tomarB').update('contPresentes', contPre);
    };
    FireBaseServiceProvider.prototype.addProfesor = function (item) {
        return this.afd.list('/personas/profesores').push(item);
    };
    FireBaseServiceProvider.prototype.addAdministrativo = function (item) {
        return this.afd.list('/personas/administrativos').push(item);
    };
    FireBaseServiceProvider.prototype.addAlumno = function (item, i) {
        return this.afd.list('/alumno-lista/' + i + '/alumnos').push(item);
    };
    FireBaseServiceProvider.prototype.addUser = function (item) {
        return this.afd.list('/personas').push(item);
    };
    FireBaseServiceProvider.prototype.updateAlumno = function (data, key) {
        return this.afd.object('/alumno-lista/' + key + '/alumnos').update(data);
    };
    FireBaseServiceProvider.prototype.updateAlumnoLista = function (data, key) {
        return this.afd.object('/alumno-lista/').update(data);
    };
    FireBaseServiceProvider.prototype.updateProfesor = function (data) {
        return this.afd.list('/personas').update('profesores', data);
    };
    FireBaseServiceProvider.prototype.updateAdministrativo = function (data) {
        return this.afd.list('/personas').update('administrativos', data);
    };
    FireBaseServiceProvider.prototype.removeProfesor = function (key) {
        return this.afd.list('/personas/profesores').remove(key);
    };
    FireBaseServiceProvider.prototype.removeAdministrativo = function (key) {
        return this.afd.list('/personas/administrativos').remove(key);
    };
    FireBaseServiceProvider.prototype.removeAlumno = function (i, key) {
        return this.afd.list('/alumo-lista/' + i + '/alumnos').remove(key);
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
    /*modifyProfesor(dni:FirebaseObjectObservable)
    {
      return this.afd.list('/personas/profesores').update(dni)
    }*/
    //MAURO
    FireBaseServiceProvider.prototype.agregarEncuesta = function (encuesta) {
        return this.afd.list('/encuestas').push(encuesta);
    };
    FireBaseServiceProvider.prototype.traerEncuestas = function () {
        return this.afd.list('/encuestas');
    };
    FireBaseServiceProvider.prototype.eliminarEncuesta = function (encuesta) {
        //return this.afd.database.ref('Encuestas/'+encuesta.$key).remove();
        console.log(encuesta.$key);
        return this.afd.list('/encuestas/' + encuesta.$key).remove();
    };
    FireBaseServiceProvider.prototype.editarEncuest = function (encuesta) {
        return this.afd.object('/encuestas/' + encuesta.$key).update(encuesta);
    };
    return FireBaseServiceProvider;
}());
FireBaseServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
], FireBaseServiceProvider);

//# sourceMappingURL=fire-base-service.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlumnosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the AlumnosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlumnosPage = (function () {
    function AlumnosPage() {
    }
    return AlumnosPage;
}());
AlumnosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-alumnos',
        template: "\n\n  <ion-item style='float:right'>\n  <ion-label>Curso</ion-label>\n  <ion-select [(ngModel)]=\"seleccion\" (ionChange)=\"changeList($event)\">\n    <ion-option value=\"a\">4\u00BAA</ion-option>\n    <ion-option value=\"b\">4\u00BAB</ion-option>\n  </ion-select>\n</ion-item>\n<div style='width:100%;height:100%' *ngIf='seleccion==\"a\"'>\n  <ng2-smart-table style='width:100%;height:100%' [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div>\n  <div style='width:100%;height:100%' *ngIf='seleccion==\"b\"'>\n  <ng2-smart-table style='width:100%;height:100%'  [settings]=\"settings\" [source]=\"source2\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div>\n\n",
    })
], AlumnosPage);

//# sourceMappingURL=alumnos.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaAlumnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias_materias__ = __webpack_require__(107);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias_materias__ = __webpack_require__(82);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
    AulaAlumnoPage.prototype.RedireccionMaterias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materias_materias__["a" /* MateriasPage */]);
    };
    return AulaAlumnoPage;
}());
AulaAlumnoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aula-alumno',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/aula-alumno/aula-alumno.html"*/'<!--\n  Generated template for the AulaAlumnoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Aula Alumno</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-image:url(\'assets/aula.jpg\')" class="fondo">\n\n  <ion-list>\n\n   <!-- <ion-item>\n      <ion-label>Toppings</ion-label>\n        <ion-select [(ngModel)]="miAulaAlumno.turno"cancelText="cancelar" okText="elegir">\n          <ion-option value="nulo" selected="true">Elegir turno</ion-option>\n          <ion-option value="mañana">Mañana</ion-option>\n          <ion-option value="tarde" selected="true">Tarde</ion-option>\n          <ion-option value="noche">Noche</ion-option>\n        </ion-select>\n    </ion-item> -->\n\n    <ion-item class="animated flipInX miItem">\n      <ion-label class="miLabel" floating>Turno</ion-label>\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.turno" disabled="true"></ion-input> \n    </ion-item>\n            \n     <ion-item class="animated flipInY miItem">\n      <ion-label class="miLabel" floating>Profesor</ion-label>\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.profesor" disabled="true"></ion-input>\n     </ion-item>\n        \n    <ion-item class="animated flipInX miItem" >\n      <ion-label class="miLabel" floating >Materia</ion-label>\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.materia" disabled="true"></ion-input>\n    </ion-item> \n  </ion-list>\n      \n  <div>\n    <button ion-button round full large (click)=RedireccionMaterias()  class="animated flipInX miBoton miButton"> \n      <ion-icon name="arrow-round-back"></ion-icon> Materias\n    </button>\n  </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/aula-alumno/aula-alumno.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AulaAlumnoPage);

//# sourceMappingURL=aula-alumno.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuestionariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the CuestionariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuestionariosPage = (function () {
    function CuestionariosPage(navCtrl, navParams) {
        //NO ES LA FUNCIONALIDAD CORRECTA
        /* this.listaCuestionariosProfesor=[
           {nombre:"Examen: ¿parcial o tp?"},
           {nombre:"¿Hacemos rifas para comprar maquinas?"}
        ];
        */
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CuestionariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CuestionariosPage');
    };
    //NO ES LA FUNCION CORRECTA
    /*
    RedireccionCuestionario(cuestionario:string)
    {
      alert("se vera la informacion de este cuestionario");
      switch(cuestionario)
      {
        case "":
       //this.navCtrl.push();
        break;
      }
    }
    */
    CuestionariosPage.prototype.RedireccionCrearCuestionario = function () {
        alert("aca el profesor podra crear cuestionarios");
    };
    CuestionariosPage.prototype.MostrarCuestionariosProfesor = function () {
        alert("aca el profesor podra ver los cuestionarios");
    };
    return CuestionariosPage;
}());
CuestionariosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cuestionarios',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/cuestionarios/cuestionarios.html"*/'<!--\n  Generated template for the MateriasProfesorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Seleccione un cuestionario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenCuestionarios.jpg\')" class="fondo">\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionCrearCuestionario()">Crear cuestionario</button> \n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="MostrarCuestionariosProfesor()">Mostrar cuestionarios</button> \n          \n        </ion-content>'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/cuestionarios/cuestionarios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CuestionariosPage);

//# sourceMappingURL=cuestionarios.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula_administrativo_aula_administrativo__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(34);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula_administrativo_aula_administrativo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(36);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
    function InicioAdministrativoPage(navCtrl, navParams, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeAudio = nativeAudio;
        //harcodeado para mostrar, despues se debe eliminar y tomarar las aulas de firebase
        this.listaAulas = [
            {
                "nombre": "4A"
            },
            {
                "nombre": "4B"
            }
        ];
        this.nativeAudio.preloadComplex('bievenidoAdministrativo', 'assets/sonidos/bievenidoAdministrativo.mp3', 1, 1, 0);
        this.nativeAudio.play('bievenidoAdministrativo');
    }
    InicioAdministrativoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioAdministrativoPage');
    };
    InicioAdministrativoPage.prototype.RedireccionAula = function (aula) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aula_administrativo_aula_administrativo__["a" /* AulaAdministrativoPage */]);
        /*
        switch(aula)
        {
         
        
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
    
        }*/
    };
    return InicioAdministrativoPage;
}());
InicioAdministrativoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio-administrativo',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/inicio-administrativo/inicio-administrativo.html"*/'<!--\n  Generated template for the InicioAdministrativoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Seleccione un aula</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n\n    <div *ngFor="let lista of listaAulas; let i = index"> \n        <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionAula(lista.nombre)">{{ lista.nombre }}</button> \n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/inicio-administrativo/inicio-administrativo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */]])
], InicioAdministrativoPage);

//# sourceMappingURL=inicio-administrativo.js.map

/***/ }),

<<<<<<< HEAD
/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__materia_materia__ = __webpack_require__(83);
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
    function MateriasProfesorPage(navCtrl, navParams, fireService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.aula = this.navParams.get('aulaa');
        // alert(this.aula);
        /*switch (this.aula)
        {
         case "2° B":
     
          break;
          case "3° A":
          this.listaMateriasProfesor=[
           {"materia":"Laboratorio 3"},
           {"materia":"Programacion 3"}
         ];
     
          break;
          case "4° A":
          this.listaMateriasProfesor=[
           {"materia":"Laboratorio 4"},
           {"materia":"Practica Profesional"}
         ];
          break;
          case "4° B":
          this.listaMateriasProfesor=[
           {"materia":"Practica Profesional"},
         ];
     
          break;
        }*/
    }
    MateriasProfesorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listaAlumnos = data;
        });
        this.apellido = localStorage.getItem("Apellido");
        this.listaMateriasProfesor = [];
        for (var i = 0; i < this.listaAlumnos.length; i++) {
            var element = this.listaAlumnos[i];
            if (this.apellido == element.profesor)
                this.listaMateriasProfesor.push({ aula: element.aula, profesor: element.profesor, nombre: element.materia });
        }
    };
    MateriasProfesorPage.prototype.RedireccionMaterias = function () {
    };
    MateriasProfesorPage.prototype.RedireccionMateria = function (elemento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__materia_materia__["a" /* MateriaPage */], { aula: elemento.aula, materia: elemento.materia, profesor: elemento.profesor });
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
    };
    return MateriasProfesorPage;
}());
MateriasProfesorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-materias-profesor',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\materias-profesor\materias-profesor.html"*/'<!--\n\n  Generated template for the MateriasProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione una materia</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n\n  \n\n      <div *ngFor="let lista of listaMateriasProfesor; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(lista)">{{lista.aula}}, {{lista.materia}}</button> \n\n      </div>\n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\materias-profesor\materias-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]])
], MateriasProfesorPage);

//# sourceMappingURL=materias-profesor.js.map

/***/ }),

/***/ 481:
=======
/***/ 353:
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_admin_inicio_admin__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inicio_administrativo_inicio_administrativo__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inicio_profesor_inicio_profesor__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inicio_alumno_inicio_alumno__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aula_alumno_aula_alumno__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_aula_administrativo_aula_administrativo__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aula_profesor_aula_profesor__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_button_renderer_button_renderer__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_materias_materias__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_materias_profesor_materias_profesor__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_screen_orientation__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cuestionarios_cuestionarios__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cagar_archivo_cagar_archivo__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_alumnos_alumnos__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_barcode_scanner__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_materia_materia__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_editar_perfil_editar_perfil__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_descargar_archivo_descargar_archivo__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_notificacion_notificacion__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_real_inicio_administrativo_real_inicio_administrativo__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_asignar_materia_asignar_materia__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_encuestas_encuestas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_encuestas_alta_encuestas_alta__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_encuestas_editar_encuestas_editar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tomar_lista_tomar_lista__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_audio__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_respuesta_encuesta_respuesta_encuesta__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_materias_administrativo_materias_administrativo__ = __webpack_require__(266);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_admin_inicio_admin__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inicio_administrativo_inicio_administrativo__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inicio_profesor_inicio_profesor__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inicio_alumno_inicio_alumno__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aula_alumno_aula_alumno__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_aula_administrativo_aula_administrativo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aula_profesor_aula_profesor__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_button_renderer_button_renderer__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_materias_materias__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_materias_profesor_materias_profesor__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_screen_orientation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cuestionarios_cuestionarios__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cagar_archivo_cagar_archivo__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_alumnos_alumnos__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_barcode_scanner__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_materia_materia__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_editar_perfil_editar_perfil__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_descargar_archivo_descargar_archivo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_notificacion_notificacion__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_real_inicio_administrativo_real_inicio_administrativo__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_asignar_materia_asignar_materia__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_encuestas_encuestas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_encuestas_alta_encuestas_alta__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_encuestas_editar_encuestas_editar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tomar_lista_tomar_lista__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_respuesta_encuesta_respuesta_encuesta__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_respuesta_encuesta_respuesta_encuesta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40__pages_respuesta_encuesta_respuesta_encuesta__);
throw new Error("Cannot find module \"@swimlane/ngx-charts\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_materias_administrativo_materias_administrativo__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_materias_administrativo_materias_administrativo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43__pages_materias_administrativo_materias_administrativo__);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
            __WEBPACK_IMPORTED_MODULE_22__pages_materias_profesor_materias_profesor__["a" /* MateriasProfesorPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_cuestionarios_cuestionarios__["a" /* CuestionariosPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_alumnos_alumnos__["a" /* AlumnosPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_materia_materia__["a" /* MateriaPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_editar_perfil_editar_perfil__["a" /* EditarPerfilPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_descargar_archivo_descargar_archivo__["a" /* DescargarArchivoPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_notificacion_notificacion__["a" /* NotificacionPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_real_inicio_administrativo_real_inicio_administrativo__["a" /* RealInicioAdministrativoPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_asignar_materia_asignar_materia__["a" /* AsignarMateriaPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_encuestas_encuestas__["a" /* EncuestasPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_encuestas_alta_encuestas_alta__["a" /* EncuestasAltaPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_encuestas_editar_encuestas_editar__["a" /* EncuestasEditarPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_tomar_lista_tomar_lista__["a" /* TomarListaPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_respuesta_encuesta_respuesta_encuesta__["RespuestaEncuestaPage"],
            __WEBPACK_IMPORTED_MODULE_43__pages_materias_administrativo_materias_administrativo__["MateriasAdministrativoPage"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__["b" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/alumnos/alumnos.module#AlumnosPageModule', name: 'AlumnosPage', segment: 'alumnos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/asignar-materia/asignar-materia.module#AsignarMateriaPageModule', name: 'AsignarMateriaPage', segment: 'asignar-materia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/aula-administrativo/aula-administrativo.module#AulaAdministrativoPageModule', name: 'AulaAdministrativoPage', segment: 'aula-administrativo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/aula-alumno/aula-alumno.module#AulaAlumnoPageModule', name: 'AulaAlumnoPage', segment: 'aula-alumno', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/aula-profesor/aula-profesor.module#AulaProfesorPageModule', name: 'AulaProfesorPage', segment: 'aula-profesor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cagar-archivo/cagar-archivo.module#CagarArchivoPageModule', name: 'CagarArchivoPage', segment: 'cagar-archivo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cuestionarios/cuestionarios.module#CuestionariosPageModule', name: 'CuestionariosPage', segment: 'cuestionarios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/descargar-archivo/descargar-archivo.module#DescargarArchivoPageModule', name: 'DescargarArchivoPage', segment: 'descargar-archivo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editar-perfil/editar-perfil.module#EditarPerfilPageModule', name: 'EditarPerfilPage', segment: 'editar-perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/encuestas-alta/encuestas-alta.module#EncuestasAltaPageModule', name: 'EncuestasAltaPage', segment: 'encuestas-alta', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/encuestas-editar/encuestas-editar.module#EncuestasEditarPageModule', name: 'EncuestasEditarPage', segment: 'encuestas-editar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/encuestas/encuestas.module#EncuestasPageModule', name: 'EncuestasPage', segment: 'encuestas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-admin/inicio-admin.module#InicioAdminPageModule', name: 'InicioAdminPage', segment: 'inicio-admin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-administrativo/inicio-administrativo.module#InicioAdministrativoPageModule', name: 'InicioAdministrativoPage', segment: 'inicio-administrativo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-alumno/inicio-alumno.module#InicioAlumnoPageModule', name: 'InicioAlumnoPage', segment: 'inicio-alumno', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-profesor/inicio-profesor.module#InicioProfesorPageModule', name: 'InicioProfesorPage', segment: 'inicio-profesor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/materia/materia.module#MateriaPageModule', name: 'MateriaPage', segment: 'materia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/materias-profesor/materias-profesor.module#MateriasProfesorPageModule', name: 'MateriasProfesorPage', segment: 'materias-profesor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/materias/materias.module#MateriasPageModule', name: 'MateriasPage', segment: 'materias', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notificacion/notificacion.module#NotificacionPageModule', name: 'NotificacionPage', segment: 'notificacion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/real-inicio-administrativo/real-inicio-administrativo.module#RealInicioAdministrativoPageModule', name: 'RealInicioAdministrativoPage', segment: 'real-inicio-administrativo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tomar-lista/tomar-lista.module#TomarListaPageModule', name: 'TomarListaPage', segment: 'tomar-lista', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
            __WEBPACK_IMPORTED_MODULE_22__pages_materias_profesor_materias_profesor__["a" /* MateriasProfesorPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_cuestionarios_cuestionarios__["a" /* CuestionariosPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_alumnos_alumnos__["a" /* AlumnosPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_materia_materia__["a" /* MateriaPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_editar_perfil_editar_perfil__["a" /* EditarPerfilPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_descargar_archivo_descargar_archivo__["a" /* DescargarArchivoPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_notificacion_notificacion__["a" /* NotificacionPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_real_inicio_administrativo_real_inicio_administrativo__["a" /* RealInicioAdministrativoPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_asignar_materia_asignar_materia__["a" /* AsignarMateriaPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_encuestas_encuestas__["a" /* EncuestasPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_encuestas_alta_encuestas_alta__["a" /* EncuestasAltaPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_encuestas_editar_encuestas_editar__["a" /* EncuestasEditarPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_tomar_lista_tomar_lista__["a" /* TomarListaPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_respuesta_encuesta_respuesta_encuesta__["RespuestaEncuestaPage"],
            __WEBPACK_IMPORTED_MODULE_43__pages_materias_administrativo_materias_administrativo__["MateriasAdministrativoPage"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_audio__["a" /* NativeAudio */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = LoginPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]; //test
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        selector: 'page-home',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 566:
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

/***/ 592:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/respuesta-encuesta/respuesta-encuesta.js'\n    at Error (native)");

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/materias-administrativo/materias-administrativo.js'\n    at Error (native)");

/***/ }),

<<<<<<< HEAD
/***/ 69:
=======
/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GeochemComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CagarArchivoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__descargar_archivo_descargar_archivo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__asignar_materia_asignar_materia__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GeochemComponent = (function () {
    function GeochemComponent() {
    }
    GeochemComponent.prototype.ngOnInit = function () { };
    return GeochemComponent;
}());

GeochemComponent.muestras = [];
GeochemComponent.muestras2 = [];
var CagarArchivoPage = (function () {
    function CagarArchivoPage(navCtrl, modalCtrl, navParams, firebaseService, database, alertCtrl, nativeAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        //Atributos de descarga
        this.listaAlumnos = [];
        this.listaA = {};
        this.listaAlumnoItem = [];
        this.aula = "";
        this.listaProfesores = [];
        this.listaAdministrativos = [];
        //this.aula = this.navParams.get('aulaa');
        this.persona = this.navParams.get('persona');
        if (this.persona == "alumno") {
            this.alumnoLista$ = this.database.list('alumno-lista');
            this.alumnoListaItem$ = this.database.list('alumno-lista');
            this.alumnoListaItem$.subscribe(function (alumLista) {
                _this.listaAlumnoItem = alumLista;
            });
        }
        else if (this.persona == "profesor") {
            this.database.list('personas/profesores').subscribe(function (data) {
                _this.listaProfesores = data;
            });
        }
        else if (this.persona == "administrativo") {
            this.database.list('personas/administrativos').subscribe(function (data) {
                _this.listaAdministrativos = data;
            });
        }
        this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
        this.nativeAudio.play('1');
    }
    ;
    CagarArchivoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CagarArchivoPage');
    };
    CagarArchivoPage.prototype.leeArchivos = function (numarchivo, file) {
        if (this.persona == "alumno") {
            var alumno_1 = {};
            var lista_1 = [];
            var fr = new FileReader();
            var arrayFilas;
            var archivoNom;
            //--------------------- Lectura del archivo -------------------------//
            fr.onload = function (e) {
                var text = fr.result;
                var rows = text.split("\n");
                arrayFilas = [];
                //guardo todas las filas en un array separando cada atributo que tenga ;
                for (var t = 0; t < rows.length - 1; t++) {
                    if (rows[t].length != 0) {
                        //console.log(rows[t].split(";"));
                        arrayFilas.push(rows[t].split(";"));
                    }
                }
                //Tomo cada elemento del arrayFilas y lo transformo en un alumnno para guardalos en listaAlumno
                for (var index = 0; index < arrayFilas.length; index++) {
                    var elemento = arrayFilas[index];
                    console.log(elemento);
                    alumno_1.legajo = elemento[0].trim();
                    alumno_1.nombre = elemento[1].trim();
                    alumno_1.turno = elemento[2].trim();
                    alumno_1.mail = elemento[3].trim();
                    alumno_1.password = elemento[0].trim();
                    alumno_1.contPresentes = 0;
                    lista_1.push(alumno_1);
                    alumno_1 = {};
                }
                if (numarchivo == 0) {
                    GeochemComponent.muestras = arrayFilas.slice();
                }
                else if (numarchivo == 1) {
                    GeochemComponent.muestras2 = arrayFilas.slice();
                }
            };
            fr.readAsText(file, 'ISO-8859-4');
            this.listaAlumnos = lista_1;
            //console.log(this.listaAlumnos);
            //console.log(file.name);
            //console.log(file.size);
            this.nombreArchivo = file.name;
            this.sizeArchivo = file.size / 1000 + " Kb";
        }
        else if (this.persona == "profesor") {
        }
        else if (this.persona == "administrativo") {
        }
    };
    CagarArchivoPage.prototype.onFileSelect = function (input) {
        var files = input.files;
        var len = files.length;
        for (var b = 0; b < len; b++) {
            this.leeArchivos(b, files[b]);
        }
    };
    CagarArchivoPage.prototype.cargarLista = function () {
        var _this = this;
        this.banderita = false;
        if (this.persona == "alumno") {
            var rows = this.nombreArchivo.split("-");
            console.log(rows);
            this.listaA.aula = rows[1];
            this.aula = rows[1];
            this.listaA.alumnos = this.listaAlumnos;
            this.listaA.materia = rows[0];
            var cont = void 0;
            cont = this.listaAlumnoItem.length;
            for (var o = 0; o < this.listaAlumnoItem.length; o++) {
                var element = this.listaAlumnoItem[o];
                if (element.materia == this.listaA.materia) {
                    var listaAux = [];
                    listaAux = this.listaAlumnoItem;
                    listaAux[o].alumnos = this.listaA.alumnos;
                    this.firebaseService.agregarLista(listaAux);
                    this.banderita = true;
                    break;
                }
            }
            if (this.banderita == false) {
                this.firebaseService.agregarListaDENAZI(this.listaA, cont);
            }
            console.log(this.aula);
            if (this.aula == "4A") {
                console.log("entro a A");
                this.listaAlumnos.forEach(function (alumno) {
                    _this.firebaseService.agregarListaA(alumno);
                });
            }
            else {
                console.log("entro a B");
                this.listaAlumnos.forEach(function (alumno) {
                    _this.firebaseService.agregarListaB(alumno);
                });
            }
            //    this.presentAlert("Guardar Lista","Se guado correcetamente la lista");
            var alert = this.alertCtrl.create({
                title: "Guardar Lista",
                subTitle: "La lista se guardó correctamente",
                cssClass: "miClaseAlert",
                buttons: [{ text: 'Aceptar',
                        handler: function () {
                            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__asignar_materia_asignar_materia__["a" /* AsignarMateriaPage */], { materia: _this.listaA.materia, aula: _this.listaA.aula });
                            profileModal.present();
                        }
                    }
                ]
            });
            alert.present();
        }
        else if (this.persona == "profesor") {
        }
        else if (this.persona == "administrativo") {
        }
    };
    CagarArchivoPage.prototype.descargarArchivo = function () {
        var _this = this;
        var miAula;
        this.listaAlumnoItem.forEach(function (aula) {
            console.log(aula);
            if (aula.aula == _this.aula) {
                miAula = aula.aula;
            }
        });
        if (miAula == this.aula) {
            //alert("Ir a descarga");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__descargar_archivo_descargar_archivo__["a" /* DescargarArchivoPage */], { aulaa: this.aula });
        }
        else {
            //alert("No hya nada que descargar");
            // this.presentAlert("Sin alumnos","No hay nada que descargar");
            var alert = this.alertCtrl.create({
                title: "Sin Alumnos",
                subTitle: "No hay nada que descargar",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert.present();
        }
    };
    CagarArchivoPage.prototype.presentAlert = function (titulo, subtitulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            cssClass: "miClaseAlert",
            buttons: ['Aceptar']
        });
        alert.present();
    };
    return CagarArchivoPage;
}());
CagarArchivoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cagar-archivo',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/cagar-archivo/cagar-archivo.html"*/'<!--\n  Generated template for the CagarArchivoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Cargar Archivo de {{aula}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/nube.jpg\')" class="fondo">\n\n  <ion-list>\n    <ion-item>\n      <!--<label>{{label}}</label>-->\n      <!--(change)="fileUpload($event)"-->\n      <!--<input type=\'file\' name=\'userFile\' id=\'file\' (change)="onFileSelect($event.target)" style="display: none" multiple> #fileInp-->\n      <input type="file" (change)="onFileSelect($event.target)" id="file-input"  style="opacity: 0">\n      <ion-icon name="cloud-done">Selecionar archivo .csv</ion-icon>\n      <!--<button ion-button (click)="onClick()">Cargar</button>-->\n    </ion-item>\n\n    <ion-item>\n      <p *ngIf="nombreArchivo">Nombre: {{nombreArchivo}}</p>\n      <p *ngIf="sizeArchivo">Tamaño: {{sizeArchivo}}</p>\n    </ion-item>\n  </ion-list>\n  \n  <div>\n    <button center ion-button round full large *ngIf="nombreArchivo!=null" (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n      <ion-icon name="cloud-done"></ion-icon> Subir\n    </button>\n    <button center ion-button round full large (click)="descargarArchivo()" class="animated flipInX miBoton miButton"> \n      <ion-icon name="cloud-done"></ion-icon> Descargar\n    </button>\n  </div>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/cagar-archivo/cagar-archivo.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */]) === "function" && _g || Object])
], CagarArchivoPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=cagar-archivo.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materia_materia__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(23);
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
    function MateriasPage(navCtrl, navParams, alertCtrl, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.db = db;
        //HAY QUE CAMBIARLO POR ALGO REAL
        this.nombreUsuario = "Mauro";
        //harcodeado para mostrar, despues se debe eliminar y tomarar las aulamateriass de firebase
        this.listaMateriasAlumno = [
            {
                "materia": "Laboratorio 4"
            },
            {
                "materia": "Practica profesional"
            }
        ];
        this.aula = this.navParams.get('aulaa');
        this.curso = localStorage.getItem("curso");
        console.log(this.curso);
        //PARA CARGAR EN FIREBASE FALTAS
        /*
              this.db.list('/notificacionFalta').push({
                nombre: this.nombreUsuario,
                cantidadFaltas: 4,
                curso: this.aula
              }).then( () => {
          
              })
              .catch( () => {
              });
            
        */
        this.db.list('/notificacionFalta').
            subscribe(function (data) {
            _this.datosfaltas = data;
            //console.log(this.datos);
            for (var i = 0; i < _this.datosfaltas.length; i++) {
                if (_this.nombreUsuario == _this.datosfaltas[i].nombre) {
                    var alert_1 = _this.alertCtrl.create({
                        title: "Aviso de faltas",
                        cssClass: 'miClaseDanger',
                        subTitle: _this.nombreUsuario + " tiene 4 faltas. A una de quedar LIBRE!",
                        buttons: ['Aceptar']
                    });
                    alert_1.present();
                }
            }
        });
    }
    MateriasPage.prototype.ionViewWillLeave = function () {
        // alert("salio");
        this.variableGlobal.unsubscribe();
    };
    MateriasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.variableGlobal = this.db.list('/notificacionesProfesor').
            subscribe(function (data) {
            _this.datos = data;
            //console.log(this.datos);
            if (_this.curso == "4A") {
                for (var i = 0; i < _this.datos.length; i++) {
                    if (_this.curso == _this.datos[i].curso) {
                        var alert_2 = _this.alertCtrl.create({
                            title: _this.datos[i].titulo,
                            subTitle: 'Alumnos de ' + _this.curso + ' :' + _this.datos[i].mensaje,
                            cssClass: "miClaseAlert",
                            buttons: ['Aceptar']
                        });
                        alert_2.present();
                    }
                }
            }
            if (_this.curso == "4B") {
                for (var i = 0; i < _this.datos.length; i++) {
                    if (_this.curso == _this.datos[i].curso) {
                        var alert_3 = _this.alertCtrl.create({
                            title: _this.datos[i].titulo,
                            subTitle: 'Alumnos de ' + _this.curso + ' :' + _this.datos[i].mensaje,
                            cssClass: "miClaseAlert",
                            buttons: ['Aceptar']
                        });
                        alert_3.present();
                    }
                }
            }
        });
        /*
        for(let i=0;i<this.datos.length;i++){
        let alert = this.alertCtrl.create({
          title: this.datos[i].titulo,
          subTitle: 'Alumnos de '+this.aula+' :'+this.datos[i].mensaje,
        buttons: ['OK']
      });
       alert.present();
    }
  
  */
    };
    MateriasPage.prototype.RedireccionMateria = function (materia) {
        switch (materia) {
            case "Programacion 3":
                alert("Se redireccionara a la materia: Programacion 3 ");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materia_materia__["a" /* MateriaPage */], { aulaaa: this.aula });
                break;
            case "Laboratorio 3":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materia_materia__["a" /* MateriaPage */], { materiaa: materia, aulaaa: this.aula });
                break;
            case "Base de datos 1":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materia_materia__["a" /* MateriaPage */], { materiaa: materia, aulaaa: this.aula });
                break;
            case "Practica profesional":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materia_materia__["a" /* MateriaPage */], { materiaa: materia, aulaaa: this.aula });
                break;
            case "Laboratorio 4":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materia_materia__["a" /* MateriaPage */], { materiaa: materia, aulaaa: this.aula });
                break;
        }
    };
    return MateriasPage;
}());
MateriasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-materias',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/materias/materias.html"*/'<!--\n  Generated template for the MateriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Materias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/halloween-Materias.png\')" class="fondo">\n  \n      <div *ngFor="let lista of listaMateriasAlumno; let i = index"> \n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(lista.materia)">{{ lista.materia }}</button> \n      </div>\n  \n  </ion-content>\n  \n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/materias/materias.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], MateriasPage);

//# sourceMappingURL=materias.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descargar_archivo_descargar_archivo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__respuesta_encuesta_respuesta_encuesta__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__respuesta_encuesta_respuesta_encuesta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__respuesta_encuesta_respuesta_encuesta__);
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
 * Generated class for the MateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MateriaPage = (function () {
    function MateriaPage(navCtrl, navParams, barcodeScanner, db, alertCtrl, nativeAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.codigoScaneado = null;
        this.aulaMateria = {};
        this.perfil = '';
        this.listaAlumnos = [];
        this.materia = this.navParams.get('materiaa');
        //this.curso = this.navParams.get('aulaaa');
        this.curso = localStorage.getItem("curso");
        this.aulaParaQrProfesor = this.navParams.get('aulaa');
        this.perfil = localStorage.getItem("Perfil");
        //  console.log("aulaaaaa: "+this.aulaParaQrProfesor);
        console.log("perfik: " + this.perfil);
        //CARGA DATOS EN FIREBASE
        /*
        this.db.list('/codigoQrMaterias').push({
          codigoQr: "4ABaseDeDatos",
          curso: "4° A",
          materia: "Base de datos 1",
          profesor: "Diego Vazquez",
          primerParcial:"4/8/2017",
          segundoParcial: "7/11/2017",
          final: "4/12/2017"
        //  alumnos:[{nombre:"Juan"},{nombre:"Maria"},{nombre:"Rodrigo"}]
        
        }).then( () => {
          
        })
        .catch( () => {
        });
        */
        this.db.list('/codigoQrMaterias').
            subscribe(function (data) {
            _this.datos = data;
        });
        /*
            this.lista(this.aula).subscribe(dato => {
              //console.log(dato.values().next().value.alumnos);
              //lista de alumnos en el aula
              this.listaAlumnos = dato.values().next().value.alumnos;
              console.log(this.listaAlumnos);
            });
        */
        this.nativeAudio.preloadComplex('2', 'assets/sonidos/2.mp3', 1, 1, 0);
        this.nativeAudio.play('2');
    }
    MateriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MateriaPage');
    };
    MateriaPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.codigoScaneado = null;
            _this.codigoScaneado = barcodeData.text;
            if (_this.perfil == "Profesor") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__descargar_archivo_descargar_archivo__["a" /* DescargarArchivoPage */], { aulaa: _this.codigoScaneado });
            }
            //if(this.perfil=='')
            //{
            for (var i = 0; i < _this.datos.length; i++) {
                if (_this.datos[i].codigoQr == _this.codigoScaneado) {
                    if (_this.materia == _this.datos[i].materia && _this.curso == _this.datos[i].curso) {
                        _this.aulaMateria.curso = _this.datos[i].curso;
                        _this.aulaMateria.profesor = _this.datos[i].profesor;
                        _this.aulaMateria.materia = _this.datos[i].materia;
                        _this.aulaMateria.primerParcial = _this.datos[i].primerParcial;
                        _this.aulaMateria.segundoParcial = _this.datos[i].segundoParcial;
                        _this.aulaMateria.final = _this.datos[i].final;
                        //MOSTRAR LISTA DE ALUMNOS
                        /* this.aulaMateria.alumnos = [];
                         for(let j=0;j<this.datos[i].alumnos.length;j++)
                         {
                           this.aulaMateria.alumnos.push(this.datos[i].alumnos[j]);
                         }
                     */
                        return;
                    }
                    else {
                        _this.codigoScaneado = null;
                        var alert = _this.alertCtrl.create({
                            title: "Error!",
                            subTitle: "El codigo escaneado no pertenece al aula y/o materia",
                            cssClass: "miClaseDanger",
                            buttons: ['Aceptar']
                        });
                        alert.present();
                        return;
                    }
                }
            }
            //  }//aca cerrar if de perfil alumnoi
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    MateriaPage.prototype.lista = function (aula) {
        return this.db.list('/alumno-lista/', {
            query: {
                orderByChild: "aula",
                equalTo: aula
            }
        });
    };
    MateriaPage.prototype.encuestas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__respuesta_encuesta_respuesta_encuesta__["RespuestaEncuestaPage"]);
    };
    return MateriaPage;
}());
MateriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-materia',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/materia/materia.html"*/'<!--\n  Generated template for the MateriaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Materia: {{materia}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n\n\n\n  \n  <button ion-button round full large *ngIf="codigoScaneado==null"  (click)="scanCode()" class="animated flipInX miBoton miButton"> \n    <ion-icon name="arrow-round-back"></ion-icon> Escaner QR\n  </button>\n\n    \n  <button ion-button round full large *ngIf="codigoScaneado==null"  (click)="encuestas()" class="animated flipInX miBoton miButton"> \n    <ion-icon name="arrow-round-back"></ion-icon> Encuestas\n  </button>\n  \n  <ion-list *ngIf="codigoScaneado!=null" >\n  <!-- <div *ngIf="perfil==\'\'" > -->\n<ion-item class="animated flipInX miItem">\n<ion-label class="miLabel" floating>División</ion-label>\n<ion-input type="text" [(ngModel)]="aulaMateria.curso" disabled="true"></ion-input> \n</ion-item>\n          \n<ion-item class="animated flipInY miItem">\n<ion-label class="miLabel" floating>Materia</ion-label>\n<ion-input type="text" [(ngModel)]="aulaMateria.profesor" disabled="true"></ion-input>\n</ion-item>\n\n\n  <ion-item class="animated flipInY miItem">\n    <ion-label class="miLabel" floating>Primer Parcial</ion-label>\n    <ion-input type="text" [(ngModel)]="aulaMateria.primerParcial" disabled="true"></ion-input>\n    </ion-item>\n\n    <ion-item class="animated flipInY miItem">\n      <ion-label class="miLabel" floating>Segundo Parcial</ion-label>\n      <ion-input type="text" [(ngModel)]="aulaMateria.segundoParcial" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item class="animated flipInY miItem">\n        <ion-label class="miLabel" floating>Final</ion-label>\n        <ion-input type="text" [(ngModel)]="aulaMateria.final" disabled="true"></ion-input>\n        </ion-item>\n\n      <!--</div>-->\n\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/materia/materia.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */]) === "function" && _f || Object])
], MateriaPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 84:
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__descargar_archivo_descargar_archivo__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__asignar_materia_asignar_materia__ = __webpack_require__(145);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__encuestas_alta_encuestas_alta__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__encuestas_editar_encuestas_editar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(36);
>>>>>>> fc2f67c2422e0ecd2e5e991a81ce4b276dc72f57
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
 * Generated class for the EncuestasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EncuestasPage = (function () {
    function EncuestasPage(navCtrl, navParams, fireService, db, alertCtrl, nativeAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.encuestas = [];
        this.db.list('/encuestas').
            subscribe(function (data) {
            _this.encuestas = data;
            // console.log(this.encuestas);
        });
        this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
        this.nativeAudio.play('1');
        //console.log(this.encuestas);
    }
    EncuestasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncuestasPage');
    };
    EncuestasPage.prototype.RedireccionCrearCuestionario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__encuestas_alta_encuestas_alta__["a" /* EncuestasAltaPage */]);
    };
    EncuestasPage.prototype.eliminarEncuesta = function (encuesta) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atencion!!!',
            cssClass: "miClaseAlert",
            subTitle: 'Desea eliminar la encuesta?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('se canceloooo');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.fireService.eliminarEncuesta(encuesta);
                    }
                }
            ]
        });
        alert.present();
    };
    EncuestasPage.prototype.modificarEncuesta = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__encuestas_editar_encuestas_editar__["a" /* EncuestasEditarPage */], { encuesta: e });
    };
    return EncuestasPage;
}());
EncuestasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-encuestas',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/encuestas/encuestas.html"*/'<!--\n  Generated template for the EncuestasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Encuestas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenCuestionarios.jpg\')" class="fondo">\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionCrearCuestionario()">Crear cuestionario</button> \n         <br>\n          \n          <div *ngFor="let e of encuestas; let i = index">\n     \n          <ion-list >\n              <div>\n          <ion-item class="animated flipInX miItem">\n              <ion-label class="miLabel" style="color: orange" floating>Nombre:</ion-label>\n              <ion-input type="text" [(ngModel)]="e.nombre" disabled="true"></ion-input> \n              <button style="color: yellow" ion-button clear item-end icon-only (click)="modificarEncuesta(e)" >\n                  <ion-icon style="width:50px" name="md-create"></ion-icon>\n                </button>\n                <button style="color: red" ion-button clear item-end icon-only (click)="eliminarEncuesta(e)">\n                  <ion-icon style="width:50px" name="trash"></ion-icon>\n                </button>\n              </ion-item>\n            </div>\n                 \n              <ion-item class="animated flipInY miItem">\n              <ion-label class="miLabel" style="color: orange"  floating>Pregunta:</ion-label>\n              <ion-input type="text" [(ngModel)]="e.pregunta" disabled="true"></ion-input>\n              </ion-item>\n              \n              \n                <ion-item class="animated flipInY miItem">\n                  <ion-label class="miLabel" style="color: orange"  floating>La encuesta finaliza en el horario:</ion-label>\n                  <ion-input type="text" [(ngModel)]="e.horaFinalizacion" disabled="true"></ion-input>\n                  </ion-item>\n\n\n<!--\n                  <ion-item class="animated flipInX miItem">\n                      <ion-label class="miLabel" style="color: orange"  floating>Fecha y hora de inicio (opcional)</ion-label>\n                      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="e.fechaInicio" disabled="true"></ion-datetime>\n                    </ion-item>\n              \n                    <ion-item class="animated flipInX miItem">\n                        <ion-label class="miLabel" style="color: orange"  floating>Fecha y hora de finalización (opcional)</ion-label>\n                        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="e.fechaFinalizacion" disabled="true"></ion-datetime>\n                      </ion-item>\n                    -->\n\n\n                  <ion-item *ngIf=\'e.formato == "Botones"\' class="animated flipInY miItem">\n                    <ion-list  >\n                        <button  class="botones" style="color: rgb(85, 158, 218)" ion-button clear item-end >\n                            Presione para votar: {{e.respuesta1}}\n                           </button>\n                           <br>\n                           <button class="botones" style="color: rgb(85, 158, 218)" ion-button clear item-end >\n                              Presione para votar: {{e.respuesta2}}\n                             </button>\n\n\n                      \n                        </ion-list>    \n                      </ion-item>\n         \n                   \n                   <!-- \n                      <ion-list radio-group [(ngModel)]="respuesta" *ngIf=\'e.formato == "Radio button"\'>\n                          \n                            <ion-label style="color : white">{{e.respuesta1}}</ion-label>\n                            <ion-radio style="color : rgb(233, 67, 67)" value="e.respuesta1" ></ion-radio>\n\n                            <ion-label style="color : white">{{e.respuesta2}}</ion-label>\n                            <ion-radio style="color : rgb(233, 67, 67)" value="e.respuesta2" ></ion-radio>\n                          \n                          </ion-list>\n                        -->\n\n                  \n\n                                <ion-list  *ngIf=\'e.formato == "Radio botones"\' radio-group [(ngModel)]="respuesta">\n                                    <ion-item class="animated flipInY miItem">\n                                      <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta1}}</ion-label>\n                                      <ion-radio  value="e.respuesta1" ></ion-radio>\n                                    </ion-item>\n                                    <ion-item class="animated flipInY miItem">\n                                        <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta2}}</ion-label>\n                                        <ion-radio  value="e.respuesta2" ></ion-radio>\n                                      </ion-item>\n                                     \n\n                                  </ion-list>\n\n                                  <ion-list  *ngIf=\'e.formato == "Checkbox"\' radio-group [(ngModel)]="respuesta">\n                                      <ion-item class="animated flipInY miItem">\n                                          <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta1}}</ion-label>\n                                          <ion-checkbox  style="color : rgb(85, 158, 218)" [(ngModel)]="e.respuesta1"></ion-checkbox>\n                                      </ion-item>\n                                      <ion-item class="animated flipInY miItem">\n                                          <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta2}}</ion-label>\n                                          <ion-checkbox  style="color : rgb(85, 158, 218)" [(ngModel)]="e.respuesta2" ></ion-checkbox>\n                                        </ion-item>\n                                       \n  \n                                    </ion-list>\n\n                                    <ion-list  *ngIf=\'e.formato == "Selección de opciones"\'  >\n                                      <ion-item class="animated flipInY miItem" >\n                                      <select style="color : rgb(85, 158, 218); width:150px;" [(ngModel)]="respuesta"  class="animated flipInY miItem">\n    \n                                        <option >{{e.respuesta1}} </option>\n                                        <option >{{e.respuesta2}} </option>\n                                      \n                                      </select>\n                                    </ion-item>\n                                       \n  \n                                    </ion-list>\n\n                                  \n                                    \n\n\n                                  \n\n                            \n                        \n                      \n              \n                </ion-list> \n\n          </div>\n\n\n\n        </ion-content>'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/encuestas/encuestas.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */]) === "function" && _f || Object])
], EncuestasPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=encuestas.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = LoginPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]; //test
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 693:
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
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ButtonRenderComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ButtonRenderComponent.prototype, "rowData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ButtonRenderComponent.prototype, "save", void 0);
ButtonRenderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n  <button  ion-button color='secondary' (click)=\"onClick()\">Asignar Materia</button>",
    })
], ButtonRenderComponent);

//# sourceMappingURL=button-renderer.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descargar_archivo_descargar_archivo__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__respuesta_encuesta_respuesta_encuesta__ = __webpack_require__(257);
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
 * Generated class for the MateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MateriaPage = (function () {
    function MateriaPage(navCtrl, navParams, barcodeScanner, db, alertCtrl, nativeAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.codigoScaneado = null;
        this.aulaMateria = {};
        this.perfil = '';
        this.listaAlumnos = [];
        this.materia = this.navParams.get('materiaa');
        //this.curso = this.navParams.get('aulaaa');
        this.curso = localStorage.getItem("curso");
        this.aulaParaQrProfesor = this.navParams.get('aulaa');
        this.perfil = localStorage.getItem("Perfil");
        //  console.log("aulaaaaa: "+this.aulaParaQrProfesor);
        console.log("perfik: " + this.perfil);
        //CARGA DATOS EN FIREBASE
        /*
        this.db.list('/codigoQrMaterias').push({
          codigoQr: "4ABaseDeDatos",
          curso: "4° A",
          materia: "Base de datos 1",
          profesor: "Diego Vazquez",
          primerParcial:"4/8/2017",
          segundoParcial: "7/11/2017",
          final: "4/12/2017"
        //  alumnos:[{nombre:"Juan"},{nombre:"Maria"},{nombre:"Rodrigo"}]
        
        }).then( () => {
          
        })
        .catch( () => {
        });
        */
        this.db.list('/codigoQrMaterias').
            subscribe(function (data) {
            _this.datos = data;
        });
        /*
            this.lista(this.aula).subscribe(dato => {
              //console.log(dato.values().next().value.alumnos);
              //lista de alumnos en el aula
              this.listaAlumnos = dato.values().next().value.alumnos;
              console.log(this.listaAlumnos);
            });
        */
        this.nativeAudio.preloadComplex('2', 'assets/sonidos/2.mp3', 1, 1, 0);
        this.nativeAudio.play('2');
    }
    MateriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MateriaPage');
    };
    MateriaPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.codigoScaneado = null;
            _this.codigoScaneado = barcodeData.text;
            if (_this.perfil == "Profesor") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__descargar_archivo_descargar_archivo__["a" /* DescargarArchivoPage */], { aulaa: _this.codigoScaneado });
            }
            //if(this.perfil=='')
            //{
            for (var i = 0; i < _this.datos.length; i++) {
                if (_this.datos[i].codigoQr == _this.codigoScaneado) {
                    if (_this.materia == _this.datos[i].materia && _this.curso == _this.datos[i].curso) {
                        _this.aulaMateria.curso = _this.datos[i].curso;
                        _this.aulaMateria.profesor = _this.datos[i].profesor;
                        _this.aulaMateria.materia = _this.datos[i].materia;
                        _this.aulaMateria.primerParcial = _this.datos[i].primerParcial;
                        _this.aulaMateria.segundoParcial = _this.datos[i].segundoParcial;
                        _this.aulaMateria.final = _this.datos[i].final;
                        //MOSTRAR LISTA DE ALUMNOS
                        /* this.aulaMateria.alumnos = [];
                         for(let j=0;j<this.datos[i].alumnos.length;j++)
                         {
                           this.aulaMateria.alumnos.push(this.datos[i].alumnos[j]);
                         }
                     */
                        return;
                    }
                    else {
                        _this.codigoScaneado = null;
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error!",
                            subTitle: "El codigo escaneado no pertenece al aula y/o materia",
                            cssClass: "miClaseDanger",
                            buttons: ['Aceptar']
                        });
                        alert_1.present();
                        return;
                    }
                }
            }
            //  }//aca cerrar if de perfil alumnoi
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    MateriaPage.prototype.lista = function (aula) {
        return this.db.list('/alumno-lista/', {
            query: {
                orderByChild: "aula",
                equalTo: aula
            }
        });
    };
    MateriaPage.prototype.encuestas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__respuesta_encuesta_respuesta_encuesta__["a" /* RespuestaEncuestaPage */]);
    };
    return MateriaPage;
}());
MateriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-materia',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\materia\materia.html"*/'<!--\n\n  Generated template for the MateriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Materia: {{materia}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n\n\n\n\n\n\n\n\n  \n\n  <button ion-button round full large *ngIf="codigoScaneado==null"  (click)="scanCode()" class="animated flipInX miBoton miButton"> \n\n    <ion-icon name="arrow-round-back"></ion-icon> Escaner QR\n\n  </button>\n\n\n\n    \n\n  <button ion-button round full large *ngIf="codigoScaneado==null"  (click)="encuestas()" class="animated flipInX miBoton miButton"> \n\n    <ion-icon name="arrow-round-back"></ion-icon> Encuestas\n\n  </button>\n\n  \n\n  <ion-list *ngIf="codigoScaneado!=null" >\n\n  <!-- <div *ngIf="perfil==\'\'" > -->\n\n<ion-item class="animated flipInX miItem">\n\n<ion-label class="miLabel" floating>División</ion-label>\n\n<ion-input type="text" [(ngModel)]="aulaMateria.curso" disabled="true"></ion-input> \n\n</ion-item>\n\n          \n\n<ion-item class="animated flipInY miItem">\n\n<ion-label class="miLabel" floating>Materia</ion-label>\n\n<ion-input type="text" [(ngModel)]="aulaMateria.profesor" disabled="true"></ion-input>\n\n</ion-item>\n\n\n\n\n\n  <ion-item class="animated flipInY miItem">\n\n    <ion-label class="miLabel" floating>Primer Parcial</ion-label>\n\n    <ion-input type="text" [(ngModel)]="aulaMateria.primerParcial" disabled="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Segundo Parcial</ion-label>\n\n      <ion-input type="text" [(ngModel)]="aulaMateria.segundoParcial" disabled="true"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="animated flipInY miItem">\n\n        <ion-label class="miLabel" floating>Final</ion-label>\n\n        <ion-input type="text" [(ngModel)]="aulaMateria.final" disabled="true"></ion-input>\n\n        </ion-item>\n\n\n\n      <!--</div>-->\n\n\n\n\n\n</ion-list>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\materia\materia.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */]])
], MateriaPage);

//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__encuestas_alta_encuestas_alta__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__encuestas_editar_encuestas_editar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(34);
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
 * Generated class for the EncuestasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EncuestasPage = (function () {
    function EncuestasPage(navCtrl, navParams, fireService, db, alertCtrl, nativeAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.encuestas = [];
        this.db.list('/encuestas').
            subscribe(function (data) {
            _this.encuestas = data;
            // console.log(this.encuestas);
        });
        this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
        this.nativeAudio.play('1');
        //console.log(this.encuestas);
    }
    EncuestasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncuestasPage');
    };
    EncuestasPage.prototype.RedireccionCrearCuestionario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__encuestas_alta_encuestas_alta__["a" /* EncuestasAltaPage */]);
    };
    EncuestasPage.prototype.eliminarEncuesta = function (encuesta) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atencion!!!',
            cssClass: "miClaseAlert",
            subTitle: 'Desea eliminar la encuesta?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('se canceloooo');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.fireService.eliminarEncuesta(encuesta);
                    }
                }
            ]
        });
        alert.present();
    };
    EncuestasPage.prototype.modificarEncuesta = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__encuestas_editar_encuestas_editar__["a" /* EncuestasEditarPage */], { encuesta: e });
    };
    return EncuestasPage;
}());
EncuestasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-encuestas',template:/*ion-inline-start:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\encuestas\encuestas.html"*/'<!--\n\n  Generated template for the EncuestasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Encuestas</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenCuestionarios.jpg\')" class="fondo">\n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionCrearCuestionario()">Crear cuestionario</button> \n\n         <br>\n\n          \n\n          <div *ngFor="let e of encuestas; let i = index">\n\n     \n\n          <ion-list >\n\n              <div>\n\n          <ion-item class="animated flipInX miItem">\n\n              <ion-label class="miLabel" style="color: orange" floating>Nombre:</ion-label>\n\n              <ion-input type="text" [(ngModel)]="e.nombre" disabled="true"></ion-input> \n\n              <button style="color: yellow" ion-button clear item-end icon-only (click)="modificarEncuesta(e)" >\n\n                  <ion-icon style="width:50px" name="md-create"></ion-icon>\n\n                </button>\n\n                <button style="color: red" ion-button clear item-end icon-only (click)="eliminarEncuesta(e)">\n\n                  <ion-icon style="width:50px" name="trash"></ion-icon>\n\n                </button>\n\n              </ion-item>\n\n            </div>\n\n                 \n\n              <ion-item class="animated flipInY miItem">\n\n              <ion-label class="miLabel" style="color: orange"  floating>Pregunta:</ion-label>\n\n              <ion-input type="text" [(ngModel)]="e.pregunta" disabled="true"></ion-input>\n\n              </ion-item>\n\n              \n\n              \n\n                <ion-item class="animated flipInY miItem">\n\n                  <ion-label class="miLabel" style="color: orange"  floating>La encuesta finaliza en el horario:</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="e.horaFinalizacion" disabled="true"></ion-input>\n\n                  </ion-item>\n\n\n\n\n\n<!--\n\n                  <ion-item class="animated flipInX miItem">\n\n                      <ion-label class="miLabel" style="color: orange"  floating>Fecha y hora de inicio (opcional)</ion-label>\n\n                      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="e.fechaInicio" disabled="true"></ion-datetime>\n\n                    </ion-item>\n\n              \n\n                    <ion-item class="animated flipInX miItem">\n\n                        <ion-label class="miLabel" style="color: orange"  floating>Fecha y hora de finalización (opcional)</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="e.fechaFinalizacion" disabled="true"></ion-datetime>\n\n                      </ion-item>\n\n                    -->\n\n\n\n\n\n                  <ion-item *ngIf=\'e.formato == "Botones"\' class="animated flipInY miItem">\n\n                    <ion-list  >\n\n                        <button  class="botones" style="color: rgb(85, 158, 218)" ion-button clear item-end >\n\n                            Presione para votar: {{e.respuesta1}}\n\n                           </button>\n\n                           <br>\n\n                           <button class="botones" style="color: rgb(85, 158, 218)" ion-button clear item-end >\n\n                              Presione para votar: {{e.respuesta2}}\n\n                             </button>\n\n\n\n\n\n                      \n\n                        </ion-list>    \n\n                      </ion-item>\n\n         \n\n                   \n\n                   <!-- \n\n                      <ion-list radio-group [(ngModel)]="respuesta" *ngIf=\'e.formato == "Radio button"\'>\n\n                          \n\n                            <ion-label style="color : white">{{e.respuesta1}}</ion-label>\n\n                            <ion-radio style="color : rgb(233, 67, 67)" value="e.respuesta1" ></ion-radio>\n\n\n\n                            <ion-label style="color : white">{{e.respuesta2}}</ion-label>\n\n                            <ion-radio style="color : rgb(233, 67, 67)" value="e.respuesta2" ></ion-radio>\n\n                          \n\n                          </ion-list>\n\n                        -->\n\n\n\n                  \n\n\n\n                                <ion-list  *ngIf=\'e.formato == "Radio botones"\' radio-group [(ngModel)]="respuesta">\n\n                                    <ion-item class="animated flipInY miItem">\n\n                                      <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta1}}</ion-label>\n\n                                      <ion-radio  value="e.respuesta1" ></ion-radio>\n\n                                    </ion-item>\n\n                                    <ion-item class="animated flipInY miItem">\n\n                                        <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta2}}</ion-label>\n\n                                        <ion-radio  value="e.respuesta2" ></ion-radio>\n\n                                      </ion-item>\n\n                                     \n\n\n\n                                  </ion-list>\n\n\n\n                                  <ion-list  *ngIf=\'e.formato == "Checkbox"\' radio-group [(ngModel)]="respuesta">\n\n                                      <ion-item class="animated flipInY miItem">\n\n                                          <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta1}}</ion-label>\n\n                                          <ion-checkbox  style="color : rgb(85, 158, 218)" [(ngModel)]="e.respuesta1"></ion-checkbox>\n\n                                      </ion-item>\n\n                                      <ion-item class="animated flipInY miItem">\n\n                                          <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta2}}</ion-label>\n\n                                          <ion-checkbox  style="color : rgb(85, 158, 218)" [(ngModel)]="e.respuesta2" ></ion-checkbox>\n\n                                        </ion-item>\n\n                                       \n\n  \n\n                                    </ion-list>\n\n\n\n                                    <ion-list  *ngIf=\'e.formato == "Selección de opciones"\'  >\n\n                                      <ion-item class="animated flipInY miItem" >\n\n                                      <select style="color : rgb(85, 158, 218); width:150px;" [(ngModel)]="respuesta"  class="animated flipInY miItem">\n\n    \n\n                                        <option >{{e.respuesta1}} </option>\n\n                                        <option >{{e.respuesta2}} </option>\n\n                                      \n\n                                      </select>\n\n                                    </ion-item>\n\n                                       \n\n  \n\n                                    </ion-list>\n\n\n\n                                  \n\n                                    \n\n\n\n\n\n                                  \n\n\n\n                            \n\n                        \n\n                      \n\n              \n\n                </ion-list> \n\n\n\n          </div>\n\n\n\n\n\n\n\n        </ion-content>'/*ion-inline-end:"C:\Users\Mauro\Desktop\Mauro\tp\TP_PPS_2C_2017\src\pages\encuestas\encuestas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */]])
], EncuestasPage);

//# sourceMappingURL=encuestas.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map