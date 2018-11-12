webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contas-add/contas-add.module": [
		160
	],
	"../pages/contas/contas.module": [
		154
	],
	"../pages/intro/intro.module": [
		163
	],
	"../pages/lancamento-add/lancamento-add.module": [
		161
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasPageModule", function() { return ContasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contas__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContasPageModule = /** @class */ (function () {
    function ContasPageModule() {
    }
    ContasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contas__["a" /* ContasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contas__["a" /* ContasPage */]),
            ],
        })
    ], ContasPageModule);
    return ContasPageModule;
}());

//# sourceMappingURL=contas.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contas_add_contas_add__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contas_dao_contas_dao__ = __webpack_require__(46);
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
 * Generated class for the ContasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContasPage = /** @class */ (function () {
    function ContasPage(navCtrl, navParams, daoContas, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.daoContas = daoContas;
        this.alertCtrl = alertCtrl;
        this.listContas = [];
        this.getList();
    }
    ContasPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad ContasPage');
    };
    ContasPage.prototype.getList = function () {
        var _this = this;
        this.daoContas.getList()
            .then(function (data) {
            _this.listContas = data;
        })
            .catch();
    };
    ContasPage.prototype.toContasAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contas_add_contas_add__["a" /* ContasAddPage */]);
    };
    ContasPage.prototype.delete = function (conta) {
        var _this = this;
        this.daoContas.delete(conta.ID).then(function () {
            var index = _this.listContas.indexOf(conta);
            _this.listContas.splice(index, 1);
            var alert = _this.alertCtrl.create({
                title: 'Deletado!',
                subTitle: 'Registro deletado com sucesso!',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    ContasPage.prototype.toContasUpdate = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contas_add_contas_add__["a" /* ContasAddPage */], { "id": id });
    };
    ContasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contas',template:/*ion-inline-start:"/home/hellenbriany/Ionic/lp4Finance/src/pages/contas/contas.html"*/'<!--\n  Generated template for the ContasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\nlistContas\n\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>contas</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let conta of listContas">\n      <ion-item ion-item (click)="toContasUpdate(conta.ID)">\n        {{ conta.id }} - {{ conta.descricao }}\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="delete(conta)">Excluir</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab class="btn-add"(click)="toContasAdd()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/hellenbriany/Ionic/lp4Finance/src/pages/contas/contas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_contas_dao_contas_dao__["a" /* ContasDaoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContasPage);
    return ContasPage;
}());

//# sourceMappingURL=contas.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContasAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_conta__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contas_dao_contas_dao__ = __webpack_require__(46);
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
 * Generated class for the ContasAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContasAddPage = /** @class */ (function () {
    function ContasAddPage(navCtrl, navParams, daoConta, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.daoConta = daoConta;
        this.alertCtrl = alertCtrl;
        this.conta = new __WEBPACK_IMPORTED_MODULE_2__class_conta__["a" /* Conta */]();
        if (this.navParams.data.id) {
            this.daoConta.get(this.navParams.data.id).then(function (result) {
                _this.conta = result;
            });
        }
    }
    ContasAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContasAddPage');
    };
    ContasAddPage.prototype.salvar = function () {
        // if(this.conta.ID){
        //   //update
        //   this.daoConta.update(this.conta)
        //                .then(() => {
        //                  this.alert();
        //                 this.navCtrl.pop();
        //                })
        // } else{
        //   this.daoConta.insert(this.conta)
        //   then(() => {
        //     this.alert();
        //     this.navCtrl.pop();
        //   });
        var _this = this;
        if (this.conta.ID) {
            // update
            this.daoConta.update(this.conta)
                .then(function () {
                _this.alert();
                _this.navCtrl.pop();
            });
        }
        else {
            this.daoConta.insert(this.conta)
                .then(function () {
                _this.alert();
                _this.navCtrl.pop();
            });
        }
        // }
    };
    ContasAddPage.prototype.alert = function () {
        var alert = this.alertCtrl.create({
            title: 'Deletado!',
            subTitle: 'Registro deletado com sucesso!',
            buttons: ['OK']
        });
        alert.present();
    };
    ContasAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contas-add',template:/*ion-inline-start:"/home/hellenbriany/Ionic/lp4Finance/src/pages/contas-add/contas-add.html"*/'<!--\n  Generated template for the ContasAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>contas-add</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Descrição</ion-label>\n      <ion-input type="text" [[ngModel]]="conta.DESCRICAO" name="DESCRICAO" ></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full (click)="salvar()">Salvar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/hellenbriany/Ionic/lp4Finance/src/pages/contas-add/contas-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_contas_dao_contas_dao__["a" /* ContasDaoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContasAddPage);
    return ContasAddPage;
}());

//# sourceMappingURL=contas-add.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conta; });
var Conta = /** @class */ (function () {
    function Conta() {
    }
    return Conta;
}());

//# sourceMappingURL=conta.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasAddPageModule", function() { return ContasAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contas_add__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContasAddPageModule = /** @class */ (function () {
    function ContasAddPageModule() {
    }
    ContasAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contas_add__["a" /* ContasAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contas_add__["a" /* ContasAddPage */]),
            ],
        })
    ], ContasAddPageModule);
    return ContasAddPageModule;
}());

//# sourceMappingURL=contas-add.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LancamentoAddPageModule", function() { return LancamentoAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lancamento_add__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LancamentoAddPageModule = /** @class */ (function () {
    function LancamentoAddPageModule() {
    }
    LancamentoAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lancamento_add__["a" /* LancamentoAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lancamento_add__["a" /* LancamentoAddPage */]),
            ],
        })
    ], LancamentoAddPageModule);
    return LancamentoAddPageModule;
}());

//# sourceMappingURL=lancamento-add.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LancamentoAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_lancamento__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contas_dao_contas_dao__ = __webpack_require__(46);
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
 * Generated class for the LancamentoAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LancamentoAddPage = /** @class */ (function () {
    function LancamentoAddPage(navCtrl, 
        // public navParams: NavParams,
        daoContas) {
        this.navCtrl = navCtrl;
        this.daoContas = daoContas;
        this.contas = [];
        this.lancamento = new __WEBPACK_IMPORTED_MODULE_2__class_lancamento__["a" /* Lancamento */]();
    }
    LancamentoAddPage.prototype.ionViewDidEnter = function () {
        this.getContas();
    };
    LancamentoAddPage.prototype.getContas = function () {
        var _this = this;
        this.daoContas.getList().then(function (data) {
            _this.contas = data;
        }).catch(function (e) { return console.error(e); });
    };
    LancamentoAddPage.prototype.savlar = function () {
        if (this.lancamento.DESCRICAO != null) {
            //return this.dbProvider.getDB()
            //               .then((db: SQLiteObject) => {
            //                 return db.executeSql( "UPDATE CONTAS SET DESCRICAO = ? WHERE ID = ?", [conta.DESCRICAO, conta.ID])
            //                    .catch(e => console.error(e));
            //             })
            //               .catch(e => console.error(e));
        }
    };
    LancamentoAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lancamento-add',template:/*ion-inline-start:"/home/hellenbriany/Ionic/lp4Finance/src/pages/lancamento-add/lancamento-add.html"*/'<!--\n  Generated template for the LancamentoAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>lancamento-add</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="toLancamentosAdd()">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Descrição</ion-label>\n      <ion-input name="DESCRICAO" [(ngModel)]="lancamento.DESCRICAO"></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Referencia</ion-label>\n      <ion-select [(ngModel)]="mes">\n        <ion-option value="1">Janeiro</ion-option>\n        <ion-option value="2">Fevereiro</ion-option>\n        <ion-option value="3">Março</ion-option>\n        <ion-option value="4">Abril</ion-option>\n        <ion-option value="5">Maio</ion-option>\n        <ion-option value="6">Junho</ion-option>\n        <ion-option value="7">Julho</ion-option>\n        <ion-option value="8">Agosto</ion-option>\n        <ion-option value="9">Setembro</ion-option>\n        <ion-option value="10">Outubro</ion-option>\n        <ion-option value="11">Novembro</ion-option>\n        <ion-option value="12">Dezembro</ion-option>\n      </ion-select>\n\n        <ion-select [(ngModel)]="ano">\n          <ion-option value="2014">2014</ion-option>\n          <ion-option value="2015">2015</ion-option>\n          <ion-option value="2016">2016</ion-option>\n          <ion-option value="2017">2017</ion-option>\n          <ion-option value="2018">2018</ion-option>\n          <ion-option value="2019">2019</ion-option>\n          <ion-option value="2020">2020</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Conta</ion-label>\n      <ion-select name="CONTA" [(ngModel)]="lancamento.CONTA">\n        <ion-option *ngFor="let conta of contas" value="{{conta.ID}}">{{conta.DESCRICAO}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Tipo</ion-label>\n      <ion-select [(ngModel)]="lancamento.TIPO" name="TIPO" submitText="Ok" cancelText="Cancelar">>\n        <ion-option value="C">Crédito</ion-option>\n        <ion-option value="D">Débito</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-item>\n  <ion-label>Pago</ion-label>\n  <ion-checkbox color="dark" checked="false"></ion-checkbox>\n</ion-item>\n<div padding>\n  <button ion-button block (click)="salvar()"> Salvar </button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/hellenbriany/Ionic/lp4Finance/src/pages/lancamento-add/lancamento-add.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_contas_dao_contas_dao__["a" /* ContasDaoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_contas_dao_contas_dao__["a" /* ContasDaoProvider */]) === "function" && _b || Object])
    ], LancamentoAddPage);
    return LancamentoAddPage;
    var _a, _b;
}());

//# sourceMappingURL=lancamento-add.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contas_contas_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contas_add_contas_add_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_database_database__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_contas_dao_contas_dao__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_lancamento_add_lancamento_add_module__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contas/contas.module#ContasPageModule', name: 'ContasPage', segment: 'contas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contas-add/contas-add.module#ContasAddPageModule', name: 'ContasAddPage', segment: 'contas-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lancamento-add/lancamento-add.module#LancamentoAddPageModule', name: 'LancamentoAddPage', segment: 'lancamento-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro_module__["IntroPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_contas_contas_module__["ContasPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_contas_add_contas_add_module__["ContasAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_lancamento_add_lancamento_add_module__["LancamentoAddPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_11__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_contas_dao_contas_dao__["a" /* ContasDaoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lancamento; });
var Lancamento = /** @class */ (function () {
    function Lancamento() {
    }
    return Lancamento;
}());

//# sourceMappingURL=lancamento.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(81);
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
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.toHome = function () {
        //this.navCtrl.push(HomePage);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/home/hellenbriany/Ionic/lp4Finance/src/pages/intro/intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content >\n  <ion-slides pager>\n\n    <ion-slide >\n      <h2>Bem vindo!</h2>\n      <div>\n        <p> Este é um aplicativo desenvolvido em aula</p>\n      </div>\n      <img src="assets/imgs/ica-slidebox-img-3.png" alt="">\n    </ion-slide>\n\n    <ion-slide >\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide >\n      <h2>Slide 3</h2>\n\n      <button ion-button full (click)="toHome()">Entrar</button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/hellenbriany/Ionic/lp4Finance/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contas_contas__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //função para criar o banco de dados
            //dbProvider.createDatabase();
        });
        this.home = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.contas = __WEBPACK_IMPORTED_MODULE_5__pages_contas_contas__["a" /* ContasPage */];
    }
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hellenbriany/Ionic/lp4Finance/src/app/app.html"*/'<ion-menu [content]="mnu_app">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n<ion-list>\n  <button ion-item (click)="openPage(home)" menuClose>Home</button>\n  <button ion-item (click)="openPage(contas)" menuClose>Contas</button>\n</ion-list>\n</ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #mnu_app></ion-nav>\n'/*ion-inline-end:"/home/hellenbriany/Ionic/lp4Finance/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContasDaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_conta__ = __webpack_require__(157);
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
  Generated class for the ContasDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContasDaoProvider = /** @class */ (function () {
    function ContasDaoProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    ContasDaoProvider.prototype.getList = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = "SELECT * FROM CONTAS";
            return db.executeSql(sql, [])
                .then(function (data) {
                if (data.rows.length > 0) {
                    var contas = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        contas.push(data.rows.item(i));
                    }
                    return contas;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error("Erro", e); });
        })
            .catch(function (e) { return console.error("Erro ao consular", e); });
    };
    ContasDaoProvider.prototype.get = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql("SELECT * FROM CONTAS WHERE ID = ?", [id])
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var conta = new __WEBPACK_IMPORTED_MODULE_2__class_conta__["a" /* Conta */]();
                    conta.ID = item.ID;
                    conta.DESCRICAO = item.DESCRICAO;
                    return conta;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ContasDaoProvider.prototype.insert = function (conta) {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql("INSERT INTO CONTAS (DESCRICAO) VALUES (?)", [conta.DESCRICAO])
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error("Erro ao inserir", e); });
    };
    ContasDaoProvider.prototype.update = function (conta) {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql("UPDATE CONTAS SET DESCRICAO = ? WHERE ID = ?", [conta.DESCRICAO, conta.ID])
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ContasDaoProvider.prototype.delete = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql("DELETE FROM CONTAS WHERE ID = ?", [id])
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ContasDaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], ContasDaoProvider);
    return ContasDaoProvider;
}());

//# sourceMappingURL=contas-dao.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(158);
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
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
    }
    /* função tem objetivo de criar ou abrir um banco de dados sqlite*/
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'lp4-finance',
            location: 'default'
        });
    };
    /* cria a estrutura incial do banco de dados*/
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            //criar minhas tabelas
            _this.createTables(db);
            //insert dos dados iniciais
            _this.insertDefault(db);
        })
            .catch();
    };
    //cria as tabelas padroes do app
    DatabaseProvider.prototype.createTables = function (db) {
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS CONTAS (ID INTEGER PRIMARY KEY AUTOINCREMENT, DESCRICAO)']
        ])
            .then(function () { return console.log("Tabelas criadas com sucesso!"); })
            .catch(function (e) { return console.error("Erro ao criar as tabelas", e); });
    };
    DatabaseProvider.prototype.insertDefault = function (db) {
        db.executeSql('SELECT COUNT(ID) AS QNTD FROM CONTAS', {})
            .then(function (data) {
            if (data.rows.item(0).QNTD == 0) {
                //inserir CONTAS
                db.sqlBatch([['INSERT INTO CONTAS (DESCRICAO) VALUES (?)', ['Alimentação']],
                    ['INSERT INTO CONTAS (DESCRICAO) VALUES (?)', ['Saúde']],
                    ['INSERT INTO CONTAS (DESCRICAO) VALUES (?)', ['Transporte']]
                ]).then(function () { return console.log("Inserts de contas realizado com sucesso!"); })
                    .catch(function (e) { return console.error("Erro ao inserir contas padrão", e); });
            }
        })
            .catch(function (e) { return console.error("Erro ao consultar contas", e); });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lancamento_add_lancamento_add__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.referencia_mes = 0;
        this.referencia_ano = 0;
        this.mes = '';
        var date = new Date();
        this.referencia_mes = date.getMonth();
        this.referencia_ano = date.getFullYear();
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.getMes(this.referencia_mes);
    };
    HomePage.prototype.getMes = function (mes) {
        switch (mes) {
            case 0:
                this.mes = "Janeiro";
                break;
            case 1:
                this.mes = "Fevereiro";
                break;
            case 2:
                this.mes = "Março";
                break;
            case 3:
                this.mes = "Abril";
                break;
            case 4:
                this.mes = "Maio";
                break;
            case 5:
                this.mes = "Junho";
                break;
            case 6:
                this.mes = "Julho";
                break;
            case 7:
                this.mes = "Agosto";
                break;
            case 8:
                this.mes = "Setembro";
                break;
            case 9:
                this.mes = "Outubro";
                break;
            case 10:
                this.mes = "Novembro";
                break;
            case 11:
                this.mes = "Dezembro";
                break;
            default:
                this.mes = "";
                break;
        }
    };
    HomePage.prototype.toLancamentosAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lancamento_add_lancamento_add__["a" /* LancamentoAddPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/hellenbriany/Ionic/lp4Finance/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      LP4 Finance\n    </ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="toLancamentosAdd()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content>\n    <div class="navigation" padding>\n      <ion-icon name="arrow-dropleft-circle"></ion-icon>\n      <span class="text-center">{{mes}}</span>\n      <ion-icon name="arrow-dropright-circle"></ion-icon>\n    </div>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Extrato</ion-item-divider>\n    <ion-item>\n      <div class="text-left">Creditos</div>\n      <div class="text-right">R$ 1000,00</div>\n    </ion-item>\n    <ion-item>\n      <div class="text-left">Debitos</div>\n      <div class="text-right">R$ 100,00</div>\n    </ion-item>\n    <ion-item>\n      <div class="text-left">Saldo</div>\n      <div class="text-right"> + 900,00</div>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Créditos</ion-item-divider>\n    <ion-item>\n      <div class="text-left">Salario 08/10</div>\n      <div class="text-right">R$ 1000,00</div>\n    </ion-item>\n    <ion-item>Salario 10/08</ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Débitos</ion-item-divider>\n    <ion-item>\n      <div class="text-left">Água</div>\n      <div class="text-right">R$ 100,00</div>\n    </ion-item>\n    <ion-item>Outros</ion-item>\n  </ion-item-group>\n</ion-content>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/hellenbriany/Ionic/lp4Finance/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map