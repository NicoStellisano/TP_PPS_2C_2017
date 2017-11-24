webpackJsonp([20],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GeochemComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CagarArchivoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__descargar_archivo_descargar_archivo__ = __webpack_require__(188);
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
    function CagarArchivoPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        //Atributos de descarga
        this.listaAlumnos = [];
        this.listaAlumnoItem = [];
        this.aula = this.navParams.get('aulaa');
        this.alumnoLista$ = this.database.list('alumno-lista');
        this.alumnoListaItem$ = this.database.list('alumno-lista');
        this.alumnoListaItem$.subscribe(function (alumLista) {
            _this.listaAlumnoItem = alumLista;
        });
    }
    CagarArchivoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CagarArchivoPage');
    };
    CagarArchivoPage.prototype.leeArchivos = function (numarchivo, file) {
        var alumno = {};
        var lista = [];
        var fr = new FileReader();
        var arrayFilas;
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
                //console.log(element0);
                alumno.legajo = elemento[0].trim();
                alumno.nombre = elemento[1].trim();
                alumno.turno = elemento[2].trim();
                alumno.mail = elemento[3].trim();
                //console.log(alumno);
                lista.push(alumno);
                alumno = {};
            }
            if (numarchivo == 0) {
                GeochemComponent.muestras = arrayFilas.slice();
            }
            else if (numarchivo == 1) {
                GeochemComponent.muestras2 = arrayFilas.slice();
            }
        };
        fr.readAsText(file, 'ISO-8859-4');
        this.listaAlumnos = lista;
        console.log(this.listaAlumnos);
        console.log(file.name);
        console.log(file.size);
        this.nombreArchivo = file.name;
        this.sizeArchivo = file.size / 1000 + " Kb";
    };
    CagarArchivoPage.prototype.onFileSelect = function (input) {
        var files = input.files;
        var len = files.length;
        for (var b = 0; b < len; b++) {
            this.leeArchivos(b, files[b]);
        }
    };
    CagarArchivoPage.prototype.cargarLista = function () {
        console.log("Carga lista a firebase");
        this.alumnoLista$.push({
            aula: this.aula,
            alumnos: this.listaAlumnos
        });
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
            alert("Ir a descarga");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__descargar_archivo_descargar_archivo__["a" /* DescargarArchivoPage */], { aulaa: this.aula });
        }
        else {
            alert("No hya nada que descargar");
        }
    };
    return CagarArchivoPage;
}());
CagarArchivoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cagar-archivo',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\cagar-archivo\cagar-archivo.html"*/'<!--\n\n  Generated template for the CagarArchivoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Cagar Archivo de {{aula}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/nube.jpg\')" class="fondo">\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <!--<label>{{label}}</label>-->\n\n      <!--(change)="fileUpload($event)"-->\n\n      <!--<input type=\'file\' name=\'userFile\' id=\'file\' (change)="onFileSelect($event.target)" style="display: none" multiple> #fileInp-->\n\n      <input type="file" (change)="onFileSelect($event.target)" id="file-input"  style="opacity: 0">\n\n      <ion-icon name="cloud-done">Sellecionar archivo .csv</ion-icon>\n\n      <!--<button ion-button (click)="onClick()">Cargar</button>-->\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <p *ngIf="nombreArchivo">Nombre: {{nombreArchivo}}</p>\n\n      <p *ngIf="sizeArchivo">Tamaño: {{sizeArchivo}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  \n\n  <div>\n\n    <button center ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="cloud-done"></ion-icon> Subir\n\n    </button>\n\n    <button center ion-button round full large (click)="descargarArchivo()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="cloud-done"></ion-icon> Descargar\n\n    </button>\n\n  </div>\n\n  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\cagar-archivo\cagar-archivo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], CagarArchivoPage);

//# sourceMappingURL=cagar-archivo.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materia_materia__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(43);
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
        this.db.list('/notificacionesProfesor').
            subscribe(function (data) {
            _this.datos = data;
            //console.log(this.datos);
            if (_this.aula == "4° A") {
                for (var i = 0; i < _this.datos.length; i++) {
                    if (_this.aula == _this.datos[i].curso) {
                        var alert_1 = _this.alertCtrl.create({
                            title: _this.datos[i].titulo,
                            subTitle: 'Alumnos de ' + _this.aula + ' :' + _this.datos[i].mensaje,
                            buttons: ['OK']
                        });
                        alert_1.present();
                    }
                }
            }
            if (_this.aula == "4° B") {
                for (var i = 0; i < _this.datos.length; i++) {
                    if (_this.aula == _this.datos[i].curso) {
                        var alert_2 = _this.alertCtrl.create({
                            title: _this.datos[i].titulo,
                            subTitle: 'Alumnos de ' + _this.aula + ' :' + _this.datos[i].mensaje,
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                }
            }
        });
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
                    var alert_3 = _this.alertCtrl.create({
                        title: "Aviso de faltas",
                        subTitle: _this.nombreUsuario + " tiene 4 faltas. A una de quedar LIBRE!",
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
            }
        });
    }
    MateriasPage.prototype.ionViewDidLoad = function () {
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
        selector: 'page-materias',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\materias\materias.html"*/'<!--\n\n  Generated template for the MateriasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Materias</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/halloween-Materias.png\')" class="fondo">\n\n  \n\n      <div *ngFor="let lista of listaMateriasAlumno; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(lista.materia)">{{ lista.materia }}</button> \n\n      </div>\n\n  \n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\materias\materias.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], MateriasPage);

//# sourceMappingURL=materias.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(43);
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
    function MateriaPage(navCtrl, navParams, barcodeScanner, db, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.codigoScaneado = null;
        this.aulaMateria = {};
        this.materia = this.navParams.get('materiaa');
        this.curso = this.navParams.get('aulaaa');
        console.log(this.materia);
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
    }
    MateriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MateriaPage');
    };
    MateriaPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.codigoScaneado = null;
            _this.codigoScaneado = barcodeData.text;
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
                        alert("El codigo escaneado no pertenece al aula y/o materia");
                        return;
                    }
                }
            }
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    return MateriaPage;
}());
MateriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-materia',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\materia\materia.html"*/'<!--\n\n  Generated template for the MateriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Materia: {{materia}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n\n\n\n\n\n\n\n\n  \n\n  <button ion-button round full large *ngIf="codigoScaneado==null"  (click)="scanCode()" class="animated flipInX miBoton miButton"> \n\n    <ion-icon name="arrow-round-back"></ion-icon> Escaner QR\n\n  </button>\n\n  \n\n  <ion-list *ngIf="codigoScaneado!=null" >\n\n    \n\n<ion-item class="animated flipInX miItem">\n\n<ion-label class="miLabel" floating>División</ion-label>\n\n<ion-input type="text" [(ngModel)]="aulaMateria.curso" disabled="true"></ion-input> \n\n</ion-item>\n\n          \n\n<ion-item class="animated flipInY miItem">\n\n<ion-label class="miLabel" floating>Materia</ion-label>\n\n<ion-input type="text" [(ngModel)]="aulaMateria.profesor" disabled="true"></ion-input>\n\n</ion-item>\n\n\n\n\n\n  <ion-item class="animated flipInY miItem">\n\n    <ion-label class="miLabel" floating>Primer Parcial</ion-label>\n\n    <ion-input type="text" [(ngModel)]="aulaMateria.primerParcial" disabled="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Segundo Parcial</ion-label>\n\n      <ion-input type="text" [(ngModel)]="aulaMateria.segundoParcial" disabled="true"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="animated flipInY miItem">\n\n        <ion-label class="miLabel" floating>Final</ion-label>\n\n        <ion-input type="text" [(ngModel)]="aulaMateria.final" disabled="true"></ion-input>\n\n        </ion-item>\n\n\n\n</ion-list>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\materia\materia.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MateriaPage);

//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var AulaProfesorPage = (function () {
    function AulaProfesorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aula = this.navParams.get('aulaa');
        //alert(this.aula);
    }
    AulaProfesorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AulaProfesorPage');
    };
    AulaProfesorPage.prototype.tomaLista = function () {
        alert("voy a tomar lista");
    };
    AulaProfesorPage.prototype.crearNotificacion = function () {
        console.log(this.aula);
        this.navCtrl.push(NotificacionPage, { aulaa: this.aula });
    };
    AulaProfesorPage.prototype.cargarLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { aulaa: this.aula });
        alert("voy a cargar lista");
    };
    AulaProfesorPage.prototype.mostrarQr = function () {
        alert("voy a qr");
    };
    return AulaProfesorPage;
}());
AulaProfesorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aula-profesor',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\aula-profesor\aula-profesor.html"*/'<!--\n\n  Generated template for the AulaProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Aula Profesor {{aula}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-profesor.jpg\')" class="fondo">\n\n\n\n <!--gi <ion-list>\n\n              \n\n    <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Divicion</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.division" disabled="true"></ion-input> \n\n    </ion-item>\n\n                    \n\n    <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Materia</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.materia" disabled="true"></ion-input>\n\n    </ion-item>\n\n                \n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaProfesor.cantidadAlumno" disabled="true"></ion-input>\n\n    </ion-item> \n\n  \n\n  </ion-list>-->\n\n\n\n  <div>\n\n    <button ion-button round full large (click)="tomaLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Tomar Lista\n\n    </button>\n\n    <button ion-button round full large (click)="crearNotificacion()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Crear Notificacion\n\n    </button>\n\n    <button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Cargar Alumnos\n\n    </button>\n\n    <button ion-button round full large (click)="mostrarQr()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Escaner QR\n\n    </button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\aula-profesor\aula-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AulaProfesorPage);

//# sourceMappingURL=aula-profesor.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAlumnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias_materias__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_perfil_editar_perfil__ = __webpack_require__(191);
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
                "aula": "4° A"
            },
            {
                "aula": "4° B"
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
            case "4° A":
                //alert("Se redireccionara al aula: 4° A ");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materias_materias__["a" /* MateriasPage */], { aulaa: aula });
                break;
            case "4° B":
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
        selector: 'page-inicio-alumno',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\inicio-alumno\inicio-alumno.html"*/'<!--\n\n  Generated template for the InicioAlumnoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione un aula</ion-title>\n\n   \n\n  </ion-navbar>\n\n  <button  ion-button round class="botonEditar"  (click)="EditarPerfil()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Editar perfil</button>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n\n\n\n  \n\n      <div *ngFor="let lista of listaAulasProfesor; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionAula(lista.aula)">{{ lista.aula }}</button> \n\n      </div>\n\n     \n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\inicio-alumno\inicio-alumno.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], InicioAlumnoPage);

//# sourceMappingURL=inicio-alumno.js.map

/***/ }),

/***/ 150:
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__ = __webpack_require__(107);
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
 * Generated class for the AulaAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulaAdministrativoPage = (function () {
    //miAulaAdministrativo = {} as AulaAdministrativoItem;
    function AulaAdministrativoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        /*this.miAulaAdministrativo = {
          profesor:"Juan Peralta",
          division:"2°B",
          materia:"Laboratorio IV",
          cantidadAlumno:25
        };*/
        this.aula = this.navParams.get('aulaa');
    }
    AulaAdministrativoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AulaAdministrativoPage');
    };
    AulaAdministrativoPage.prototype.mostrarQR = function () {
    };
    AulaAdministrativoPage.prototype.cargarLista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cagar_archivo_cagar_archivo__["a" /* CagarArchivoPage */], { aulaa: this.aula });
        alert("voy a cargar lista");
    };
    return AulaAdministrativoPage;
}());
AulaAdministrativoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aula-administrativo',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\aula-administrativo\aula-administrativo.html"*/'<!--\n\n  Generated template for the AulaAdministrativoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Aula Administrativo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n\n\n <!-- <ion-list>\n\n        \n\n    <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Profesor</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.profesor" disabled="true"></ion-input> \n\n    </ion-item>\n\n              \n\n    <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Divicion</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.division" disabled="true"></ion-input>\n\n    </ion-item>\n\n          \n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Materia</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAdministrativo.materia" disabled="true"></ion-input>\n\n    </ion-item> \n\n\n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Cantidad de Alumnos</ion-label>\n\n      <ion-input type="number" [(ngModel)]="miAulaAdministrativo.cantidadAlumno" disabled="true"></ion-input>\n\n    </ion-item> \n\n\n\n  </ion-list>-->\n\n\n\n  <div>\n\n    <button ion-button round full large (click)="tomaLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Tomar Lista\n\n    </button>\n\n    <button ion-button round full large (click)="mostrarQR()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Qr Aula\n\n    </button>\n\n    <button ion-button round full large (click)="cargarLista()" class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Cargar Alumnos\n\n    </button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\aula-administrativo\aula-administrativo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AulaAdministrativoPage);

//# sourceMappingURL=aula-administrativo.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescargarArchivoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(43);
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
            //console.log(dato.values().next().value.alumnos);
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
        selector: 'page-descargar-archivo',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\descargar-archivo\descargar-archivo.html"*/'<!--\n\n  Generated template for the DescargarArchivoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Descargar Archivo {{aula}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="generaCSV()">\n\n        <ion-icon name="logo-dropbox"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let alumno of listaAlumnosCsv ">\n\n      <h3>{{alumno.legajo}}</h3>\n\n      <h2>{{alumno.mail}}</h2>\n\n      <h2>{{alumno.nombre}}</h2>\n\n      <h2>{{alumno.turno}}</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\descargar-archivo\descargar-archivo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], DescargarArchivoPage);

//# sourceMappingURL=descargar-archivo.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulaAlumnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias_materias__ = __webpack_require__(108);
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
        selector: 'page-aula-alumno',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\aula-alumno\aula-alumno.html"*/'<!--\n\n  Generated template for the AulaAlumnoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Aula Alumno</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula.jpg\')" class="fondo">\n\n\n\n  <ion-list>\n\n\n\n   <!-- <ion-item>\n\n      <ion-label>Toppings</ion-label>\n\n        <ion-select [(ngModel)]="miAulaAlumno.turno"cancelText="cancelar" okText="elegir">\n\n          <ion-option value="nulo" selected="true">Elegir turno</ion-option>\n\n          <ion-option value="mañana">Mañana</ion-option>\n\n          <ion-option value="tarde" selected="true">Tarde</ion-option>\n\n          <ion-option value="noche">Noche</ion-option>\n\n        </ion-select>\n\n    </ion-item> -->\n\n\n\n    <ion-item class="animated flipInX miItem">\n\n      <ion-label class="miLabel" floating>Turno</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.turno" disabled="true"></ion-input> \n\n    </ion-item>\n\n            \n\n     <ion-item class="animated flipInY miItem">\n\n      <ion-label class="miLabel" floating>Profesor</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.profesor" disabled="true"></ion-input>\n\n     </ion-item>\n\n        \n\n    <ion-item class="animated flipInX miItem" >\n\n      <ion-label class="miLabel" floating >Materia</ion-label>\n\n      <ion-input type="text" [(ngModel)]="miAulaAlumno.materia" disabled="true"></ion-input>\n\n    </ion-item> \n\n  </ion-list>\n\n      \n\n  <div>\n\n    <button ion-button round full large (click)=RedireccionMaterias()  class="animated flipInX miBoton miButton"> \n\n      <ion-icon name="arrow-round-back"></ion-icon> Materias\n\n    </button>\n\n  </div>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\aula-alumno\aula-alumno.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AulaAlumnoPage);

//# sourceMappingURL=aula-alumno.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignarMateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__ = __webpack_require__(63);
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
    function AsignarMateriaPage(navCtrl, navParams, fireService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.viewCtrl = viewCtrl;
        this.profesor = this.navParams.get("profesor");
    }
    AsignarMateriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AsignarMateriaPage');
    };
    AsignarMateriaPage.prototype.asignar = function () {
        try {
            this.fireService.addMateria({ profesor: this.profesor, curso: this.curso, nombre: this.materia });
            alert("Materia Asignada!");
            this.viewCtrl.dismiss();
        }
        catch (error) {
            alert("No se pudo asignar la materia");
            console.log(error);
        }
    };
    return AsignarMateriaPage;
}());
AsignarMateriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-asignar-materia',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\asignar-materia\asignar-materia.html"*/'<!--\n  Generated template for the AsignarMateriaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>AsignarMateria</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n        <ion-label  style="color:white" floating>Profesor</ion-label>\n    <ion-input disabled clearInput type="text"  [(ngModel)]="profesor" name="profesor" id="profesor"></ion-input></ion-item>\n  <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n    <ion-label  style="color:white" floating>Materia</ion-label>\n<ion-input clearInput type="text"  [(ngModel)]="materia" name="materia" id="materia"></ion-input></ion-item>\n<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n  <ion-label style="color:white">Curso</ion-label>\n <ion-select style="background-color:rgba(0, 0, 0, 0.747);color:white" [(ngModel)]="curso" name="curso" id="curso">\n   <ion-option value="4º A">4º A</ion-option>\n   <ion-option value="4º B">4º B</ion-option>\n  </ion-select>\n</ion-item>\n<br> <br>\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="asignar()">Asignar</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\asignar-materia\asignar-materia.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], AsignarMateriaPage);

//# sourceMappingURL=asignar-materia.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_alumno_inicio_alumno__ = __webpack_require__(111);
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
            title: "Exitosamente!",
            subTitle: "Su contraseña a sido modificada",
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_alumno_inicio_alumno__["a" /* InicioAlumnoPage */]);
    };
    return EditarPerfilPage;
}());
EditarPerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editar-perfil',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\editar-perfil\editar-perfil.html"*/'<!--\n\n  Generated template for the EditarPerfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Modifique su contraseña</ion-title>\n\n   </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n\n\n  <ion-list >  \n\n<ion-item class="animated flipInX miItem">\n\n<ion-label class="miLabel" floating>Contraseña</ion-label>\n\n<ion-input type="text" [(ngModel)]="datosUsuario.password" disabled="false"></ion-input> \n\n</ion-item>\n\n\n\n\n\n\n\n\n\n</ion-list>\n\n<button  ion-button round class="botonGuardar"  (click)="Guardar()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\editar-perfil\editar-perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditarPerfilPage);

//# sourceMappingURL=editar-perfil.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula_administrativo_aula_administrativo__ = __webpack_require__(187);
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
        selector: 'page-inicio-administrativo',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\inicio-administrativo\inicio-administrativo.html"*/'<!--\n\n  Generated template for the InicioAdministrativoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione un aula</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n\n\n\n    <div *ngFor="let lista of listaAulas; let i = index"> \n\n        <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionAula(lista.nombre)">{{ lista.nombre }}</button> \n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\inicio-administrativo\inicio-administrativo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], InicioAdministrativoPage);

//# sourceMappingURL=inicio-administrativo.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_button_renderer_button_renderer__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__asignar_materia_asignar_materia__ = __webpack_require__(190);
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
    function InicioAdminPage(navCtrl, navParams, fireService, loadingCtrl, screenOrientation, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.modalCtrl = modalCtrl;
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
            }
        };
    }
    InicioAdminPage.prototype.actions = function (instance) {
        var _this = this;
        instance.save.subscribe(function (row) {
            var nombreCompleto = row.Nombre + " " + row.Apellido;
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__asignar_materia_asignar_materia__["a" /* AsignarMateriaPage */], { profesor: nombreCompleto });
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
        }, 6000);
    };
    InicioAdminPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.unlock();
    };
    InicioAdminPage.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('¿Eliminar?')) {
            if (event.data.Perfil == "Profesor") {
                for (var i = 0; i < this.listadoProfesores.length; i++) {
                    var element = this.listadoProfesores[i];
                    console.log(element);
                    if (element.Email == event.data.Email) {
                        this.fireService.removeProfesor(element['$key']);
                        //event.confirm.reject();      
                        event.confirm.resolve();
                        this.fireService.getProfesores().subscribe(function (data) {
                            _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                            _this.listadoProfesores = data;
                        });
                        break;
                    }
                }
            }
            else if (event.data.Perfil == "Administrativo") {
                for (var i = 0; i < this.listadoAdministrativos.length; i++) {
                    var element = this.listadoAdministrativos[i];
                    console.log(element);
                    if (element.Email == event.data.Email) {
                        this.fireService.removeAdministrativo(element['$key']);
                        //event.confirm.reject();      
                        event.confirm.resolve();
                        this.fireService.getAdministrativos().subscribe(function (data) {
                            _this.source2 = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                            _this.listadoAdministrativos = data;
                        });
                        break;
                    }
                }
            }
            else {
                event.confirm.reject();
            }
        }
    };
    InicioAdminPage.prototype.onSaveConfirm = function (event) {
        var _this = this;
        if (window.confirm('¿Editar?')) {
            console.log(event.newData);
            if (event.newData.DNI != null && event.newData.Apellido != null && event.newData.Nombre != null && event.newData.Email != null && event.newData.Perfil != null
                && event.newData.DNI != undefined && event.newData.Apellido != undefined && event.newData.Nombre != undefined && event.newData.Email != undefined && event.newData.Perfil != undefined &&
                event.newData.DNI != "" && event.newData.Apellido != "" && event.newData.Nombre != "" && event.newData.Email != "" && event.newData.Perfil != "") {
                if (event.newData.Perfil == "Profesor") {
                    for (var i = 0; i < this.listadoProfesores.length; i++) {
                        var element = this.listadoProfesores[i];
                        console.log(element);
                        if (element.Email == event.newData.Email) {
                            var listadoAux = this.listadoProfesores;
                            listadoAux[i] = event.newData;
                            console.log(element);
                            //const key = element['$key'];
                            this.fireService.updateProfesor(listadoAux);
                            //event.confirm.reject();
                            this.fireService.getProfesores().subscribe(function (data) {
                                _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                _this.listadoProfesores = data;
                            });
                            break;
                        }
                    }
                    event.confirm.reject();
                }
                else if (event.newData.Perfil == "Administrativo") {
                    for (var i = 0; i < this.listadoAdministrativos.length; i++) {
                        var element = this.listadoAdministrativos[i];
                        if (element.Email == event.newData.Email) {
                            this.listadoAdministrativos[i] = event.newData;
                            console.log(element);
                            this.fireService.updateAdministrativo(this.listadoAdministrativos);
                            this.fireService.getAdministrativos().subscribe(function (data) {
                                _this.source2 = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                _this.listadoAdministrativos = data;
                            });
                            break;
                        }
                    }
                    event.confirm.reject();
                }
                else {
                    alert("Perfil inválido");
                    event.confirm.reject();
                }
            }
            else {
                event.confirm.reject();
            }
        }
    };
    InicioAdminPage.prototype.onCreateConfirm = function (event) {
        var _this = this;
        if (window.confirm('¿Crear?')) {
            if (event.newData.DNI != null && event.newData.Apellido != null && event.newData.Nombre != null && event.newData.Email != null && event.newData.Perfil != null
                && event.newData.DNI != undefined && event.newData.Apellido != undefined && event.newData.Nombre != undefined && event.newData.Email != undefined && event.newData.Perfil != undefined &&
                event.newData.DNI != "" && event.newData.Apellido != "" && event.newData.Nombre != "" && event.newData.Email != "" && event.newData.Perfil != "") {
                if (event.newData.Email.includes('@')) {
                    if (event.newData.DNI.length == 8) {
                        event.newData.Accion = " ";
                        if (event.newData.Perfil == "Profesor") {
                            this.listadoProfesores.push(event.newData);
                            event.confirm.resolve();
                            this.listadoProfesores[this.listadoProfesores.lastIndexOf(event.newData)].password = event.newData.DNI;
                            this.fireService.updateProfesor(this.listadoProfesores);
                            this.fireService.getProfesores().subscribe(function (data) {
                                _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                _this.listadoProfesores = data;
                            });
                        }
                        else if (event.newData.Perfil == "Administrativo") {
                            this.listadoAdministrativos.push(event.newData);
                            event.confirm.resolve();
                            this.listadoAdministrativos[this.listadoAdministrativos.lastIndexOf(event.newData)].password = event.newData.DNI;
                            this.fireService.updateAdministrativo(this.listadoAdministrativos);
                            this.fireService.getAdministrativos().subscribe(function (data) {
                                _this.source2 = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                _this.listadoAdministrativos = data;
                            });
                        }
                        else {
                            alert("Perfil inválido");
                            event.confirm.reject();
                        }
                    }
                    else {
                        alert("DNI inválido");
                        event.confirm.reject();
                    }
                }
                else {
                    alert("Email inválido");
                    event.confirm.reject();
                }
            }
            else {
                alert("Completa los datos");
                event.confirm.reject();
            }
            // this.fireService.addUser(event.newData);
        }
        else {
            event.confirm.reject();
        }
        event.confirm.reject();
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
        template: "\n  <ion-item style='float:right'>\n  <ion-label>Personas</ion-label>\n  <ion-select [(ngModel)]=\"personas\" (ionChange)=\"changeList($event)\">\n    <ion-option value=\"p\">Profesores</ion-option>\n    <ion-option value=\"a\">Administrativos</ion-option>\n  </ion-select>\n</ion-item>\n<div style='width:100%;height:100%' *ngIf='profesor'>\n  <ng2-smart-table style='width:100%;height:100%' [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div>\n  <div style='width:100%;height:100%' *ngIf='!profesor'>\n  <ng2-smart-table style='width:100%;height:100%'  [settings]=\"settings2\" [source]=\"source2\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div>\n",
        selector: 'page-inicio-admin',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], InicioAdminPage);

//# sourceMappingURL=inicio-admin.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias_profesor_materias_profesor__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aula_profesor_aula_profesor__ = __webpack_require__(110);
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
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aula_profesor_aula_profesor__["a" /* AulaProfesorPage */], { aulaa: aula });
                break;
            case "4° B":
                // alert("Se redireccionara al aula: 4° B ");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aula_profesor_aula_profesor__["a" /* AulaProfesorPage */], { aulaa: aula });
                break;
        }
    };
    return InicioProfesorPage;
}());
InicioProfesorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio-profesor',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\inicio-profesor\inicio-profesor.html"*/'<!--\n\n  Generated template for the InicioProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione un aula</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n\n  \n\n      <div *ngFor="let lista of listaAulasProfesor; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionAula(lista.aula)">{{ lista.aula }}</button> \n\n      </div>\n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\inicio-profesor\inicio-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
], InicioProfesorPage);

var _a, _b;
//# sourceMappingURL=inicio-profesor.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasProfesorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula_profesor_aula_profesor__ = __webpack_require__(110);
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
        selector: 'page-materias-profesor',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\materias-profesor\materias-profesor.html"*/'<!--\n\n  Generated template for the MateriasProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione una materia</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenProfesor.jpg\')" class="fondo">\n\n  \n\n      <div *ngFor="let lista of listaMateriasProfesor; let i = index"> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionMateria(lista.materia)">{{ lista.materia }}</button> \n\n      </div>\n\n  \n\n  </ion-content>'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\materias-profesor\materias-profesor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MateriasProfesorPage);

//# sourceMappingURL=materias-profesor.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_admin_inicio_admin__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_alumno_inicio_alumno__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fire_base_service_fire_base_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__real_inicio_administrativo_real_inicio_administrativo__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__materias_materias__ = __webpack_require__(108);
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
        this.listadoAdmins = [];
        this.listadoAlumnos = [];
        this.listadoProfesores = [];
        this.listadoAdministrativos = [];
        this.listaAux = [];
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
                    for (var i_1 = 0; i_1 < _this.listadoAlumnos.length; i_1++) {
                        var element_1 = _this.listadoAlumnos[i_1];
                        if (element_1.aula == "4° A") {
                            for (var j = 0; j < element_1.alumnos.length; j++) {
                                var element2 = element_1.alumnos[j];
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
                                    alert("Inicia Sesión con Google porfavor");
                                    _this.google = true;
                                }
                            }
                        }
                        else if (element_1.aula == "4° B") {
                            for (var j = 0; j < element_1.alumnos.length; j++) {
                                var element2 = element_1.alumnos[j];
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
                                    alert("Inicia Sesión con Google porfavor");
                                    _this.google = true;
                                }
                            }
                        }
                    }
                }
                if (!flag) {
                    for (var k = 0; k < _this.listadoProfesores.length; k++) {
                        var elementk = _this.listadoProfesores[k];
                        if (element.Email == __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.email) {
                            elementk.password = null;
                            localStorage.setItem("Nombre", element.Nombre);
                            localStorage.setItem("Email", element.Email);
                            localStorage.setItem("Apellido", element.Apellido);
                            localStorage.setItem("DNI", element.DNI);
                            localStorage.setItem("password", element.password);
                            localStorage.setItem("Perfil", element.Perfil);
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
                if (element.Email != __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.email) {
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
                alert("Inicia Sesión con Google porfavor");
                this.google = true;
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
                    alert("Inicia Sesión con Google porfavor");
                    this.google = true;
                }
            }
        }
        if (!flag) {
            for (var i_2 = 0; i_2 < this.listadoAlumnos.length; i_2++) {
                var element_2 = this.listadoAlumnos[i_2];
                if (element_2.aula == "4° A") {
                    for (var j = 0; j < element_2.alumnos.length; j++) {
                        var element2 = element_2.alumnos[j];
                        if (element2.mail == this.email && element2.legajo == this.password) {
                            localStorage.setItem("nombre", element2.nombre);
                            localStorage.setItem("mail", element2.mail);
                            localStorage.setItem("curso", "4° A");
                            localStorage.setItem("legajo", element2.legajo);
                            localStorage.setItem("turno", element2.turno);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__materias_materias__["a" /* MateriasPage */]);
                            flag = true;
                            break;
                        }
                        else if (element2.mail == this.email && element2.legajo == this.password) {
                            alert("Inicia Sesión con Google porfavor");
                            this.google = true;
                        }
                    }
                }
                else if (element_2.aula == "4° B") {
                    for (var j = 0; j < element_2.alumnos.length; j++) {
                        var element2 = element_2.alumnos[j];
                        if (element2.mail == this.email && element2.legajo == this.password) {
                            localStorage.setItem("nombre", element2.nombre);
                            localStorage.setItem("mail", element2.mail);
                            localStorage.setItem("curso", "4° B");
                            localStorage.setItem("legajo", element2.legajo);
                            localStorage.setItem("turno", element2.turno);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__materias_materias__["a" /* MateriasPage */]);
                            flag = true;
                            break;
                        }
                        else if (element2.mail == this.email && element2.legajo == this.password) {
                            alert("Inicia Sesión con Google porfavor");
                            this.google = true;
                        }
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
               alert("Inicia Sesión con Google porfavor");
               this.google=true;
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
                    alert("Inicia Sesión con Google porfavor");
                    this.google = true;
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
            var toast = this.toast.create({
                message: 'Usuario no registrado o contraseña incorrecta',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Inicio de Sesión</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n\n \n\n<div style="width:100%;height:100%">\n\n  <br>\n\n  \n\n<button ion-button icon-right color="danger" style="font-size:130%;margin:auto;text-align:center;display:block;width:40%;height:10%"  round (click)="loginGoogle()">\n\n<div style="width:100%"><span style="width:80%"> Iniciar Sesión con Google </span> <ion-icon style="width:20%;font-size:350%;margin:auto;text-align:center;display:block;" name="logo-googleplus"></ion-icon></div>\n\n</button>\n\n\n\n    <br><br><br>\n\n    <div *ngIf="!google">\n\n   <ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n      <ion-label  style="color:white" floating>Email</ion-label>\n\n<ion-input clearInput type="text"  [(ngModel)]="email" name="email" id="email"></ion-input></ion-item>\n\n<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n    <ion-label style="color:white" floating>Contraseña</ion-label>      \n\n<ion-input type="password"  [(ngModel)]="password" name="password" id="password"></ion-input></ion-item>\n\n <!--<ion-item style="background-color:rgba(0, 0, 0, 0.747);color:white">\n\n  <ion-label style="color:white">Elige tu usuario</ion-label>\n\n <ion-select style="background-color:rgba(0, 0, 0, 0.747);color:white" [(ngModel)]="usuarioo" name="usuarioo" id="usuarioo" (ionChange)="selectChange()">\n\n   <ion-option *ngFor="let usuario of usuarios | async"  [value]="usuario">{{usuario.nombre}}</ion-option>\n\n   <ion-option>nicostellisano@hotmail.com</ion-option>\n\n  </ion-select>\n\n</ion-item>-->\n\n<br>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="loginNormal()">Iniciar Sesión</button>\n\n</div>\n\n</div>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(0)">Iniciar Sesión(Admin)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(1)">Iniciar Sesión(Administrativo)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(2)">Iniciar Sesión(Profesor)</button>\n\n<br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="login(3)">Iniciar Sesión(Alumno)</button>\n\n\n\n<br><br><br><br>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _g || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealInicioAdministrativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_administrativo_inicio_administrativo__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__materia_materia__ = __webpack_require__(109);
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
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inicio_administrativo_inicio_administrativo__["a" /* InicioAdministrativoPage */]);
                break;
            case "profesores":
                this.seleccion = "profesores";
                break;
            case "alumnos":
                this.seleccion = "aulasAlumnos";
                break;
            case "materias":
                this.seleccion = "materias";
                break;
        }
    };
    RealInicioAdministrativoPage.prototype.Seleccion = function (data) {
        console.log(this.listadoAlumnos);
        switch (this.seleccion) {
            case "profesores":
                this.listaAux = [];
                for (var i = 0; i < this.listaMaterias.length; i++) {
                    var element = this.listaMaterias[i];
                    if (element.profesor.startsWith(data)) {
                        this.listaAux.push(element);
                    }
                }
                this.seleccion = "materiasProfesor";
                break;
            case "aulasAlumnos":
                if (data == "a") {
                    this.listaAux = [];
                    for (var i = 0; i < this.listadoAlumnos.length; i++) {
                        var element = this.listadoAlumnos[i];
                        if (element.aula == "4° A") {
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
                        if (element.aula == "4° B") {
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
                for (var i = 0; i < this.listaMaterias.length; i++) {
                    var element = this.listaMaterias[i];
                    if (element.curso == '4º A') {
                        this.listaAux.push(element);
                    }
                }
                this.seleccion = "materiasProfesor";
                break;
            case "b":
                this.listaAux = [];
                for (var i = 0; i < this.listaMaterias.length; i++) {
                    var element = this.listaMaterias[i];
                    if (element.curso == '4º B') {
                        this.listaAux.push(element);
                    }
                }
                this.seleccion = "materiasProfesor";
                break;
            case "materias":
                this.seleccion = "";
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__materia_materia__["a" /* MateriaPage */], { materiaa: data.nombre, aulaaa: data.curso });
                break;
            case "materiasProfesor":
                this.seleccion = "";
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__materia_materia__["a" /* MateriaPage */], { materiaa: data.nombre, aulaaa: data.curso });
                break;
        }
    };
    return RealInicioAdministrativoPage;
}());
RealInicioAdministrativoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-real-inicio-administrativo',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\real-inicio-administrativo\real-inicio-administrativo.html"*/'<!--\n  Generated template for the RealInicioAdministrativoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Buscar Por:</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-image:url(\'assets/hallowenAdministrativo.jpg\')" class="fondo">\n  \n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'aulas\')">Aulas</button> \n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'profesores\')">Profesores</button>           \n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'alumnos\')">Alumnos</button> \n          <br><br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="Redireccion(\'materias\')">Materias</button> \n         \n\n        <div *ngIf="seleccion==\'alumnos\'" > \n          <span *ngFor="let alumno of listaAlumnos">  <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.Legajo)">{{alumno.nombre}}</button>  </span>\n      </div>\n\n      <div *ngIf="seleccion==\'materias\'"> \n        <span *ngFor="let materia of listaMaterias"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(materia)">Materia:{{materia.nombre}},Curso:{{materia.curso}}</button> </span> \n    </div>\n\n      \n    <div *ngIf="seleccion==\'profesores\'" > \n        <span *ngFor="let profesor of listadoProfesores"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(profesor.Nombre)">{{profesor.Nombre}},{{profesor.Apellido}}</button> </span> \n     </div>\n\n    <div *ngIf="seleccion==\'materiasProfesor\'" > \n     <span *ngFor="let materia of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(materia)">Materia:{{materia.nombre}},Curso:{{materia.curso}} </button>  </span>\n  </div>\n    \n  <div *ngIf="seleccion==\'aulasAlumnos\'" > \n      <span > <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(\'a\')">4º A </button>  </span>\n      <span > <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(\'b\')">4º B </button>  </span>\n      \n    </div>\n\n    <div *ngIf="seleccion==\'a\'" > \n        <span *ngFor="let alumno of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.Apellido)">{{alumno.nombre}}</button>  </span>\n     </div>\n\n     <div *ngIf="seleccion==\'b\'" > \n        <span *ngFor="let alumno of listaAux"> <br><button ion-button  style="width:70%;color:red;margin:auto;text-align:center;display:block;background-color:rgb(255, 255, 255)" (click)="Seleccion(alumno.Apellido)">{{alumno.nombre}} </button>  </span>\n     </div>\n          \n</ion-content>\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\real-inicio-administrativo\real-inicio-administrativo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]])
], RealInicioAdministrativoPage);

//# sourceMappingURL=real-inicio-administrativo.js.map

/***/ }),

/***/ 202:
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
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alumnos/alumnos.module": [
		562,
		42
	],
	"../pages/asignar-materia/asignar-materia.module": [
		566,
		41
	],
	"../pages/aula-administrativo/aula-administrativo.module": [
		563,
		40
	],
	"../pages/aula-alumno/aula-alumno.module": [
		564,
		39
	],
	"../pages/aula-profesor/aula-profesor.module": [
		565,
		38
	],
	"../pages/cagar-archivo/cagar-archivo.module": [
		569,
		37
	],
	"../pages/cuestionarios/cuestionarios.module": [
		567,
		36
	],
	"../pages/descargar-archivo/descargar-archivo.module": [
		568,
		35
	],
	"../pages/editar-perfil/editar-perfil.module": [
		570,
		34
	],
	"../pages/inicio-admin/inicio-admin.module": [
		572,
		33
	],
	"../pages/inicio-administrativo/inicio-administrativo.module": [
		571,
		32
	],
	"../pages/inicio-alumno/inicio-alumno.module": [
		573,
		31
	],
	"../pages/inicio-profesor/inicio-profesor.module": [
		574,
		30
	],
	"../pages/login/login.module": [
		575,
		29
	],
	"../pages/materia/materia.module": [
		578,
		28
	],
	"../pages/materias-profesor/materias-profesor.module": [
		577,
		27
	],
	"../pages/materias/materias.module": [
		576,
		26
	],
	"../pages/notificacion/notificacion.module": [
		579,
		25
	],
	"../pages/perfil/perfil.module": [
		580,
		23
	],
	"../pages/real-inicio-administrativo/real-inicio-administrativo.module": [
		581,
		24
	],
	"../pages/tomar-lista/tomar-lista.module": [
		583,
		22
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
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlumnosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(99);
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
 * Generated class for the AlumnosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlumnosPage = (function () {
    function AlumnosPage(navCtrl, navParams, fireService, loadingCtrl, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireService = fireService;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
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
                turno: {
                    title: 'Turno',
                    filter: false
                },
                mail: {
                    title: 'Email',
                    filter: false
                }
            }
            /* Accion: {
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
               onComponentInitFunction(instance) {
                 instance.save.subscribe(row => {
                   alert(`${row.Legajo} `)
                 });
               
               
               
             
           }}*/
        };
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    AlumnosPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.fireService.getAlumnos().subscribe(function (data) {
            _this.listadoAlumnos = data;
        });
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            var element = this.listadoAlumnos[i];
            if (element.aula == "4° A") {
                for (var j = 0; j < element.alumnos.length; j++) {
                    var element2 = element.alumnos[j];
                    this.listaAux.push(element2);
                }
            }
        }
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](this.listaAux);
        this.seleccion = "a";
        console.log(this.listaAux);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n       <img src=\"assets/spinner.gif\">",
            duration: 50000000,
            showBackdrop: false
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    AlumnosPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.unlock();
    };
    AlumnosPage.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('¿Eliminar?')) {
            for (var i = 0; i < this.listadoAlumnos.length; i++) {
                var element = this.listadoAlumnos[i];
                console.log(element);
                if (element.Email == event.data.Email) {
                    this.fireService.removeAlumno(element['$key']);
                    //event.confirm.reject();      
                    event.confirm.resolve();
                    this.fireService.getAlumnos().subscribe(function (data) {
                        _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                        _this.listadoAlumnos = data;
                    });
                    break;
                }
            }
        }
        else {
            event.confirm.reject();
        }
    };
    AlumnosPage.prototype.onSaveConfirm = function (event) {
        var _this = this;
        if (window.confirm('¿Editar?')) {
            console.log(event.newData);
            if (event.newData.Legajo != null && event.newData.Apellido != null && event.newData.Nombre != null && event.newData.Email != null && event.newData.Perfil != null
                && event.newData.Legajo != undefined && event.newData.Apellido != undefined && event.newData.Nombre != undefined && event.newData.Email != undefined && event.newData.Perfil != undefined &&
                event.newData.Legajo != "" && event.newData.Apellido != "" && event.newData.Nombre != "" && event.newData.Email != "" && event.newData.Perfil != "") {
                if (event.newData.Perfil == "Alumno") {
                    for (var i = 0; i < this.listadoAlumnos.length; i++) {
                        var element = this.listadoAlumnos[i];
                        console.log(element);
                        if (element.Email == event.newData.Email) {
                            var listadoAux = this.listadoAlumnos;
                            listadoAux[i] = event.newData;
                            console.log(element);
                            //const key = element['$key'];
                            this.fireService.updateAlumno(listadoAux);
                            //event.confirm.reject();
                            this.fireService.getAlumnos().subscribe(function (data) {
                                _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                                _this.listadoAlumnos = data;
                            });
                            break;
                        }
                    }
                    event.confirm.reject();
                }
                event.confirm.reject();
            }
            else {
                alert("Perfil inválido");
                event.confirm.reject();
            }
        }
        else {
            event.confirm.reject();
        }
    };
    AlumnosPage.prototype.changeList = function (event) {
        var _this = this;
        this.seleccion = event;
        if (this.seleccion == 'a') {
            this.fireService.getAlumnos().subscribe(function (data) {
                _this.listadoAlumnos = data;
            });
            for (var i = 0; i < this.listadoAlumnos.length; i++) {
                var element = this.listadoAlumnos[i];
                if (element.aula == "4° A") {
                    for (var j = 0; j < element.alumnos.length; j++) {
                        var element2 = element.alumnos[j];
                        this.listaAux.push(element2);
                    }
                }
            }
            this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](this.listaAux);
        }
        else if (this.seleccion == 'b') {
            this.fireService.getAlumnos().subscribe(function (data) {
                _this.listadoAlumnos = data;
            });
            for (var i = 0; i < this.listadoAlumnos.length; i++) {
                var element = this.listadoAlumnos[i];
                if (element.aula == "4° B") {
                    for (var j = 0; j < element.alumnos.length; j++) {
                        var element2 = element.alumnos[j];
                        this.listaAux.push(element2);
                    }
                }
            }
            this.source2 = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](this.listaAux);
        }
    };
    AlumnosPage.prototype.onCreateConfirm = function (event) {
        var _this = this;
        if (window.confirm('¿Crear?')) {
            if (event.newData.Legajo != null && event.newData.Apellido != null && event.newData.Nombre != null && event.newData.Email != null && event.newData.Perfil != null
                && event.newData.Legajo != undefined && event.newData.Apellido != undefined && event.newData.Nombre != undefined && event.newData.Email != undefined && event.newData.Perfil != undefined &&
                event.newData.Legajo != "" && event.newData.Apellido != "" && event.newData.Nombre != "" && event.newData.Email != "" && event.newData.Perfil != "") {
                if (event.newData.Email.includes('@')) {
                    event.newData.Accion = " ";
                    if (event.newData.Perfil == "Alumno") {
                        this.listadoAlumnos.push(event.newData);
                        this.listadoAlumnos[this.listadoAlumnos.lastIndexOf(event.newData)].password = event.newData.Legajo;
                        this.fireService.updateAlumno(this.listadoAlumnos);
                        event.confirm.resolve();
                        this.fireService.getAlumnos().subscribe(function (data) {
                            _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */](data); // create the source
                            _this.listadoAlumnos = data;
                        });
                    }
                    else {
                        alert("Perfil inválido");
                        event.confirm.reject();
                    }
                }
                else {
                    alert("Email inválido");
                    event.confirm.reject();
                }
            }
            else {
                alert("Completa los datos");
                event.confirm.reject();
            }
            // this.fireService.addUser(event.newData);
        }
        else {
            event.confirm.reject();
        }
        event.confirm.reject();
    };
    return AlumnosPage;
}());
AlumnosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-alumnos',
        template: "\n\n  <ion-item style='float:right'>\n  <ion-label>seleccion</ion-label>\n  <ion-select [(ngModel)]=\"seleccion\" (ionChange)=\"changeList($event)\">\n    <ion-option value=\"p\">4\u00BA A</ion-option>\n    <ion-option value=\"a\">4\u00BA B</ion-option>\n  </ion-select>\n</ion-item>\n<div style='width:100%;height:100%' *ngIf='seleccion==\"a\"'>\n  <ng2-smart-table style='width:100%;height:100%' [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div>\n  <div style='width:100%;height:100%' *ngIf='seleccion==\"b\"'>\n  <ng2-smart-table style='width:100%;height:100%'  [settings]=\"settings\" [source]=\"source2\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n  (editConfirm)=\"onSaveConfirm($event)\"\n  (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table></div>\n\n",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _e || Object])
], AlumnosPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=alumnos.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuestionariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        selector: 'page-cuestionarios',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\cuestionarios\cuestionarios.html"*/'<!--\n\n  Generated template for the MateriasProfesorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Seleccione un cuestionario</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/hallowenCuestionarios.jpg\')" class="fondo">\n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="RedireccionCrearCuestionario()">Crear cuestionario</button> \n\n          <br> <button ion-button round full large style="margin:auto;text-align:center;display:block;background-color:rgba(0, 0, 0, 0.747)" (click)="MostrarCuestionariosProfesor()">Mostrar cuestionarios</button> \n\n          \n\n        </ion-content>'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\cuestionarios\cuestionarios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CuestionariosPage);

//# sourceMappingURL=cuestionarios.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(43);
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
    function NotificacionPage(navCtrl, navParams, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.aula = this.navParams.get('aulaa');
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
                buttons: ['OK']
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
        selector: 'page-notificacion',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\notificacion\notificacion.html"*/'<!--\n\n  Generated template for the NotificacionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Creación de notificación</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/aula-administrativo.jpeg\')" class="fondo">\n\n  \n\n<ion-list>\n\n<ion-item class="animated flipInX miItem">\n\n<ion-label class="miLabel" floating>Titulo</ion-label>\n\n<ion-input type="text" [(ngModel)]="titulo" disabled="false"></ion-input> \n\n</ion-item>\n\n          \n\n<ion-item class="animated flipInY miItem">\n\n<ion-label class="miLabel" floating>Mensaje</ion-label>\n\n<ion-input type="text" [(ngModel)]="mensaje" disabled="false"></ion-input>\n\n</ion-item>\n\n<button  ion-button round class="botonGuardar"  (click)="Guardar()"><ion-icon ios="ios-brush" md="md-brush"></ion-icon>Guardar</button>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\notificacion\notificacion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], NotificacionPage);

//# sourceMappingURL=notificacion.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_admin_inicio_admin__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inicio_administrativo_inicio_administrativo__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inicio_profesor_inicio_profesor__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inicio_alumno_inicio_alumno__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aula_alumno_aula_alumno__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_aula_administrativo_aula_administrativo__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aula_profesor_aula_profesor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_fire_base_service_fire_base_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_button_renderer_button_renderer__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_materias_materias__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_materias_profesor_materias_profesor__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_screen_orientation__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cuestionarios_cuestionarios__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cagar_archivo_cagar_archivo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_alumnos_alumnos__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_barcode_scanner__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_materia_materia__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_editar_perfil_editar_perfil__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_descargar_archivo_descargar_archivo__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_notificacion_notificacion__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_real_inicio_administrativo_real_inicio_administrativo__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_asignar_materia_asignar_materia__ = __webpack_require__(190);
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
            __WEBPACK_IMPORTED_MODULE_34__pages_asignar_materia_asignar_materia__["a" /* AsignarMateriaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__["b" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/alumnos/alumnos.module#AlumnosPageModule', name: 'AlumnosPage', segment: 'alumnos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/aula-administrativo/aula-administrativo.module#AulaAdministrativoPageModule', name: 'AulaAdministrativoPage', segment: 'aula-administrativo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/aula-alumno/aula-alumno.module#AulaAlumnoPageModule', name: 'AulaAlumnoPage', segment: 'aula-alumno', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/aula-profesor/aula-profesor.module#AulaProfesorPageModule', name: 'AulaProfesorPage', segment: 'aula-profesor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/asignar-materia/asignar-materia.module#AsignarMateriaPageModule', name: 'AsignarMateriaPage', segment: 'asignar-materia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cuestionarios/cuestionarios.module#CuestionariosPageModule', name: 'CuestionariosPage', segment: 'cuestionarios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/descargar-archivo/descargar-archivo.module#DescargarArchivoPageModule', name: 'DescargarArchivoPage', segment: 'descargar-archivo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cagar-archivo/cagar-archivo.module#CagarArchivoPageModule', name: 'CagarArchivoPage', segment: 'cagar-archivo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editar-perfil/editar-perfil.module#EditarPerfilPageModule', name: 'EditarPerfilPage', segment: 'editar-perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-administrativo/inicio-administrativo.module#InicioAdministrativoPageModule', name: 'InicioAdministrativoPage', segment: 'inicio-administrativo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-admin/inicio-admin.module#InicioAdminPageModule', name: 'InicioAdminPage', segment: 'inicio-admin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-alumno/inicio-alumno.module#InicioAlumnoPageModule', name: 'InicioAlumnoPage', segment: 'inicio-alumno', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio-profesor/inicio-profesor.module#InicioProfesorPageModule', name: 'InicioProfesorPage', segment: 'inicio-profesor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/materias/materias.module#MateriasPageModule', name: 'MateriasPage', segment: 'materias', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/materias-profesor/materias-profesor.module#MateriasProfesorPageModule', name: 'MateriasProfesorPage', segment: 'materias-profesor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/materia/materia.module#MateriaPageModule', name: 'MateriaPage', segment: 'materia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notificacion/notificacion.module#NotificacionPageModule', name: 'NotificacionPage', segment: 'notificacion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/real-inicio-administrativo/real-inicio-administrativo.module#RealInicioAdministrativoPageModule', name: 'RealInicioAdministrativoPage', segment: 'real-inicio-administrativo', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
            __WEBPACK_IMPORTED_MODULE_34__pages_asignar_materia_asignar_materia__["a" /* AsignarMateriaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_fire_base_service_fire_base_service__["a" /* FireBaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_alumnos_alumnos__ = __webpack_require__(346);
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
    //rootPage:any = CagarArchivoPage; //test
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_alumnos_alumnos__["a" /* AlumnosPage */];
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
], MyApp);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        selector: 'page-home',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireBaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(507);
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
    FireBaseServiceProvider.prototype.addProfesor = function (item) {
        return this.afd.list('/personas/profesores').push(item);
    };
    FireBaseServiceProvider.prototype.addAdministrativo = function (item) {
        return this.afd.list('/personas/administrativos').push(item);
    };
    FireBaseServiceProvider.prototype.addAlumno = function (item) {
        return this.afd.list('/personas/alumnos').push(item);
    };
    FireBaseServiceProvider.prototype.addUser = function (item) {
        return this.afd.list('/personas').push(item);
    };
    FireBaseServiceProvider.prototype.updateAlumno = function (data) {
        return this.afd.list('/personas').update('alumnos', data);
    };
    FireBaseServiceProvider.prototype.updateProfesor = function (data) {
        return this.afd.list('/personas').update('profesores', data);
    };
    FireBaseServiceProvider.prototype.updateAdministrativo = function (data) {
        return this.afd.list('/personas').update('administrativos', data);
    };
    FireBaseServiceProvider.prototype.removeAlumno = function (key) {
        return this.afd.list('/personas/alumnos').remove(key);
    };
    FireBaseServiceProvider.prototype.removeProfesor = function (key) {
        return this.afd.list('/personas/profesores').remove(key);
    };
    FireBaseServiceProvider.prototype.removeAdministrativo = function (key) {
        return this.afd.list('/personas/administrativos').remove(key);
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

/***/ })

},[349]);
//# sourceMappingURL=main.js.map