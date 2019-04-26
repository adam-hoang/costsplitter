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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n}\nul {\n    list-style-position: inside;\n    text-align: left;\n    margin-left: -20px;\n    margin-top: 10px;\n}\nli {\n    margin-bottom: 10px;\n}\nh3 {\n    text-decoration: underline;\n}\n.inside {\n    display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaDMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmluc2lkZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>About Cost Splitter</h3>\n  <p>Cost Splitter is an app that helps you split the costs of trips/events with friends and family.</p>\n  <div class=\"inside\">\n  <h3>Features to add</h3>\n  <ul>\n    <li>Make Responsive</li>\n    <li>Use Angular Material</li>\n    <li>User Login and Registration\n      <ul>\n        <li>Admin</li>\n        <li>User</li>\n      </ul>\n    </li>\n    <li>Group Chat Using Sockets</li>\n    <li>Payback Features\n      <ul>\n        <li>Different Payment Responsibilty</li>\n        <li>Venmo/Square/Zelle</li>\n        <li>Minimize Transactions</li>\n      </ul>\n    </li>\n    <li>More User Details\n      <ul>\n        <li>Avatars</li>\n        <li>Email</li>\n        <li>Phone Number</li>\n      </ul>\n    </li>\n    <li>Export data to PDF/Spreadsheet</li>\n    <li>Foreign Currency</li>\n    <li>Categories for Events</li>\n  </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/add-event/add-event.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-event/add-event.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\nbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n}\n.addbutton {\n    margin-left: 5px;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\ninput {\n    border-radius: 5px;\n    margin: auto;\n    margin-bottom: 10px;\n}\nselect {\n    width: 130px;\n    margin: auto;\n    margin-bottom: 10px;\n}\np {\n    margin: 5px;\n}\n.error {\n    color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWV2ZW50L2FkZC1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRkLWV2ZW50L2FkZC1ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGRidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59XG5pbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuc2VsZWN0IHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5wIHtcbiAgICBtYXJnaW46IDVweDtcbn1cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-event/add-event.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-event/add-event.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <h3>Add Event</h3>\n  <div>\n    <p *ngIf=\"errors.title\" class=\"error\">{{errors.title.message}}</p>\n    <p *ngIf=\"errors.total\" class=\"error\">{{errors.total.message}}</p>\n    <p *ngIf=\"errors.date\" class=\"error\">{{errors.date.message}}</p>\n    <p *ngIf=\"paidError\" class=\"error\">{{paidError}}</p>\n  </div>\n  <form>\n    <p>Event Title: &nbsp;&nbsp; <input placeholder=\"Event Title\" type=\"text\" name=\"eventModel.title\" [(ngModel)]=\"eventModel.title\"></p>\n    <p>Event Total: &nbsp;&nbsp; <input placeholder=\"Total Cost\" type=\"number\" name=\"eventModel.total\" [(ngModel)]=\"eventModel.total\"></p>\n    <p>Event Date: &nbsp;&nbsp; <input placeholder=\"Date\" onfocus=\"(this.type='date')\" type=\"text\" name=\"eventModel.date\" [(ngModel)]=\"eventModel.date\"></p>\n    <p>Event Note: &nbsp;&nbsp; <input placeholder=\"Note\" type=\"text\" name=\"eventModel.note\" [(ngModel)]=\"eventModel.note\"></p>\n    <p>Paid Amnt:&nbsp;&nbsp; <input placeholder=\"Paid Amount\" type=\"number\" name=\"participantModel.paid\" [(ngModel)]=\"participantModel.paid\">\n    <p>1st Payer: &nbsp;&nbsp;\n      <select type=\"text\" name=\"participantID\" [(ngModel)]=\"participantID\">\n        <option *ngFor=\"let x of group.users\" value=\"{{x._id}}\">{{x.name}}</option>\n      </select>\n    </p>  \n    <button type=\"button\" (click)=\"cancelAddEvent()\">Cancel</button>\n    <button class=\"addbutton\" (click)=\"addEvent()\">Add</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-event/add-event.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-event/add-event.component.ts ***!
  \**************************************************/
/*! exports provided: AddEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AddEventComponent = /** @class */ (function () {
    function AddEventComponent(_httpService, dialogRef, data) {
        this._httpService = _httpService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddEventComponent.prototype.ngOnInit = function () {
        this.group = this.data.group,
            this.participantID = this.data.participantID,
            this.eventModel = this.data.eventModel,
            this.participantModel = this.data.participantModel,
            this.newEventWithJournal = this.data.newEventWithJournal,
            this.errors = this.data.errors,
            this.paidError = this.data.paidError;
    };
    AddEventComponent.prototype.addEvent = function () {
        var _this = this;
        for (var i = 0; i < this.group.users.length; i++) {
            if (this.group.users[i]._id == this.participantID) {
                this.eventModel.participants.push(this.group.users[i]);
            }
        }
        this.paidError = "";
        this.eventModel.participants[0]['paid'] = this.participantModel.paid;
        this.eventModel.participants[0]['balance'] = this.eventModel.participants[0]['paid'] - parseInt(this.eventModel['total']);
        this.newEventWithJournal.event = this.eventModel;
        var newdate = String(new Date());
        newdate = newdate.substring(0, 24);
        this.newEventWithJournal.journal = ("Added Event: " + this.eventModel.title +
            " for $" + this.eventModel.total +
            " on " + this._httpService.prettyDate(this.eventModel.date) +
            " note: " + this.eventModel.note +
            " (" + this.eventModel.participants[0].name +
            " paid $" + this.participantModel.paid + ") @ " + newdate);
        var observable = this._httpService.addEvent(this.data.id, this.newEventWithJournal);
        observable.subscribe(function (data) {
            if (data['errors']) {
                console.log("There were errors, could not add event!");
                _this.errors = data['errors'];
                if (_this.participantModel.paid < 1) {
                    _this.paidError = "Paid must be greater than $0";
                }
            }
            else {
                console.log("Added event!", data);
                _this.eventModel = { title: "", total: "", date: "", note: "", participants: [] };
                _this.participantModel = { paid: null, participantID: _this.group.users[0].name };
                _this.dialogRef.close();
            }
        });
    };
    AddEventComponent.prototype.cancelAddEvent = function () {
        this.dialogRef.close();
    };
    AddEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-event',
            template: __webpack_require__(/*! ./add-event.component.html */ "./src/app/add-event/add-event.component.html"),
            styles: [__webpack_require__(/*! ./add-event.component.css */ "./src/app/add-event/add-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "./src/app/add-group/add-group.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-group/add-group.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n}\n.addbutton {\n    margin-left: 5px;\n}\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\n.buttons {\n    display: block;\n    margin-top: 10px;\n    margin-left: 10px;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n.error {\n    color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWdyb3VwL2FkZC1ncm91cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZGQtZ3JvdXAvYWRkLWdyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGRidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-group/add-group.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-group/add-group.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Add Group</h3>\n  <p *ngIf=\"errors.gname\" class=\"error\">{{errors.gname.message}}</p>\n  <form>\n    <p>Name: &nbsp;&nbsp;<input placeholder=\"Group Name\" type=\"text\" name=\"groupModel.gname\" [(ngModel)]=\"groupModel.gname\"></p>\n    <div class=\"buttons\">\n      <button type=\"button\" (click)=\"cancelAddGroup()\">Cancel</button>\n      <button class=\"addbutton\" type=\"button\" (click)=\"addGroup()\">Add</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-group/add-group.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-group/add-group.component.ts ***!
  \**************************************************/
/*! exports provided: AddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function() { return AddGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AddGroupComponent = /** @class */ (function () {
    function AddGroupComponent(_httpService, dialogRef, data) {
        this._httpService = _httpService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddGroupComponent.prototype.ngOnInit = function () {
        this.groupModel = this.data.groupModel;
        this.errors = this.data.errors;
    };
    AddGroupComponent.prototype.addGroup = function () {
        var _this = this;
        var newdate = String(new Date());
        newdate = newdate.substring(0, 24);
        this.groupModel.journal.push("Added Group: " + this.groupModel.gname + " @ " + newdate);
        var observable = this._httpService.addGroup(this.groupModel);
        observable.subscribe(function (data) {
            if (data['errors']) {
                console.log("There were errors, could not add group!");
                _this.errors = data['errors'];
            }
            else {
                console.log("Added group!", data);
                _this.dialogRef.close();
            }
        });
    };
    AddGroupComponent.prototype.cancelAddGroup = function () {
        this.dialogRef.close();
    };
    AddGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-group',
            template: __webpack_require__(/*! ./add-group.component.html */ "./src/app/add-group/add-group.component.html"),
            styles: [__webpack_require__(/*! ./add-group.component.css */ "./src/app/add-group/add-group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddGroupComponent);
    return AddGroupComponent;
}());



/***/ }),

/***/ "./src/app/add-part/add-part.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-part/add-part.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\nbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n}\n.addbutton {\n    margin-left: 5px;\n}\ninput, select {\n    display: block;\n    margin: auto;\n    margin-bottom: 10px;\n}\nselect {\n    width: 130px;\n}\n.leftForm, .rightForm{\n    display: inline-block;\n    vertical-align: top;\n}\nh3 {\n    display: block;\n}\np {\n    margin:0px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    text-align: left;\n}\n.error {\n    color: red;\n    text-align: center;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBhcnQvYWRkLXBhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRkLXBhcnQvYWRkLXBhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRlYWw7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFkZGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmlucHV0LCBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuc2VsZWN0IHtcbiAgICB3aWR0aDogMTMwcHg7XG59XG4ubGVmdEZvcm0sIC5yaWdodEZvcm17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5oMyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5wIHtcbiAgICBtYXJnaW46MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-part/add-part.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-part/add-part.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Add Particpant</h3>\n  <p *ngIf=\"paidError\" class=\"error\">{{paidError}}</p>\n  <div class=\"leftForm\">\n    <p>Paid: </p>\n    <p>Name: </p>\n  </div>\n  <div class=\"rightForm\">\n    <form>\n      <input placeholder=\"Paid\" type=\"number\" name=\"partModel.paid\" [(ngModel)]=\"partModel.paid\">\n      <select type=\"text\" name=\"partModel._id\" [(ngModel)]=\"partModel._id\">\n        <option *ngFor=\"let y of availableUsers\" value=\"{{y._id}}\">{{y.name}}</option>\n      </select>\n    </form>\n  </div>\n  <div>\n    <button type=\"button\" (click)=\"cancelAdd()\">Cancel</button>\n    <button class=\"addbutton\" type=\"button\" (click)=\"addPart()\">Add</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-part/add-part.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-part/add-part.component.ts ***!
  \************************************************/
/*! exports provided: AddPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPartComponent", function() { return AddPartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AddPartComponent = /** @class */ (function () {
    function AddPartComponent(_httpService, dialogRef, data) {
        this._httpService = _httpService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddPartComponent.prototype.ngOnInit = function () {
        this.partModel = this.data.partModel;
        this.paidError = this.data.paidError;
        this.group = this.data.addPartWithJournal.group;
        this.event = this.data.event;
        this.addPartWithJournal = this.data.addPartWithJournal;
        this.availableUsers = this.data.availableUsers;
    };
    AddPartComponent.prototype.addPart = function () {
        var _this = this;
        if (this.partModel.paid < 0) {
            this.paidError = "Paid must be greater than $0";
        }
        else {
            for (var i = 0; i < this.group.users.length; i++) {
                if (this.partModel._id == this.group.users[i]._id) {
                    this.partModel.name = this.group.users[i].name;
                }
            }
            // recalculates the event.split
            this.event.split = Math.round((this.event.total / (this.event.participants.length + 1)) * 100) / 100;
            // pushes model into event.participant array
            this.event.participants.push(this.partModel);
            // calculates balance for each participant
            for (var i = 0; i < this.event.participants.length; i++) {
                this.event.participants[i].balance = Math.round((this.event.participants[i].paid - this.event.split) * 100) / 100;
            }
            var newdate = String(new Date());
            newdate = newdate.substring(0, 24);
            this.addPartWithJournal.journal = "Added " + this.partModel.name + " to the " + this.event.title + " event @ " + newdate;
            this.addPartWithJournal.event = this.event;
            this.addPartWithJournal.group = this.group;
            var observable = this._httpService.addPart(this.data.id, this.addPartWithJournal);
            observable.subscribe(function (data) {
                console.log("Updated event!", data);
                _this.dialogRef.close();
            });
        }
    };
    AddPartComponent.prototype.cancelAdd = function () {
        this.dialogRef.close();
    };
    AddPartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-part',
            template: __webpack_require__(/*! ./add-part.component.html */ "./src/app/add-part/add-part.component.html"),
            styles: [__webpack_require__(/*! ./add-part.component.css */ "./src/app/add-part/add-part.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddPartComponent);
    return AddPartComponent;
}());



/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\nbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n}\n.buttons {\n    display: block;\n}\n.addbutton {\n    margin-left: 5px;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\ninput {\n    border-radius: 5px;\n    display: block;\n    margin: auto;\n    margin-bottom: 10px;\n}\n.addUser {\n    display: inline-block;\n}\n.error {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRlYWw7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFkZGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1cbmlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYWRkVXNlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Add User</h3>\n  <p *ngIf=\"errors.name\" class=\"error\">{{errors.name.message}}</p>\n  <form>\n    <p>Name: &nbsp;&nbsp; <input class=\"addUser\" placeholder=\"Name\" type=\"text\" name=\"userModel.name\" [(ngModel)]=\"userModel.name\"></p>\n    <div class=\"buttons\">\n      <button type=\"button\" (click)=\"cancelAddUser()\">Cancel</button>\n      <button class=\"addbutton\" (click)=\"addUser()\">Add</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(_httpService, dialogRef, data) {
        this._httpService = _httpService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.userModel = this.data.userModel;
        this.newUserWithJournal = this.data.newUserWithJournal;
        this.errors = this.data.errors;
    };
    AddUserComponent.prototype.addUser = function () {
        var _this = this;
        var newdate = String(new Date());
        newdate = newdate.substring(0, 24);
        this.newUserWithJournal.user = this.userModel;
        this.newUserWithJournal.journal = "Added User: " + this.userModel.name + " @ " + newdate;
        var observable = this._httpService.addUser(this.data.id, this.newUserWithJournal);
        observable.subscribe(function (data) {
            if (data['errors']) {
                console.log("There were errors, could not add user!");
                _this.errors = data['errors'];
            }
            else {
                console.log("Added user!", data);
                _this.dialogRef.close();
            }
        });
    };
    AddUserComponent.prototype.cancelAddUser = function () {
        this.dialogRef.close();
    };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _journal_journal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./journal/journal.component */ "./src/app/journal/journal.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");









var routes = [
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'group/:id', component: _group_group_component__WEBPACK_IMPORTED_MODULE_4__["GroupComponent"] },
    { path: 'group/:id/event/:eid', component: _event_event_component__WEBPACK_IMPORTED_MODULE_5__["EventComponent"] },
    { path: 'group/:id/user/:uid', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] },
    { path: 'group/:id/journal', component: _journal_journal_component__WEBPACK_IMPORTED_MODULE_7__["JournalComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    width: 400px;\n    background-color: lightgrey;\n    padding: 10px;\n    margin: auto;\n    border-radius: 10px;\n    text-align: center;\n    /* background-image: url(\"src/assets/images/teahouse3.png\"); */\n    /* background-image: url(\"src/assets/images/watercolor35.png\"); */\n}\n@font-face { font-family: Brushot-Bold; src: url('Brushot-Bold.ttf'); }\nh1 {\n    font-family: Brushot-Bold;\n    text-align: center;\n    font-size: 60px;\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\nh2 {\n    font-family: Brushot-Bold;\n}\nbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 130px;\n    border-radius: 5px;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/* img {\n    width:350px;\n} */\n.teal {\n    color:teal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsaUVBQWlFO0FBQ3JFO0FBQ0EsYUFBYSx5QkFBeUIsRUFBRSw0QkFBZ0MsRUFBRTtBQUUxRTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy90ZWFob3VzZTMucG5nXCIpOyAqL1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3dhdGVyY29sb3IzNS5wbmdcIik7ICovXG59XG5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IEJydXNob3QtQm9sZDsgc3JjOiB1cmwoJ3NyYy9CcnVzaG90LUJvbGQudHRmJyk7IH0gXG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogQnJ1c2hvdC1Cb2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaDIge1xuICAgIGZvbnQtZmFtaWx5OiBCcnVzaG90LUJvbGQ7XG59XG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59XG4vKiBpbWcge1xuICAgIHdpZHRoOjM1MHB4O1xufSAqL1xuLnRlYWwge1xuICAgIGNvbG9yOnRlYWw7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>C<span class=\"\">o</span>st <span class=\"teal\">$</span>plitter</h1>\n\n  <button [routerLink]=\"['']\">Home</button>\n  <button [routerLink]=\"['about']\">About</button>\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-event/edit-event.component */ "./src/app/edit-event/edit-event.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _journal_journal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./journal/journal.component */ "./src/app/journal/journal.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_part_add_part_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-part/add-part.component */ "./src/app/add-part/add-part.component.ts");
/* harmony import */ var _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-group/add-group.component */ "./src/app/add-group/add-group.component.ts");
/* harmony import */ var _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-event/add-event.component */ "./src/app/add-event/add-event.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _delete_group_delete_group_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./delete-group/delete-group.component */ "./src/app/delete-group/delete-group.component.ts");
/* harmony import */ var _delete_event_delete_event_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./delete-event/delete-event.component */ "./src/app/delete-event/delete-event.component.ts");
/* harmony import */ var _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./delete-user/delete-user.component */ "./src/app/delete-user/delete-user.component.ts");
/* harmony import */ var _delete_part_delete_part_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./delete-part/delete-part.component */ "./src/app/delete-part/delete-part.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _group_group_component__WEBPACK_IMPORTED_MODULE_10__["GroupComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_11__["EventComponent"],
                _edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_12__["EditEventComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _journal_journal_component__WEBPACK_IMPORTED_MODULE_14__["JournalComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _add_part_add_part_component__WEBPACK_IMPORTED_MODULE_18__["AddPartComponent"],
                _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_19__["AddGroupComponent"],
                _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_20__["AddEventComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_21__["AddUserComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_22__["EditUserComponent"],
                _delete_group_delete_group_component__WEBPACK_IMPORTED_MODULE_23__["DeleteGroupComponent"],
                _delete_event_delete_event_component__WEBPACK_IMPORTED_MODULE_24__["DeleteEventComponent"],
                _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_25__["DeleteUserComponent"],
                _delete_part_delete_part_component__WEBPACK_IMPORTED_MODULE_26__["DeletePartComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"]
            ],
            entryComponents: [
                _edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_12__["EditEventComponent"],
                _add_part_add_part_component__WEBPACK_IMPORTED_MODULE_18__["AddPartComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_20__["AddEventComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_21__["AddUserComponent"],
                _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_19__["AddGroupComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_22__["EditUserComponent"],
                _delete_group_delete_group_component__WEBPACK_IMPORTED_MODULE_23__["DeleteGroupComponent"],
                _delete_event_delete_event_component__WEBPACK_IMPORTED_MODULE_24__["DeleteEventComponent"],
                _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_25__["DeleteUserComponent"],
                _delete_part_delete_part_component__WEBPACK_IMPORTED_MODULE_26__["DeletePartComponent"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/delete-event/delete-event.component.css":
/*!*********************************************************!*\
  !*** ./src/app/delete-event/delete-event.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n    margin-left:5px;\n}\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\n.buttons {\n    display: inline-block;\n    margin-top: 10px;\n    margin-left: 10px;\n}\np {\n    margin: 10px;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n.error {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsZXRlLWV2ZW50L2RlbGV0ZS1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9kZWxldGUtZXZlbnQvZGVsZXRlLWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG59XG4uY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5wIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/delete-event/delete-event.component.html":
/*!**********************************************************!*\
  !*** ./src/app/delete-event/delete-event.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>Are you sure you want to delete the {{data.x.title}} event?</p>\n  <div class=\"buttons\">\n    <button (click)=\"cancelDelete()\" type=\"button\">Cancel</button>\n    <button (click)=\"deleteEvent()\" type=\"button\">Delete</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/delete-event/delete-event.component.ts":
/*!********************************************************!*\
  !*** ./src/app/delete-event/delete-event.component.ts ***!
  \********************************************************/
/*! exports provided: DeleteEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEventComponent", function() { return DeleteEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var DeleteEventComponent = /** @class */ (function () {
    function DeleteEventComponent(_httpService, dialogRef, data) {
        this._httpService = _httpService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteEventComponent.prototype.ngOnInit = function () {
        this.group = this.data.group;
    };
    DeleteEventComponent.prototype.deleteEvent = function () {
        var _this = this;
        for (var i = 0; i < this.group.events.length; i++) {
            if (this.group.events[i]._id == this.data.x._id) {
                var temp = this.group.events[i];
                this.group.events[i] = this.group.events[this.group.events.length - 1];
                this.group.events[this.group.events.length - 1] = temp;
            }
        }
        var newdate = String(new Date());
        newdate = newdate.substring(0, 24);
        this.group.journal.push("Removed Event: " + this.group.events[this.group.events.length - 1].title + " @ " + newdate);
        this.group.events.pop();
        var observable = this._httpService.deleteEvent(this.data.x._id, this.group);
        observable.subscribe(function (data) {
            console.log("Removed Event!", data);
            _this.dialogRef.close();
        });
    };
    DeleteEventComponent.prototype.cancelDelete = function () {
        this.dialogRef.close();
    };
    DeleteEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-event',
            template: __webpack_require__(/*! ./delete-event.component.html */ "./src/app/delete-event/delete-event.component.html"),
            styles: [__webpack_require__(/*! ./delete-event.component.css */ "./src/app/delete-event/delete-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeleteEventComponent);
    return DeleteEventComponent;
}());



/***/ }),

/***/ "./src/app/delete-group/delete-group.component.css":
/*!*********************************************************!*\
  !*** ./src/app/delete-group/delete-group.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n    margin-left:5px;\n}\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\n.buttons {\n    display: inline-block;\n    margin-top: 10px;\n    margin-left: 10px;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsZXRlLWdyb3VwL2RlbGV0ZS1ncm91cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGVsZXRlLWdyb3VwL2RlbGV0ZS1ncm91cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xufVxuLmNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdGVhbDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/delete-group/delete-group.component.html":
/*!**********************************************************!*\
  !*** ./src/app/delete-group/delete-group.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>Are you sure you want to delete the {{data.x.gname}} group?</p>\n  <div class=\"buttons\">\n    <button (click)=\"cancelDelete()\" type=\"button\">Cancel</button>\n    <button (click)=\"deleteGroup()\" type=\"button\">Delete</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/delete-group/delete-group.component.ts":
/*!********************************************************!*\
  !*** ./src/app/delete-group/delete-group.component.ts ***!
  \********************************************************/
/*! exports provided: DeleteGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteGroupComponent", function() { return DeleteGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DeleteGroupComponent = /** @class */ (function () {
    function DeleteGroupComponent(_httpService, _router, dialogRef, data) {
        this._httpService = _httpService;
        this._router = _router;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteGroupComponent.prototype.ngOnInit = function () {
    };
    DeleteGroupComponent.prototype.deleteGroup = function () {
        var _this = this;
        var observable = this._httpService.deleteGroup(this.data.x._id);
        observable.subscribe(function (data) {
            console.log("Removed Group!", data);
            _this.dialogRef.close();
            _this._router.navigate(['/']);
        });
    };
    DeleteGroupComponent.prototype.cancelDelete = function () {
        this.dialogRef.close();
    };
    DeleteGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-group',
            template: __webpack_require__(/*! ./delete-group.component.html */ "./src/app/delete-group/delete-group.component.html"),
            styles: [__webpack_require__(/*! ./delete-group.component.css */ "./src/app/delete-group/delete-group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeleteGroupComponent);
    return DeleteGroupComponent;
}());



/***/ }),

/***/ "./src/app/delete-part/delete-part.component.css":
/*!*******************************************************!*\
  !*** ./src/app/delete-part/delete-part.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n    margin-left:5px;\n}\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\n.buttons {\n    display: inline-block;\n    margin-top: 10px;\n    margin-left: 10px;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsZXRlLXBhcnQvZGVsZXRlLXBhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1wYXJ0L2RlbGV0ZS1wYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG59XG4uY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59Il19 */"

/***/ }),

/***/ "./src/app/delete-part/delete-part.component.html":
/*!********************************************************!*\
  !*** ./src/app/delete-part/delete-part.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>Are you sure you want to remove {{data.name}} from the event?</p>\n  <div class=\"buttons\">\n    <button class=\"button\" (click)=\"cancelDelete()\" type=\"button\">Cancel</button>\n    <button class=\"button2\" (click)=\"deletePart()\" type=\"button\">Delete</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/delete-part/delete-part.component.ts":
/*!******************************************************!*\
  !*** ./src/app/delete-part/delete-part.component.ts ***!
  \******************************************************/
/*! exports provided: DeletePartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePartComponent", function() { return DeletePartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var DeletePartComponent = /** @class */ (function () {
    function DeletePartComponent(_httpService, dialogRef, data) {
        this._httpService = _httpService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeletePartComponent.prototype.ngOnInit = function () {
        this.group = this.data.group;
        this.event = this.data.event;
        this.deletePartName = this.data.deletePartName;
        this.groupAndEvent = this.data.groupAndEvent;
    };
    DeletePartComponent.prototype.deletePart = function () {
        var _this = this;
        // recalculates the event.split for one less person
        this.event.split = Math.round((this.event.total / (this.event.participants.length - 1)) * 100) / 100;
        // removes the participant from the event array
        var x = this.event.participants;
        for (var i = 0; i < x.length; i++) {
            if (x[i]._id == this.data.pid) {
                var temp = x[i];
                x[i] = x[x.length - 1];
                x[x.length - 1] = temp;
                this.deletePartName = x[x.length - 1].name;
                x.pop();
            }
        }
        // recalculates balance for each participant
        for (var i = 0; i < this.event.participants.length; i++) {
            this.event.participants[i].balance = Math.round((this.event.participants[i].paid - this.event.split) * 100) / 100;
        }
        var y = this.group.events;
        for (var i = 0; i < y.length; i++) {
            if (y[i]._id == this.event._id) {
                var temp = y[i];
                y[i] = y[y.length - 1];
                y[y.length - 1] = temp;
                y.pop();
                //event removed and new one being pushed back into the original spot.
                y.push(this.event);
                temp = y[i];
                y[i] = y[y.length - 1];
                y[y.length - 1] = temp;
            }
        }
        var newdate = String(new Date());
        newdate = newdate.substring(0, 24);
        this.group.journal.push("Removed " + this.deletePartName + " from the " + this.event.title + " event @ " + newdate);
        this.groupAndEvent.event = this.event;
        this.groupAndEvent.group = this.group;
        var observable = this._httpService.deletePart(this.data.id, this.groupAndEvent);
        observable.subscribe(function (data) {
            console.log("Removed participant from event!", data);
            _this.dialogRef.close();
        });
    };
    DeletePartComponent.prototype.cancelDelete = function () {
        this.dialogRef.close();
    };
    DeletePartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-part',
            template: __webpack_require__(/*! ./delete-part.component.html */ "./src/app/delete-part/delete-part.component.html"),
            styles: [__webpack_require__(/*! ./delete-part.component.css */ "./src/app/delete-part/delete-part.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeletePartComponent);
    return DeletePartComponent;
}());



/***/ }),

/***/ "./src/app/delete-user/delete-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/delete-user/delete-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n    margin-left:5px;\n}\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\n.buttons {\n    display: inline-block;\n    margin-top: 10px;\n    margin-left: 10px;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsZXRlLXVzZXIvZGVsZXRlLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS11c2VyL2RlbGV0ZS11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG59XG4uY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59Il19 */"

/***/ }),

/***/ "./src/app/delete-user/delete-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/delete-user/delete-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p>Are you sure you want to delete {{data.x.name}} from the group?</p>\n    <div class=\"buttons\">\n        <button class=\"button\" (click)=\"cancelDelete()\" type=\"button\">Cancel</button>\n        <button class=\"button2\" (click)=\"deleteUser()\" type=\"button\">Delete</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/delete-user/delete-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/delete-user/delete-user.component.ts ***!
  \******************************************************/
/*! exports provided: DeleteUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserComponent", function() { return DeleteUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var DeleteUserComponent = /** @class */ (function () {
    function DeleteUserComponent(_httpService, dialogRef, data) {
        this._httpService = _httpService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteUserComponent.prototype.ngOnInit = function () {
        this.group = this.data.group;
    };
    DeleteUserComponent.prototype.deleteUser = function () {
        var _this = this;
        // pops user out of group
        for (var i = 0; i < this.group.users.length; i++) {
            if (this.group.users[i]._id == this.data.x._id) {
                var temp = this.group.users[i];
                this.group.users[i] = this.group.users[this.group.users.length - 1];
                this.group.users[this.group.users.length - 1] = temp;
            }
        }
        var newdate = String(new Date());
        newdate = newdate.substring(0, 24);
        this.group.journal.push("Removed User: " + this.group.users[this.group.users.length - 1].name + " @ " + newdate);
        this.group.users.pop();
        // checks if there are any events
        if (this.group.events.length < 1) {
            var observable = this._httpService.deleteUser(this.data.x._id, this.group);
            observable.subscribe(function (data) {
                console.log("Removed user!", data);
                _this.dialogRef.close();
            });
        }
        else {
            //pops user out of all events in group
            for (var i = 0; i < this.group.events.length; i++) {
                for (var j = 0; j < this.group.events[i].participants.length; j++) {
                    if (this.group.events[i].participants[j]._id == this.data.x._id) {
                        var temp = this.group.events[i].participants[j];
                        this.group.events[i].participants[j] = this.group.events[i].participants[this.group.events[i].participants.length - 1];
                        this.group.events[i].participants[this.group.events[i].participants.length - 1] = temp;
                        this.group.events[i].participants.pop();
                        this.group.events[i].split = Math.round((this.group.events[i].total / this.group.events[i].participants.length) * 100) / 100;
                        //recalculates balance for each participant
                        for (var k = 0; k < this.group.events[i].participants.length; k++) {
                            this.group.events[i].participants[k].balance = Math.round((this.group.events[i].participants[k].paid - this.group.events[i].split) * 100) / 100;
                        }
                    }
                }
                var observable = this._httpService.deleteUser(this.data.x._id, this.group);
                observable.subscribe(function (data) {
                    console.log("Removed user!", data);
                    _this.dialogRef.close();
                });
            }
        }
    };
    DeleteUserComponent.prototype.cancelDelete = function () {
        this.dialogRef.close();
    };
    DeleteUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-user',
            template: __webpack_require__(/*! ./delete-user.component.html */ "./src/app/delete-user/delete-user.component.html"),
            styles: [__webpack_require__(/*! ./delete-user.component.css */ "./src/app/delete-user/delete-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeleteUserComponent);
    return DeleteUserComponent;
}());



/***/ }),

/***/ "./src/app/edit-event/edit-event.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-event/edit-event.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n    color: red;\n}\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\n.editbutton {\n    margin-left: 5px;\n}\nbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n}\ninput {\n    display: inline-block;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1ldmVudC9lZGl0LWV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWV2ZW50L2VkaXQtZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRlYWw7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lZGl0YnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pbnB1dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit-event/edit-event.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-event/edit-event.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Edit Event</h3>\n  <div>\n    <p class=\"error\" *ngFor=\"let x of errors\">{{x}}</p>\n  </div>\n  <form>\n    <p>Event Title: <input type=\"text\" name=\"editEvent.title\" [(ngModel)]=\"editEvent.title\" placeholder=\"Title\"/></p>\n    <p>Event Total: <input type=\"number\" name=\"editEvent.total\" [(ngModel)]=\"editEvent.total\" placeholder=\"Total\"/></p>\n    <p>Event Note: <input type=\"text\" name=\"editEvent.note\" [(ngModel)]=\"editEvent.note\" placeholder=\"Note\"/></p>\n    <p>Event Date: <input type=\"date\" name=\"editEvent.date\" [(ngModel)]=\"editEvent.date\" placeholder=\"Date\"/></p>\n    <div class=\"buttonsDiv\">\n      <button (click)=\"cancelEditEvent()\" type=\"button\">Cancel</button>\n      <button class=\"editbutton\" (click)=\"updateEvent(editEvent._id, editEvent)\" type=\"button\">Edit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/edit-event/edit-event.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-event/edit-event.component.ts ***!
  \****************************************************/
/*! exports provided: EditEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventComponent", function() { return EditEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var EditEventComponent = /** @class */ (function () {
    function EditEventComponent(_httpService, dialogRef, data) {
        this._httpService = _httpService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.errors = [];
    }
    EditEventComponent.prototype.ngOnInit = function () {
        this.editEvent = this.data.editEvent;
        this.getGroup();
    };
    EditEventComponent.prototype.getGroup = function () {
        var _this = this;
        var observable = this._httpService.getGroup(this.data.id);
        observable.subscribe(function (data) {
            _this.group = data['group'];
            console.log("Got group", data);
            _this.originalEvent = JSON.parse(JSON.stringify(_this.editEvent));
        });
    };
    EditEventComponent.prototype.updateEvent = function (id, event) {
        var _this = this;
        this.errors = [];
        if (event.title.length < 3) {
            this.errors.push("Title must be at least 3 characters");
        }
        if (event.note.length < 3) {
            this.errors.push("Note must be at least 3 characters");
        }
        if (event.total <= 0) {
            this.errors.push("Total must be greater than $0");
        }
        if (this.errors.length > 0) {
        }
        else {
            // calculates split
            event.split = Math.round((event.total / (event.participants.length)) * 100) / 100;
            // calculates balance for each participant
            for (var i = 0; i < event.participants.length; i++) {
                event.participants[i].balance = Math.round((event.participants[i].paid - event.split) * 100) / 100;
            }
            var observable = this._httpService.updateEvent(id, event);
            observable.subscribe(function (data) {
                console.log("Edited event", data);
                _this.updateGroupAfterUpdatingEvent(event);
                _this.dialogRef.close();
            });
        }
    };
    EditEventComponent.prototype.updateGroupAfterUpdatingEvent = function (event) {
        var _this = this;
        for (var i = 0; i < this.group.events.length; i++) {
            if (this.group.events[i]._id == event._id) {
                this.group.events[i] = event;
            }
        }
        var newdate = String(new Date());
        newdate = newdate.substring(0, 24);
        this.group.journal.push("Updated Event: " + this.originalEvent.title +
            " for $" + this.originalEvent.total +
            " on " + this.originalEvent.date +
            " note: " + this.originalEvent.note +
            " to " + this.editEvent.title +
            " for $" + this.editEvent.total +
            " on " + this.editEvent.date +
            " note: " + this.editEvent.note +
            " @ " + newdate);
        var observable = this._httpService.updateGroupAfterUpdatingEvent(this.data.id, this.group);
        observable.subscribe(function (data) {
            _this.group = data['group'];
            console.log("Got group", data);
        });
    };
    EditEventComponent.prototype.cancelEditEvent = function () {
        this.dialogRef.close();
    };
    EditEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-event',
            template: __webpack_require__(/*! ./edit-event.component.html */ "./src/app/edit-event/edit-event.component.html"),
            styles: [__webpack_require__(/*! ./edit-event.component.css */ "./src/app/edit-event/edit-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditEventComponent);
    return EditEventComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\n.editbutton {\n    margin-left: 5px;\n}\nbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n.buttons {\n    margin-top: 10px;\n    display: block;\n}\n.error {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZWRpdGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufVxuLmJ1dHRvbnMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Edit User</h3>\n  <p *ngIf=\"userError\" class=\"error\">{{userError}}</p>\n  <form>\n    <p>Name: &nbsp;&nbsp; <input placeholder=\"Name\" type=\"text\" name=\"user.name\" [(ngModel)]=\"user.name\"></p>\n    <div class=\"buttons\">\n      <button type=\"button\" (click)=\"hideEditUser()\">Cancel</button>\n      <button class=\"editbutton\" (click)=\"editUser()\">Edit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.ts ***!
  \**************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(_httpService, dialogRef, data) {
        this._httpService = _httpService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        this.group = this.data.group;
        this.user = this.data.user;
        this.originalName = this.data.originalName;
        this.allModelChanges = this.data.allModelChanges;
        this.events = this.data.events;
        this.userError = this.data.userError;
    };
    EditUserComponent.prototype.editUser = function () {
        var _this = this;
        // CHANGES NAME OF USER IN GROUP
        for (var i = 0; i < this.group.users.length; i++) {
            if (this.group.users[i]._id == this.data.uid) {
                this.group.users[i].name = this.user.name;
            }
        }
        // CHANGES NAME OF PARTICIPANTS IN EACH EVENT OF GROUP
        for (var i = 0; i < this.group.events.length; i++) {
            var x = this.group.events[i].participants;
            for (var j = 0; j < x.length; j++) {
                if (x[j]._id == this.data.uid) {
                    x[j].name = this.user.name;
                }
            }
        }
        var newdate = String(new Date());
        newdate = newdate.substring(0, 24);
        this.group.journal.push("Edited User Name from " + this.originalName + " to " + this.user.name + " @ " + newdate);
        this.allModelChanges.group = this.group;
        this.allModelChanges.events = this.events;
        this.allModelChanges.user = this.user;
        if (this.user.name.length < 3) {
            this.userError = "Name must be at least 3 characters";
        }
        else {
            var observable = this._httpService.updateUser(this.data.id, this.allModelChanges);
            observable.subscribe(function (data) {
                _this.dialogRef.close();
            });
        }
    };
    EditUserComponent.prototype.hideEditUser = function () {
        this.dialogRef.close();
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/edit-user/edit-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n    color: red;\n}\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n    text-align: center;\n}\nbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n}\n.editbutton {\n    margin-left: 5px;\n}\n.buttons{\n    display: block;\n}\ninput, p {\n    display: inline-block;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRlYWw7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmVkaXRidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmlucHV0LCBwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59Il19 */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Edit Group</h2>\n  <p *ngIf=\"gnameError\" class=\"error\">{{gnameError}}</p>\n  <form>\n    <p>Group Name: &nbsp;&nbsp;<input type=\"text\" name=\"editGroup.gname\" [(ngModel)]=\"editGroup.gname\" placeholder=\"Name\"/></p>      \n    <div class=\"buttons\">\n      <button (click)=\"cancelEditGroup()\" type=\"button\">Cancel</button>\n      <button class=\"editbutton\" (click)=\"updateGroup(editGroup._id, editGroup)\" type=\"button\">Edit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, dialogRef, data) {
        this._httpService = _httpService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.gnameError = "";
        this.sendBoolToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.originalName = "";
    }
    EditComponent.prototype.ngOnInit = function () {
        this.editGroup = this.data.editGroup;
        this.originalName = this.editGroup.gname;
    };
    EditComponent.prototype.updateGroup = function (id, group) {
        var _this = this;
        if (group.gname.length < 3) {
            this.gnameError = "Name must be at least 3 characters";
        }
        else {
            var newdate = String(new Date());
            newdate = newdate.substring(0, 24);
            this.editGroup.journal.push("Updated Group Name from " + this.originalName + " to " + group.gname + " @ " + newdate);
            var observable = this._httpService.updateGroup(id, group);
            observable.subscribe(function (data) {
                console.log("Edited group", data);
                _this.dialogRef.close();
            });
        }
    };
    EditComponent.prototype.cancelEditGroup = function () {
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditComponent.prototype, "editGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditComponent.prototype, "sendBoolToParent", void 0);
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n}\ntable {\n    margin: auto;\n}\nbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n}\n.addbutton, .editbtn {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 130px;\n    border-radius: 5px;\n}\n.addbutton {\n    margin-top: 10px;\n}\np {\n    margin:0px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    text-align: left;\n}\n.eventDetails {\n    text-align: center;\n}\n.red {\n    color: red;\n}\n.green {\n    color: green;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvZXZlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZXZlbnQvZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRlYWw7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxudGFibGUge1xuICAgIG1hcmdpbjogYXV0bztcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFkZGJ1dHRvbiwgLmVkaXRidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYWRkYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxucCB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmV2ZW50RGV0YWlscyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZCB7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <h1>{{group.gname}}</h1>\n  <hr>\n  <div>\n    <h2>{{event.title}}</h2>\n    <p class=\"eventDetails\"><b>Total: $</b>{{event.total}}</p>\n    <p class=\"eventDetails\"><b>Split Per Person: $</b>{{event.split}}</p>\n    <p class=\"eventDetails\"><b>Note: </b>{{event.note}}</p>\n    <p class=\"eventDetails\"><b>Date: </b>{{prettyDate}}</p>\n    <button class=\"editbtn\" (click)=\"showEdit()\">Edit Event Details</button>\n    <div class='container'>\n      <h3>Participants</h3>\n      <table>\n        <thead>\n          <th>Name</th>\n          <th>Paid</th>\n          <th>Balance</th>\n          <th>Actions</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let x of event.participants\">\n            <td>{{x.name}}</td>\n            <td>${{x.paid}}</td>\n            <td *ngIf=\"x.balance < 0\" class=\"red\">-${{x.balance*-1}}</td>\n            <td *ngIf=\"x.balance >= 0\"  class=\"green\">+${{x.balance}}</td>\n            <td><button (click)=\"deletePart(x)\" class=\"addButton\">Delete</button></td>\n          </tr>\n        </tbody>\n      </table>\n      <button *ngIf=\"noAvailUsers == false\" class=\"addbutton\" (click)=\"showAdd()\">Add Participant</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-event/edit-event.component */ "./src/app/edit-event/edit-event.component.ts");
/* harmony import */ var _add_part_add_part_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-part/add-part.component */ "./src/app/add-part/add-part.component.ts");
/* harmony import */ var _delete_part_delete_part_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../delete-part/delete-part.component */ "./src/app/delete-part/delete-part.component.ts");








var EventComponent = /** @class */ (function () {
    function EventComponent(_httpService, _route, dialog) {
        this._httpService = _httpService;
        this._route = _route;
        this.dialog = dialog;
        this.partModel = { name: "", paid: 0, balance: 0, _id: "" };
        this.groupAndEvent = { group: {}, event: {} };
        this.prettyDate = "";
        this.noAvailUsers = false;
        this.paidError = "";
        this.addPartWithJournal = { group: {}, event: {}, journal: "" };
        this.deletePartName = "";
    }
    EventComponent.prototype.ngOnInit = function () {
        this.group = { gname: "", users: [], events: [] };
        this.event = { title: "", participants: [], total: 0, split: 0, note: "", date: "" };
        this.partModel = { name: "", paid: 0, balance: 0, _id: "" };
        this.prettyDate = "";
        this.getGroup();
    };
    EventComponent.prototype.showAdd = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_part_add_part_component__WEBPACK_IMPORTED_MODULE_6__["AddPartComponent"], {
            data: {
                id: this._route.snapshot.params.id,
                paidError: this.paidError,
                partModel: this.partModel,
                group: this.group,
                event: this.event,
                addPartWithJournal: this.addPartWithJournal,
                availableUsers: this.availableUsers
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getGroup();
        });
    };
    EventComponent.prototype.showEdit = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_5__["EditEventComponent"], {
            data: { id: this._route.snapshot.params.id, editEvent: this.event }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getEvent();
        });
    };
    EventComponent.prototype.getGroup = function () {
        var _this = this;
        var observable = this._httpService.getGroup(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.group = data['group'];
            console.log("Got group", data);
            _this.getEvent();
        });
    };
    EventComponent.prototype.getEvent = function () {
        var _this = this;
        var observable = this._httpService.getSingleEvent(this._route.snapshot.params.eid);
        observable.subscribe(function (data) {
            _this.event = data['event'];
            console.log("Got event", data);
            _this.availableUsers = [];
            for (var i = 0; i < _this.group.users.length; i++) {
                var sampleBoolean = false;
                for (var j = 0; j < _this.event.participants.length; j++) {
                    if (_this.group.users[i]._id == _this.event.participants[j]._id) {
                        sampleBoolean = true;
                    }
                }
                if (sampleBoolean == false) {
                    _this.availableUsers.push(_this.group.users[i]);
                }
            }
            if (_this.availableUsers.length < 1) {
                _this.availableUsers = [{ name: "" }];
                _this.noAvailUsers = true;
            }
            _this.partModel = { name: _this.availableUsers[0].name, paid: null, balance: 0, _id: _this.availableUsers[0]._id };
            _this.prettyDate = _this._httpService.prettyDate(_this.event.date);
            _this.addPartWithJournal.event = _this.event;
            _this.addPartWithJournal.group = _this.group;
        });
    };
    EventComponent.prototype.deletePart = function (x) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_part_delete_part_component__WEBPACK_IMPORTED_MODULE_7__["DeletePartComponent"], {
            data: {
                id: this._route.snapshot.params.id,
                pid: x._id,
                name: x.name,
                group: this.group,
                event: this.event,
                deletePartName: this.deletePartName,
                groupAndEvent: this.groupAndEvent,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getGroup();
            _this.noAvailUsers = false;
        });
    };
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/group/group.component.css":
/*!*******************************************!*\
  !*** ./src/app/group/group.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    margin: auto;\n}\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n}\nbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n}\n.addbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 100px;\n    border-radius: 5px;\n}\ntd {\n    width: 100px;\n}\np {\n    margin: 5px;\n}\nh1 {\n    margin-bottom: 10px;\n}\n.hover:hover {\n    color: lightseagreen;\n    cursor: pointer;\n}\n.red {\n    color: red;\n}\n.green {\n    color: green;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ncm91cC9ncm91cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRlYWw7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYWRkYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxudGQge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cbnAge1xuICAgIG1hcmdpbjogNXB4O1xufVxuaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaG92ZXI6aG92ZXIge1xuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWQge1xuICAgIGNvbG9yOiByZWQ7XG59XG4uZ3JlZW4ge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/group/group.component.html":
/*!********************************************!*\
  !*** ./src/app/group/group.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{group.gname}}</h1>\n\n<p>Total Cost: ${{groupTotal}}</p>\n<button (click)=\"showEdit()\">Edit</button>\n<button (click)=\"deleteGroup()\">Delete</button>\n<button [routerLink]=\"['/group/', group._id, 'journal']\">Journal</button>\n\n<!-- LIST OF EVENTS IN GROUP -->\n<div class='container'>\n  <table>\n    <thead>\n      <th>Events</th>\n      <th>Total</th>\n      <th>Actions</th>\n    </thead>\n    <tbody>\n      <tr  *ngFor=\"let x of group.events\">       \n        <td><p class=\"hover\" [routerLink]=\"['/group/', group._id, 'event', x._id]\">{{x.title}}</p></td>\n        <td>${{x.total}}</td>\n        <td>\n          <button [routerLink]=\"['/group/', group._id, 'event', x._id]\">Show</button>\n          <button (click)=\"deleteEvent(x)\">Delete</button>\n        </td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td>\n          <button *ngIf=\"group.users.length > 0\" class=\"addbutton\" (click)=\"showAddEventForm()\">Add Event</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div>\n  <p *ngIf=\"userA.length > 1\"><b>Suggested Next Payer: </b>{{suggestedPayer.name}}</p>\n</div>\n\n<!-- LIST OF USERS IN GROUP -->\n<div class='container'>\n  <table>\n    <thead>\n      <th>Users</th>\n      <th>Balance</th>\n      <th>Actions</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of userA\">\n        <td><p class=\"hover\" [routerLink]=\"['/group/', group._id, 'user', x._id]\">{{x.name}}</p></td>\n        <td *ngIf=\"x.bal < 0\" class=\"red\">-${{x.bal*-1}}</td>\n        <td *ngIf=\"x.bal >= 0\" class=\"green\">+${{x.bal}}</td>\n        <td>\n          <button [routerLink]=\"['/group/', group._id, 'user', x._id]\">Show</button>\n          <button (click)=\"deleteUser(x)\">Delete</button>\n        </td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td>\n          <button class=\"addbutton\" (click)=\"showAddUserForm()\">Add User</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/group/group.component.ts":
/*!******************************************!*\
  !*** ./src/app/group/group.component.ts ***!
  \******************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-event/add-event.component */ "./src/app/add-event/add-event.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _delete_group_delete_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../delete-group/delete-group.component */ "./src/app/delete-group/delete-group.component.ts");
/* harmony import */ var _delete_event_delete_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../delete-event/delete-event.component */ "./src/app/delete-event/delete-event.component.ts");
/* harmony import */ var _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../delete-user/delete-user.component */ "./src/app/delete-user/delete-user.component.ts");











var GroupComponent = /** @class */ (function () {
    function GroupComponent(_httpService, _route, dialog) {
        this._httpService = _httpService;
        this._route = _route;
        this.dialog = dialog;
        this.eventModel = { title: "", total: "", date: "", note: "", participants: [] };
        this.userModel = { name: "" };
        this.participantModel = { paid: null, participantID: null };
        this.groupTotal = 0;
        this.userD = {};
        this.userA = [];
        this.errors = {};
        this.paidError = "";
        this.suggestedPayer = { name: "", bal: null };
        this.newEventWithJournal = { event: {}, journal: "" };
        this.newUserWithJournal = { user: {}, journal: "" };
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.group = { events: [], users: [] };
        this.getGroup();
    };
    GroupComponent.prototype.getGroup = function () {
        var _this = this;
        var observable = this._httpService.getGroup(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.groupTotal = 0;
            _this.group = data['group'];
            _this.group.events.sort(_this.dynamicSort("title"));
            _this.group.users.sort(_this.dynamicSort("name"));
            _this.userA = [];
            _this.userD = {};
            _this.participantModel = { paid: null, participantID: null };
            if (_this.group.users.length > 0) {
                _this.participantID = _this.group.users[0]._id;
            }
            ;
            for (var i = 0; i < _this.group.events.length; i++) {
                _this.groupTotal += _this.group.events[i].total;
            }
            ;
            for (var i = 0; i < _this.group.users.length; i++) {
                _this.userD[_this.group.users[i]._id] = { name: _this.group.users[i].name, bal: 0, _id: _this.group.users[i]._id };
            }
            for (var i = 0; i < _this.group.events.length; i++) {
                for (var j = 0; j < _this.group.events[i].participants.length; j++) {
                    _this.userD[_this.group.events[i].participants[j]._id]['bal'] += _this.group.events[i].participants[j].balance;
                }
            }
            for (var key in _this.userD) {
                _this.userA.push(_this.userD[key]);
            }
            if (_this.userA) {
                _this.suggestedPayer = _this.userA[0];
                for (var k = 1; k < _this.userA.length; k++) {
                    if (_this.userA[k].bal < _this.suggestedPayer.bal) {
                        _this.suggestedPayer = _this.userA[k];
                    }
                }
            }
        });
    };
    GroupComponent.prototype.showEdit = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], {
            data: { id: this._route.snapshot.params.id, editGroup: this.group }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getGroup();
        });
    };
    GroupComponent.prototype.showAddEventForm = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_6__["AddEventComponent"], {
            data: {
                id: this._route.snapshot.params.id,
                group: this.group,
                participantID: this.participantID,
                eventModel: this.eventModel,
                participantModel: this.participantModel,
                newEventWithJournal: this.newEventWithJournal,
                errors: this.errors,
                paidError: this.paidError
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.eventModel = { title: "", total: "", date: "", note: "", participants: [] };
            _this.participantModel = { paid: null, participantID: null };
            _this.paidError = "";
            _this.errors = "";
            _this.getGroup();
        });
    };
    GroupComponent.prototype.showAddUserForm = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"], {
            data: {
                id: this._route.snapshot.params.id,
                userModel: this.userModel,
                newUserWithJournal: this.newUserWithJournal,
                errors: this.errors
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.userModel.name = "";
            _this.errors = "";
            _this.getGroup();
        });
    };
    GroupComponent.prototype.deleteGroup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_group_delete_group_component__WEBPACK_IMPORTED_MODULE_8__["DeleteGroupComponent"], {
            data: {
                x: this.group,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getGroup();
        });
    };
    GroupComponent.prototype.deleteEvent = function (x) {
        var dialogRef = this.dialog.open(_delete_event_delete_event_component__WEBPACK_IMPORTED_MODULE_9__["DeleteEventComponent"], {
            data: {
                x: x,
                group: this.group
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    GroupComponent.prototype.deleteUser = function (x) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_10__["DeleteUserComponent"], {
            data: {
                x: x,
                group: this.group
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getGroup();
        });
    };
    GroupComponent.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    GroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.css */ "./src/app/group/group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    margin:auto;\n}\ntd {\n    width: 150px;\n}\nbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 50px;\n    border-radius: 5px;\n}\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n}\n.addbutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 100px;\n    border-radius: 5px;\n    margin-top: 10px;\n}\np {\n    margin: 10px;\n}\n.hover:hover {\n    margin: 10px;\n    color: lightseagreen;\n    cursor: pointer;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIG1hcmdpbjphdXRvO1xufVxudGQge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdGVhbDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uYWRkYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5wIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4uaG92ZXI6aG92ZXIge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Groups</h2>\n  <div class='container'>\n    <table>\n      <thead>\n        <th>Group</th>\n        <th>Actions</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let x of groupList\">\n          <td><p class=\"hover\" [routerLink]=\"['/group/', x._id]\">{{x.gname}}</p></td>\n          <td>\n            <button [routerLink]=\"['/group/', x._id]\">Show</button>\n            <button (click)=\"deleteGroup(x)\">Delete</button>\n          </td>\n        </tr>\n        <tr>\n          <td></td>\n          <td>\n            <button class=\"addbutton\" type=\"button\" (click)=\"showAddGroup()\">Add Group</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-group/add-group.component */ "./src/app/add-group/add-group.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_group_delete_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delete-group/delete-group.component */ "./src/app/delete-group/delete-group.component.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, dialog) {
        this._httpService = _httpService;
        this.dialog = dialog;
        this.groupList = [];
        this.groupModel = { gname: "", journal: [] };
        this.errors = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getGroupList();
    };
    HomeComponent.prototype.getGroupList = function () {
        var _this = this;
        var observable = this._httpService.getGroupList();
        observable.subscribe(function (data) {
            console.log("Got our groups!", data);
            _this.groupList = data['groups'];
        });
    };
    HomeComponent.prototype.showAddGroup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_3__["AddGroupComponent"], {
            data: {
                groupModel: this.groupModel,
                errors: this.errors
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.groupModel = { gname: "", journal: [] };
            _this.errors = {};
            _this.getGroupList();
        });
    };
    HomeComponent.prototype.deleteGroup = function (x) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_group_delete_group_component__WEBPACK_IMPORTED_MODULE_5__["DeleteGroupComponent"], {
            data: {
                x: x,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getGroupList();
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getGroupList = function () {
        return this._http.get('/z/allGroups');
    };
    HttpService.prototype.getGroup = function (id) {
        return this._http.get('/z/group/' + id);
    };
    HttpService.prototype.getUser = function (id) {
        return this._http.get('/z/user/' + id);
    };
    HttpService.prototype.getSingleEvent = function (id) {
        return this._http.get('/z/event/' + id);
    };
    HttpService.prototype.addUser = function (id, data) {
        return this._http.post('/z/newUser/' + id, data);
    };
    HttpService.prototype.addEvent = function (id, data) {
        return this._http.post('/z/newEvent/' + id, data);
    };
    HttpService.prototype.addPart = function (id, data) {
        return this._http.post('/z/newPart/' + id, data);
    };
    HttpService.prototype.deletePart = function (id, data) {
        return this._http.post('/z/deletePart/' + id, data);
    };
    HttpService.prototype.addGroup = function (data) {
        return this._http.post('/z/newGroup/', data);
    };
    HttpService.prototype.deleteGroup = function (id) {
        return this._http.delete('/z/deleteGroup/' + id);
    };
    HttpService.prototype.deleteEvent = function (id, groupObject) {
        return this._http.post('/z/deleteEvent/' + id, groupObject);
    };
    HttpService.prototype.deleteUser = function (id, groupObject) {
        return this._http.post('/z/deleteUser/' + id, groupObject);
    };
    HttpService.prototype.updateGroup = function (id, data) {
        return this._http.post('/z/group/' + id, data);
    };
    HttpService.prototype.updateEvent = function (id, data) {
        return this._http.post('/z/event/' + id, data);
    };
    HttpService.prototype.updateGroupAfterUpdatingEvent = function (id, data) {
        return this._http.post('/z/updateGroupEvent/' + id, data);
    };
    HttpService.prototype.updateUser = function (id, data) {
        return this._http.post('/z/user/' + id, data);
    };
    HttpService.prototype.prettyDate = function (str) {
        var monthADict = {
            "01": "January",
            "02": "February",
            "03": "March",
            "04": "April",
            "05": "May",
            "06": "June",
            "07": "July",
            "08": "August",
            "09": "September",
            "10": "October",
            "11": "November",
            "12": "December",
        };
        var returnedString = "";
        var day = "";
        if (str[8] == "0") {
            day = str.substring(9);
        }
        else {
            day = str.substring(8);
        }
        returnedString += monthADict[str.substring(5, 7)] + " " + day + ", " + str.substring(0, 4);
        return returnedString;
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/journal/journal.component.css":
/*!***********************************************!*\
  !*** ./src/app/journal/journal.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5hbC9qb3VybmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvam91cm5hbC9qb3VybmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/journal/journal.component.html":
/*!************************************************!*\
  !*** ./src/app/journal/journal.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{group.gname}}</h1>\n\n<div class=\"container\">\n  <h3>Journal</h3>\n  <hr>\n  <p *ngFor=\"let x of group.journal\">{{x}}</p>\n</div>\n  "

/***/ }),

/***/ "./src/app/journal/journal.component.ts":
/*!**********************************************!*\
  !*** ./src/app/journal/journal.component.ts ***!
  \**********************************************/
/*! exports provided: JournalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalComponent", function() { return JournalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var JournalComponent = /** @class */ (function () {
    function JournalComponent(_httpService, _route) {
        this._httpService = _httpService;
        this._route = _route;
    }
    JournalComponent.prototype.ngOnInit = function () {
        this.group = { events: [], users: [] };
        this.getGroup();
    };
    JournalComponent.prototype.getGroup = function () {
        var _this = this;
        var observable = this._httpService.getGroup(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.group = data['group'];
        });
    };
    JournalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-journal',
            template: __webpack_require__(/*! ./journal.component.html */ "./src/app/journal/journal.component.html"),
            styles: [__webpack_require__(/*! ./journal.component.css */ "./src/app/journal/journal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], JournalComponent);
    return JournalComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    margin:auto;\n}\ntd {\n    width: 150px;\n}\n.editBtn {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 70px;\n    border-radius: 5px;\n}\n.showbutton, .hidebutton {\n    background-color: teal;\n    color:white;\n    padding: 5px;\n    width: 80px;\n    border-radius: 5px;\n}\n.hidebutton {\n    margin-top: 10px;\n}\n.container {\n    border: 1px solid teal;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n}\n.red {\n    color: red;\n}\n.green {\n    color: green;\n}\nbutton:hover {\n    color: white;\n    background-color: lightseagreen;\n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBtYXJnaW46YXV0bztcbn1cbnRkIHtcbiAgICB3aWR0aDogMTUwcHg7XG59XG4uZWRpdEJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNob3didXR0b24sIC5oaWRlYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaGlkZWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRlYWw7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnJlZCB7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <h1>{{group.gname}}</h1>\n  <hr>\n  <div>\n    <h2>{{user.name}}</h2>\n    <button class=\"editBtn\" (click)=\"showEditUser()\">Edit Name</button>\n\n    <div *ngIf=\"showDetails == false\" class=\"container\">\n      <p class=\"eventDetails\"><b>Total Cost: $</b>{{userTotalCost}}</p>\n      <p class=\"eventDetails\"><b>Total Paid: $</b>{{userPaid}}</p>\n      <p *ngIf=\"userBalance < 0\" class=\"eventDetails\"><b>Total Balance: </b><span class=\"red\">-${{userBalance*-1}}</span></p>\n      <p *ngIf=\"userBalance >= 0\" class=\"eventDetails\"><b>Total Balance: </b><span class=\"green\">+${{userBalance}}</span></p>\n      <button *ngIf=\"showDetails == false\" class=\"showbutton\" (click)=\"showDetailsButton()\">Show Details</button>\n    </div>\n\n    <!-- LIST OF EVENTS USER IS PARTICPATING IN -->\n    <div *ngIf=\"showDetails == true\" class='container'>\n      <table>\n        <thead>\n          <th>Event</th>\n          <th>Cost</th>\n          <th>Paid</th>\n          <th>Balance</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let x of userInformation\">\n            <td>{{x.title}}</td>\n            <td>${{x.split}}</td>\n            <td>${{x.paid}}</td>\n            <td *ngIf=\"x.balance < 0\" class=\"red\">-${{x.balance*-1}}</td>\n            <td *ngIf=\"x.balance >= 0\" class=\"green\">+${{x.balance}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <hr>\n      <table>\n        <tbody>\n          <tr>\n            <td>TOTAL</td>\n            <td>${{userTotalCost}}</td>\n            <td>${{userPaid}}</td>\n            <td *ngIf=\"userBalance < 0\" class=\"red\">-${{userBalance*-1}}</td>\n            <td *ngIf=\"userBalance >= 0\" class=\"green\">+${{userBalance}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <button *ngIf=\"showDetails == true\" class=\"hidebutton\" (click)=\"hideDetailsButton()\">Hide Details</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");






var UserComponent = /** @class */ (function () {
    function UserComponent(_httpService, _route, dialog) {
        this._httpService = _httpService;
        this._route = _route;
        this.dialog = dialog;
        this.userInformation = [];
        this.group = { gname: "", users: [], events: [], journal: [] };
        this.user = { name: "" };
        this.events = [];
        this.userBalance = 0;
        this.userPaid = 0;
        this.userTotalCost = 0;
        this.showDetails = false;
        this.allModelChanges = { user: {}, events: {}, group: {} };
        this.userError = "";
        this.originalName = "";
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getGroup();
        this.getUser();
    };
    UserComponent.prototype.getGroup = function () {
        var _this = this;
        var observable = this._httpService.getGroup(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.group = data['group'];
            for (var i = 0; i < _this.group.events.length; i++) {
                var x = _this.group.events[i].participants;
                for (var j = 0; j < x.length; j++) {
                    if (x[j]._id == _this._route.snapshot.params.uid) {
                        x[j].title = _this.group.events[i].title;
                        x[j].split = _this.group.events[i].split;
                        _this.userInformation.push(x[j]);
                        _this.userBalance += x[j].balance;
                        _this.userPaid += x[j].paid;
                        _this.userTotalCost += _this.group.events[i].split;
                    }
                }
            }
            _this.events = _this.group.events;
        });
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        var observable = this._httpService.getUser(this._route.snapshot.params.uid);
        observable.subscribe(function (data) {
            _this.user = data['user'];
            _this.originalName = _this.user.name;
        });
    };
    UserComponent.prototype.showDetailsButton = function () {
        this.showDetails = true;
    };
    UserComponent.prototype.hideDetailsButton = function () {
        this.showDetails = false;
    };
    UserComponent.prototype.showEditUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"], {
            data: {
                id: this._route.snapshot.params.id,
                uid: this._route.snapshot.params.uid,
                group: this.group,
                user: this.user,
                originalName: this.originalName,
                allModelChanges: this.allModelChanges,
                events: this.events,
                userError: this.userError,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.userInformation = [];
            _this.userBalance = 0;
            _this.userPaid = 0;
            _this.userTotalCost = 0;
            _this.userError = "";
            _this.originalName = "";
            _this.getGroup();
            _this.getUser();
        });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], UserComponent);
    return UserComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adam/Desktop/bill_splitter_newest/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map