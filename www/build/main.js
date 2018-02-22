webpackJsonp([32],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materia_materia__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qr_encuestas_qr_encuestas__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the MateriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MateriasPage = (function () {
    function MateriasPage(navCtrl, barcode, navParams, alertCtrl, db, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.barcode = barcode;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.listadoAlumnos = [];
        this.listadoEncuestas = [];
        //harcodeado para mostrar, despues se debe eliminar y tomarar las aulamateriass de firebase
        this.listaMateriasAlumno = [
            {
                "materia": "PPS"
            }
        ];
        this.aula = this.navParams.get('aulaa');
        this.curso = localStorage.getItem("curso");
        console.log(this.curso);
        this.db.list('/alumno-lista').subscribe(function (data) {
            _this.listadoAlumnos = data;
        });
        this.db.list('/notificacionFalta').
            subscribe(function (data) {
            _this.datosfaltas = data;
            console.log(_this.datosfaltas);
            for (var i = 0; i < _this.datosfaltas.length; i++) {
                if (localStorage.getItem("mail") == _this.datosfaltas[i].mail) {
                    var toast = _this.toastCtrl.create({
                        message: 'El alumno' + ' ' + _this.datosfaltas[i].alumno + ' ' + 'tiene' + ' ' + _this.datosfaltas[i].cantidadFaltas + ' ' + 'faltas!!!',
                        duration: 4000,
                        position: 'top'
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
            }
        });
    }
    MateriasPage.prototype.ionViewWillLeave = function () {
        // alert("salio");
        this.variableGlobal.unsubscribe();
    };
    MateriasPage.prototype.escanear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var flag, j, element2, textoReal, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.barcode.scan().then(function (barC) {
                            _this.texto = barC.text;
                            _this.formato = barC.format;
                            _this.cancelado = barC.cancelled;
                        })];
                    case 1:
                        _a.sent();
                        flag = false;
                        if (this.texto.startsWith("Encuesta")) {
                            for (j = 0; j < this.listadoEncuestas.length; j++) {
                                element2 = this.listadoEncuestas[j];
                                if (this.texto == element2.codigo) {
                                    textoReal = this.texto.slice(8);
                                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__qr_encuestas_qr_encuestas__["a" /* QrEncuestasPage */], { nombreEncuesta: textoReal });
                                    flag = true;
                                    break;
                                }
                                /*this.resultado="Se han añadido: "+element3.credito+" créditos a su cuenta";
                                this.crearCarga(element3.credito);*/
                            }
                            if (flag == false) {
                                alert_1 = this.alertCtrl.create({
                                    title: "Alerta",
                                    subTitle: "Código desconocido",
                                    cssClass: "miClaseDanger",
                                    buttons: [{ text: 'Aceptar' }]
                                });
                                alert_1.present();
                            }
                        }
                        else {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MateriasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.db.list('/encuestas').subscribe(function (data) {
            _this.listadoEncuestas = data;
        });
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
    };
    MateriasPage.prototype.RedireccionMateria = function (materia) {
        switch (materia) {
            case "PPS":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materia_materia__["a" /* MateriaPage */], { materiaa: materia, aulaa: this.aula });
                break;
        }
    };
    MateriasPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    MateriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-materias',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\materias\materias.html"*/'<!--\n\n  Generated template for the MateriasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Materias<button ion-button color="light" (click)=\'logout()\'>Salir</button></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/halloween-Materias.png\')" class="fondo">\n\n  <button ion-button round full large  (click)="escanear()" class="animated flipInX miBoton miButton"> \n\n    <ion-icon name="arrow-round-back"></ion-icon> Escaner QR\n\n  </button><br>\n\n      <div *ngFor="let lista of listaMateriasAlumno; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(\'PPS\')">{{ lista.materia }}</button> \n\n      </div>\n\n  \n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\materias\materias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], MateriasPage);
    return MateriasPage;
}());

//# sourceMappingURL=materias.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TomarListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutorial_tutorial__ = __webpack_require__(52);
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
    function TomarListaPage(navCtrl, modalCtrl, fbService, navParams, database, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
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
        console.log(this.aula);
        //  this.persona = this.navParams.get('persona');
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
        var fecha = new Date();
        console.log("Fecha: " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
        var mifecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
        this.database.list('/alumnosPresentes/').push({ fecha: mifecha, nombre: alumno.nombre });
        console.log("-------------- ingreso a presente --------------");
        console.log(alumno);
        this.presentAlert("Asistencia", alumno.nombre + " :Presente");
    };
    TomarListaPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__tutorial_tutorial__["a" /* TutorialPage */], { img: "tomar-listaTutorial.png" });
        modal.present();
    };
    TomarListaPage.prototype.ausente = function (key, alumno) {
        var _this = this;
        var fecha = new Date();
        console.log("Fecha: " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
        var mifecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
        this.database.list('/alumnosAusentes/').push({ fecha: mifecha, nombre: alumno.nombre });
        console.log("-------------- ingreso a ausente ---------------");
        console.log(key);
        var cont = 0;
        if (alumno.contPresentes <= 3) {
            //console.log("entro al menora 3");
            if (alumno.contPresentes == 3) {
                //  alert("push notification");
                //this.notificacionFalta(alumno.nombre,alumno.mail,alumno.contPresentes)
                this.notificacionFalta(alumno.nombre, alumno.mail, alumno.contPresentes);
                return;
            }
            else {
                console.log("entro al contador ++");
                //cont++;
                alumno.contPresentes += 1;
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
        console.log(nombre, contAusentes);
        this.database.list('/notificacionFalta/').push({
            alumno: nombre,
            mail: mail,
            cantidadFaltas: contAusentes
        }).then(function () {
        })
            .catch(function () {
        });
    };
    TomarListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tomar-lista',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\tomar-lista\tomar-lista.html"*/'<!--\n\n  Generated template for the TomarListaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Tomar Lista <button ion-button color="danger" icon-only style="float:right" (click)=\'presentModal()\'><ion-icon style="size:200%" name="help-circle"></ion-icon></button> </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/descarga-archivo.png\')" class="fondo">\n\n  \n\n  <ion-list>\n\n    <ion-item *ngFor="let alumno of tomarAlumnos$ | async" class="miItem animated flipInX">\n\n      <ion-avatar item-end>\n\n        <img src="./assets/icon/bien.png" (click)="presente(alumno)">  \n\n      </ion-avatar>\n\n        \n\n      <ion-avatar item-end>\n\n        <img src="./assets/icon/mal.png" (click)="ausente(alumno.$key,alumno)">  \n\n      </ion-avatar>\n\n\n\n      <h2>{{alumno.legajo}} - {{alumno.nombre}}</h2>\n\n    </ion-item>  \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\tomar-lista\tomar-lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], TomarListaPage);
    return TomarListaPage;
}());

//# sourceMappingURL=tomar-lista.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescargarArchivoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
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
    DescargarArchivoPage.prototype.generaPDF = function () {
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
    DescargarArchivoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-descargar-archivo',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\descargar-archivo\descargar-archivo.html"*/'<!--\n\n  Generated template for the DescargarArchivoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Descargar Archivo {{aula}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="generaPDF()">\n\n        <ion-icon name="logo-dropbox"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="generaCSV()">\n\n        <ion-icon name="logo-dropbox"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/descarga-archivo.png\')" class="fondo">\n\n  <ion-list>\n\n    <ion-item *ngFor="let alumno of listaAlumnosCsv " class="animated flipInX miItem">\n\n      <h3>Legajo: {{alumno.legajo}}</h3>\n\n      <h2>Mail: {{alumno.mail}}</h2>\n\n      <h2>Nombre: {{alumno.nombre}}</h2>\n\n      <h2>Tuno: {{alumno.turno}}</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\descargar-archivo\descargar-archivo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DescargarArchivoPage);
    return DescargarArchivoPage;
}());

//# sourceMappingURL=descargar-archivo.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignarMateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    AsignarMateriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignar-materia',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\asignar-materia\asignar-materia.html"*/'<!--\n  Generated template for the AsignarmateriaDPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Asignar Profesor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n        <ion-label  style="color:white" floating>Aula</ion-label>\n    <ion-input disabled clearInput type="text"  [(ngModel)]="aula" name="aula" id="aula"></ion-input></ion-item>\n  <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n    <ion-label  style="color:white" floating>Materia</ion-label>\n<ion-input disabled clearInput type="text"  [(ngModel)]="materiaD" name="materiaD" id="materiaD"></ion-input></ion-item>\n<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n  <ion-label style="color:white">Profesor</ion-label>\n <ion-select interface=\'action-sheet\' style="background-color:rgba(0, 0, 0, 0.747);color:white" [(ngModel)]="profesor" name="profesor" id="profesor">\n   <ion-option *ngFor="let profesor of listaProfesores" [value]="profesor">{{profesor.Nombre}} {{profesor.Apellido}}</ion-option>\n   \n  </ion-select>\n</ion-item>\n<br> <br>\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="asignar()">Asignar</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\asignar-materia\asignar-materia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AsignarMateriaPage);
    return AsignarMateriaPage;
}());

//# sourceMappingURL=asignar-materia.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(64);
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
    AulaAdministrativoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aula-administrativo',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\aula-administrativo\aula-administrativo.html"*/'<!--\n\n  Generated template for the AulaAdministrativoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Aula Administrativo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n\n\n <!-- <ion-list>\n\n        \n\n    <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Profesor</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.profesor" disabled="true"></ion-input> \n\n    </ion-item>\n\n              \n\n    <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Divicion</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.division" disabled="true"></ion-input>\n\n    </ion-item>\n\n          \n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Materia</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.materia" disabled="true"></ion-input>\n\n    </ion-item> \n\n\n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n\n      <ion-input type="number" [(ngModel)]="miAulaAdministrativo.cantidadAlumno" disabled="true"></ion-input>\n\n    </ion-item> \n\n\n\n  </ion-list>-->\n\n\n\n  \n\n  \n\n      <ion-item >\n\n        <ion-label>Curso</ion-label>\n\n        <ion-select interface=\'action-sheet\' [(ngModel)]="seleccion" (ionChange)="changeList($event)">\n\n          <ion-option (ionSelect)="changeList(\'a\')" value="a">4ºA</ion-option>\n\n          <ion-option (ionSelect)="changeList(\'b\')" value="b">4ºB</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item >\n\n      <div style=\'width:100%;height:100%\' *ngIf=\'seleccion=="a"\'>\n\n        <ng2-smart-table style=\'width:100%;height:100%\' [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"\n\n        (editConfirm)="onSaveConfirm($event)"\n\n        (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div>\n\n      </ion-item>\n\n      <ion-item >\n\n        <div style=\'width:100%;height:100%\' *ngIf=\'seleccion=="b"\'>\n\n        <ng2-smart-table style=\'width:100%;height:100%\'  [settings]="settings" [source]="source2" (deleteConfirm)="onDeleteConfirm($event)"\n\n        (editConfirm)="onSaveConfirm($event)"\n\n        (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div>\n\n   </ion-item> \n\n\n\n\n\n   \n\n  \n\n    <button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Cargar Alumnos\n\n    </button>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\aula-administrativo\aula-administrativo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AulaAdministrativoPage);
    return AulaAdministrativoPage;
}());

//# sourceMappingURL=aula-administrativo.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespuestaEncuestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resultados_votacion_resultados_votacion__ = __webpack_require__(286);
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
 * Generated class for the RespuestaEncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RespuestaEncuestaPage = (function () {
    function RespuestaEncuestaPage(navCtrl, navParams, fireService, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.encuestas = [];
        this.encuestasRespuestas = [];
        this.horaActual = new Date();
    }
    RespuestaEncuestaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.db.list('/encuestas').
            subscribe(function (data) {
            if (data)
                _this.encuestas = data;
        });
        this.banderaVoto = false;
        setTimeout(function () {
            _this.db.list('/encuestaRespuestas').
                subscribe(function (data) {
                if (data)
                    _this.encuestasRespuestas = data;
            });
        }, 1000);
    };
    RespuestaEncuestaPage.prototype.responder = function (e) {
        console.log(e);
        var bandera = false;
        var date = new Date(e.horaFinalizacion);
        if (date > this.horaActual) {
            for (var i = 0; i < this.encuestasRespuestas.length; i++) {
                var element = this.encuestasRespuestas[i];
                console.log(e);
                console.log(element);
                if (element.mailUsuario == localStorage.getItem("mail") && element.nombreEncuesta == e.nombre) {
                    bandera = true;
                    var alert_1 = this.alertCtrl.create({
                        title: 'Info!',
                        subTitle: 'Usted ya voto en esta encuesta!',
                        cssClass: "miClaseDanger",
                        buttons: ['Listo']
                    });
                    alert_1.present();
                    return;
                }
            }
            if (bandera == false) {
                if (e.formato == "Radio botones") {
                    this.fireService.agregarRespEncuesta({ nombreEncuesta: e.nombre, mailUsuario: localStorage.getItem("mail"), respuesta: this.respuestaR });
                }
                else if (e.formato == "Selección de opciones") {
                    this.fireService.agregarRespEncuesta({ nombreEncuesta: e.nombre, mailUsuario: localStorage.getItem("mail"), respuesta: this.respuestaS });
                }
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__resultados_votacion_resultados_votacion__["a" /* ResultadosVotacionPage */], { nombreEncuesta: e.nombre });
                var alert_2 = this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Voto con exito!',
                    cssClass: "miClaseAlert",
                    buttons: ['Listo']
                });
                alert_2.present();
                bandera = true;
            }
        }
        else {
            bandera = true;
            var alert_3 = this.alertCtrl.create({
                title: 'Info!',
                subTitle: 'La encuesta ya expiro!!',
                cssClass: "miClaseDanger",
                buttons: ['Listo']
            });
            alert_3.present();
        }
    };
    RespuestaEncuestaPage.prototype.respuesta1 = function (e) {
        var bandera = false;
        var date = new Date(e.horaFinalizacion);
        if (date > this.horaActual) {
            for (var i = 0; i < this.encuestasRespuestas.length; i++) {
                var element = this.encuestasRespuestas[i];
                if (element.mailUsuario == localStorage.getItem("mail") && element.nombreEncuesta == e.nombre) {
                    bandera = true;
                    var alert_4 = this.alertCtrl.create({
                        title: 'Info!',
                        subTitle: 'Usted ya voto en esta encuesta!',
                        cssClass: "miClaseDanger",
                        buttons: ['Listo']
                    });
                    alert_4.present();
                    break;
                }
            }
            if (bandera == false) {
                this.fireService.agregarRespEncuesta({ nombreEncuesta: e.nombre, mailUsuario: localStorage.getItem("mail"), respuesta: e.respuesta1 });
                var alert_5 = this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Voto con exito!',
                    cssClass: "miClaseAlert",
                    buttons: ['Listo']
                });
                alert_5.present();
                bandera = true;
            }
        }
        else {
            bandera = true;
            var alert_6 = this.alertCtrl.create({
                title: 'Info!',
                subTitle: 'La encuesta ya expiro!!',
                cssClass: "miClaseDanger",
                buttons: ['Listo']
            });
            alert_6.present();
        }
        /*for(let i=0;i<this.encuestasRespuestas.length;i++)
          {
           
           
    
          
            
              if( this.encuestasRespuestas[i].nombreEncuesta == e.nombre && this.encuestasRespuestas[i].voto== "true")
                {
                  
                  let alert = this.alertCtrl.create({
                    title: 'Info!',
                    subTitle: 'Usted ya voto en esta encuesta!',
                    cssClass:"miClaseAlert",
                  buttons: ['Listo']
                  });
                  alert.present();
                  return;
                  
                }
                  
                  console.log("no voto, va a votar")
                  this.fireService.agregarRespEncuesta({nombreEncuesta:e.nombre,mailUsuario:localStorage.getItem("mail"),respuesta:e.respuesta1,voto:"true"});
                  
                  let alert = this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Voto con exito!',
                    cssClass:"miClaseAlert",
                  buttons: ['Listo']
                  });
                  alert.present();
                  this.navCtrl.push(MateriaPage);
                  return;
                
              
    
                
          }
    
     
    */
    };
    RespuestaEncuestaPage.prototype.respuesta2 = function (e) {
        var bandera = false;
        var date = new Date(e.horaFinalizacion);
        if (date > this.horaActual) {
            for (var i = 0; i < this.encuestasRespuestas.length; i++) {
                var element = this.encuestasRespuestas[i];
                if (element.mailUsuario == localStorage.getItem("mail") && element.nombreEncuesta == e.nombre) {
                    bandera = true;
                    var alert_7 = this.alertCtrl.create({
                        title: 'Info!',
                        subTitle: 'Usted ya voto en esta encuesta!',
                        cssClass: "miClaseDanger",
                        buttons: ['Listo']
                    });
                    alert_7.present();
                    break;
                }
            }
            if (bandera == false) {
                this.fireService.agregarRespEncuesta({ nombreEncuesta: e.nombre, mailUsuario: localStorage.getItem("mail"), respuesta: e.respuesta2 });
                var alert_8 = this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Voto con exito!',
                    cssClass: "miClaseAlert",
                    buttons: ['Listo']
                });
                alert_8.present();
                bandera = true;
            }
        }
        else {
            bandera = true;
            var alert_9 = this.alertCtrl.create({
                title: 'Info!',
                subTitle: 'La encuesta ya expiro!!',
                cssClass: "miClaseDanger",
                buttons: ['Listo']
            });
            alert_9.present();
        }
        /*for(let i=0;i<this.encuestasRespuestas.length;i++)
          {
           
           
    
          
            
              if( this.encuestasRespuestas[i].nombreEncuesta == e.nombre && this.encuestasRespuestas[i].voto== "true")
                {
                  
                  let alert = this.alertCtrl.create({
                    title: 'Info!',
                    subTitle: 'Usted ya voto en esta encuesta!',
                    cssClass:"miClaseAlert",
                  buttons: ['Listo']
                  });
                  alert.present();
                  return;
                  
                }
                  
                  console.log("no voto, va a votar")
                  this.fireService.agregarRespEncuesta({nombreEncuesta:e.nombre,mailUsuario:localStorage.getItem("mail"),respuesta:e.respuesta1,voto:"true"});
                  
                  let alert = this.alertCtrl.create({
                    title: 'Exito!',
                    subTitle: 'Voto con exito!',
                    cssClass:"miClaseAlert",
                  buttons: ['Listo']
                  });
                  alert.present();
                  this.navCtrl.push(MateriaPage);
                  return;
                
              
    
                
          }
    
     
        */ 
    };
    RespuestaEncuestaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-respuesta-encuesta',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\respuesta-encuesta\respuesta-encuesta.html"*/'<!--\n\n  Generated template for the RespuestaEncuestaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Encuestas a responder</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/halloween-Materias.png\')" class="fondo">\n\n  \n\n  <div *ngFor="let e of encuestas">\n\n    \n\n         <ion-list >\n\n            <ion-item class="animated flipInY miItem">\n\n                <ion-label class="miLabel" style="color: orange"  floating>Nombre:</ion-label>\n\n                <ion-input type="text" [(ngModel)]="e.nombre" disabled="true"></ion-input>\n\n                </ion-item>\n\n                \n\n             <ion-item class="animated flipInY miItem">\n\n             <ion-label class="miLabel" style="color: orange"  floating>Pregunta:</ion-label>\n\n             <ion-input type="text" [(ngModel)]="e.pregunta" disabled="true"></ion-input>\n\n             </ion-item>\n\n             \n\n             \n\n               <ion-item class="animated flipInY miItem">\n\n                 <ion-label class="miLabel" style="color: orange"  floating>La encuesta finaliza en el horario:</ion-label>\n\n                 <ion-input type="text" [(ngModel)]="e.horaFReal" disabled="true"></ion-input>\n\n                 </ion-item>\n\n\n\n\n\n<!--\n\n                 <ion-item class="animated flipInX miItem">\n\n                     <ion-label class="miLabel" style="color: orange"  floating>Fecha y hora de inicio (opcional)</ion-label>\n\n                     <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="e.fechaInicio" disabled="true"></ion-datetime>\n\n                   </ion-item>\n\n             \n\n                   <ion-item class="animated flipInX miItem">\n\n                       <ion-label class="miLabel" style="color: orange"  floating>Fecha y hora de finalización (opcional)</ion-label>\n\n                       <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="e.fechaFinalizacion" disabled="true"></ion-datetime>\n\n                     </ion-item>\n\n                   -->\n\n\n\n\n\n                 <ion-item *ngIf=\'e.formato == "Botones"\' class="animated flipInY miItem">\n\n                   <ion-list  >\n\n                       <button  class="botones" (click)="respuesta1(e)" style="color: rgb(85, 158, 218)" ion-button clear item-end >\n\n                           Presione para votar: {{e.respuesta1}}\n\n                          </button>\n\n                          <br>\n\n                          <button class="botones" (click)="respuesta2(e)" style="color: rgb(85, 158, 218)" ion-button clear item-end >\n\n                             Presione para votar: {{e.respuesta2}}\n\n                            </button>\n\n\n\n\n\n                     \n\n                       </ion-list>    \n\n                     </ion-item>\n\n        \n\n\n\n                               <ion-list  *ngIf=\'e.formato == "Radio botones"\' (ionChange)="responder(e)" radio-group [(ngModel)]="respuestaR">\n\n                                   <ion-item class="animated flipInY miItem">\n\n                                     <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta1}}</ion-label>\n\n                                     <ion-radio  [value]="e.respuesta1" ></ion-radio>\n\n                                   </ion-item>\n\n                                   <ion-item class="animated flipInY miItem">\n\n                                       <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta2}}</ion-label>\n\n                                       <ion-radio  [value]="e.respuesta2" ></ion-radio>\n\n                                     </ion-item>\n\n                                    \n\n\n\n                                 </ion-list>\n\n\n\n                              <!--   <ion-list  *ngIf=\'e.formato == "Checkbox"\' radio-group [(ngModel)]="respuesta">\n\n                                     <ion-item class="animated flipInY miItem">\n\n                                         <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta1}}</ion-label>\n\n                                         <ion-checkbox  style="color : rgb(85, 158, 218)" [(ngModel)]="e.respuesta1"></ion-checkbox>\n\n                                     </ion-item>\n\n                                     <ion-item class="animated flipInY miItem">\n\n                                         <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta2}}</ion-label>\n\n                                         <ion-checkbox  style="color : rgb(85, 158, 218)" [(ngModel)]="e.respuesta2" ></ion-checkbox>\n\n                                       </ion-item>\n\n                                                 \n\n \n\n                                   </ion-list> -->  \n\n\n\n                                   <ion-list  *ngIf=\'e.formato == "Selección de opciones"\'  >\n\n                                    <ion-item class="animated flipInY miItem" >\n\n                                    <select style="color : rgb(85, 158, 218); width:150px;" (change)="responder(e)" [(ngModel)]="respuestaS"  class="animated flipInY miItem">\n\n  \n\n                                      <option >{{e.respuesta1}} </option>\n\n                                      <option >{{e.respuesta2}} </option>\n\n                                    \n\n                                    </select>\n\n                                  </ion-item>\n\n                                     \n\n\n\n                                  </ion-list>\n\n                                 \n\n\n\n                           \n\n                       \n\n                     \n\n             \n\n               </ion-list> \n\n\n\n         </div>\n\n\n\n  \n\n  </ion-content>'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\respuesta-encuesta\respuesta-encuesta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RespuestaEncuestaPage);
    return RespuestaEncuestaPage;
}());

//# sourceMappingURL=respuesta-encuesta.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tutorial_tutorial__ = __webpack_require__(52);
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
    function NotificacionPage(navCtrl, modalCtrl, navParams, db, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.aula = this.navParams.get('aulaa');
        console.log("dsadada" + this.aula);
        this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
        this.nativeAudio.play('1');
    }
    NotificacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacionPage');
    };
    NotificacionPage.prototype.Guardar = function () {
        var _this = this;
        this.db.list('/notificacionesProfesor/').push({
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
    NotificacionPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__tutorial_tutorial__["a" /* TutorialPage */], { img: "notificacionTutorial.png" });
        modal.present();
    };
    NotificacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notificacion',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\notificacion\notificacion.html"*/'<!--\n\n  Generated template for the NotificacionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Creación de notificación<button ion-button color="danger" icon-only style="float:right" (click)=\'presentModal()\'><ion-icon style="size:200%" name="help-circle"></ion-icon></button></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n  \n\n<ion-list>\n\n<ion-item class="animated flipInX miItem">\n\n<ion-label class="miLabel" floating>Titulo</ion-label>\n\n<ion-input type="text" [(ngModel)]="titulo" disabled="false"></ion-input> \n\n</ion-item>\n\n          \n\n<ion-item class="animated flipInY miItem">\n\n<ion-label class="miLabel" floating>Mensaje</ion-label>\n\n<ion-input type="text" [(ngModel)]="mensaje" disabled="false"></ion-input>\n\n</ion-item>\n\n<button  ion-button round class="botonGuardar"  (click)="Guardar()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar</button>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\notificacion\notificacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], NotificacionPage);
    return NotificacionPage;
}());

//# sourceMappingURL=notificacion.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAlumnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias_materias__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_perfil_editar_perfil__ = __webpack_require__(292);
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
    InicioAlumnoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio-alumno',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\inicio-alumno\inicio-alumno.html"*/'<!--\n\n  Generated template for the InicioAlumnoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione un aula</ion-title>\n\n   \n\n  </ion-navbar>\n\n  <button  ion-button round class="botonEditar"  (click)="EditarPerfil()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Editar perfil</button>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n\n\n\n  \n\n      <div *ngFor="let lista of listaAulasProfesor; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionAula(lista.aula)">{{ lista.aula }}</button> \n\n      </div>\n\n     \n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\inicio-alumno\inicio-alumno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], InicioAlumnoPage);
    return InicioAlumnoPage;
}());

//# sourceMappingURL=inicio-alumno.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireBaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(689);
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
    FireBaseServiceProvider.prototype.getABMAlumnos = function () {
        return this.afd.list('/personas/alumnos');
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
    FireBaseServiceProvider.prototype.updateABMAlumno = function (data) {
        return this.afd.list('/personas/').update('alumnos', data);
    };
    FireBaseServiceProvider.prototype.updateAlumnoLista = function (data, key) {
        return this.afd.object('/alumno-lista/').update(data);
    };
    FireBaseServiceProvider.prototype.updateProfesor = function (data) {
        return this.afd.list('/personas/').update('profesores', data);
    };
    FireBaseServiceProvider.prototype.updateAdministrativo = function (data) {
        return this.afd.list('/personas/').update('administrativos', data);
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
    FireBaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FireBaseServiceProvider);
    return FireBaseServiceProvider;
}());

//# sourceMappingURL=fire-base-service.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbmAlumnosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_button_renderer_button_renderer__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cagar_archivo_cagar_archivo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__asignar_materia_alumno_asignar_materia_alumno__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tutorial_tutorial__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AbmAlumnosPage = (function () {
    function AbmAlumnosPage(navCtrl, navParams, fireService, loadingCtrl, screenOrientation, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.listadoAlumnos = [];
        this.listaAulas = [];
        this.listaAux = [];
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
                legajo: {
                    title: 'Legajo',
                    filter: false,
                    editor: {
                        type: 'number',
                    },
                },
                nombre: {
                    title: 'Nombre',
                    filter: false
                },
                mail: {
                    title: 'Correo',
                    filter: false
                },
                Accion: {
                    title: 'Acción',
                    filter: false,
                    type: 'custom',
                    add: false,
                    edit: false,
                    addable: false,
                    editable: false,
                    isEditable: false,
                    isAddable: false,
                    renderComponent: __WEBPACK_IMPORTED_MODULE_3__components_button_renderer_button_renderer__["a" /* ButtonRenderComponent */],
                    onComponentInitFunction: this.actions.bind(this)
                }
                /*
                Accion: {
                  title: 'Acción',
                  filter: false,
                  type:'custom',
                  add: false,
                  edit: false,
                  addable: false,
                  editable:false,
                  isEditable:false,
                  isAddable:false,
                  renderComponent: ButtonRenderComponent,
                  onComponentInitFunction: this.actions.bind(this)
                   
                  }
                  
                  */
            }
        };
    }
    AbmAlumnosPage.prototype.actions = function (instance) {
        var _this = this;
        instance.save.subscribe(function (row) {
            var nombreCompleto = row.nombre;
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__asignar_materia_alumno_asignar_materia_alumno__["a" /* AsignarMateriaAlumnoPage */], { alumno: nombreCompleto, legajo: row.legajo });
            profileModal.present();
        });
    };
    AbmAlumnosPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.fireService.getABMAlumnos().subscribe(function (data) {
            _this.listadoAlumnos = data;
        });
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listaAulas = data;
        });
        setTimeout(function () {
            _this.activ();
        }, 1200);
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
    AbmAlumnosPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__tutorial_tutorial__["a" /* TutorialPage */], { img: "abm-alumnosTutorial.png" });
        modal.present();
    };
    AbmAlumnosPage.prototype.activ = function () {
        this.listaAux = [];
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            var element = this.listadoAlumnos[i];
            if (element != undefined && (element.vigente == null || element.vigente == undefined))
                this.listaAux.push(element);
        }
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](this.listaAux);
    };
    AbmAlumnosPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.unlock();
    };
    AbmAlumnosPage.prototype.onDeleteConfirm = function (event) {
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
                        for (var i = 0; i < _this.listaAux.length; i++) {
                            var element = _this.listaAux[i];
                            try {
                                if (element.mail == event.data.mail) {
                                    _this.listaAux[i].vigente = false;
                                    _this.fireService.updateABMAlumno(_this.listaAux);
                                    var listaVigentes = [];
                                    event.confirm.reject();
                                    for (var k = 0; k < _this.listaAulas.length; k++) {
                                        var elementk = _this.listaAulas[k];
                                        for (var o = 0; o < elementk.alumnos.length; o++) {
                                            var elemento = elementk.alumnos[o];
                                            if (elemento.mail == element.mail) {
                                                listaVigentes = elementk.alumnos;
                                                listaVigentes[o].vigente = false;
                                                _this.fireService.updateAlumno(listaVigentes, elementk['$key']);
                                            }
                                        }
                                    }
                                    break;
                                }
                            }
                            catch (error) {
                                console.log(error);
                            }
                            //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                            //ACA
                        }
                        _this.fireService.getABMAlumnos().subscribe(function (data) {
                            _this.listadoAlumnos = data;
                        });
                        _this.listaAux = [];
                        for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                            var element = _this.listadoAlumnos[i];
                            if (element != undefined && (element.vigente == null || element.vigente == undefined))
                                _this.listaAux.push(element);
                        }
                        _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](_this.listaAux);
                    }
                }
            ]
        });
        alert.present();
    };
    AbmAlumnosPage.prototype.onSaveConfirm = function (event) {
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
                        if (event.newData.legajo != null && event.newData.nombre != null && event.newData.mail != null
                            && event.newData.legajo != undefined && event.newData.nombre != undefined && event.newData.mail != undefined &&
                            event.newData.legajo != "" && event.newData.nombre != "" && event.newData.mail != "") {
                            if (event.newData.mail.includes('@')) {
                                for (var i = 0; i < _this.listaAux.length; i++) {
                                    var element = _this.listaAux[i];
                                    try {
                                        if (element.mail == event.newData.mail) {
                                            _this.listaAux[i] = event.newData;
                                            _this.listaAux[i].password = event.newData.legajo;
                                            _this.fireService.updateABMAlumno(_this.listaAux);
                                            event.confirm.reject();
                                            var listaVigentes = [];
                                            for (var k = 0; k < _this.listaAulas.length; k++) {
                                                var elementk = _this.listaAulas[k];
                                                for (var o = 0; o < elementk.alumnos.length; o++) {
                                                    var elemento = elementk.alumnos[o];
                                                    if (elemento.mail == element.mail) {
                                                        listaVigentes = elementk.alumnos;
                                                        listaVigentes[o] = event.newData;
                                                        listaVigentes[o].password = event.newData.legajo;
                                                        _this.fireService.updateAlumno(listaVigentes, elementk['$key']);
                                                    }
                                                }
                                            }
                                            break;
                                        }
                                        // this.fireService.updateAlumno(this.listaAux,element['$key']); 
                                    }
                                    catch (error) {
                                        console.log(error);
                                    }
                                    //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                                } //ACA
                                _this.fireService.getABMAlumnos().subscribe(function (data) {
                                    _this.listadoAlumnos = data;
                                });
                                _this.listaAux = [];
                                for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                    var element = _this.listadoAlumnos[i];
                                    if (element != undefined && (element.vigente == null || element.vigente == undefined))
                                        _this.listaAux.push(element);
                                }
                                _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](_this.listaAux);
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
    AbmAlumnosPage.prototype.onCreateConfirm = function (event) {
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
                        if (event.newData.legajo != null && event.newData.nombre != null && event.newData.mail != null
                            && event.newData.legajo != undefined && event.newData.nombre != undefined && event.newData.mail != undefined &&
                            event.newData.legajo != "" && event.newData.nombre != "" && event.newData.mail != "") {
                            if (event.newData.mail.includes('@')) {
                                for (var i = 0; i < _this.listaAux.length; i++) {
                                    var element = _this.listaAux[i];
                                    try {
                                        event.confirm.resolve();
                                        _this.listaAux.push(event.newData);
                                        _this.listaAux[_this.listaAux.lastIndexOf(event.newData)].password = event.newData.legajo;
                                        //    this.listaAux[this.listaAux.lastIndexOf(event.newData)].password=event.newData.DNI;
                                        _this.fireService.updateABMAlumno(_this.listaAux);
                                        break;
                                        // this.fireService.updateAlumno(this.listaAux,element['$key']); 
                                    }
                                    catch (error) {
                                        console.log(error);
                                    }
                                    //this.afd.list('/alumno-lista/'+indox+'/alumnos').push(event.newData).ref.child().set 
                                } //ACA
                                _this.fireService.getABMAlumnos().subscribe(function (data) {
                                    _this.listadoAlumnos = data;
                                });
                                _this.listaAux = [];
                                for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                                    var element = _this.listadoAlumnos[i];
                                    if (element != undefined && (element.vigente == null || element.vigente == undefined))
                                        _this.listaAux.push(element);
                                }
                                _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](_this.listaAux);
                            }
                            else {
                                var alert_3 = _this.alertCtrl.create({
                                    title: "Info",
                                    subTitle: "Correo inválido",
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
    AbmAlumnosPage.prototype.asignar = function (dni) {
        //alert(dni);
    };
    AbmAlumnosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioAdminPage');
    };
    AbmAlumnosPage.prototype.cargarLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { aulaa: " ", persona: "alumno" });
        //alert("voy a cargar lista");
    };
    AbmAlumnosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <ion-header>\n  <ion-navbar color=\"dark\">\n    <ion-title>Control Alumnos<button ion-button color=\"danger\" icon-only style=\"float:right\" (click)='presentModal()'><ion-icon style=\"size:200%\" name=\"help-circle\"></ion-icon></button> </ion-title>  \n  </ion-navbar>\n</ion-header>\n  <ion-content padding style=\"background-image:url('assets/aula-administrativo.jpeg')\" class=\"fondo\">\n \n<ion-item>\n<div style='width:100%;height:100%' >\n  <ng2-smart-table style='width:100%;height:100%' [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div></ion-item>\n  \n\n  <button ion-button round full large (click)=\"cargarLista()\" class=\"animated flipInX miBoton miButton\"> \n  <ion-icon name=\"arrow-round-back\"></ion-icon> Cargar Alumnos\n</button>\n\n</ion-content>\n",
            selector: 'page-abm-alumnos',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AbmAlumnosPage);
    return AbmAlumnosPage;
}());

//# sourceMappingURL=abm-alumnos.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignarMateriaAlumnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
var AsignarMateriaAlumnoPage = (function () {
    function AsignarMateriaAlumnoPage(navCtrl, navParams, fireService, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.listaAlumnos = [];
        this.listaABMAlumnos = [];
        this.listaAux = [];
        this.listaMaterias = [];
        this.listaAulas = [];
        this.alumno = this.navParams.get('alumno');
        this.legajo = this.navParams.get('legajo');
    }
    AsignarMateriaAlumnoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listaAlumnos = data;
        });
        this.fireService.getABMAlumnos().subscribe(function (data) {
            _this.listaABMAlumnos = data;
        });
        setTimeout(function () {
            _this.act();
        }, 500);
    };
    AsignarMateriaAlumnoPage.prototype.act = function () {
        for (var i = 0; i < this.listaAlumnos.length; i++) {
            var element = this.listaAlumnos[i];
            var flag = false;
            for (var j = 0; j < this.listaAulas.length; j++) {
                var element2 = this.listaAulas[j];
                if (element.aula == element2.aula) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                this.listaAulas.push(element);
            }
        }
    };
    AsignarMateriaAlumnoPage.prototype.changeList = function (aula) {
        this.aula = aula;
        this.listaMaterias = [];
        for (var i = 0; i < this.listaAlumnos.length; i++) {
            var element = this.listaAlumnos[i];
            if (element.aula == aula) {
                this.listaMaterias.push(element);
            }
        }
    };
    AsignarMateriaAlumnoPage.prototype.changeMateria = function (materia) {
        this.materia = materia;
    };
    AsignarMateriaAlumnoPage.prototype.asignar = function () {
        var bandera = false;
        try {
            for (var i = 0; i < this.listaAlumnos.length; i++) {
                var element = this.listaAlumnos[i];
                if (element.aula == this.aula && element.materia == this.materia) {
                    for (var j = 0; j < element.alumnos.length; j++) {
                        var element2 = element.alumnos[j];
                        if (element2.nombre == this.alumno) {
                            var alert_1 = this.alertCtrl.create({
                                title: "Error!",
                                subTitle: "El alumno ya está inscripto en esta materia",
                                cssClass: "miClaseDanger",
                                buttons: ['Aceptar']
                            });
                            alert_1.present();
                            bandera = true;
                            break;
                        }
                    }
                    if (!bandera) {
                        this.listaAux = element.alumnos;
                        for (var h = 0; h < this.listaABMAlumnos.length; h++) {
                            var elementh = this.listaABMAlumnos[h];
                            if (elementh.legajo == this.legajo) {
                                this.listaAux.push(elementh);
                                this.fireService.updateAlumno(this.listaAux, element['$key']);
                                var alert_2 = this.alertCtrl.create({
                                    title: "Exito!",
                                    subTitle: "Alumno asignado",
                                    cssClass: "miClaseAlert",
                                    buttons: ['Aceptar']
                                });
                                alert_2.present();
                                this.viewCtrl.dismiss();
                            }
                        }
                    }
                    break;
                }
            }
        }
        catch (error) {
            var alert_3 = this.alertCtrl.create({
                title: "Error!",
                subTitle: "No se pudo asignar el alumno",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert_3.present();
            console.log(error);
        }
    };
    AsignarMateriaAlumnoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignar-materia-alumno',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\asignar-materia-alumno\asignar-materia-alumno.html"*/'<!--\n\n  Generated template for the AsignarmateriaDPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-title>Asignar Alumno</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n\n\n      <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n          <ion-label style="color:white">Alumno</ion-label>\n\n             <ion-input disabled clearInput type="text"  [(ngModel)]="alumno" name="alumno" id="alumno"></ion-input>\n\n        </ion-item>\n\n\n\n      <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n          <ion-label  style="color:white" floating>Aula</ion-label>\n\n   <!--   <ion-input clearInput type="text"  [(ngModel)]="aula" name="aula" id="aula"></ion-input>-->\n\n    \n\n      <ion-select style="background-color:rgba(0, 0, 0, 0.747);color:white" interface=\'action-sheet\' [(ngModel)]="aula" name="aula" id="aula">\n\n        <ion-option *ngFor="let alumnos of listaAulas" (ionSelect)="changeList(alumnos.aula)" [value]="alumnos.aula">{{alumnos.aula}}</ion-option>\n\n        \n\n       </ion-select>\n\n    </ion-item>\n\n    <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n      <ion-label  style="color:white" floating>Materia</ion-label>\n\n  <!--  <ion-input clearInput type="text"  [(ngModel)]="materiaD" name="materiaD" id="materiaD"></ion-input>-->\n\n  <ion-select style="background-color:rgba(0, 0, 0, 0.747);color:white" interface=\'action-sheet\' [(ngModel)]="materia" name="materia" id="materia">\n\n    <ion-option *ngFor="let item of listaMaterias" (ionSelect)="changeMateria(item.materia)" [value]="item.materia">{{item.materia}}</ion-option>\n\n    \n\n   </ion-select>\n\n\n\n</ion-item>\n\n \n\n  <br> <br>\n\n  <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="asignar()">Asignar</button>\n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\asignar-materia-alumno\asignar-materia-alumno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AsignarMateriaAlumnoPage);
    return AsignarMateriaAlumnoPage;
}());

//# sourceMappingURL=asignar-materia-alumno.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosVotacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(21);
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
 * Generated class for the ResultadosVotacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadosVotacionPage = (function () {
    function ResultadosVotacionPage(db, navCtrl, navParams, fireService, loadingCtrl, screenOrientation, platform, afd, alertCtrl, modalCtrl) {
        //this.qrCodigo=this.navParams.get("codigo");
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.afd = afd;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.listaRespuestas = [];
        this.listaEncuestas = [];
        this.single = [];
        this.view = [700, 400];
        this.showLegend = false;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.listadoAlumnos = [];
    }
    ResultadosVotacionPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad ResultadosVotacionPage');
        this.respondido = false;
        this.grafico = false;
        this.mostrado = true;
        this.perfil = "";
        this.voto = false;
        this.nombreEncuesta = this.navParams.get('nombreEncuesta');
        this.db.list('/encuestaRespuestas').subscribe(function (data) {
            _this.listaRespuestas = data;
        });
        this.db.list('/encuestas').subscribe(function (data) {
            _this.listaEncuestas = data;
        });
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listadoAlumnos = data;
        });
        this.applyDimensions();
        window.addEventListener('resize', function () {
            _this.applyDimensions();
        }, false);
    };
    ResultadosVotacionPage.prototype.applyDimensions = function () {
        var width = this.content.getContentDimensions().contentWidth - 50;
        this.view = [width, 150];
    };
    ResultadosVotacionPage.prototype.mostrarGrafico = function () {
        var rta1;
        var cont1 = 0;
        var rta2;
        var cont2 = 0;
        for (var i = 0; i < this.listaEncuestas.length; i++) {
            var element = this.listaEncuestas[i];
            if (element.nombre == this.nombreEncuesta) {
                rta1 = element.respuesta1;
                rta2 = element.respuesta2;
                for (var j = 0; j < this.listaRespuestas.length; j++) {
                    var element2 = this.listaRespuestas[j];
                    if (element.nombre == element2.nombreEncuesta) {
                        if (element.respuesta1 == element2.respuesta) {
                            cont1++;
                        }
                        else if (element.respuesta2 == element2.respuesta) {
                            cont2++;
                        }
                    }
                }
                if (cont1 == 0 && cont2 == 0) {
                    var cantidad = Math.round(Math.random() * 30);
                    cont1 = Math.round(Math.random() * cantidad / 2);
                    cont2 = cantidad - cont1;
                }
                break;
            }
        }
        this.single = [
            {
                "name": rta1,
                "value": cont1
            },
            {
                "name": rta2,
                "value": cont2
            },
        ];
        this.grafico = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], ResultadosVotacionPage.prototype, "content", void 0);
    ResultadosVotacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resultados-votacion',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\resultados-votacion\resultados-votacion.html"*/'<!--\n  Generated template for the QrEncuestasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title>QrEncuestas</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n        <button ion-button round full large  *ngIf="mostrado" (click)="mostrarGrafico()" class="animated flipInX miBoton miButton"> \n            <ion-icon name="arrow-round-back"></ion-icon> Mostrar Informacion\n          </button>\n      <div style="width:100%" *ngIf="grafico">\n        <ion-grid style="background-color:white;">\n          <h4>Votaciones</h4>\n           <ion-row >\n             <ion-col >\n               <ngx-charts-pie-chart \n               [view]="view"\n               [scheme]="colorScheme"\n               [results]="single"\n               [legend]="showLegend"\n               [explodeSlices]="explodeSlices"\n               [labels]="showLabels"\n               [doughnut]="doughnut"\n          [gradient]="gradient"\n              >\n               </ngx-charts-pie-chart>\n             </ion-col>\n           </ion-row>\n         </ion-grid>\n        </div>\n    </ion-content>\n    '/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\resultados-votacion\resultados-votacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], ResultadosVotacionPage);
    return ResultadosVotacionPage;
}());

//# sourceMappingURL=resultados-votacion.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__asignar_materia_asignar_materia__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cagar_archivo_cagar_archivo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tutorial_tutorial__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(67);
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
    InicioAdminPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    InicioAdminPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__tutorial_tutorial__["a" /* TutorialPage */], { img: "inicio-adminTutorial.png" });
        modal.present();
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
        }, 4000);
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
                                        listadoAux[listadoAux.lastIndexOf(event.newData)].password = event.newData.DNI;
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
                                        listadoAux[listadoAux.lastIndexOf(event.newData)].password = event.newData.DNI;
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
    InicioAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <ion-header>\n  <ion-navbar color=\"dark\">\n    <ion-title>Control Personas<button ion-button color=\"light\" (click)='logout()'>Salir</button> <button ion-button color=\"danger\" icon-only style=\"float:right\" (click)='presentModal()'><ion-icon style=\"size:200%\" name=\"help-circle\"></ion-icon></button> </ion-title>  \n  </ion-navbar>\n</ion-header>\n  <ion-content padding style=\"background-image:url('assets/aula-administrativo.jpeg')\" class=\"fondo\">\n  \n  <ion-item style='float:right'>\n  <ion-label>Personas</ion-label>\n  <ion-select interface='action-sheet' [(ngModel)]=\"personas\">\n    <ion-option (ionSelect)=\"changeList('p')\" value=\"p\">Profesores</ion-option>\n    <ion-option (ionSelect)=\"changeList('a')\" value=\"a\">Administrativos</ion-option>\n  </ion-select>\n</ion-item>\n<ion-item>\n<div style='width:100%;height:100%' *ngIf='profesor'>\n  <ng2-smart-table style='width:100%;height:100%' [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div></ion-item>\n  <ion-item>\n  <div style='width:100%;height:100%' *ngIf='!profesor'>\n  <ng2-smart-table style='width:100%;height:100%'  [settings]=\"settings2\" [source]=\"source2\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div></ion-item>\n\n  <button ion-button round full *ngIf='profesor' large (click)=\"cargarLista()\" class=\"animated flipInX miBoton miButton\"> \n  <ion-icon name=\"arrow-round-back\"></ion-icon> Cargar Profesores\n</button>\n<button ion-button round full *ngIf='!profesor' large (click)=\"cargarLista()\" class=\"animated flipInX miBoton miButton\"> \n<ion-icon name=\"arrow-round-back\"></ion-icon> Cargar Administrativos\n</button>\n</ion-content>\n",
            selector: 'page-inicio-admin',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InicioAdminPage);
    return InicioAdminPage;
}());

//# sourceMappingURL=inicio-admin.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula_profesor_aula_profesor__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__qr_encuestas_qr_encuestas__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// for databas





/**
 * Generated class for the InicioProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioProfesorPage = (function () {
    function InicioProfesorPage(navCtrl, barcode, db, alertCtrl, navParams, fireService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.barcode = barcode;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.listadoProfesores = [];
        this.listadoAlumnos = [];
        this.listadoEncuestas = [];
        this.listaMaterias = [];
        this.listaAux = [];
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
        var _this = this;
        this.db.list('/encuestas').subscribe(function (data) {
            _this.listadoEncuestas = data;
        });
    };
    InicioProfesorPage.prototype.escanear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var flag, j, element2, textoReal, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.barcode.scan().then(function (barC) {
                            _this.texto = barC.text;
                            _this.formato = barC.format;
                            _this.cancelado = barC.cancelled;
                        })];
                    case 1:
                        _a.sent();
                        flag = false;
                        if (this.texto.startsWith("Encuesta")) {
                            for (j = 0; j < this.listadoEncuestas.length; j++) {
                                element2 = this.listadoEncuestas[j];
                                if (this.texto == element2.codigo) {
                                    textoReal = this.texto.slice(8);
                                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__qr_encuestas_qr_encuestas__["a" /* QrEncuestasPage */], { nombreEncuesta: textoReal });
                                    flag = true;
                                    break;
                                }
                                /*this.resultado="Se han añadido: "+element3.credito+" créditos a su cuenta";
                                this.crearCarga(element3.credito);*/
                            }
                            if (flag == false) {
                                alert_1 = this.alertCtrl.create({
                                    title: "Alerta",
                                    subTitle: "Código desconocido",
                                    cssClass: "miClaseDanger",
                                    buttons: [{ text: 'Aceptar' }]
                                });
                                alert_1.present();
                            }
                        }
                        else {
                        }
                        return [2 /*return*/];
                }
            });
        });
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
    InicioProfesorPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    InicioProfesorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio-profesor',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\inicio-profesor\inicio-profesor.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione una materia <button ion-button color="light" (click)=\'logout()\'>Salir</button></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n\n  <button ion-button round full large  (click)="escanear()" class="animated flipInX miBoton miButton"> \n\n    <ion-icon name="arrow-round-back"></ion-icon> Escaner QR\n\n  </button>\n\n      <div *ngFor="let lista of listaMateriasProfesor; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(lista)">{{lista.aula}}, {{lista.materia}}</button> \n\n      </div>\n\n  \n\n  </ion-content>'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\inicio-profesor\inicio-profesor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]])
    ], InicioProfesorPage);
    return InicioProfesorPage;
}());

//# sourceMappingURL=inicio-profesor.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notificacion_notificacion__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materia_materia__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__encuestas_encuestas__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tomar_lista_tomar_lista__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__qr_encuestas_qr_encuestas__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












/**
 * Generated class for the AulaProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulaProfesorPage = (function () {
    function AulaProfesorPage(navCtrl, barcode, alertCtrl, navParams, db, nativeAudio, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.barcode = barcode;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.db = db;
        this.nativeAudio = nativeAudio;
        this.toastCtrl = toastCtrl;
        this.listaAlumnos = [];
        this.listadoEncuestas = [];
        this.view = [700, 150];
        this.view2 = [700, 150];
        this.listFaltantesB = [];
        this.listadoAlumnos = [];
        this.listadoFaltas = [];
        this.informacion = [];
        this.listFaltantes = [];
        this.aula = this.navParams.get('aula');
        this.materia = this.navParams.get('materia');
        this.db.list('/alumno-lista').subscribe(function (data) {
            _this.listadoAlumnos = data;
        });
        this.db.list("/tomarB").subscribe(function (data) {
            _this.listFaltantesB = data;
        });
        this.db.list("/tomarA").subscribe(function (data) {
            _this.listFaltantes = data;
        });
        this.nativeAudio.preloadComplex('bienvenidoProfesor', 'assets/sonidos/bienvenidoProfesor.mp3', 1, 1, 0);
        this.nativeAudio.play('bienvenidoProfesor');
        this.db.list('/notificacionFalta').
            subscribe(function (data) {
            _this.datosfaltas = data;
            console.log(_this.datosfaltas);
            var bandera = false;
            for (var i = 0; i < _this.datosfaltas.length; i++) {
                //if(localStorage.getItem("mail")==this.datosfaltas[i].mail){
                var toast = _this.toastCtrl.create({
                    message: 'El alumno' + ' ' + _this.datosfaltas[i].alumno + ' ' + 'tiene' + ' ' + _this.datosfaltas[i].cantidadFaltas + ' ' + 'faltas!!!',
                    duration: 4000,
                    position: 'top'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
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
    AulaProfesorPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.db.list('/encuestas').subscribe(function (data) {
            _this.listadoEncuestas = data;
        });
        this.db.list("/tomarA").subscribe(function (data) {
            _this.listFaltantes = data;
        });
        this.db.list("/tomarB").subscribe(function (data) {
            _this.listFaltantesB = data;
        });
        this.applyDimensions();
        window.addEventListener('resize', function () {
            _this.applyDimensions();
        }, false);
        if (this.aula == "4A" && this.materia == "PPS") {
            var contador = 0;
            for (var i = 0; i < this.listFaltantes.length; i++) {
                var element = this.listFaltantes[i];
                if (element.contPresentes != 0) {
                    contador++;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': this.listFaltantes.length - contador
                }
            ];
        }
        else if (this.aula == "4B" && this.materia == "PPS") {
            var contador = 0;
            for (var i = 0; i < this.listFaltantesB.length; i++) {
                var element = this.listFaltantesB[i];
                if (element.contPresentes != 0) {
                    contador++;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': this.listFaltantesB.length - contador
                }
            ];
        }
        else {
            var contador = 0;
            var cantidad = 0;
            for (var i = 0; i < this.listadoAlumnos.length; i++) {
                var element = this.listadoAlumnos[i];
                if (element.aula == this.aula && element.materia == this.materia) {
                    cantidad = element.alumnos.length;
                    contador = Math.round(Math.random() * cantidad);
                    break;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': cantidad - contador
                }
            ];
        }
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
    AulaProfesorPage.prototype.escanear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var flag, j, element2, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.barcode.scan().then(function (barC) {
                            _this.texto = barC.text;
                            _this.formato = barC.format;
                            _this.cancelado = barC.cancelled;
                        })];
                    case 1:
                        _a.sent();
                        flag = false;
                        if (this.texto.startsWith("Encuesta")) {
                            for (j = 0; j < this.listadoEncuestas.length; j++) {
                                element2 = this.listadoEncuestas[j];
                                if (this.texto == element2.codigo) {
                                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__qr_encuestas_qr_encuestas__["a" /* QrEncuestasPage */], { nombreEncuesta: this.texto });
                                    flag = true;
                                    break;
                                }
                                /*this.resultado="Se han añadido: "+element3.credito+" créditos a su cuenta";
                                this.crearCarga(element3.credito);*/
                            }
                            if (flag == false) {
                                alert_1 = this.alertCtrl.create({
                                    title: "Alerta",
                                    subTitle: "Código desconocido",
                                    cssClass: "miClaseDanger",
                                    buttons: [{ text: 'Aceptar' }]
                                });
                                alert_1.present();
                            }
                        }
                        else {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AulaProfesorPage.prototype.Encuestas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__encuestas_encuestas__["a" /* EncuestasPage */], { aula: this.aula, materia: this.materia });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], AulaProfesorPage.prototype, "content", void 0);
    AulaProfesorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aula-profesor',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\aula-profesor\aula-profesor.html"*/'<!--\n\n  Generated template for the AulaProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Aula:{{aula}}, Materia {{materia}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-profesor.jpg\')" class="fondo">\n\n\n\n <!--gi <ion-list>\n\n              \n\n    <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Divicion</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.division" disabled="true"></ion-input> \n\n    </ion-item>\n\n                    \n\n    <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Materia</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.materia" disabled="true"></ion-input>\n\n    </ion-item>\n\n                \n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.cantidadAlumno" disabled="true"></ion-input>\n\n    </ion-item> \n\n  \n\n  </ion-list>-->\n\n\n\n   \n\n    <button ion-button round full large (click)="crearNotificacion()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Crear Notificacion\n\n    </button>\n\n    <!--<button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Cargar Alumnos\n\n    </button>-->\n\n   \n\n      <button ion-button round full large  (click)="Encuestas()" class="animated flipInX miBoton miButton"> \n\n        <ion-icon name="arrow-round-back"></ion-icon> Ver Encuestas\n\n      </button>\n\n\n\n    <button ion-button round full large  (click)="tomaLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Tomar Lista\n\n    </button>\n\n    <br><br>\n\n\n\n<div style="width:100%">\n\n  <ion-grid style="background-color:white;">\n\n    <h4>Faltas</h4>\n\n     <ion-row >\n\n       <ion-col >\n\n         <ngx-charts-bar-horizontal \n\n           [view]="view"\n\n           [results]="informacion"\n\n           xAxis="true"\n\n           yAxis="true"\n\n         >\n\n         </ngx-charts-bar-horizontal>\n\n       </ion-col>\n\n     </ion-row>\n\n   </ion-grid>\n\n  </div>\n\n  <!--  [legend]="showLegend"\n\n           legendTitle="Votos"\n\n           [showXAxisLabel]="showXAxisLabel"\n\n           [showYAxisLabel]="showYAxisLabel"\n\n           xAxisLabel="votos"\n\n           yAxisLabel="resultado" -->\n\n           <br>\n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\aula-profesor\aula-profesor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], AulaProfesorPage);
    return AulaProfesorPage;
}());

//# sourceMappingURL=aula-profesor.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestasAltaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encuestas_encuestas__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { DateValueAccessorModule } from 'angular-date-value-accessor';
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
        this.nombre = "";
        this.pregunta = "";
        this.respuesta1 = "";
        this.respuesta2 = "";
        this.duracion = "";
        this.formato = "";
        this.fechaInicio = "";
        this.fechaFinalizacion = "";
        this.codigo = "";
        this.creadorEncuesta = localStorage.getItem("Email");
        this.nativeAudio.preloadComplex('2', 'assets/sonidos/2.mp3', 1, 1, 0);
        this.nativeAudio.play('2');
    }
    EncuestasAltaPage.prototype.ionViewDidLoad = function () {
        this.horaActual = new Date();
        this.horaAux = new Date();
        this.aula = this.navParams.get('aula');
        this.materia = this.navParams.get('materia');
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
                case '60 minutos':
                    this.horaActual.setMinutes(this.horaActual.getMinutes() + 60);
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
                horaFReal: this.horaActual.toLocaleString(),
                horaInicio: this.horaAux.toLocaleString(),
                codigo: "Encuesta" + this.nombre,
                aula: this.aula,
                materia: this.materia,
                horaFinalizacion: this.horaActual.toString(),
                creadorEncuesta: this.creadorEncuesta
            });
            var alert_1 = this.alertCtrl.create({
                title: 'Exito!',
                subTitle: 'Encuesta cargada exitosamente',
                cssClass: "miClaseAlert",
                buttons: ['Listo']
            });
            alert_1.present();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__encuestas_encuestas__["a" /* EncuestasPage */]);
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "Info",
                subTitle: "Faltan datos",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert_2.present();
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
    EncuestasAltaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-encuestas-alta',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\encuestas-alta\encuestas-alta.html"*/'<!--\n\n  Generated template for the EncuestasAltaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Crear encuesta</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenCuestionarios.jpg\')" class="fondo">\n\n   \n\n  <ion-card-content>\n\n    \n\n    <ion-list >  \n\n      <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Nombre de la encuesta</ion-label>\n\n      <ion-input type="text" [(ngModel)]="nombre" disabled="false"></ion-input> \n\n      </ion-item>\n\n    \n\n  \n\n      <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Pregunta</ion-label>\n\n      <ion-input type="text" [(ngModel)]="pregunta" disabled="false"></ion-input> \n\n      </ion-item>\n\n\n\n      <ion-item class="animated flipInX miItem">\n\n        <ion-label class="miLabel" floating>Primera opción</ion-label>\n\n        <ion-input type="text" [(ngModel)]="respuesta1" disabled="false"></ion-input> \n\n        </ion-item>\n\n\n\n        <ion-item class="animated flipInX miItem">\n\n          <ion-label class="miLabel" floating>Segunda opción</ion-label>\n\n          <ion-input type="text" [(ngModel)]="respuesta2" disabled="false"></ion-input> \n\n          </ion-item>\n\n\n\n          <ion-item class="animated flipInX miItem">\n\n            <ion-label class="miLabel" floating>Formato</ion-label>\n\n          <ion-select [(ngModel)]="formato">\n\n         \n\n            <ion-option>Radio botones</ion-option> \n\n           <!-- <ion-option>Checkbox</ion-option> -->\n\n            <ion-option>Botones</ion-option> \n\n            <ion-option>Selección de opciones</ion-option> \n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      <ion-item class="animated flipInX miItem">\n\n        <ion-label class="miLabel" floating>Duración</ion-label>\n\n      <ion-select [(ngModel)]="duracion">\n\n      \n\n        <ion-option >5 minutos</ion-option> \n\n        <ion-option >30 minutos</ion-option> \n\n        <ion-option >60 minutos</ion-option> \n\n      </ion-select>\n\n    </ion-item>\n\n     <!-- <ion-item class="animated flipInX miItem">\n\n          <ion-label class="miLabel" floating>Fecha de Inicio</ion-label>\n\n          <ion-datetime displayFormat="D/M/YYYY HH:mm:ss" [(ngModel)]="horaAux"></ion-datetime>\n\n        </ion-item>-->\n\n    \n\n\n\n    <!--\n\n    <ion-item class="animated flipInX miItem">\n\n        <ion-label class="miLabel" floating>Fecha y hora de inicio (opcional)</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="fechaInicio"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item class="animated flipInX miItem">\n\n          <ion-label class="miLabel" floating>Fecha y hora de finalización (opcional)</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="fechaFinalizacion"></ion-datetime>\n\n        </ion-item>\n\n      -->\n\n\n\n\n\n    <button  ion-button round class="botonGuardar"  (click)="Guardar()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar</button>\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n          </ion-card-content>\n\n\n\n\n\n\n\n          \n\n        </ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\encuestas-alta\encuestas-alta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], EncuestasAltaPage);
    return EncuestasAltaPage;
}());

//# sourceMappingURL=encuestas-alta.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestasEditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encuestas_encuestas__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(36);
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
    EncuestasEditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-encuestas-editar',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\encuestas-editar\encuestas-editar.html"*/'<!--\n\n  Generated template for the EncuestasEditarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="dark">\n\n      <ion-title>Editar encuesta "{{encuestaAmodificar.nombre}}"</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding style="background-image:url(\'assets/hallowenCuestionarios.jpg\')" class="fondo">\n\n     \n\n    <ion-card-content>\n\n      \n\n      <ion-list >  \n\n        <ion-item class="animated flipInX miItem">\n\n        <ion-label class="miLabel" floating>Nombre de la encuesta</ion-label>\n\n        <ion-input type="text" [(ngModel)]="encuestaAmodificar.nombre" disabled="false"></ion-input> \n\n        </ion-item>\n\n      \n\n    \n\n        <ion-item class="animated flipInX miItem">\n\n        <ion-label class="miLabel" floating>Pregunta</ion-label>\n\n        <ion-input type="text" [(ngModel)]="encuestaAmodificar.pregunta" disabled="false"></ion-input> \n\n        </ion-item>\n\n  \n\n        <ion-item class="animated flipInX miItem">\n\n          <ion-label class="miLabel" floating>Primera opción</ion-label>\n\n          <ion-input type="text" [(ngModel)]="encuestaAmodificar.respuesta1" disabled="false"></ion-input> \n\n          </ion-item>\n\n  \n\n          <ion-item class="animated flipInX miItem">\n\n            <ion-label class="miLabel" floating>Segunda opción</ion-label>\n\n            <ion-input type="text" [(ngModel)]="encuestaAmodificar.respuesta2" disabled="false"></ion-input> \n\n            </ion-item>\n\n  \n\n            <ion-item class="animated flipInX miItem">\n\n              <ion-label class="miLabel" floating>Formato</ion-label>\n\n            <ion-select [(ngModel)]="encuestaAmodificar.formato">\n\n           \n\n              <ion-option>Radio botones</ion-option> \n\n             <!-- <ion-option>Checkbox</ion-option> -->\n\n              <ion-option>Botones</ion-option> \n\n              <ion-option>Selección de opciones</ion-option> \n\n            </ion-select>\n\n          </ion-item>\n\n  <!--\n\n          <ion-item class="animated flipInX miItem">\n\n            <ion-label class="miLabel" floating>Duración</ion-label>\n\n          <ion-select [(ngModel)]="encuestaAmodificar.duracion">\n\n          \n\n            <ion-option>5 minutos</ion-option> \n\n            <ion-option>30 minutos</ion-option> \n\n            <ion-option>55 minutos</ion-option> \n\n          </ion-select>\n\n        </ion-item>\n\n      -->\n\n\n\n      <!--\n\n    <ion-item class="animated flipInX miItem">\n\n        <ion-label class="miLabel" floating>Fecha y hora de inicio (opcional)</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="encuestaAmodificar.fechaInicio"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item class="animated flipInX miItem">\n\n          <ion-label class="miLabel" floating>Fecha y hora de finalización (opcional)</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="encuestaAmodificar.fechaFinalizacion"></ion-datetime>\n\n        </ion-item>\n\n      -->        \n\n  \n\n  \n\n      <button  ion-button round class="botonGuardar"  (click)="EditarEncuestaa(encuestaAmodificar)"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar Modificación</button>\n\n  \n\n  \n\n      </ion-list>\n\n  \n\n  \n\n            </ion-card-content>\n\n  \n\n  \n\n  \n\n            \n\n          </ion-content>\n\n  '/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\encuestas-editar\encuestas-editar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], EncuestasEditarPage);
    return EncuestasEditarPage;
}());

//# sourceMappingURL=encuestas-editar.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_alumno_inicio_alumno__ = __webpack_require__(169);
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
    EditarPerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editar-perfil',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\editar-perfil\editar-perfil.html"*/'<!--\n\n  Generated template for the EditarPerfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Modifique su contraseña</ion-title>\n\n   </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n\n\n  <ion-list >  \n\n<ion-item class="animated flipInX miItem">\n\n<ion-label class="miLabel" floating>Contraseña</ion-label>\n\n<ion-input type="text" [(ngModel)]="datosUsuario.password" disabled="false"></ion-input> \n\n</ion-item>\n\n\n\n\n\n\n\n\n\n</ion-list>\n\n<button  ion-button round class="botonGuardar"  (click)="Guardar()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\editar-perfil\editar-perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditarPerfilPage);
    return EditarPerfilPage;
}());

//# sourceMappingURL=editar-perfil.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealInicioAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aula_administrativo_aula_administrativo__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materias_administrativo_materias_administrativo__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cagar_archivo_cagar_archivo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tomar_lista_tomar_lista__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__abm_alumnos_abm_alumnos__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__qr_encuestas_qr_encuestas__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tutorial_tutorial__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// for databas












/**
 * Generated class for the RealInicioAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RealInicioAdministrativoPage = (function () {
    function RealInicioAdministrativoPage(navCtrl, modalCtrl, barcode, alertCtrl, navParams, fireService, db, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.barcode = barcode;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.listadoProfesores = [];
        this.listadoAlumnos = [];
        this.listadoEncuestas = [];
        this.listaMaterias = [];
        this.listaAux = [];
        this.view = [700, 150];
        this.view2 = [700, 150];
        this.listFaltantes = [];
        this.listFaltantesB = [];
        this.listadoFaltas = [];
        this.informacion = [];
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listadoAlumnos = data;
        });
        this.fireService.getMaterias().subscribe(function (data) {
            _this.listaMaterias = data;
        });
        this.fireService.getProfesores().subscribe(function (data) {
            _this.listadoProfesores = data;
        });
        this.db.list("/tomarA").subscribe(function (data) {
            _this.listFaltantes = data;
        });
        this.db.list("/tomarB").subscribe(function (data) {
            _this.listFaltantesB = data;
        });
        this.db.list('/notificacionFalta').
            subscribe(function (data) {
            _this.datosfaltas = data;
            console.log(_this.datosfaltas);
            var bandera = false;
            for (var i = 0; i < _this.datosfaltas.length; i++) {
                //if(localStorage.getItem("mail")==this.datosfaltas[i].mail){
                var toast = _this.toastCtrl.create({
                    message: 'El alumno' + ' ' + _this.datosfaltas[i].alumno + ' ' + 'tiene' + ' ' + _this.datosfaltas[i].cantidadFaltas + ' ' + 'faltas!!!',
                    duration: 4000,
                    position: 'top'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
            }
        });
    }
    RealInicioAdministrativoPage.prototype.applyDimensions = function () {
        var width = this.content.getContentDimensions().contentWidth - 50;
        var state = width >= 320;
        this.showXAxisLabel = state;
        this.showYAxisLabel = state;
        this.showLegend = state;
        this.view = [width, 150];
    };
    RealInicioAdministrativoPage.prototype.cursar = function (curso) {
        var _this = this;
        this.aula = curso.aula;
        this.materia = curso.materia;
        this.db.list("/tomarA").subscribe(function (data) {
            _this.listFaltantes = data;
        });
        this.db.list("/tomarB").subscribe(function (data) {
            _this.listFaltantesB = data;
        });
        this.applyDimensions();
        window.addEventListener('resize', function () {
            _this.applyDimensions();
        }, false);
        if (this.aula == "4A" && this.materia == "PPS") {
            var contador = 0;
            for (var i = 0; i < this.listFaltantes.length; i++) {
                var element = this.listFaltantes[i];
                if (element.contPresentes != 0) {
                    contador++;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': this.listFaltantes.length - contador
                }
            ];
        }
        else if (this.aula == "4B" && this.materia == "PPS") {
            var contador = 0;
            for (var i = 0; i < this.listFaltantesB.length; i++) {
                var element = this.listFaltantesB[i];
                if (element.contPresentes != 0) {
                    contador++;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': this.listFaltantesB.length - contador
                }
            ];
        }
        else {
            var contador = 0;
            var cantidad = 0;
            for (var i = 0; i < this.listadoAlumnos.length; i++) {
                var element = this.listadoAlumnos[i];
                if (element.aula == this.aula && element.materia == this.materia) {
                    cantidad = element.alumnos.length;
                    contador = Math.round(Math.random() * cantidad);
                    break;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': cantidad - contador
                }
            ];
        }
    };
    RealInicioAdministrativoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.aula = "4A";
        this.materia = "PPS";
        this.seleccion = "";
        console.log('ionViewDidLoad RealInicioAdministrativoPage');
        this.db.list("/tomarA").subscribe(function (data) {
            _this.listFaltantes = data;
        });
        this.db.list("/tomarB").subscribe(function (data) {
            _this.listFaltantesB = data;
        });
        this.db.list('/encuestas').subscribe(function (data) {
            _this.listadoEncuestas = data;
        });
        setTimeout(function () {
            _this.activar();
        }, 1000);
    };
    RealInicioAdministrativoPage.prototype.activar = function () {
        var _this = this;
        this.applyDimensions();
        window.addEventListener('resize', function () {
            _this.applyDimensions();
        }, false);
        if (this.aula == "4A" && this.materia == "PPS") {
            var contador = 0;
            for (var i = 0; i < this.listFaltantes.length; i++) {
                var element = this.listFaltantes[i];
                if (element.contPresentes != 0) {
                    contador++;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': this.listFaltantes.length - contador
                }
            ];
        }
        else if (this.aula == "4B" && this.materia == "PPS") {
            var contador = 0;
            for (var i = 0; i < this.listFaltantesB.length; i++) {
                var element = this.listFaltantesB[i];
                if (element.contPresentes != 0) {
                    contador++;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': this.listFaltantesB.length - contador
                }
            ];
        }
        else {
            var contador = 0;
            var cantidad = 0;
            for (var i = 0; i < this.listadoAlumnos.length; i++) {
                var element = this.listadoAlumnos[i];
                if (element.aula == this.aula && element.materia == this.materia) {
                    cantidad = element.alumnos.length;
                    contador = Math.random() * cantidad;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': cantidad - contador
                }
            ];
        }
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
    RealInicioAdministrativoPage.prototype.cargarLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { persona: "alumno" });
        //  alert("voy a cargar lista");
        //alert("voy a cargar lista");
    };
    RealInicioAdministrativoPage.prototype.escanear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var flag, j, element2, textoReal, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.barcode.scan().then(function (barC) {
                            _this.texto = barC.text;
                            _this.formato = barC.format;
                            _this.cancelado = barC.cancelled;
                        })];
                    case 1:
                        _a.sent();
                        flag = false;
                        if (this.texto.startsWith("Encuesta")) {
                            for (j = 0; j < this.listadoEncuestas.length; j++) {
                                element2 = this.listadoEncuestas[j];
                                if (this.texto == element2.codigo) {
                                    textoReal = this.texto.slice(8);
                                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__qr_encuestas_qr_encuestas__["a" /* QrEncuestasPage */], { nombreEncuesta: textoReal });
                                    flag = true;
                                    break;
                                }
                                /*this.resultado="Se han añadido: "+element3.credito+" créditos a su cuenta";
                                this.crearCarga(element3.credito);*/
                            }
                            if (flag == false) {
                                alert_1 = this.alertCtrl.create({
                                    title: "Alerta",
                                    subTitle: "Código desconocido",
                                    cssClass: "miClaseDanger",
                                    buttons: [{ text: 'Aceptar' }]
                                });
                                alert_1.present();
                            }
                        }
                        else {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RealInicioAdministrativoPage.prototype.aparecer = function () {
        this.seleccion = "";
    };
    RealInicioAdministrativoPage.prototype.tomaLista = function () {
        // alert("voy a tomar lista");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tomar_lista_tomar_lista__["a" /* TomarListaPage */], { aulaa: "", materia: "" });
    };
    RealInicioAdministrativoPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
    };
    RealInicioAdministrativoPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__tutorial_tutorial__["a" /* TutorialPage */], { img: "real-inicio-administrativoTutorial.png" });
        modal.present();
    };
    RealInicioAdministrativoPage.prototype.lista = function () {
        // alert("voy a tomar lista");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__abm_alumnos_abm_alumnos__["a" /* AbmAlumnosPage */]);
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
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__materias_administrativo_materias_administrativo__["a" /* MateriasAdministrativoPage */], { materia: data.nombre, aula: data.aula });
                this.seleccion = "";
                break;
            case "materiasProfesor":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__materias_administrativo_materias_administrativo__["a" /* MateriasAdministrativoPage */], { materia: data.materia, aula: data.aula });
                this.seleccion = "";
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], RealInicioAdministrativoPage.prototype, "content", void 0);
    RealInicioAdministrativoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-real-inicio-administrativo',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\real-inicio-administrativo\real-inicio-administrativo.html"*/'<!--\n\n  Generated template for the RealInicioAdministrativoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n   <ion-title><button ion-button color="light" (click)=\'logout()\'>Salir</button>    <button ion-button color="danger" icon-only style="float:right" (click)=\'presentModal()\'><ion-icon style="size:200%" name="help-circle"></ion-icon></button> \n\n    \n\n  </ion-title>\n\n\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n\n  <div>\n\n    <ion-select interface=\'action-sheet\' style="float:left;color:white" >\n\n      <ion-option *ngFor="let curso of listadoAlumnos"  [selected]="curso.aula == \'4A\' && curso.materia==\'PPS\'" (ionSelect)="cursar(curso)" [value]="curso">{{curso.aula}},{{curso.materia}}</ion-option>   \n\n      \n\n    </ion-select>\n\n    </div>\n\n  <div>\n\n    \n\n  <div style="width:100%">\n\n      <ion-grid style="background-color:white;">\n\n        <h4>Faltas</h4>\n\n         <ion-row >\n\n           <ion-col >\n\n             <ngx-charts-bar-horizontal \n\n               [view]="view"\n\n               [results]="informacion"\n\n               xAxis="true"\n\n               yAxis="true"\n\n             >\n\n             </ngx-charts-bar-horizontal>\n\n           </ion-col>\n\n         </ion-row>\n\n       </ion-grid>\n\n      </div>\n\n    </div>\n\n     \n\n\n\n  <div *ngIf="seleccion==\'\'">\n\n      <button ion-button round full large  (click)="escanear()" class="animated flipInX miBoton miButton"> \n\n          <ion-icon name="arrow-round-back"></ion-icon> Escanear QR\n\n        </button>\n\n\n\n      <button ion-button round full large (click)="lista()" class="animated flipInX miBoton miButton"> \n\n          <ion-icon name="arrow-round-back"></ion-icon> Lista de Alumnos\n\n        </button>\n\n\n\n      <button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n\n          <ion-icon name="arrow-round-back"></ion-icon> Cargar Alumnos\n\n        </button>\n\n\n\n        <button ion-button round full large  (click)="tomaLista()" class="animated flipInX miBoton miButton"> \n\n            <ion-icon name="arrow-round-back"></ion-icon> Tomar Lista\n\n          </button>\n\n\n\n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'profesores\')">Profesores</button>           \n\n        <!--  <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'alumnos\')">Alumnos</button> -->\n\n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'materias\')">Materias</button> \n\n        </div>\n\n        <button *ngIf="seleccion!=\'\'" ion-button icon-only round color="primary" (click)="aparecer()" style="margin:auto;text-align:center;display:block;"><ion-icon md="md-arrow-back"></ion-icon></button>\n\n\n\n        <div *ngIf="seleccion==\'alumnos\'" > \n\n          <span *ngFor="let alumno of listaAlumnos">  <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.legajo)">{{alumno.nombre}}</button>  </span>\n\n      </div>\n\n\n\n      <div *ngIf="seleccion==\'materias\'"> \n\n        <span *ngFor="let materia of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(materia)">Materia:{{materia.nombre}},Aula:{{materia.aula}}</button> </span> \n\n    </div>\n\n\n\n      \n\n    <div *ngIf="seleccion==\'profesores\'" > \n\n        <span *ngFor="let profesor of listadoProfesores"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(profesor.Apellido)">{{profesor.Nombre}},{{profesor.Apellido}}</button> </span> \n\n     </div>\n\n\n\n    <div *ngIf="seleccion==\'materiasProfesor\'" > \n\n     <span *ngFor="let mp of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(mp)">Materia:{{mp.materia}},Aula:{{mp.aula}} </button>  </span>\n\n  </div>\n\n    \n\n  <div *ngIf="seleccion==\'aulasAlumnos\'" > \n\n      <span > <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(\'a\')">4º A </button>  </span>\n\n      <span > <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(\'b\')">4º B </button>  </span>\n\n      \n\n    </div>\n\n\n\n    <div *ngIf="seleccion==\'a\'" > \n\n        <span *ngFor="let alumno of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.nombre)">{{alumno.nombre}}</button>  </span>\n\n     </div>\n\n\n\n     <div *ngIf="seleccion==\'b\'" > \n\n        <span *ngFor="let alumno of listaAux"><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.nombre)">{{alumno.nombre}} </button>  </span>\n\n     </div>\n\n          \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\real-inicio-administrativo\real-inicio-administrativo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], RealInicioAdministrativoPage);
    return RealInicioAdministrativoPage;
}());

//# sourceMappingURL=real-inicio-administrativo.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notificacion_notificacion__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__materia_materia__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__encuestas_encuestas__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tomar_lista_tomar_lista__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_desasignar_materia_desasignar_materia__ = __webpack_require__(422);
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











/**
 * Generated class for the AulaProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MateriasAdministrativoPage = (function () {
    function MateriasAdministrativoPage(db, nativeAudio, navCtrl, navParams, fireService, loadingCtrl, screenOrientation, platform, afd, alertCtrl, modalCtrl) {
        var _this = this;
        this.db = db;
        this.nativeAudio = nativeAudio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.afd = afd;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.listaAlumnos = [];
        this.listadoAlumnos = [];
        this.listaAux = [];
        this.settings = {
            actions: {
                columnTitle: '',
                add: false,
                edit: false,
                delete: false
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
                    type: 'number',
                    editor: {
                        type: 'number',
                    },
                },
                nombre: {
                    title: 'nombre',
                    filter: false
                },
                Accion: {
                    title: 'Acción',
                    filter: false,
                    type: 'custom',
                    add: false,
                    edit: false,
                    addable: false,
                    editable: false,
                    isEditable: false,
                    isAddable: false,
                    renderComponent: __WEBPACK_IMPORTED_MODULE_12__components_desasignar_materia_desasignar_materia__["a" /* DesasignarMateriaComponent */],
                    onComponentInitFunction: this.actions.bind(this)
                }
                /*  Accion: {
                    title: 'Acción',
                    filter: false,
                    type:'custom',
                    add: false,
                    edit: false,
                    addable: false,
                    editable:false,
                    isEditable:false,
                    isAddable:false,
                    renderComponent: ButtonRenderComponent,
                    onComponentInitFunction: this.actions.bind(this)
                     
                    }*/
            }
        };
        this.view = [700, 150];
        this.view2 = [700, 150];
        this.listFaltantes = [];
        this.listFaltantesB = [];
        this.listadoFaltas = [];
        this.informacion = [];
        this.db.list("/tomarA").subscribe(function (data) {
            _this.listFaltantes = data;
        });
        this.db.list("/tomarB").subscribe(function (data) {
            _this.listFaltantesB = data;
        });
        this.aula = this.navParams.get('aula');
        this.materia = this.navParams.get('materia');
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.nativeAudio.preloadComplex('bienvenidoProfesor', 'assets/sonidos/1.mp3', 1, 1, 0);
        this.nativeAudio.play('bienvenidoProfesor');
    }
    MateriasAdministrativoPage.prototype.actions = function (instance) {
        var _this = this;
        instance.save.subscribe(function (row) {
            var nombreCompleto = row.nombre;
            for (var i = 0; i < _this.listadoAlumnos.length; i++) {
                var element = _this.listadoAlumnos[i];
                if (element.aula == _this.aula && element.materia == _this.materia) {
                    for (var j = 0; j < element.alumnos.length; j++) {
                        var element2 = element.alumnos[j];
                        if (row.mail == element2.mail) {
                            var list = [];
                            list = element.alumnos;
                            element.alumnos[j].vigente = false;
                            _this.fireService.updateAlumno(list, element['$key']);
                        }
                    }
                }
            }
            _this.afd.list("/alumno-lista").subscribe(function (data) {
                _this.listadoAlumnos = data;
                _this.activar();
            });
            //let profileModal = this.modalCtrl.create(AsignarMateriaAlumnoPage, { alumno: nombreCompleto,legajo:row.legajo });
            // profileModal.present();
        });
    };
    MateriasAdministrativoPage.prototype.activar = function () {
        this.listaAux = [];
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            var element = this.listadoAlumnos[i];
            if (element.aula == this.aula && element.materia == this.materia) {
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
    MateriasAdministrativoPage.prototype.applyDimensions = function () {
        var width = this.content.getContentDimensions().contentWidth - 50;
        var state = width >= 320;
        this.showXAxisLabel = state;
        this.showYAxisLabel = state;
        this.showLegend = state;
        this.view = [width, 150];
    };
    MateriasAdministrativoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.db.list("/tomarA").subscribe(function (data) {
            _this.listFaltantes = data;
        });
        this.db.list("/tomarB").subscribe(function (data) {
            _this.listFaltantesB = data;
        });
        //this.applyDimensions();
        //window.addEventListener('resize', () => {
        // this.applyDimensions();
        //}, false);
        if (this.aula == "4A" && this.materia == "PPS") {
            var contador = 0;
            for (var i = 0; i < this.listFaltantes.length; i++) {
                var element = this.listFaltantes[i];
                if (element.contPresentes != 0) {
                    contador++;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': this.listFaltantes.length - contador
                }
            ];
        }
        else if (this.aula == "4B" && this.materia == "PPS") {
            var contador = 0;
            for (var i = 0; i < this.listFaltantesB.length; i++) {
                var element = this.listFaltantesB[i];
                if (element.contPresentes != 0) {
                    contador++;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': this.listFaltantesB.length - contador
                }
            ];
        }
        else {
            var contador = Math.random() * 10;
            for (var i = 0; i < this.listFaltantes.length; i++) {
                var element = this.listFaltantes[i];
                if (element.contPresentes != 0) {
                    contador++;
                }
            }
            this.informacion = [
                {
                    'name': 'Con al menos una falta',
                    'value': contador
                },
                {
                    'name': 'Sin faltas',
                    'value': this.listFaltantes.length - contador
                }
            ];
        }
        //mofificar por la ruta y el archivo de bienvenida
        // this.nativeAudio.preloadComplex('bienvenido', 'assets/piano/1.mp3', 1, 1, 0);
        //  this.nativeAudio.play('bienvenido');
        this.afd.list("/alumno-lista").subscribe(function (data) {
            _this.listadoAlumnos = data;
            if (!_this.flag) {
                _this.flag = true;
                _this.activar();
            }
        });
    };
    MateriasAdministrativoPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.unlock();
    };
    MateriasAdministrativoPage.prototype.tomaLista = function () {
        // alert("voy a tomar lista");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__tomar_lista_tomar_lista__["a" /* TomarListaPage */], { aulaa: this.aula, materia: this.materia });
    };
    MateriasAdministrativoPage.prototype.crearNotificacion = function () {
        console.log(this.aula);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__notificacion_notificacion__["a" /* NotificacionPage */], { aulaa: this.aula, materia: this.materia });
    };
    MateriasAdministrativoPage.prototype.cargarLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { persona: "alumno" });
        //  alert("voy a cargar lista");
        //alert("voy a cargar lista");
    };
    MateriasAdministrativoPage.prototype.mostrarQr = function () {
        //alert("voy a qr");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__materia_materia__["a" /* MateriaPage */], { aulaa: this.aula, materia: this.materia });
    };
    MateriasAdministrativoPage.prototype.Encuestas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__encuestas_encuestas__["a" /* EncuestasPage */], { aulaa: this.aula, materia: this.materia });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], MateriasAdministrativoPage.prototype, "content", void 0);
    MateriasAdministrativoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-materias-administrativo',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\materias-administrativo\materias-administrativo.html"*/'<!--\n\n  Generated template for the AulaProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar color="dark">\n\n      <ion-title>Aula:{{aula}}, Materia {{materia}}</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content padding style="background-image:url(\'assets/aula-profesor.jpg\')" class="fondo">\n\n  \n\n   <!--gi <ion-list>\n\n                \n\n      <ion-item class="animated flipInX miItem">\n\n        <ion-label class="miLabel" floating>Divicion</ion-label>\n\n        <ion-input type="text" [(ngModel)]="miAulaProfesor.division" disabled="true"></ion-input> \n\n      </ion-item>\n\n                      \n\n      <ion-item class="animated flipInY miItem">\n\n        <ion-label class="miLabel" floating>Materia</ion-label>\n\n        <ion-input type="text" [(ngModel)]="miAulaProfesor.materia" disabled="true"></ion-input>\n\n      </ion-item>\n\n                  \n\n      <ion-item class="animated flipInX miItem" >\n\n        <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n\n        <ion-input type="text" [(ngModel)]="miAulaProfesor.cantidadAlumno" disabled="true"></ion-input>\n\n      </ion-item> \n\n    \n\n    </ion-list>-->\n\n  \n\n    <br><br>     \n\n     \n\n    \n\n      \n\n  <!--\n\n      <button ion-button round full large  (click)="tomaLista()" class="animated flipInX miBoton miButton"> \n\n        <ion-icon name="arrow-round-back"></ion-icon> Tomar Lista\n\n      </button>\n\n  <br><br>-->\n\n  <!--\n\n  <div style="width:100%">\n\n    <ion-grid style="background-color:white;">\n\n      <h4>Faltas</h4>\n\n       <ion-row >\n\n         <ion-col >\n\n           <ngx-charts-bar-horizontal \n\n             [view]="view"\n\n             [results]="informacion"\n\n             xAxis="true"\n\n             yAxis="true"\n\n           >\n\n           </ngx-charts-bar-horizontal>\n\n         </ion-col>\n\n       </ion-row>\n\n     </ion-grid>\n\n    </div>\n\n    ESTO NO [legend]="showLegend"\n\n             legendTitle="Votos"\n\n             [showXAxisLabel]="showXAxisLabel"\n\n             [showYAxisLabel]="showYAxisLabel"\n\n             xAxisLabel="votos"\n\n             yAxisLabel="resultado" -->\n\n             <br><br><br><br>\n\n             <ion-item >\n\n              <ion-label>Curso</ion-label>\n\n              <ion-select interface=\'action-sheet\' [(ngModel)]="seleccion" disabled (ionChange)="changeList($event)">\n\n                <ion-option (ionSelect)="changeList()" value="a">{{aula}}, {{materia}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item >\n\n            <div style=\'width:100%;height:100%\'>\n\n              <ng2-smart-table style=\'width:100%;height:100%\' [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"\n\n              (editConfirm)="onSaveConfirm($event)"\n\n              (createConfirm)="onCreateConfirm($event)"></ng2-smart-table></div>\n\n            </ion-item>\n\n          \n\n     \n\n      \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\materias-administrativo\materias-administrativo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], MateriasAdministrativoPage);
    return MateriasAdministrativoPage;
}());

//# sourceMappingURL=materias-administrativo.js.map

/***/ }),

/***/ 305:
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
webpackEmptyAsyncContext.id = 305;

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/abm-alumnos/abm-alumnos.module": [
		1055,
		31
	],
	"../pages/alumnos/alumnos.module": [
		1056,
		30
	],
	"../pages/asignar-materia-alumno/asignar-materia-alumno.module": [
		1058,
		29
	],
	"../pages/asignar-materia/asignar-materia.module": [
		1057,
		28
	],
	"../pages/aula-administrativo/aula-administrativo.module": [
		1059,
		27
	],
	"../pages/aula-alumno/aula-alumno.module": [
		1060,
		26
	],
	"../pages/aula-profesor/aula-profesor.module": [
		1061,
		25
	],
	"../pages/cagar-archivo/cagar-archivo.module": [
		1062,
		24
	],
	"../pages/cuestionarios/cuestionarios.module": [
		1063,
		23
	],
	"../pages/descargar-archivo/descargar-archivo.module": [
		1064,
		22
	],
	"../pages/editar-perfil/editar-perfil.module": [
		1065,
		21
	],
	"../pages/encuestas-alta/encuestas-alta.module": [
		1066,
		20
	],
	"../pages/encuestas-editar/encuestas-editar.module": [
		1067,
		19
	],
	"../pages/encuestas/encuestas.module": [
		1068,
		18
	],
	"../pages/inicio-admin/inicio-admin.module": [
		1070,
		17
	],
	"../pages/inicio-administrativo/inicio-administrativo.module": [
		1069,
		16
	],
	"../pages/inicio-alumno/inicio-alumno.module": [
		1071,
		15
	],
	"../pages/inicio-profesor/inicio-profesor.module": [
		1072,
		14
	],
	"../pages/login/login.module": [
		1074,
		13
	],
	"../pages/materia/materia.module": [
		1073,
		12
	],
	"../pages/materias-administrativo/materias-administrativo.module": [
		1075,
		11
	],
	"../pages/materias-profesor/materias-profesor.module": [
		1076,
		10
	],
	"../pages/materias/materias.module": [
		1077,
		9
	],
	"../pages/notificacion/notificacion.module": [
		1078,
		8
	],
	"../pages/perfil/perfil.module": [
		1079,
		7
	],
	"../pages/qr-encuestas/qr-encuestas.module": [
		1081,
		6
	],
	"../pages/qrencuesta/qrencuesta.module": [
		1080,
		5
	],
	"../pages/real-inicio-administrativo/real-inicio-administrativo.module": [
		1086,
		4
	],
	"../pages/respuesta-encuesta/respuesta-encuesta.module": [
		1082,
		3
	],
	"../pages/resultados-votacion/resultados-votacion.module": [
		1083,
		2
	],
	"../pages/tomar-lista/tomar-lista.module": [
		1084,
		1
	],
	"../pages/tutorial/tutorial.module": [
		1085,
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
webpackAsyncContext.id = 347;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 367:
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
    return ButtonRenderComponent;
}());

//# sourceMappingURL=button-renderer.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesasignarMateriaComponent; });
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

/**
 * Generated class for the DesasignarMateriaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DesasignarMateriaComponent = (function () {
    function DesasignarMateriaComponent() {
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DesasignarMateriaComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    DesasignarMateriaComponent.prototype.onClick = function () {
        this.save.emit(this.rowData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DesasignarMateriaComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DesasignarMateriaComponent.prototype, "rowData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DesasignarMateriaComponent.prototype, "save", void 0);
    DesasignarMateriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <button  ion-button color='secondary' (click)=\"onClick()\">Desasignar Materia</button>",
        })
    ], DesasignarMateriaComponent);
    return DesasignarMateriaComponent;
}());

//# sourceMappingURL=desasignar-materia.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.img = this.navParams.get('img');
    }
    TutorialPage.prototype.ionViewDidLoad = function () {
        //(<HTMLInputElement>document.getElementById('content2')).style.backgroundImage="url('assets/"+this.img+"')";
        document.getElementById('content2').src = "assets/" + this.img;
    };
    TutorialPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\tutorial\tutorial.html"*/'<!--\n  Generated template for the TutorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content  padding style="color:rgba(255, 255, 255, 0)">\n<img style="width:100%;height:90%" imageViewer class="fondo" id="content2">\n\n  <div style="position: relative;\n  width:100%;height:10%">\n    <br> <button ion-button round smmall style="margin:auto;text-align:center;bottom:0;position:absolute;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="dismiss()">Cerrar</button>\n  </div>\n\n  </ion-content>\n  '/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 540:
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
    AlumnosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alumnos',
            template: "\n\n  <ion-item style='float:right'>\n  <ion-label>Curso</ion-label>\n  <ion-select [(ngModel)]=\"seleccion\" (ionChange)=\"changeList($event)\">\n    <ion-option value=\"a\">4\u00BAA</ion-option>\n    <ion-option value=\"b\">4\u00BAB</ion-option>\n  </ion-select>\n</ion-item>\n<div style='width:100%;height:100%' *ngIf='seleccion==\"a\"'>\n  <ng2-smart-table style='width:100%;height:100%' [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div>\n  <div style='width:100%;height:100%' *ngIf='seleccion==\"b\"'>\n  <ng2-smart-table style='width:100%;height:100%'  [settings]=\"settings\" [source]=\"source2\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div>\n\n",
        })
    ], AlumnosPage);
    return AlumnosPage;
}());

//# sourceMappingURL=alumnos.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaAlumnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias_materias__ = __webpack_require__(120);
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
    AulaAlumnoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aula-alumno',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\aula-alumno\aula-alumno.html"*/'<!--\n\n  Generated template for the AulaAlumnoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Aula Alumno</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula.jpg\')" class="fondo">\n\n\n\n  <ion-list>\n\n\n\n   <!-- <ion-item>\n\n      <ion-label>Toppings</ion-label>\n\n        <ion-select [(ngModel)]="miAulaAlumno.turno"cancelText="cancelar" okText="elegir">\n\n          <ion-option value="nulo" selected="true">Elegir turno</ion-option>\n\n          <ion-option value="mañana">Mañana</ion-option>\n\n          <ion-option value="tarde" selected="true">Tarde</ion-option>\n\n          <ion-option value="noche">Noche</ion-option>\n\n        </ion-select>\n\n    </ion-item> -->\n\n\n\n    <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Turno</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.turno" disabled="true"></ion-input> \n\n    </ion-item>\n\n            \n\n     <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Profesor</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.profesor" disabled="true"></ion-input>\n\n     </ion-item>\n\n        \n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Materia</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.materia" disabled="true"></ion-input>\n\n    </ion-item> \n\n  </ion-list>\n\n      \n\n  <div>\n\n    <button ion-button round full large (click)=RedireccionMaterias()  class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Materias\n\n    </button>\n\n  </div>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\aula-alumno\aula-alumno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], AulaAlumnoPage);
    return AulaAlumnoPage;
}());

//# sourceMappingURL=aula-alumno.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuestionariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    CuestionariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cuestionarios',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\cuestionarios\cuestionarios.html"*/'<!--\n\n  Generated template for the MateriasProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione un cuestionario</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenCuestionarios.jpg\')" class="fondo">\n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionCrearCuestionario()">Crear cuestionario</button> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="MostrarCuestionariosProfesor()">Mostrar cuestionarios</button> \n\n          \n\n        </ion-content>'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\cuestionarios\cuestionarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], CuestionariosPage);
    return CuestionariosPage;
}());

//# sourceMappingURL=cuestionarios.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula_administrativo_aula_administrativo__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(36);
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
    InicioAdministrativoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio-administrativo',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\inicio-administrativo\inicio-administrativo.html"*/'<!--\n\n  Generated template for the InicioAdministrativoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione un aula</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n\n\n\n    <div *ngFor="let lista of listaAulas; let i = index"> \n\n        <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionAula(lista.nombre)">{{ lista.nombre }}</button> \n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\inicio-administrativo\inicio-administrativo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], InicioAdministrativoPage);
    return InicioAdministrativoPage;
}());

//# sourceMappingURL=inicio-administrativo.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__materia_materia__ = __webpack_require__(95);
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
    MateriasProfesorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-materias-profesor',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\materias-profesor\materias-profesor.html"*/'<!--\n\n  Generated template for the MateriasProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione una materia</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n\n  \n\n      <div *ngFor="let lista of listaMateriasProfesor; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(lista)">{{lista.aula}}, {{lista.materia}}</button> \n\n      </div>\n\n  \n\n  </ion-content>'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\materias-profesor\materias-profesor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]])
    ], MateriasProfesorPage);
    return MateriasProfesorPage;
}());

//# sourceMappingURL=materias-profesor.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\perfil\perfil.html"*/'<!--\n\n  Generated template for the PerfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrencuestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the QrencuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrencuestaPage = (function () {
    function QrencuestaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QrencuestaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QrencuestaPage');
    };
    QrencuestaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-qrencuesta',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\qrencuesta\qrencuesta.html"*/'<!--\n\n  Generated template for the QrencuestaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>qrencuesta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\qrencuesta\qrencuesta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], QrencuestaPage);
    return QrencuestaPage;
}());

//# sourceMappingURL=qrencuesta.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(556);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_admin_inicio_admin__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inicio_administrativo_inicio_administrativo__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inicio_profesor_inicio_profesor__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inicio_alumno_inicio_alumno__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aula_alumno_aula_alumno__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_aula_administrativo_aula_administrativo__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aula_profesor_aula_profesor__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_materias_materias__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_materias_profesor_materias_profesor__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_plus__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_screen_orientation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cuestionarios_cuestionarios__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cagar_archivo_cagar_archivo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_alumnos_alumnos__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_materia_materia__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_editar_perfil_editar_perfil__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_descargar_archivo_descargar_archivo__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_perfil_perfil__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_notificacion_notificacion__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_real_inicio_administrativo_real_inicio_administrativo__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_asignar_materia_asignar_materia__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_encuestas_encuestas__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_encuestas_alta_encuestas_alta__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_encuestas_editar_encuestas_editar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tomar_lista_tomar_lista__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_respuesta_encuesta_respuesta_encuesta__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_materias_administrativo_materias_administrativo__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_qrencuesta_qrencuesta__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_abm_alumnos_abm_alumnos__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_asignar_materia_alumno_asignar_materia_alumno__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_qr_encuestas_qr_encuestas__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_resultados_votacion_resultados_votacion__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_tutorial_tutorial__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_button_renderer_button_renderer__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_desasignar_materia_desasignar_materia__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_ionic_img_viewer__ = __webpack_require__(965);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































//import { DateValueAccessorModule } from 'angular-date-value-accessor';








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
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inicio_admin_inicio_admin__["a" /* InicioAdminPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_inicio_administrativo_inicio_administrativo__["a" /* InicioAdministrativoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inicio_alumno_inicio_alumno__["a" /* InicioAlumnoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aula_alumno_aula_alumno__["a" /* AulaAlumnoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aula_profesor_aula_profesor__["a" /* AulaProfesorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aula_administrativo_aula_administrativo__["a" /* AulaAdministrativoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_materias_materias__["a" /* MateriasPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_materias_profesor_materias_profesor__["a" /* MateriasProfesorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cuestionarios_cuestionarios__["a" /* CuestionariosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_alumnos_alumnos__["a" /* AlumnosPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_materia_materia__["a" /* MateriaPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_editar_perfil_editar_perfil__["a" /* EditarPerfilPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_descargar_archivo_descargar_archivo__["a" /* DescargarArchivoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_notificacion_notificacion__["a" /* NotificacionPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_real_inicio_administrativo_real_inicio_administrativo__["a" /* RealInicioAdministrativoPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_asignar_materia_asignar_materia__["a" /* AsignarMateriaPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_encuestas_encuestas__["a" /* EncuestasPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_encuestas_alta_encuestas_alta__["a" /* EncuestasAltaPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_encuestas_editar_encuestas_editar__["a" /* EncuestasEditarPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tomar_lista_tomar_lista__["a" /* TomarListaPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_respuesta_encuesta_respuesta_encuesta__["a" /* RespuestaEncuestaPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_materias_administrativo_materias_administrativo__["a" /* MateriasAdministrativoPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_qrencuesta_qrencuesta__["a" /* QrencuestaPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_abm_alumnos_abm_alumnos__["a" /* AbmAlumnosPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_asignar_materia_alumno_asignar_materia_alumno__["a" /* AsignarMateriaAlumnoPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_qr_encuestas_qr_encuestas__["a" /* QrEncuestasPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_resultados_votacion_resultados_votacion__["a" /* ResultadosVotacionPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_50__components_button_renderer_button_renderer__["a" /* ButtonRenderComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_desasignar_materia_desasignar_materia__["a" /* DesasignarMateriaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/abm-alumnos/abm-alumnos.module#AbmAlumnosPageModule', name: 'AbmAlumnosPage', segment: 'abm-alumnos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alumnos/alumnos.module#AlumnosPageModule', name: 'AlumnosPage', segment: 'alumnos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asignar-materia/asignar-materia.module#AsignarMateriaPageModule', name: 'AsignarMateriaPage', segment: 'asignar-materia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asignar-materia-alumno/asignar-materia-alumno.module#AsignarMateriaAlumnoPageModule', name: 'AsignarMateriaAlumnoPage', segment: 'asignar-materia-alumno', priority: 'low', defaultHistory: [] },
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
                        { loadChildren: '../pages/inicio-administrativo/inicio-administrativo.module#InicioAdministrativoPageModule', name: 'InicioAdministrativoPage', segment: 'inicio-administrativo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio-admin/inicio-admin.module#InicioAdminPageModule', name: 'InicioAdminPage', segment: 'inicio-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio-alumno/inicio-alumno.module#InicioAlumnoPageModule', name: 'InicioAlumnoPage', segment: 'inicio-alumno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio-profesor/inicio-profesor.module#InicioProfesorPageModule', name: 'InicioProfesorPage', segment: 'inicio-profesor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/materia/materia.module#MateriaPageModule', name: 'MateriaPage', segment: 'materia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/materias-administrativo/materias-administrativo.module#MateriasAdministrativoPageModule', name: 'MateriasAdministrativoPage', segment: 'materias-administrativo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/materias-profesor/materias-profesor.module#MateriasProfesorPageModule', name: 'MateriasProfesorPage', segment: 'materias-profesor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/materias/materias.module#MateriasPageModule', name: 'MateriasPage', segment: 'materias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificacion/notificacion.module#NotificacionPageModule', name: 'NotificacionPage', segment: 'notificacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qrencuesta/qrencuesta.module#QrencuestaPageModule', name: 'QrencuestaPage', segment: 'qrencuesta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-encuestas/qr-encuestas.module#QrEncuestasPageModule', name: 'QrEncuestasPage', segment: 'qr-encuestas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/respuesta-encuesta/respuesta-encuesta.module#RespuestaEncuestaPageModule', name: 'RespuestaEncuestaPage', segment: 'respuesta-encuesta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultados-votacion/resultados-votacion.module#ResultadosVotacionPageModule', name: 'ResultadosVotacionPage', segment: 'resultados-votacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tomar-lista/tomar-lista.module#TomarListaPageModule', name: 'TomarListaPage', segment: 'tomar-lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/real-inicio-administrativo/real-inicio-administrativo.module#RealInicioAdministrativoPageModule', name: 'RealInicioAdministrativoPage', segment: 'real-inicio-administrativo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_42__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_52_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inicio_admin_inicio_admin__["a" /* InicioAdminPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_inicio_administrativo_inicio_administrativo__["a" /* InicioAdministrativoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inicio_alumno_inicio_alumno__["a" /* InicioAlumnoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aula_alumno_aula_alumno__["a" /* AulaAlumnoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aula_administrativo_aula_administrativo__["a" /* AulaAdministrativoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aula_profesor_aula_profesor__["a" /* AulaProfesorPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_materias_materias__["a" /* MateriasPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_materias_profesor_materias_profesor__["a" /* MateriasProfesorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cuestionarios_cuestionarios__["a" /* CuestionariosPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_alumnos_alumnos__["a" /* AlumnosPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_materia_materia__["a" /* MateriaPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_editar_perfil_editar_perfil__["a" /* EditarPerfilPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_descargar_archivo_descargar_archivo__["a" /* DescargarArchivoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_notificacion_notificacion__["a" /* NotificacionPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_real_inicio_administrativo_real_inicio_administrativo__["a" /* RealInicioAdministrativoPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_asignar_materia_asignar_materia__["a" /* AsignarMateriaPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_encuestas_encuestas__["a" /* EncuestasPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_encuestas_alta_encuestas_alta__["a" /* EncuestasAltaPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_encuestas_editar_encuestas_editar__["a" /* EncuestasEditarPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tomar_lista_tomar_lista__["a" /* TomarListaPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_respuesta_encuesta_respuesta_encuesta__["a" /* RespuestaEncuestaPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_materias_administrativo_materias_administrativo__["a" /* MateriasAdministrativoPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_qrencuesta_qrencuesta__["a" /* QrencuestaPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_abm_alumnos_abm_alumnos__["a" /* AbmAlumnosPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_asignar_materia_alumno_asignar_materia_alumno__["a" /* AsignarMateriaAlumnoPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_qr_encuestas_qr_encuestas__["a" /* QrEncuestasPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_resultados_votacion_resultados_votacion__["a" /* ResultadosVotacionPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_50__components_button_renderer_button_renderer__["a" /* ButtonRenderComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_desasignar_materia_desasignar_materia__["a" /* DesasignarMateriaComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_audio__["a" /* NativeAudio */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GeochemComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CagarArchivoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__descargar_archivo_descargar_archivo__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__asignar_materia_asignar_materia__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tutorial_tutorial__ = __webpack_require__(52);
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
    GeochemComponent.muestras = [];
    GeochemComponent.muestras2 = [];
    return GeochemComponent;
}());

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
        this.listaGen = [];
        this.listaA = {};
        this.listaAlumnoItem = [];
        this.abmAlumnos = [];
        this.aula = "";
        this.listaProfesores = [];
        this.listaAdministrativos = [];
        this.materia = "";
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
        var _this = this;
        this.firebaseService.getABMAlumnos().subscribe(function (data) {
            _this.abmAlumnos = data;
        });
    };
    CagarArchivoPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__tutorial_tutorial__["a" /* TutorialPage */], { img: "cagar-archivoTutorial.png" });
        modal.present();
    };
    CagarArchivoPage.prototype.leeArchivos = function (numarchivo, file) {
        var _this = this;
        var fr = new FileReader();
        fr.readAsText(file, 'ISO-8859-4');
        //console.log(this.listaAlumnos);
        //console.log(file.name);
        //console.log(file.size);
        this.nombreArchivo = file.name;
        this.sizeArchivo = file.size / 1000 + " Kb";
        console.log(this.nombreArchivo);
        if (this.persona == "alumno") {
            this.firebaseService.getABMAlumnos().subscribe(function (data) {
                _this.abmAlumnos = data;
            });
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
            if (this.nombreArchivo.includes("profesores")) {
                var admin_1 = {};
                var lista_2 = [];
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
                        admin_1.DNI = elemento[0].trim();
                        admin_1.Apellido = elemento[1].trim();
                        admin_1.Nombre = elemento[2].trim();
                        admin_1.Email = elemento[3].trim();
                        admin_1.password = elemento[0].trim();
                        admin_1.Perfil = "Profesor";
                        lista_2.push(admin_1);
                        admin_1 = {};
                    }
                    if (numarchivo == 0) {
                        GeochemComponent.muestras = arrayFilas.slice();
                    }
                    else if (numarchivo == 1) {
                        GeochemComponent.muestras2 = arrayFilas.slice();
                    }
                };
                fr.readAsText(file, 'ISO-8859-4');
                this.listaGen = lista_2;
                //console.log(this.listaAlumnos);
                //console.log(file.name);
                //console.log(file.size);
                this.nombreArchivo = file.name;
                this.sizeArchivo = file.size / 1000 + " Kb";
                //this.firebaseService.updateProfesor(lista);
                //console.log(lista);
                //this.database.list('/SiFunca/').push(lista);
            }
        }
        else if (this.persona == "administrativo") {
            if (this.nombreArchivo.includes("administrativos")) {
                var admin_2 = {};
                var lista_3 = [];
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
                        admin_2.DNI = elemento[0].trim();
                        admin_2.Apellido = elemento[1].trim();
                        admin_2.Nombre = elemento[2].trim();
                        admin_2.Email = elemento[3].trim();
                        admin_2.password = elemento[0].trim();
                        admin_2.Perfil = "Administrativo";
                        lista_3.push(admin_2);
                        admin_2 = {};
                    }
                    if (numarchivo == 0) {
                        GeochemComponent.muestras = arrayFilas.slice();
                    }
                    else if (numarchivo == 1) {
                        GeochemComponent.muestras2 = arrayFilas.slice();
                    }
                };
                fr.readAsText(file, 'ISO-8859-4');
                this.listaGen = lista_3;
                //console.log(this.listaAlumnos);
                //console.log(file.name);
                //console.log(file.size);
                this.nombreArchivo = file.name;
                this.sizeArchivo = file.size / 1000 + " Kb";
                //
            }
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
            this.listaA.materia = rows[0];
            this.listaA.aula = rows[1];
            this.aula = rows[1];
            this.materia = rows[0];
            this.listaA.alumnos = this.listaAlumnos;
            var cont = void 0;
            cont = this.listaAlumnoItem.length;
            var listaAx = [];
            var banderaGlobal = false;
            for (var o = 0; o < this.listaAlumnoItem.length; o++) {
                var element = this.listaAlumnoItem[o];
                if (element.aula == this.listaA.aula && element.materia == this.listaA.materia) {
                    var listaAux = [];
                    listaAux = this.listaAlumnoItem;
                    listaAux[o].alumnos = this.listaA.alumnos;
                    this.firebaseService.agregarLista(listaAux);
                    this.banderita = true;
                    for (var u = 0; u < this.listaA.alumnos.length; u++) {
                        var elementu = this.listaA.alumnos[u];
                        for (var h = 0; h < this.abmAlumnos.length; h++) {
                            var elementh = this.abmAlumnos[h];
                            var bandera = false;
                            if (elementh.mail == elementu.mail) {
                                this.abmAlumnos[h] = elementu;
                                bandera = true;
                                banderaGlobal = true;
                                break;
                            }
                        }
                        if (!banderaGlobal) {
                            this.abmAlumnos.push(elementu);
                        }
                    }
                    listaAx = this.abmAlumnos;
                    this.firebaseService.updateABMAlumno(listaAx);
                    break;
                }
            }
            if (this.banderita == false) {
                if (this.aula != "GENERAL" && this.materia != "GENERAL" && this.aula != null && this.materia != null) {
                    var listaAx_1 = [];
                    this.firebaseService.agregarListaDENAZI(this.listaA, cont);
                }
                for (var u = 0; u < this.listaA.alumnos.length; u++) {
                    var banderaGlobal_1 = false;
                    var elementu = this.listaA.alumnos[u];
                    for (var h = 0; h < this.abmAlumnos.length; h++) {
                        var elementh = this.abmAlumnos[h];
                        var bandera = false;
                        if (elementh.mail == elementu.mail) {
                            this.abmAlumnos[h] = elementu;
                            bandera = true;
                            banderaGlobal_1 = true;
                            break;
                        }
                    }
                    if (!banderaGlobal_1) {
                        this.abmAlumnos.push(elementu);
                    }
                }
                listaAx = this.abmAlumnos;
                this.firebaseService.updateABMAlumno(listaAx);
            }
            console.log(this.aula);
            if (this.aula == "4A" && this.materia == "PPS") {
                console.log("entro a A");
                this.listaAlumnos.forEach(function (alumno) {
                    _this.firebaseService.agregarListaA(alumno);
                });
            }
            else if (this.aula == "4B" && this.materia == "PPS") {
                console.log("entro a B");
                this.listaAlumnos.forEach(function (alumno) {
                    _this.firebaseService.agregarListaB(alumno);
                });
            }
            //    this.presentAlert("Guardar Lista","Se guado correcetamente la lista");
            var alert_1 = this.alertCtrl.create({
                title: "Guardar Lista",
                subTitle: "La lista se guardó correctamente",
                cssClass: "miClaseAlert",
                buttons: [{ text: 'Aceptar',
                        handler: function () {
                            if (_this.aula != "GENERAL" && _this.materia != "GENERAL" && _this.aula != null && _this.materia != null) {
                                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__asignar_materia_asignar_materia__["a" /* AsignarMateriaPage */], { materia: _this.listaA.materia, aula: _this.listaA.aula });
                                profileModal.present();
                            }
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else if (this.persona == "profesor") {
            if (this.nombreArchivo.includes("profesores")) {
                console.log('---------- ingreso a profesores carga ---------');
                this.firebaseService.updateProfesor(this.listaGen);
                //this.database.list('/profesores/').push(this.listaGen);
                var alert_2 = this.alertCtrl.create({
                    title: "Guardar Lista",
                    subTitle: "La lista se guardó correctamente",
                    cssClass: "miClaseAlert",
                    buttons: [{ text: 'Aceptar' }]
                });
                alert_2.present();
            }
            else {
                var alert_3 = this.alertCtrl.create({
                    title: "Error",
                    subTitle: "El archivo no tiene el nombre adecuado",
                    cssClass: "miClaseDanger",
                    buttons: [{ text: 'Aceptar' }]
                });
                alert_3.present();
            }
        }
        else if (this.persona == "administrativo") {
            if (this.nombreArchivo.includes("administrativos")) {
                console.log('---------- ingreso a administrativos carga ---------');
                this.firebaseService.updateAdministrativo(this.listaGen);
                var alert_4 = this.alertCtrl.create({
                    title: "Guardar Lista",
                    subTitle: "La lista se guardó correctamente",
                    cssClass: "miClaseAlert",
                    buttons: [{ text: 'Aceptar' }]
                });
                alert_4.present();
                //this.database.list('/administrativos/').push(this.listaGen);
            }
            else {
                var alert_5 = this.alertCtrl.create({
                    title: "Error",
                    subTitle: "El archivo no tiene el nombre adecuado",
                    cssClass: "miClaseDanger",
                    buttons: [{ text: 'Aceptar' }]
                });
                alert_5.present();
            }
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
            var alert_6 = this.alertCtrl.create({
                title: "Sin Alumnos",
                subTitle: "No hay nada que descargar",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert_6.present();
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
    CagarArchivoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cagar-archivo',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\cagar-archivo\cagar-archivo.html"*/'<!--\n\n  Generated template for the CagarArchivoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Cargar Archivo <button ion-button color="danger" icon-only style="float:right" (click)=\'presentModal()\'><ion-icon style="size:200%" name="help-circle"></ion-icon></button> </ion-title>  \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/nube.jpg\')" class="fondo">\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <!--<label>{{label}}</label>-->\n\n      <!--(change)="fileUpload($event)"-->\n\n      <!--<input type=\'file\' name=\'userFile\' id=\'file\' (change)="onFileSelect($event.target)" style="display: none" multiple> #fileInp-->\n\n      <input type="file" (change)="onFileSelect($event.target)" id="file-input"  style="opacity: 0">\n\n      <ion-icon name="cloud-done">Selecionar archivo .csv</ion-icon>\n\n      <!--<button ion-button (click)="onClick()">Cargar</button>-->\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <p *ngIf="nombreArchivo">Nombre: {{nombreArchivo}}</p>\n\n      <p *ngIf="sizeArchivo">Tamaño: {{sizeArchivo}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  \n\n  <div>\n\n    <button center ion-button round full large *ngIf="nombreArchivo!=null" (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="cloud-done"></ion-icon> Subir\n\n    </button>\n\n    <button center ion-button round full large (click)="descargarArchivo()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="cloud-done"></ion-icon> Descargar\n\n    </button>\n\n  </div>\n\n  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\cagar-archivo\cagar-archivo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], CagarArchivoPage);
    return CagarArchivoPage;
}());

//# sourceMappingURL=cagar-archivo.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_admin_inicio_admin__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_alumno_inicio_alumno__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__real_inicio_administrativo_real_inicio_administrativo__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__materias_materias__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tutorial_tutorial__ = __webpack_require__(52);
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
    function LoginPage(navCtrl, navParams, loadingCtrl, fireService, toast, googlePlus, screenOrientation, modalCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.fireService = fireService;
        this.toast = toast;
        this.googlePlus = googlePlus;
        this.screenOrientation = screenOrientation;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.listadoAdmins = [];
        this.listadoAlumnos = [];
        this.listadoProfesores = [];
        this.listadoAdministrativos = [];
        this.listaAux = [];
        this.oct = { email: 'octavio.villegas@gmail.com', password: '28123654' };
        this.dal = { email: 'adiliberti@utn', password: '103295' };
        this.mauroo = { email: 'mauro.suppan@gmail.com', password: '28123654' };
        this.maxii = { email: 'maxineiner@gmail.com', password: '29134587' };
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
    LoginPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__tutorial_tutorial__["a" /* TutorialPage */], { img: "loginTutorial.png" });
        modal.present();
    };
    LoginPage.prototype.mauro = function () {
        this.email = this.mauroo.email;
        this.password = this.mauroo.password;
    };
    LoginPage.prototype.maxi = function () {
        this.email = this.maxii.email;
        this.password = this.maxii.password;
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
            var firecreds = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken);
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().signInWithCredential(firecreds).then(function (res) {
                for (var i = 0; i < _this.listadoAdmins.length; i++) {
                    var element = _this.listadoAdmins[i];
                    if (element.Email == __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.email) {
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
                        for (var j = 0; j < element.alumnos.length; j++) {
                            var element2 = element.alumnos[j];
                            if (element2.mail == __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.email) {
                                localStorage.setItem("nombre", element2.nombre);
                                localStorage.setItem("mail", element2.mail);
                                localStorage.setItem("curso", element.aula);
                                localStorage.setItem("legajo", element2.legajo);
                                localStorage.setItem("turno", element2.turno);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__materias_materias__["a" /* MateriasPage */]);
                                flag = true;
                                break;
                            }
                            else if (element2.mail == _this.email && element2.legajo == _this.password) {
                                var alert_1 = _this.alertCtrl.create({
                                    title: "Info",
                                    subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                                    cssClass: "miClaseDanger",
                                    buttons: ['Aceptar']
                                });
                                alert_1.present();
                                //        this.google=true;
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
                            localStorage.setItem("Perfil", "Profesor");
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
                    var alert_2 = _this.alertCtrl.create({
                        title: "Info!",
                        subTitle: "Usuario no registrado",
                        cssClass: "miClaseDanger",
                        buttons: ['Aceptar']
                    });
                    alert_2.present();
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
                var alert_3 = this.alertCtrl.create({
                    title: "Info!",
                    subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                    cssClass: "miClaseDanger",
                    buttons: ['Aceptar']
                });
                alert_3.present();
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
                    var alert_4 = this.alertCtrl.create({
                        title: "Info!",
                        subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                        cssClass: "miClaseAlert",
                        buttons: ['Aceptar']
                    });
                    alert_4.present();
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
                for (var j = 0; j < element.alumnos.length; j++) {
                    var element2 = element.alumnos[j];
                    if (element2.mail == this.email && element2.legajo == this.password) {
                        localStorage.setItem("nombre", element2.nombre);
                        localStorage.setItem("mail", element2.mail);
                        localStorage.setItem("curso", element.aula);
                        localStorage.setItem("legajo", element2.legajo);
                        localStorage.setItem("turno", element2.turno);
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__materias_materias__["a" /* MateriasPage */]);
                        flag = true;
                        break;
                    }
                    else if (element2.mail == this.email && element2.legajo != this.password) {
                        var alert_5 = this.alertCtrl.create({
                            title: "Info!",
                            subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                            cssClass: "miClaseDanger",
                            buttons: ['Aceptar']
                        });
                        alert_5.present();
                        //  this.google=true;
                    }
                }
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
                    localStorage.setItem("Perfil", "Profesor");
                    flag = true;
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */]);
                    break;
                }
                else if (elementh.Email == this.email && elementh.password == null) {
                    var alert_6 = this.alertCtrl.create({
                        title: "Info!",
                        subTitle: "Contraseña incorrecta,prueba iniciar Sesión con Google porfavor",
                        cssClass: "miClaseDanger",
                        buttons: ['Aceptar']
                    });
                    alert_6.present();
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
            var alert_7 = this.alertCtrl.create({
                title: "Info!",
                subTitle: "Usuario no registrado o contraseña incorrecta",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert_7.present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Inicio de Sesión<button ion-button color="danger" icon-only style="float:right" (click)=\'presentModal()\'><ion-icon style="size:200%" name="help-circle"></ion-icon></button> </ion-title>  \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n\n \n\n<div>\n\n  <br>\n\n  <div style="width:50%;height:10%;margin:auto;text-align:center;display:block;">\n\n<!--<button ion-button icon-right color="danger" style="font-size:11pt;margin:auto;text-align:center;display:block;" round (click)="loginGoogle()">\n\nIniciar sesión con Google<ion-icon style="font-size:250%;margin:auto;text-align:center;display:block;" name="logo-googleplus"></ion-icon>\n\n</button>-->\n\n</div>\n\n    <br><br><br>\n\n    <div *ngIf="!google">\n\n   <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n      <ion-label  style="color:white" floating>Email</ion-label>\n\n<ion-input clearInput type="text"  [(ngModel)]="email" name="email" id="email"></ion-input></ion-item>\n\n<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n    <ion-label style="color:white" floating>Contraseña</ion-label>      \n\n<ion-input type="password"  [(ngModel)]="password" name="password" id="password"></ion-input></ion-item>\n\n <!--<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n  <ion-label style="color:white">Elige tu usuario</ion-label>\n\n <ion-select style="background-color:rgba(0, 0, 0, 0.747);color:white" [(ngModel)]="usuarioo" name="usuarioo" id="usuarioo" (ionChange)="selectChange()">\n\n   <ion-option *ngFor="let usuario of usuarios | async"  [value]="usuario">{{usuario.nombre}}</ion-option>\n\n   <ion-option>nicostellisano@hotmail.com</ion-option>\n\n  </ion-select>\n\n</ion-item>-->\n\n<br>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="loginNormal()">Iniciar Sesión</button>\n\n</div>\n\n</div>\n\n<!--<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(0)">Iniciar Sesión(Admin)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(1)">Iniciar Sesión(Administrativo)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(2)">Iniciar Sesión(Profesor)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(3)">Iniciar Sesión(Alumno)</button>\n\n-->\n\n<br><br><br><br>\n\n<button ion-button full (click)="octa()">Octavio</button>\n\n<button ion-button full (click)="dale()">ADELIBERTI 4A </button>\n\n<button ion-button full (click)="mauro()">Administrativo Mauro </button>\n\n<button ion-button full (click)="maxi()">Maximiliano </button>\n\n<br><br><br><br>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(67);
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(67);
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
        this.splash = true;
        this.secondPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.splash = false;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }, 6000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\home\home.html"*/'<ion-header>\n\n  <div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n    <div class="flb">\n\n      <div class="Aligner-item Aligner-item--top"></div>\n\n      <img src="assets/splash.gif">\n\n      <div class="Aligner-item Aligner-item--bottom"></div>\n\n    </div>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descargar_archivo_descargar_archivo__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__respuesta_encuesta_respuesta_encuesta__ = __webpack_require__(167);
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
            for (var i = 0; i < _this.datos.length; i++) {
                if (_this.datos[i].codigoQr == _this.codigoScaneado) {
                    //if(this.materia==this.datos[i].materia && this.curso==this.datos[i].curso )
                    if (_this.curso == _this.datos[i].curso) {
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
    MateriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-materia',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\materia\materia.html"*/'<!--\n\n  Generated template for the MateriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Materia: {{materia}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n\n\n\n\n\n\n\n\n  \n\n  <!--<button ion-button round full large *ngIf="codigoScaneado==null"  (click)="scanCode()" class="animated flipInX miBoton miButton"> \n\n    <ion-icon name="arrow-round-back"></ion-icon> Escaner QR\n\n  </button>-->\n\n\n\n    \n\n  <!--<button ion-button round full large *ngIf="codigoScaneado==null"  (click)="encuestas()" class="animated flipInX miBoton miButton"> \n\n    <ion-icon name="arrow-round-back"></ion-icon> Encuestas\n\n  </button>-->\n\n  \n\n  <ion-list *ngIf="codigoScaneado!=null" >\n\n  <!-- <div *ngIf="perfil==\'\'" > -->\n\n<ion-item class="animated flipInX miItem">\n\n<ion-label class="miLabel" floating>División</ion-label>\n\n<ion-input type="text" [(ngModel)]="aulaMateria.curso" disabled="true"></ion-input> \n\n</ion-item>\n\n          \n\n<ion-item class="animated flipInY miItem">\n\n  <ion-label class="miLabel" floating>Profesor</ion-label>\n\n  <ion-input type="text" [(ngModel)]="aulaMateria.profesor" disabled="true"></ion-input>\n\n  </ion-item>\n\n\n\n<ion-item class="animated flipInY miItem">\n\n<ion-label class="miLabel" floating>Materia</ion-label>\n\n<ion-input type="text" [(ngModel)]="aulaMateria.materia" disabled="true"></ion-input>\n\n</ion-item>\n\n\n\n\n\n  <ion-item class="animated flipInY miItem">\n\n    <ion-label class="miLabel" floating>Primer Parcial</ion-label>\n\n    <ion-input type="text" [(ngModel)]="aulaMateria.primerParcial" disabled="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Segundo Parcial</ion-label>\n\n      <ion-input type="text" [(ngModel)]="aulaMateria.segundoParcial" disabled="true"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="animated flipInY miItem">\n\n        <ion-label class="miLabel" floating>Final</ion-label>\n\n        <ion-input type="text" [(ngModel)]="aulaMateria.final" disabled="true"></ion-input>\n\n        </ion-item>\n\n\n\n      <!--</div>-->\n\n\n\n\n\n</ion-list>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\materia\materia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], MateriaPage);
    return MateriaPage;
}());

//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrEncuestasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__respuesta_encuesta_respuesta_encuesta__ = __webpack_require__(167);
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
 * Generated class for the QrEncuestasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrEncuestasPage = (function () {
    function QrEncuestasPage(db, nativeAudio, navCtrl, navParams, fireService, loadingCtrl, screenOrientation, platform, afd, alertCtrl, modalCtrl) {
        //this.qrCodigo=this.navParams.get("codigo");
        this.db = db;
        this.nativeAudio = nativeAudio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.afd = afd;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.listaRespuestas = [];
        this.listaEncuestas = [];
        this.single = [];
        this.view = [700, 400];
        this.showLegend = false;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.listadoAlumnos = [];
    }
    QrEncuestasPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.respondido = false;
        this.grafico = false;
        this.mostrado = true;
        this.perfil = "";
        this.voto = false;
        if (localStorage.getItem("Perfil") == null || localStorage.getItem("Perfil") == undefined) {
            this.perfil = "Alumno";
            this.mailLocal = localStorage.getItem('mail');
        }
        else if (localStorage.getItem("Perfil") == "Profesor") {
            this.perfil = "Profesor";
        }
        else {
            this.perfil = "Administrativo";
        }
        if (this.navParams.get("nombreEncuesta") == null) {
            this.nombreEncuesta = "Legislacion";
        }
        else {
            this.nombreEncuesta = this.navParams.get("nombreEncuesta");
        }
        this.db.list('/encuestaRespuestas').subscribe(function (data) {
            _this.listaRespuestas = data;
        });
        this.db.list('/encuestas').subscribe(function (data) {
            _this.listaEncuestas = data;
        });
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listadoAlumnos = data;
        });
        this.applyDimensions();
        window.addEventListener('resize', function () {
            _this.applyDimensions();
        }, false);
    };
    QrEncuestasPage.prototype.applyDimensions = function () {
        var width = this.content.getContentDimensions().contentWidth - 50;
        this.view = [width, 150];
    };
    QrEncuestasPage.prototype.activar = function () {
        var _this = this;
        this.mostrado = false;
        if (this.perfil == "Alumno") {
            for (var i = 0; i < this.listaRespuestas.length; i++) {
                var element = this.listaRespuestas[i];
                if (element.nombreEncuesta == this.nombreEncuesta) {
                    this.respondido = true;
                    if (element.mailUsuario == this.mailLocal) {
                        this.voto = true;
                        for (var j = 0; j < this.listaEncuestas.length; j++) {
                            var element2 = this.listaEncuestas[j];
                            if (element2.nombre == element.nombreEncuesta) {
                                var horaF = new Date(element2.horaFinalizacion);
                                var horaActual = new Date();
                                if (horaF < horaActual) {
                                    this.mostrarGrafico();
                                    break;
                                }
                                else {
                                    var alert_1 = this.alertCtrl.create({
                                        title: "Info!",
                                        subTitle: "No se pueden mostrar los resultados, porque todavía no ha terminado la encuesta",
                                        cssClass: "miClaseDanger",
                                        buttons: ['Aceptar']
                                    });
                                    alert_1.present();
                                    setTimeout(function () {
                                        _this.navCtrl.pop();
                                    }, 3000);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            if (this.voto == false) {
                for (var j = 0; j < this.listaEncuestas.length; j++) {
                    var element2 = this.listaEncuestas[j];
                    if (element2.nombre == this.nombreEncuesta) {
                        var band = false;
                        for (var p = 0; p < this.listadoAlumnos.length; p++) {
                            var elementp = this.listadoAlumnos[p];
                            if (elementp.aula == element2.aula && elementp.materia == element2.materia) {
                                for (var t = 0; t < elementp.alumnos.length; t++) {
                                    var element3 = elementp.alumnos[t];
                                    if (element3.mail == localStorage.getItem('mail')) {
                                        band = true;
                                        var horaF = new Date(element2.horaFinalizacion);
                                        var horaActual = new Date();
                                        if (horaF > horaActual) {
                                            this.votar();
                                            break;
                                        }
                                        else if (horaF < horaActual) {
                                            this.mostrarGrafico();
                                            break;
                                        }
                                        else if (this.respondido == false) {
                                            this.mostrarGrafico();
                                            break;
                                        }
                                    }
                                }
                                if (!band) {
                                    var alert_2 = this.alertCtrl.create({
                                        title: "Info!",
                                        subTitle: "No se pueden mostrar los resultados, porque no perteneces a este curso",
                                        cssClass: "miClaseDanger",
                                        buttons: ['Aceptar']
                                    });
                                    alert_2.present();
                                    setTimeout(function () {
                                        _this.navCtrl.pop();
                                    }, 3000);
                                }
                            }
                        }
                    }
                }
            }
        }
        else if (this.perfil == "Profesor") {
            var creador = false;
            for (var j = 0; j < this.listaEncuestas.length; j++) {
                var element2 = this.listaEncuestas[j];
                if (element2.nombre == this.nombreEncuesta) {
                    if (element2.creadorEncuesta == localStorage.getItem('Email')) {
                        creador = true;
                        this.mostrarGrafico();
                    }
                    else {
                        var horaF = new Date(element2.horaFinalizacion);
                        var horaActual = new Date();
                        if (horaF < horaActual) {
                            this.mostrarGrafico();
                            break;
                        }
                        else {
                            var alert_3 = this.alertCtrl.create({
                                title: "Info!",
                                subTitle: "No se pueden mostrar los resultados, porque todavía no ha terminado la encuesta",
                                cssClass: "miClaseDanger",
                                buttons: ['Aceptar']
                            });
                            alert_3.present();
                            setTimeout(function () {
                                _this.navCtrl.pop();
                            }, 3000);
                            break;
                        }
                    }
                }
            }
        }
        else {
            var alert_4 = this.alertCtrl.create({
                title: "Info!",
                subTitle: "No se pueden mostrar los resultados, porque no le corresponde saberlos",
                cssClass: "miClaseDanger",
                buttons: ['Aceptar']
            });
            alert_4.present();
            setTimeout(function () {
                _this.navCtrl.pop();
            }, 3000);
        }
    };
    QrEncuestasPage.prototype.mostrarGrafico = function () {
        var rta1;
        var cont1 = 0;
        var rta2;
        var cont2 = 0;
        for (var i = 0; i < this.listaEncuestas.length; i++) {
            var element = this.listaEncuestas[i];
            if (element.nombre == this.nombreEncuesta) {
                rta1 = element.respuesta1;
                rta2 = element.respuesta2;
                for (var j = 0; j < this.listaRespuestas.length; j++) {
                    var element2 = this.listaRespuestas[j];
                    if (element.nombre == element2.nombreEncuesta) {
                        if (element.respuesta1 == element2.respuesta) {
                            cont1++;
                        }
                        else if (element.respuesta2 == element2.respuesta) {
                            cont2++;
                        }
                    }
                }
                if (cont1 == 0 && cont2 == 0) {
                    var cantidad = Math.round(Math.random() * 30);
                    cont1 = Math.round(Math.random() * cantidad / 2);
                    cont2 = cantidad - cont1;
                }
                break;
            }
        }
        this.single = [
            {
                "name": rta1,
                "value": cont1
            },
            {
                "name": rta2,
                "value": cont2
            },
        ];
        this.grafico = true;
    };
    QrEncuestasPage.prototype.votar = function () {
        //pushear a votacion
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__respuesta_encuesta_respuesta_encuesta__["a" /* RespuestaEncuestaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], QrEncuestasPage.prototype, "content", void 0);
    QrEncuestasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-qr-encuestas',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\qr-encuestas\qr-encuestas.html"*/'<!--\n\n  Generated template for the QrEncuestasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>QrEncuestas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <button ion-button round full large  *ngIf="mostrado" (click)="activar()" class="animated flipInX miBoton miButton"> \n\n        <ion-icon name="arrow-round-back"></ion-icon> Mostrar Informacion\n\n      </button>\n\n  <div style="width:100%" *ngIf="grafico">\n\n    <ion-grid style="background-color:white;">\n\n      <h4>Votaciones</h4>\n\n       <ion-row >\n\n         <ion-col >\n\n           <ngx-charts-pie-chart \n\n           [view]="view"\n\n           [scheme]="colorScheme"\n\n           [results]="single"\n\n           [legend]="showLegend"\n\n           [explodeSlices]="explodeSlices"\n\n           [labels]="showLabels"\n\n           [doughnut]="doughnut"\n\n      [gradient]="gradient"\n\n          >\n\n           </ngx-charts-pie-chart>\n\n         </ion-col>\n\n       </ion-row>\n\n     </ion-grid>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\qr-encuestas\qr-encuestas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], QrEncuestasPage);
    return QrEncuestasPage;
}());

//# sourceMappingURL=qr-encuestas.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__encuestas_alta_encuestas_alta__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__encuestas_editar_encuestas_editar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tutorial_tutorial__ = __webpack_require__(52);
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
    function EncuestasPage(navCtrl, modalCtrl, navParams, fireService, db, alertCtrl, nativeAudio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
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
        this.aula = this.navParams.get('aula');
        this.materia = this.navParams.get('materia');
    };
    EncuestasPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__tutorial_tutorial__["a" /* TutorialPage */], { img: "encuestasTutorial.png" });
        modal.present();
    };
    EncuestasPage.prototype.RedireccionCrearCuestionario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__encuestas_alta_encuestas_alta__["a" /* EncuestasAltaPage */], { aula: this.aula, materia: this.materia });
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
    EncuestasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-encuestas',template:/*ion-inline-start:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\encuestas\encuestas.html"*/'<!--\n\n  Generated template for the EncuestasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Encuestas<button ion-button color="danger" icon-only style="float:right" (click)=\'presentModal()\'><ion-icon style="size:200%" name="help-circle"></ion-icon></button> \n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenCuestionarios.jpg\')" class="fondo">\n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionCrearCuestionario()">Crear cuestionario</button> \n\n         <br>\n\n          \n\n          <div *ngFor="let e of encuestas; let i = index">\n\n     \n\n          <ion-list >\n\n              <div>\n\n          <ion-item class="animated flipInX miItem">\n\n              <ion-label class="miLabel" style="color: orange" floating>Nombre:</ion-label>\n\n              <ion-input type="text" [(ngModel)]="e.nombre" disabled="true"></ion-input> \n\n              <button style="color: yellow" ion-button clear item-end icon-only (click)="modificarEncuesta(e)" >\n\n                  <ion-icon style="width:50px" name="md-create"></ion-icon>\n\n                </button>\n\n                <button style="color: red" ion-button clear item-end icon-only (click)="eliminarEncuesta(e)">\n\n                  <ion-icon style="width:50px" name="trash"></ion-icon>\n\n                </button>\n\n              </ion-item>\n\n            </div>\n\n                 \n\n              <ion-item class="animated flipInY miItem">\n\n              <ion-label class="miLabel" style="color: orange"  floating>Pregunta:</ion-label>\n\n              <ion-input type="text" [(ngModel)]="e.pregunta" disabled="true"></ion-input>\n\n              </ion-item>\n\n              \n\n              \n\n                <ion-item class="animated flipInY miItem">\n\n                  <ion-label class="miLabel" style="color: orange"  floating>La encuesta finaliza en el horario:</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="e.horaFReal" disabled="true"></ion-input>\n\n                  </ion-item>\n\n\n\n\n\n<!--\n\n                  <ion-item class="animated flipInX miItem">\n\n                      <ion-label class="miLabel" style="color: orange"  floating>Fecha y hora de inicio (opcional)</ion-label>\n\n                      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="e.fechaInicio" disabled="true"></ion-datetime>\n\n                    </ion-item>\n\n              \n\n                    <ion-item class="animated flipInX miItem">\n\n                        <ion-label class="miLabel" style="color: orange"  floating>Fecha y hora de finalización (opcional)</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="e.fechaFinalizacion" disabled="true"></ion-datetime>\n\n                      </ion-item>\n\n                    -->\n\n\n\n\n\n                  <ion-item *ngIf=\'e.formato == "Botones"\' class="animated flipInY miItem">\n\n                    <ion-list  >\n\n                        <button  class="botones" style="color: rgb(85, 158, 218)" ion-button clear item-end >\n\n                            Presione para votar: {{e.respuesta1}}\n\n                           </button>\n\n                           <br>\n\n                           <button class="botones" style="color: rgb(85, 158, 218)" ion-button clear item-end >\n\n                              Presione para votar: {{e.respuesta2}}\n\n                             </button>\n\n\n\n\n\n                      \n\n                        </ion-list>    \n\n                      </ion-item>\n\n         \n\n                   \n\n                   <!-- \n\n                      <ion-list radio-group [(ngModel)]="respuesta" *ngIf=\'e.formato == "Radio button"\'>\n\n                          \n\n                            <ion-label style="color : white">{{e.respuesta1}}</ion-label>\n\n                            <ion-radio style="color : rgb(233, 67, 67)" value="e.respuesta1" ></ion-radio>\n\n\n\n                            <ion-label style="color : white">{{e.respuesta2}}</ion-label>\n\n                            <ion-radio style="color : rgb(233, 67, 67)" value="e.respuesta2" ></ion-radio>\n\n                          \n\n                          </ion-list>\n\n                        -->\n\n\n\n                  \n\n\n\n                                <ion-list  *ngIf=\'e.formato == "Radio botones"\' radio-group [(ngModel)]="respuesta">\n\n                                    <ion-item class="animated flipInY miItem">\n\n                                      <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta1}}</ion-label>\n\n                                      <ion-radio  value="e.respuesta1" ></ion-radio>\n\n                                    </ion-item>\n\n                                    <ion-item class="animated flipInY miItem">\n\n                                        <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta2}}</ion-label>\n\n                                        <ion-radio  value="e.respuesta2" ></ion-radio>\n\n                                      </ion-item>\n\n                                     \n\n\n\n                                  </ion-list>\n\n\n\n                                  <ion-list  *ngIf=\'e.formato == "Checkbox"\' radio-group [(ngModel)]="respuesta">\n\n                                      <ion-item class="animated flipInY miItem">\n\n                                          <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta1}}</ion-label>\n\n                                          <ion-checkbox  style="color : rgb(85, 158, 218)" [(ngModel)]="e.respuesta1"></ion-checkbox>\n\n                                      </ion-item>\n\n                                      <ion-item class="animated flipInY miItem">\n\n                                          <ion-label style="color : rgb(85, 158, 218)">{{e.respuesta2}}</ion-label>\n\n                                          <ion-checkbox  style="color : rgb(85, 158, 218)" [(ngModel)]="e.respuesta2" ></ion-checkbox>\n\n                                        </ion-item>\n\n                                       \n\n  \n\n                                    </ion-list>\n\n\n\n                                    <ion-list  *ngIf=\'e.formato == "Selección de opciones"\'  >\n\n                                      <ion-item class="animated flipInY miItem" >\n\n                                      <select style="color : rgb(85, 158, 218); width:150px;" [(ngModel)]="respuesta"  class="animated flipInY miItem">\n\n    \n\n                                        <option >{{e.respuesta1}} </option>\n\n                                        <option >{{e.respuesta2}} </option>\n\n                                      \n\n                                      </select>\n\n                                    </ion-item>\n\n                                       \n\n  \n\n                                    </ion-list>\n\n\n\n                                  \n\n                                    \n\n\n\n\n\n                                  \n\n\n\n                            \n\n                        \n\n                      \n\n              \n\n                </ion-list> \n\n\n\n          </div>\n\n\n\n\n\n\n\n        </ion-content>'/*ion-inline-end:"D:\Nico\Descargas\TP_PPS_2C_2017\src\pages\encuestas\encuestas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], EncuestasPage);
    return EncuestasPage;
}());

//# sourceMappingURL=encuestas.js.map

/***/ })

},[547]);
//# sourceMappingURL=main.js.map