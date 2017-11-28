webpackJsonp([0],{

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TomarListaPageModule", function() { return TomarListaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tomar_lista__ = __webpack_require__(583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TomarListaPageModule = (function () {
    function TomarListaPageModule() {
    }
    return TomarListaPageModule;
}());
TomarListaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tomar_lista__["a" /* TomarListaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tomar_lista__["a" /* TomarListaPage */]),
        ],
    })
], TomarListaPageModule);

//# sourceMappingURL=tomar-lista.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TomarListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(30);
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
    function TomarListaPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.alumnoPresente = {};
        this.listaAlumnos = [];
        this.alumnoPresenteLista = [];
        this.aula = this.navParams.get('aulaa');
        this.alumnoPresenteList$ = this.database.list('alumno-lista');
        this.alumnoPresenteList$.subscribe(function (dato) {
            _this.listaAlumnos = dato.values().next().value.alumnos;
        });
    }
    TomarListaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TomarListaPage');
    };
    TomarListaPage.prototype.presente = function (alumno) {
    };
    TomarListaPage.prototype.ausente = function (alumno) {
    };
    return TomarListaPage;
}());
TomarListaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-tomar-lista',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/tomar-lista/tomar-lista.html"*/'<!--\n  Generated template for the TomarListaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="dark">\n    <ion-title>Tomar Lista</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/descarga-archivo.png\')" class="fondo">\n  <ion-list *ngFor="let alumno of listaAlumnos">\n      <ion-avatar item-end>\n        <img src="./assets/icon/bien.png" (click)="presente(alumno)">  \n      </ion-avatar>\n        \n      <ion-avatar item-end>\n        <img src="./assets/icon/mal.png" (click)="ausente(alumno)">  \n      </ion-avatar>\n\n      <h2>{alumno.legajo} - {alumno.nombre}</h2>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/tomar-lista/tomar-lista.html"*/,
=======
        selector: 'page-tomar-lista',template:/*ion-inline-start:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\tomar-lista\tomar-lista.html"*/'<!--\n\n  Generated template for the TomarListaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar class="dark">\n\n    <ion-title>Tomar Lista</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image:url(\'assets/descarga-archivo.png\')" class="fondo">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Nico\clonar\TP_PPS_2C_2017\src\pages\tomar-lista\tomar-lista.html"*/,
>>>>>>> 72c0755ba5f975189b1166d6c92f5d4a63a318c3
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], TomarListaPage);

var _a, _b, _c;
//# sourceMappingURL=tomar-lista.js.map

/***/ })

});
//# sourceMappingURL=0.js.map