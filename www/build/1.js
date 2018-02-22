webpackJsonp([1],{

/***/ 1196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizablePageModule", function() { return CustomizablePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customizable__ = __webpack_require__(1217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomizablePageModule = (function () {
    function CustomizablePageModule() {
    }
    return CustomizablePageModule;
}());
CustomizablePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__customizable__["a" /* CustomizablePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customizable__["a" /* CustomizablePage */]),
        ],
    })
], CustomizablePageModule);

//# sourceMappingURL=customizable.module.js.map

/***/ }),

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__real_inicio_administrativo_real_inicio_administrativo__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materias_materias__ = __webpack_require__(124);
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
 * Generated class for the CustomizablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomizablePage = (function () {
    function CustomizablePage(navCtrl, navParams, alertCtrl, setting) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.setting = setting;
        this.tema = "";
        this.home = "";
        this.miTema = { colorFondo: "", colorLetra: "", colorBoton: "", colorNav: "", sizeLetra: "", tipoLetra: "", radioButton: "", iconoAgregar: "", iconoTema: "" };
        this.tema = localStorage.getItem('tema');
        this.home = localStorage.getItem('home');
        this.setting.setActiveProfesional('variables.scss'); //elimina estilos previos
        if (this.tema == "custom") {
            console.log("ingresa a custom");
            //this.setting.setActiveProfesional('variables.scss');
            this.miTema = JSON.parse(localStorage.getItem('miTema'));
            console.log(this.miTema);
        }
        this.setting.getActiveProfesional().subscribe(function (val) { return _this.selectTheme = val; });
    }
    /*ionViewDidLoad() {
      console.log('ionViewDidLoad CustomizablePage');
  
      
    }*/
    CustomizablePage.prototype.showFont = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Fuente');
        alert.addInput({
            type: 'radio',
            label: 'Righteous',
            value: 'Righteous',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Lobster',
            value: 'Robster',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Boogaloo',
            value: 'Boogaloo',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Montserrat',
            value: "'Montserrat', sans-serif",
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Merriweather',
            value: "'Merriweather', serif",
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Merriweather',
            value: "'Merriweather', serif",
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Josefin Sans',
            value: "'Josefin Sans', sans-serif",
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Hind',
            value: "'Hind', sans-serif",
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Pacifico',
            value: "'Pacifico', cursive",
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Dancing Script',
            value: "'Dancing Script', cursive",
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Francois One',
            value: "'Francois One', sans-serif",
            checked: false
        });
        alert.addButton('Cancelar'); //fin
        alert.addButton({
            text: 'Aceptar',
            handler: function (data) {
                _this.miTema.tipoLetra = data;
            }
        });
        alert.present();
    };
    CustomizablePage.prototype.showColorNav = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Tamaño');
        alert.addInput({
            type: 'radio',
            label: 'Azul',
            value: 'primary',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Verde',
            value: 'secondary',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Rojo',
            value: 'danger',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Blanco',
            value: 'light',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Negro',
            value: 'dark',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Naranja',
            value: 'naranja',
            checked: false
        });
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Aceptar',
            handler: function (data) {
                _this.miTema.colorNav = data;
            }
        });
        alert.present();
    };
    CustomizablePage.prototype.showSize = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Tamaño');
        alert.addInput({
            type: 'radio',
            label: 'Pequeño',
            value: '12',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Mediano',
            value: '16',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Grande',
            value: '20',
            checked: false
        });
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Aceptar',
            handler: function (data) {
                _this.miTema.sizeLetra = data;
            }
        });
        alert.present();
    };
    CustomizablePage.prototype.showIcono = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Tamaño');
        alert.addInput({
            type: 'radio',
            label: 'Estandar',
            value: '1',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Medio',
            value: '2',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Profesional',
            value: '3',
            checked: false
        });
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Aceptar',
            handler: function (data) {
                switch (data) {
                    case '1':
                        _this.miTema.iconoAgregar = "add-circle";
                        _this.miTema.iconoTema = "brush";
                        break;
                    case '2':
                        _this.miTema.iconoAgregar = "add";
                        _this.miTema.iconoTema = "bowtie";
                        break;
                    case '3':
                        _this.miTema.iconoAgregar = "basket";
                        _this.miTema.iconoTema = "settings";
                        break;
                    default:
                        break;
                }
                //this.miTema.colorIcono = data;
            }
        });
        alert.present();
    };
    // ------ Funciones para asignacion de datos -------- //
    CustomizablePage.prototype.redireccionar = function (home) {
        switch (home) {
            case 'profesor':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_profesor_inicio_profesor__["a" /* InicioProfesorPage */]);
                break;
            case 'administrativo':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__real_inicio_administrativo_real_inicio_administrativo__["a" /* RealInicioAdministrativoPage */]);
                break;
            case 'alumno':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__materias_materias__["a" /* MateriasPage */]);
                break;
            default:
                break;
        }
    };
    CustomizablePage.prototype.aceptar = function () {
        console.log('-------- en aceptar de customizable ----------');
        console.log(this.miTema);
        //localStorage.clear();
        localStorage.setItem('miTema', JSON.stringify(this.miTema));
        localStorage.setItem('tema', "custom");
        this.redireccionar(this.home);
    };
    CustomizablePage.prototype.cancelar = function () {
        this.setting.setActiveProfesional(this.tema);
        this.redireccionar(this.home);
    };
    return CustomizablePage;
}());
CustomizablePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-customizable',template:/*ion-inline-start:"/Users/mac/Documents/GitHub/TP_PPS_2C_2017/src/pages/customizable/customizable.html"*/'<!--\n  Generated template for the CustomizablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header  [style.font-family]="miTema.tipoLetra">\n\n  <ion-navbar [color]="miTema.colorNav" [style.font-size.px]="miTema.sizeLetra">\n    <ion-title [style.color]="miTema.colorLetra">Personalizar Tema</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding [ngStyle]="{ \'background-color\':+ miTema.colorFondo}" [style.font-family]="miTema.tipoLetra" [style.font-size.px]="miTema.sizeLetra">\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label [style.color]="miTema.colorLetra">Color de fondo</ion-label>\n        <ion-input type="color" [(ngModel)]="miTema.colorFondo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label [style.color]="miTema.colorLetra">Color de Letra</ion-label>\n        <ion-input type="color" [(ngModel)]="miTema.colorLetra"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label [style.color]="miTema.colorLetra">Color de Boton</ion-label>\n        <ion-input type="color" [(ngModel)]="miTema.colorBoton"></ion-input>\n      </ion-item>\n      <!--<ion-item>\n        <ion-label>Color de Nav</ion-label>\n        <ion-input type="color" [(ngModel)]="miTema.colorNav"></ion-input>\n      </ion-item>-->\n      <ion-item>\n        <ion-label [style.color]="miTema.colorLetra">Radio del boton</ion-label>\n        <ion-input type="text" value="10px"[(ngModel)]="miTema.radioButton"></ion-input>\n      </ion-item>\n      <ion-row>\n        <button class="miButton"[ngStyle]="{ \'background-color\':+ miTema.colorBoton}" [style.font-size.px]="miTema.sizeLetra" [style.border-radius]="miTema.radioButton" [style.color]="miTema.colorLetra" ion-button full (click)="showColorNav()">Color de Nav</button>\n        <button class="miButton"[ngStyle]="{ \'background-color\':+ miTema.colorBoton}" [style.font-size.px]="miTema.sizeLetra" [style.border-radius]="miTema.radioButton" [style.color]="miTema.colorLetra" ion-button full (click)="showIcono()">Tipo de Icono</button>\n        <button class="miButton" [ngStyle]="{ \'background-color\':+ miTema.colorBoton}" [style.font-size.px]="miTema.sizeLetra" [style.border-radius]="miTema.radioButton" [style.color]="miTema.colorLetra" ion-button full (click)="showFont()">Tipo de Letra</button>\n        <button class="miButton" [ngStyle]="{ \'background-color\':+ miTema.colorBoton}" [style.font-size.px]="miTema.sizeLetra" [style.border-radius]="miTema.radioButton" [style.color]="miTema.colorLetra" ion-button full (click)="showSize()">Tamaño de Letra</button>\n      </ion-row>\n      <ion-row>\n\n      </ion-row>\n        <button class="miButton" [ngStyle]="{ \'background-color\':+ miTema.colorBoton}" [style.font-size.px]="miTema.sizeLetra" [style.border-radius]="miTema.radioButton" [style.color]="miTema.colorLetra" ion-button block (click)="aceptar()">Aceptar</button>\n        <button class="miButton" [ngStyle]="{ \'background-color\':+ miTema.colorBoton}" [style.font-size.px]="miTema.sizeLetra" [style.border-radius]="miTema.radioButton" [style.color]="miTema.colorLetra" ion-button block (click)="cancelar()">Cancelar</button>\n      <ion-row>\n\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/GitHub/TP_PPS_2C_2017/src/pages/customizable/customizable.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__["a" /* SettingProvider */]])
], CustomizablePage);

//# sourceMappingURL=customizable.js.map

/***/ })

});
//# sourceMappingURL=1.js.map