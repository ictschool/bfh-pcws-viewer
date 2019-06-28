(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/address-data.ts":
/*!*********************************!*\
  !*** ./src/app/address-data.ts ***!
  \*********************************/
/*! exports provided: AddressData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressData", function() { return AddressData; });
var AddressData = /** @class */ (function () {
    function AddressData(name, address, zipCode, town) {
        this.name = name;
        this.address = address;
        this.zipCode = zipCode;
        this.town = town;
    }
    return AddressData;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n  <app-pcws-request></app-pcws-request>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PC-WS Viewer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pcws_request_pcws_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pcws-request/pcws-request.component */ "./src/app/pcws-request/pcws-request.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pcws_request_pcws_request_component__WEBPACK_IMPORTED_MODULE_6__["PcwsRequestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code-request.ts":
/*!*********************************!*\
  !*** ./src/app/code-request.ts ***!
  \*********************************/
/*! exports provided: CodeRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeRequest", function() { return CodeRequest; });
var CodeRequest = /** @class */ (function () {
    function CodeRequest(accountName, serviceType, addressData) {
        this.accountName = accountName;
        this.serviceType = serviceType;
        this.addressData = addressData;
    }
    return CodeRequest;
}());



/***/ }),

/***/ "./src/app/pcws-request/pcws-request.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pcws-request/pcws-request.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.barcode {\n  padding:1px;\n  border:1px solid #021a40;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGN3cy1yZXF1ZXN0L3Bjd3MtcmVxdWVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Bjd3MtcmVxdWVzdC9wY3dzLXJlcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5iYXJjb2RlIHtcbiAgcGFkZGluZzoxcHg7XG4gIGJvcmRlcjoxcHggc29saWQgIzAyMWE0MDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pcws-request/pcws-request.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pcws-request/pcws-request.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-5\">\n      <form #inputForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group row\">\n          <label for=\"pcwsUrl\" class=\"col-sm-2 col-form-label\">pcwsUrl</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"pcwsUrl\" name=\"pcwsUrl\" [(ngModel)]=\"pcwsUrl\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"accountName\" class=\"col-sm-2 col-form-label\">accountName</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"accountName\" name=\"accountName\" [(ngModel)]=\"codeRequest.accountName\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"serviceType\" class=\"col-sm-2 col-form-label\">serviceType</label>\n          <div class=\"col-sm-10\">\n            <select class=\"form-control\" name=\"serviceType\" id=\"serviceType\" [(ngModel)]=\"codeRequest.serviceType\">\n              <option *ngFor=\"let serviceType of serviceTypes\" [value]=\"serviceType\">{{serviceType}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"name\" class=\"col-sm-2 col-form-label\">name</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" name=\"name\"\n                   [(ngModel)]=\"codeRequest.addressData.name\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"address\" class=\"col-sm-2 col-form-label\">address</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" name=\"address\"\n                   [(ngModel)]=\"codeRequest.addressData.address\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"zipCode\" class=\"col-sm-2 col-form-label\">zipCode</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"zipCode\" name=\"zipCode\" name=\"zipCode\"\n                   [(ngModel)]=\"codeRequest.addressData.zipCode\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"town\" class=\"col-sm-2 col-form-label\">town</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"town\" name=\"town\" name=\"town\"\n                   [(ngModel)]=\"codeRequest.addressData.town\">\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      </form>\n    </div>\n    <div class=\"col-6\">\n      <div *ngIf=\"message\" class=\"alert alert-info\">{{message}}</div>\n\n      <img *ngIf=\"image\"\n           [src]=\"image\"\n           alt=\"Generated Barcode\"\n           class=\"img-fluid barcode\">\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pcws-request/pcws-request.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pcws-request/pcws-request.component.ts ***!
  \********************************************************/
/*! exports provided: PcwsRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PcwsRequestComponent", function() { return PcwsRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _address_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../address-data */ "./src/app/address-data.ts");
/* harmony import */ var _code_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../code-request */ "./src/app/code-request.ts");
/* harmony import */ var _pcws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pcws.service */ "./src/app/pcws.service.ts");





var PcwsRequestComponent = /** @class */ (function () {
    function PcwsRequestComponent(pcwsService) {
        this.pcwsService = pcwsService;
        this.serviceTypes = ["ECONOMY", "PREMIUM"];
        this.pcwsUrl = 'https://bfh-pcws-mock.herokuapp.com/';
        this.codeRequest = new _code_request__WEBPACK_IMPORTED_MODULE_3__["CodeRequest"]('allPermissions', 'PREMIUM', new _address_data__WEBPACK_IMPORTED_MODULE_2__["AddressData"]('Max Muster', 'Musterstrasse 11', '9999', 'Musterhausen'));
    }
    PcwsRequestComponent.prototype.ngOnInit = function () {
    };
    PcwsRequestComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.pcwsUrl);
        console.log(this.codeRequest);
        this.pcwsService.createCode(this.pcwsUrl, this.codeRequest).subscribe(function (codeResponse) {
            _this.setValues(codeResponse.message, codeResponse.code);
        }, function (error) {
            console.log(error);
            _this.setValues(new Date().toISOString() + ": An error occurred while requesting the code", null);
        });
    };
    PcwsRequestComponent.prototype.setValues = function (message, code) {
        if (message) {
            this.message = message;
        }
        else {
            this.message = null;
        }
        if (code) {
            this.image = "data:image/png;base64," + code;
        }
        else {
            this.image = null;
        }
    };
    PcwsRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pcws-request',
            template: __webpack_require__(/*! ./pcws-request.component.html */ "./src/app/pcws-request/pcws-request.component.html"),
            styles: [__webpack_require__(/*! ./pcws-request.component.css */ "./src/app/pcws-request/pcws-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pcws_service__WEBPACK_IMPORTED_MODULE_4__["PcwsService"]])
    ], PcwsRequestComponent);
    return PcwsRequestComponent;
}());



/***/ }),

/***/ "./src/app/pcws.service.ts":
/*!*********************************!*\
  !*** ./src/app/pcws.service.ts ***!
  \*********************************/
/*! exports provided: PcwsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PcwsService", function() { return PcwsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PcwsService = /** @class */ (function () {
    function PcwsService(httpClient) {
        this.httpClient = httpClient;
        this.createCodePath = 'createCode';
    }
    PcwsService.prototype.createCode = function (pswcUrl, codeRequest) {
        var _this = this;
        var url = pswcUrl + "/" + this.createCodePath;
        return this.httpClient.post(url, codeRequest, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("calling " + url + " with " + codeRequest); }));
    };
    PcwsService.prototype.log = function (message) {
        console.log(message);
    };
    PcwsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PcwsService);
    return PcwsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/SamuelBucheliZ/bfh-pcws-viewer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map