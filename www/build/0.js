webpackJsonp([0],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AulaAlumnoPageModule", function() { return AulaAlumnoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aula_alumno__ = __webpack_require__(515);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AulaAlumnoPageModule = (function () {
    function AulaAlumnoPageModule() {
    }
    return AulaAlumnoPageModule;
}());
AulaAlumnoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__aula_alumno__["a" /* AulaAlumnoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aula_alumno__["a" /* AulaAlumnoPage */]),
        ],
    })
], AulaAlumnoPageModule);

//# sourceMappingURL=aula-alumno.module.js.map

/***/ }),

/***/ 515:
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
        selector: 'page-aula-alumno',template:/*ion-inline-start:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/aula-alumno/aula-alumno.html"*/'<!--\n  Generated template for the AulaAlumnoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="dark">\n    <ion-title>Aula Alumno</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'assets/aula.jpg\')" class="fondo">\n\n    <ion-list>\n        <ion-item class="animated flipInX miItem">\n          <ion-label class="miLabel" floating>Turno</ion-label>\n          <ion-input type="text" [(ngModel)]="miAula.turno" disabled="true"></ion-input> \n        </ion-item>\n            \n        <ion-item class="animated flipInY miItem">\n          <ion-label class="miLabel" floating>Profesor</ion-label>\n          <ion-input type="text" [(ngModel)]="miAula.profesor" disabled="true"></ion-input>\n        </ion-item>\n        \n        <ion-item class="animated flipInX miItem" >\n            <ion-label class="miLabel" floating >Materia</ion-label>\n            <ion-input type="text" [(ngModel)]="miAula.materia" disabled="true"></ion-input>\n          </ion-item> \n      </ion-list>\n      \n    \n      <button ion-button round full large class="miBoton"> \n        <ion-icon name="arrow-round-back"></ion-icon> Volver\n      </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/ezequiel/Proyectos/TP_PPS_2C_2017/src/pages/aula-alumno/aula-alumno.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], AulaAlumnoPage);

var _a, _b;
//# sourceMappingURL=aula-alumno.js.map

/***/ })

});
//# sourceMappingURL=0.js.map