(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-feedback/src/lib/components/backdrop/backdrop.component.html":
/*!***********************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/backdrop/backdrop.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-feedback-backdrop__container\"></div>"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/backdrop/backdrop.component.scss":
/*!***********************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/backdrop/backdrop.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-feedback-backdrop__container {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background-color: #3b5560;\n  opacity: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1mZWVkYmFjay9zcmMvbGliL2NvbXBvbmVudHMvYmFja2Ryb3AvQzpcXGdpdGh1Ylxcbmd4LWZlZWRiYWNrL3Byb2plY3RzXFxuZ3gtZmVlZGJhY2tcXHNyY1xcbGliXFxjb21wb25lbnRzXFxiYWNrZHJvcFxcYmFja2Ryb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWSxFQUFBIiwiZmlsZSI6InByb2plY3RzL25neC1mZWVkYmFjay9zcmMvbGliL2NvbXBvbmVudHMvYmFja2Ryb3AvYmFja2Ryb3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmd4LWZlZWRiYWNrLWJhY2tkcm9wIHtcclxuICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1NTYwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/backdrop/backdrop.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/backdrop/backdrop.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropComponent", function() { return BackdropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackdropComponent = /** @class */ (function () {
    function BackdropComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BackdropComponent.prototype.ngOnInit = function () { };
    BackdropComponent.prototype.onClick = function () {
        this.click.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BackdropComponent.prototype, "click", void 0);
    BackdropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-feedback-backdrop',
            template: __webpack_require__(/*! ./backdrop.component.html */ "./projects/ngx-feedback/src/lib/components/backdrop/backdrop.component.html"),
            styles: [__webpack_require__(/*! ./backdrop.component.scss */ "./projects/ngx-feedback/src/lib/components/backdrop/backdrop.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackdropComponent);
    return BackdropComponent;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/button/button.component.html":
/*!*******************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/button/button.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"ngx-feedback-btn__container\" (click)=\"onClick()\"><ng-content></ng-content></button>\n"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/button/button.component.scss":
/*!*******************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/button/button.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-feedback-btn__container {\n  text-transform: uppercase;\n  border: 2px solid transparent;\n  border-radius: 3px;\n  outline: none;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n  background-color: #3b5560;\n  cursor: pointer; }\n  .ngx-feedback-btn__container:hover {\n    color: #3b5560;\n    border: 2px solid #3b5560;\n    background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1mZWVkYmFjay9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL0M6XFxnaXRodWJcXG5neC1mZWVkYmFjay9wcm9qZWN0c1xcbmd4LWZlZWRiYWNrXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcYnV0dG9uXFxidXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7RUFWbEI7SUFZTyxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHVCQUF1QixFQUFBIiwiZmlsZSI6InByb2plY3RzL25neC1mZWVkYmFjay9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtZmVlZGJhY2stYnRuIHtcclxuICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU1NjA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzNiNTU2MDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzNiNTU2MDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/button/button.component.ts":
/*!*****************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/button/button.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ButtonComponent.prototype.ngOnInit = function () { };
    ButtonComponent.prototype.onClick = function () {
        this.click.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ButtonComponent.prototype, "click", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-feedback-btn',
            template: __webpack_require__(/*! ./button.component.html */ "./projects/ngx-feedback/src/lib/components/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./projects/ngx-feedback/src/lib/components/button/button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/feedback-button/feedback-button.component.html":
/*!*************************************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/feedback-button/feedback-button.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onClick()\" class=\"feedback-button__container\">Feedback</button>\n"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/feedback-button/feedback-button.component.scss":
/*!*************************************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/feedback-button/feedback-button.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feedback-button__container {\n  position: fixed;\n  right: -34px;\n  top: calc(50% - 37.5px);\n  cursor: pointer;\n  -webkit-transform: rotateZ(90deg);\n  transform: rotateZ(-90deg);\n  border: none;\n  border-radius: 5px 5px 0 0;\n  background-color: #3b5560;\n  color: #ffffff;\n  font-size: 14px;\n  padding: 5px 10px;\n  font-weight: bold;\n  font-family: Verdana;\n  outline: none; }\n\n.ngx-feedback__highlight {\n  outline: 4px solid #ffc058;\n  pointer-events: none;\n  cursor: default !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1mZWVkYmFjay9zcmMvbGliL2NvbXBvbmVudHMvZmVlZGJhY2stYnV0dG9uL0M6XFxnaXRodWJcXG5neC1mZWVkYmFjay9wcm9qZWN0c1xcbmd4LWZlZWRiYWNrXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcZmVlZGJhY2stYnV0dG9uXFxmZWVkYmFjay1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGFBQWEsRUFBQTs7QUFLakI7RUFDSSwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLDBCQUEwQixFQUFBIiwiZmlsZSI6InByb2plY3RzL25neC1mZWVkYmFjay9zcmMvbGliL2NvbXBvbmVudHMvZmVlZGJhY2stYnV0dG9uL2ZlZWRiYWNrLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVkYmFjay1idXR0b24ge1xyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgcmlnaHQ6IC0zNHB4O1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAzNy41cHgpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC05MGRlZyk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU1NjA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZ3gtZmVlZGJhY2sge1xyXG4gICAgJl9faGlnaGxpZ2h0IHtcclxuICAgICAgICBvdXRsaW5lOiA0cHggc29saWQgI2ZmYzA1ODtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/feedback-button/feedback-button.component.ts":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/feedback-button/feedback-button.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FeedbackButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackButtonComponent", function() { return FeedbackButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_feedback_lib_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-feedback/lib/services/events.service */ "./projects/ngx-feedback/src/lib/services/events.service.ts");



var FeedbackButtonComponent = /** @class */ (function () {
    function FeedbackButtonComponent(eventsService) {
        this.eventsService = eventsService;
    }
    FeedbackButtonComponent.prototype.ngOnInit = function () { };
    FeedbackButtonComponent.prototype.onClick = function () {
        this.eventsService.onFeedbackButtonClick();
    };
    FeedbackButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-feedback-main-btn',
            template: __webpack_require__(/*! ./feedback-button.component.html */ "./projects/ngx-feedback/src/lib/components/feedback-button/feedback-button.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./feedback-button.component.scss */ "./projects/ngx-feedback/src/lib/components/feedback-button/feedback-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_feedback_lib_services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], FeedbackButtonComponent);
    return FeedbackButtonComponent;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/modal/modal.component.html":
/*!*****************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/modal/modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-feedback-modal__container\">\r\n    <div class=\"ngx-feedback-modal__header\">\r\n        <div class=\"ngx-feedback-modal__title\">Feedback</div>\r\n        <div class=\"ngx-feedback-modal__close\" (click)=\"onCloseClicked()\">\r\n            <svg viewBox=\"0 0 25 25\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <line x1=\"1\" y1=\"24\" x2=\"24\" y2=\"1\" stroke=\"#3b5560\" stroke-width=\"3\" />\r\n                <line x1=\"1\" y1=\"1\" x2=\"24\" y2=\"24\" stroke=\"#3b5560\" stroke-width=\"3\" />\r\n            </svg>\r\n        </div>\r\n    </div>\r\n    <div class=\"ngx-feedback-modal__content\">\r\n        <div *ngIf=\"thanks\">\r\n                Thanks for your feedback!\r\n        </div>\r\n        <div *ngIf=\"!imgSrc && !thanks\" class=\"ngx-feedback-modal__boxes\">\r\n            <div\r\n                class=\"ngx-feedback-modal__box-container\"\r\n                [class.ngx-feedback-modal__box-container--border]=\"!enterGeneric\"\r\n                (mouseenter)=\"enterGeneric = true\"\r\n                (mouseleave)=\"enterGeneric = false\"\r\n            >\r\n                <div class=\"ngx-feedback-modal__box\" [class.ngx-feedback-modal__box--border]=\"enterGeneric\" (click)=\"onGeneric()\">\r\n                    <div>Generic</div>\r\n                    <div class=\"ngx-feedback-modal__icon\">\r\n                        <svg\r\n                            version=\"1.1\"\r\n                            id=\"Capa_1\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                            x=\"0px\"\r\n                            y=\"0px\"\r\n                            viewBox=\"0 0 60 60\"\r\n                            style=\"enable-background:new 0 0 60 60;\"\r\n                            xml:space=\"preserve\"\r\n                        >\r\n                            <g>\r\n                                <path\r\n                                    d=\"M7,3C4.794,3,3,4.794,3,7s1.794,4,4,4s4-1.794,4-4S9.206,3,7,3z M7,9C5.897,9,5,8.103,5,7s0.897-2,2-2s2,0.897,2,2\r\n                                S8.103,9,7,9z\"\r\n                                />\r\n                                <path\r\n                                    d=\"M16,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S18.206,3,16,3z M16,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\r\n                                S17.103,9,16,9z\"\r\n                                />\r\n                                <path\r\n                                    d=\"M25,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S27.206,3,25,3z M25,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\r\n                                S26.103,9,25,9z\"\r\n                                />\r\n                                <path d=\"M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z\" />\r\n                                <path\r\n                                    d=\"M55,55V17H5v38H55z M7,53v-2.048l15.974-14.064L33.275,47.19c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414\r\n                                l-4.807-4.807l9.162-10.035L53,44.424V53H7z M53,19v22.642L39.695,28.781c-0.195-0.188-0.456-0.293-0.727-0.281\r\n                                c-0.27,0.008-0.525,0.126-0.707,0.325l-9.795,10.727l-4.743-4.743c-0.372-0.373-0.972-0.392-1.368-0.043L7,48.287V19H53z\"\r\n                                />\r\n                                <path\r\n                                    d=\"M16.431,33.638c3.071,0,5.569-2.498,5.569-5.569S19.502,22.5,16.431,22.5c-3.07,0-5.568,2.498-5.568,5.569\r\n                                S13.36,33.638,16.431,33.638z M16.431,24.5c1.968,0,3.569,1.601,3.569,3.569s-1.602,3.569-3.569,3.569s-3.568-1.601-3.568-3.569\r\n                                S14.463,24.5,16.431,24.5z\"\r\n                                />\r\n                            </g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                        </svg>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div\r\n                class=\"ngx-feedback-modal__box-container\"\r\n                [class.ngx-feedback-modal__box-container--border]=\"!enterSpecific\"\r\n                (mouseenter)=\"enterSpecific = true\"\r\n                (mouseleave)=\"enterSpecific = false\"\r\n            >\r\n                <div class=\"ngx-feedback-modal__box\" [class.ngx-feedback-modal__box--border]=\"enterSpecific\" (click)=\"onSpecific()\">\r\n                    <div>Specific</div>\r\n                    <div class=\"ngx-feedback-modal__icon\">\r\n                        <svg\r\n                            version=\"1.1\"\r\n                            id=\"Capa_1\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                            x=\"0px\"\r\n                            y=\"0px\"\r\n                            viewBox=\"0 0 60 60\"\r\n                            style=\"enable-background:new 0 0 60 60;\"\r\n                            xml:space=\"preserve\"\r\n                        >\r\n                            <g>\r\n                                <path\r\n                                    d=\"M7,3C4.794,3,3,4.794,3,7s1.794,4,4,4s4-1.794,4-4S9.206,3,7,3z M7,9C5.897,9,5,8.103,5,7s0.897-2,2-2s2,0.897,2,2\r\n                                S8.103,9,7,9z\"\r\n                                />\r\n                                <path\r\n                                    d=\"M16,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S18.206,3,16,3z M16,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\r\n                                S17.103,9,16,9z\"\r\n                                />\r\n                                <path\r\n                                    d=\"M25,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S27.206,3,25,3z M25,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\r\n                                S26.103,9,25,9z\"\r\n                                />\r\n                                <path d=\"M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z\" />\r\n                                <path d=\"M28,18H6v16h22V18z M26,32H8V20h18V32z\" />\r\n                                <path\r\n                                    d=\"M28,54V38H6v16H28z M13,40c0,0.552,0.448,1,1,1s1-0.448,1-1h4c0,0.552,0.448,1,1,1s1-0.448,1-1h4c0,0.552,0.448,1,1,1v4\r\n                                c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1v4c-0.552,0-1,0.448-1,1h-4c0-0.552-0.448-1-1-1s-1,0.448-1,1h-4c0-0.552-0.448-1-1-1\r\n                                s-1,0.448-1,1H9c0-0.552-0.448-1-1-1v-4c0.552,0,1-0.448,1-1c0-0.552-0.448-1-1-1v-4c0.552,0,1-0.448,1-1H13z\"\r\n                                />\r\n                                <path d=\"M54,18H32v16h22V18z M52,32H34V20h18V32z\" />\r\n                                <path d=\"M54,38H32v16h22V38z M52,52H34V40h18V52z\" />\r\n                                <circle cx=\"23\" cy=\"43\" r=\"1\" />\r\n                                <circle cx=\"20\" cy=\"46\" r=\"1\" />\r\n                                <circle cx=\"23\" cy=\"49\" r=\"1\" />\r\n                                <circle cx=\"17\" cy=\"43\" r=\"1\" />\r\n                                <circle cx=\"14\" cy=\"46\" r=\"1\" />\r\n                                <circle cx=\"17\" cy=\"49\" r=\"1\" />\r\n                                <circle cx=\"11\" cy=\"43\" r=\"1\" />\r\n                                <circle cx=\"11\" cy=\"49\" r=\"1\" />\r\n                            </g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                            <g></g>\r\n                        </svg>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ngx-feedback-modal__preview-container\" *ngIf=\"imgSrc && !thanks\">\r\n            <div class=\"ngx-feedback-modal__preview\"><img [src]=\"imgSrc\" style=\"width: 100%; height: auto\" /></div>\r\n        </div>\r\n        <ngx-feedback-star-vote *ngIf=\"imgSrc && !thanks\" (voted)=\"onVote($event)\"></ngx-feedback-star-vote>\r\n        <textarea\r\n            #comment\r\n            class=\"ngx-feedback-modal__textarea\"\r\n            *ngIf=\"imgSrc && voted && !thanks\"\r\n            rows=\"4\"\r\n            cols=\"50\"\r\n            placeholder=\"Enter your feedback...\"\r\n            autofocus=\"true\"\r\n        ></textarea>\r\n    </div>\r\n\r\n    <div class=\"ngx-feedback-modal__footer\">\r\n        <ngx-feedback-btn *ngIf=\"imgSrc && !thanks\" class=\"ngx-feedback-modal__send\" (click)=\"onSend()\">Send</ngx-feedback-btn>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/modal/modal.component.scss":
/*!*****************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/modal/modal.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-feedback-modal__header {\n  height: 30px;\n  color: #3b5560;\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.ngx-feedback-modal__title {\n  padding-left: 16px;\n  padding-top: 8px; }\n\n.ngx-feedback-modal__footer {\n  height: 30px; }\n\n.ngx-feedback-modal__container {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  padding: 10px;\n  z-index: 1000;\n  background: #ffffff;\n  -webkit-transform: translate(-200px, -250px);\n          transform: translate(-200px, -250px);\n  border: solid 1px #3b5560;\n  border-radius: 3px;\n  box-shadow: 0px 0px 30px 1px #000000;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.ngx-feedback-modal__content {\n  padding: 20px 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.ngx-feedback-modal__boxes {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.ngx-feedback-modal__box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80px;\n  padding: 5px 15px;\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer; }\n\n.ngx-feedback-modal__box--border {\n    border: 2px solid #3b5560;\n    border-radius: 3px; }\n\n.ngx-feedback-modal__box-container {\n    padding: 5px;\n    margin: 0px 10px; }\n\n.ngx-feedback-modal__box-container--border {\n      border-radius: 3px;\n      border: 2px solid #3b5560; }\n\n.ngx-feedback-modal__send {\n  float: right; }\n\n.ngx-feedback-modal__icon {\n  width: 40px;\n  padding-top: 10px; }\n\n.ngx-feedback-modal__preview {\n  width: 80%;\n  border: 2px solid #3b5560;\n  border-radius: 3px; }\n\n.ngx-feedback-modal__preview-container {\n    display: flex;\n    justify-content: center; }\n\n.ngx-feedback-modal__textarea {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  outline-color: #3b5560;\n  border-radius: 3px;\n  border: 1px solid #3b5560;\n  margin-bottom: 20px;\n  width: 80%;\n  padding: 5px; }\n\n.ngx-feedback-modal__close {\n  width: 14px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1mZWVkYmFjay9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwvQzpcXGdpdGh1Ylxcbmd4LWZlZWRiYWNrL3Byb2plY3RzXFxuZ3gtZmVlZGJhY2tcXHNyY1xcbGliXFxjb21wb25lbnRzXFxtb2RhbFxcbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksMkRBQTJEO0VBQzNELGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0Q0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFDZjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFFdEI7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBQ2hCO01BQ0ksa0JBQWtCO01BQ2xCLHlCQUF5QixFQUFBOztBQUlyQztFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBR3JCO0VBS0ksVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFObEI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCLEVBQUE7O0FBTy9CO0VBQ0ksMkRBQTJEO0VBQzNELHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmd4LWZlZWRiYWNrL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtZmVlZGJhY2stbW9kYWwge1xyXG4gICAgJl9faGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzYjU1NjA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9vdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAwcHgsIC0yNTBweCk7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzNiNTU2MDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDFweCAjMDAwMDAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX19ib3hlcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmX19ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICYtLWJvcmRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYjU1NjA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICYtLWJvcmRlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjM2I1NTYwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fc2VuZCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcHJldmlldyB7XHJcbiAgICAgICAgJi1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjM2I1NTYwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgb3V0bGluZS1jb2xvcjogIzNiNTU2MDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNiNTU2MDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Nsb3NlIHtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/modal/modal.component.ts":
/*!***************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/modal/modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_feedback_lib_services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-feedback/lib/services/events.service */ "./projects/ngx-feedback/src/lib/services/events.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(eventsService) {
        this.eventsService = eventsService;
        this.imgSrc = '';
        this.formData = { rate: 0, comment: '', screenshot: null };
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent.prototype.onSpecific = function () {
        this.eventsService.onSpecificFeedbackClick();
    };
    ModalComponent.prototype.onGeneric = function () {
        this.eventsService.onGenericFeedbackClik();
    };
    ModalComponent.prototype.onCloseClicked = function () {
        this.eventsService.onCloseClicked();
    };
    ModalComponent.prototype.setPreview = function (preview) {
        this.imgSrc = preview;
        this.formData.screenshot = preview;
    };
    ModalComponent.prototype.onVote = function (rate) {
        this.voted = true;
        this.formData.rate = rate;
    };
    ModalComponent.prototype.onSend = function () {
        var _this = this;
        this.formData.comment = this.comment.nativeElement.value;
        this.eventsService.onSendClicked(this.formData);
        this.thanks = true;
        setTimeout(function () {
            _this.eventsService.onCloseClicked();
        }, 2000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comment'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalComponent.prototype, "comment", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-feedback-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./projects/ngx-feedback/src/lib/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./projects/ngx-feedback/src/lib/components/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_feedback_lib_services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/star-vote/star-vote.component.html":
/*!*************************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/star-vote/star-vote.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-feedback-star-vote__container\">\n    <div class=\"ngx-feedback-star-vote__star\" *ngFor=\"let s of stars; index as i\">\n        <ngx-feedback-star\n            (click)=\"onClick(i)\"\n            (mouseenter)=\"onMouseEnter(i)\"\n            (mouseleave)=\"onMouseLeave(i)\"\n            [type]=\"s.type\"\n        ></ngx-feedback-star>\n    </div>\n</div>\n"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/star-vote/star-vote.component.scss":
/*!*************************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/star-vote/star-vote.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-feedback-star-vote__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1mZWVkYmFjay9zcmMvbGliL2NvbXBvbmVudHMvc3Rhci12b3RlL0M6XFxnaXRodWJcXG5neC1mZWVkYmFjay9wcm9qZWN0c1xcbmd4LWZlZWRiYWNrXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcc3Rhci12b3RlXFxzdGFyLXZvdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmd4LWZlZWRiYWNrL3NyYy9saWIvY29tcG9uZW50cy9zdGFyLXZvdGUvc3Rhci12b3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5neC1mZWVkYmFjay1zdGFyLXZvdGUge1xyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/star-vote/star-vote.component.ts":
/*!***********************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/star-vote/star-vote.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StarVoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarVoteComponent", function() { return StarVoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarVoteComponent = /** @class */ (function () {
    function StarVoteComponent() {
        this.stars = [
            { type: 'empty', value: 1 },
            { type: 'empty', value: 2 },
            { type: 'empty', value: 3 },
            { type: 'empty', value: 4 },
            { type: 'empty', value: 5 }
        ];
        this.voted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StarVoteComponent.prototype.ngOnInit = function () { };
    StarVoteComponent.prototype.onClick = function (index) {
        this.stars.forEach(function (s, i) {
            if (i <= index) {
                s.type = 'full';
            }
            else {
                s.type = 'empty';
            }
        });
        this.voted.emit(index + 1);
    };
    StarVoteComponent.prototype.onMouseEnter = function (index) {
        this.stars.forEach(function (s, i) {
            if (i <= index && s.type !== 'full') {
                s.type = 'temp';
            }
        });
    };
    StarVoteComponent.prototype.onMouseLeave = function (index) {
        this.stars.forEach(function (s, i) {
            if (s.type === 'temp') {
                s.type = 'empty';
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StarVoteComponent.prototype, "voted", void 0);
    StarVoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-feedback-star-vote',
            template: __webpack_require__(/*! ./star-vote.component.html */ "./projects/ngx-feedback/src/lib/components/star-vote/star-vote.component.html"),
            styles: [__webpack_require__(/*! ./star-vote.component.scss */ "./projects/ngx-feedback/src/lib/components/star-vote/star-vote.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StarVoteComponent);
    return StarVoteComponent;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/star/star.component.html":
/*!***************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/star/star.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-feedback-star__container\" (click)=\"onClick()\">\n    <div *ngIf=\"type === 'full' || type === 'temp'; else empty\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#ffc058\">\n            <path\n                d=\"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z\"\n            />\n        </svg>\n    </div>\n    <ng-template #empty>\n        <div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#ffc058\">\n                <path\n                    d=\"M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z\"\n                />\n            </svg>\n        </div>\n    </ng-template>\n</div>\n"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/star/star.component.scss":
/*!***************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/star/star.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-feedback-star__container {\n  cursor: pointer;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1mZWVkYmFjay9zcmMvbGliL2NvbXBvbmVudHMvc3Rhci9DOlxcZ2l0aHViXFxuZ3gtZmVlZGJhY2svcHJvamVjdHNcXG5neC1mZWVkYmFja1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHN0YXJcXHN0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFlO0VBQ2YsWUFBWSxFQUFBIiwiZmlsZSI6InByb2plY3RzL25neC1mZWVkYmFjay9zcmMvbGliL2NvbXBvbmVudHMvc3Rhci9zdGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5neC1mZWVkYmFjay1zdGFyIHtcclxuICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./projects/ngx-feedback/src/lib/components/star/star.component.ts":
/*!*************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/components/star/star.component.ts ***!
  \*************************************************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StarComponent.prototype.ngOnInit = function () { };
    StarComponent.prototype.onClick = function () {
        this.click.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StarComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StarComponent.prototype, "click", void 0);
    StarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-feedback-star',
            template: __webpack_require__(/*! ./star.component.html */ "./projects/ngx-feedback/src/lib/components/star/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.scss */ "./projects/ngx-feedback/src/lib/components/star/star.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StarComponent);
    return StarComponent;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/ngx-feedback.module.ts":
/*!**************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/ngx-feedback.module.ts ***!
  \**************************************************************/
/*! exports provided: NgxFeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFeedbackModule", function() { return NgxFeedbackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_feedback_button_feedback_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/feedback-button/feedback-button.component */ "./projects/ngx-feedback/src/lib/components/feedback-button/feedback-button.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal/modal.component */ "./projects/ngx-feedback/src/lib/components/modal/modal.component.ts");
/* harmony import */ var _services_component_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/component-loader.service */ "./projects/ngx-feedback/src/lib/services/component-loader.service.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/modal.service */ "./projects/ngx-feedback/src/lib/services/modal.service.ts");
/* harmony import */ var _ngx_feedback_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-feedback.service */ "./projects/ngx-feedback/src/lib/ngx-feedback.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_selectors_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/selectors.service */ "./projects/ngx-feedback/src/lib/services/selectors.service.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/button/button.component */ "./projects/ngx-feedback/src/lib/components/button/button.component.ts");
/* harmony import */ var _components_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/backdrop/backdrop.component */ "./projects/ngx-feedback/src/lib/components/backdrop/backdrop.component.ts");
/* harmony import */ var _services_orchestrator_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/orchestrator.service */ "./projects/ngx-feedback/src/lib/services/orchestrator.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/events.service */ "./projects/ngx-feedback/src/lib/services/events.service.ts");
/* harmony import */ var _components_star_star_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/star/star.component */ "./projects/ngx-feedback/src/lib/components/star/star.component.ts");
/* harmony import */ var _components_star_vote_star_vote_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/star-vote/star-vote.component */ "./projects/ngx-feedback/src/lib/components/star-vote/star-vote.component.ts");















var NgxFeedbackModule = /** @class */ (function () {
    function NgxFeedbackModule() {
    }
    NgxFeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_feedback_button_feedback_button_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackButtonComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], _components_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_10__["BackdropComponent"], _components_star_star_component__WEBPACK_IMPORTED_MODULE_13__["StarComponent"], _components_star_vote_star_vote_component__WEBPACK_IMPORTED_MODULE_14__["StarVoteComponent"]],
            entryComponents: [_components_feedback_button_feedback_button_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackButtonComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], _components_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_10__["BackdropComponent"]],
            providers: [_ngx_feedback_service__WEBPACK_IMPORTED_MODULE_6__["NgxFeedbackService"], _services_orchestrator_service__WEBPACK_IMPORTED_MODULE_11__["OrchestratorService"], _services_component_loader_service__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderService"], _services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"], _services_selectors_service__WEBPACK_IMPORTED_MODULE_8__["SelectorsService"], _services_events_service__WEBPACK_IMPORTED_MODULE_12__["EventsService"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
            exports: []
        })
    ], NgxFeedbackModule);
    return NgxFeedbackModule;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/ngx-feedback.service.ts":
/*!***************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/ngx-feedback.service.ts ***!
  \***************************************************************/
/*! exports provided: NgxFeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFeedbackService", function() { return NgxFeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/component-loader.service */ "./projects/ngx-feedback/src/lib/services/component-loader.service.ts");
/* harmony import */ var _components_feedback_button_feedback_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/feedback-button/feedback-button.component */ "./projects/ngx-feedback/src/lib/components/feedback-button/feedback-button.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./projects/ngx-feedback/src/lib/services/index.ts");





var NgxFeedbackService = /** @class */ (function () {
    function NgxFeedbackService(componentLoader, orchestratorService) {
        this.componentLoader = componentLoader;
        this.orchestratorService = orchestratorService;
    }
    NgxFeedbackService.prototype.listenForFeedbacks = function () {
        this.orchestratorService.ngOnInit();
        this.componentLoader.load(_components_feedback_button_feedback_button_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackButtonComponent"]);
        return this.orchestratorService.onSend;
    };
    NgxFeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_component_loader_service__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["OrchestratorService"]])
    ], NgxFeedbackService);
    return NgxFeedbackService;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/services/component-loader.service.ts":
/*!****************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/services/component-loader.service.ts ***!
  \****************************************************************************/
/*! exports provided: ComponentLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderService", function() { return ComponentLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentLoaderService = /** @class */ (function () {
    function ComponentLoaderService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    ComponentLoaderService.prototype.load = function (componentType) {
        // 1. Create a component reference from the component
        var ref = this.componentFactoryResolver.resolveComponentFactory(componentType).create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(ref.hostView);
        // 3. Get DOM element from component
        var domElem = ref.hostView.rootNodes[0];
        // 4. Append DOM element to the body
        document.body.appendChild(domElem);
        ref.changeDetectorRef.detectChanges();
        return ref;
    };
    ComponentLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ComponentLoaderService);
    return ComponentLoaderService;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/services/events.service.ts":
/*!******************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/services/events.service.ts ***!
  \******************************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var EventsService = /** @class */ (function () {
    function EventsService() {
        this.feedbackClick = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.feedbackClickObservable = this.feedbackClick.asObservable();
        this.specificFeedbackClick = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.specificFeedbackClickObservable = this.specificFeedbackClick.asObservable();
        this.genericFeedbackClick = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.genericFeedbackClickObservable = this.genericFeedbackClick.asObservable();
        this.closeClick = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.closeClickClickObservable = this.closeClick.asObservable();
        this.onSendClick = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onSendClickObservable = this.onSendClick.asObservable();
    }
    EventsService.prototype.onSpecificFeedbackClick = function () {
        this.specificFeedbackClick.next();
    };
    EventsService.prototype.onGenericFeedbackClik = function () {
        this.genericFeedbackClick.next();
    };
    EventsService.prototype.onFeedbackButtonClick = function () {
        this.feedbackClick.next();
    };
    EventsService.prototype.onCloseClicked = function () {
        this.closeClick.next();
    };
    EventsService.prototype.onSendClicked = function (data) {
        this.onSendClick.next(data);
    };
    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/services/index.ts":
/*!*********************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/services/index.ts ***!
  \*********************************************************/
/*! exports provided: OrchestratorService, ModalService, ComponentLoaderService, SelectorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orchestrator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orchestrator.service */ "./projects/ngx-feedback/src/lib/services/orchestrator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrchestratorService", function() { return _orchestrator_service__WEBPACK_IMPORTED_MODULE_0__["OrchestratorService"]; });

/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "./projects/ngx-feedback/src/lib/services/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]; });

/* harmony import */ var _component_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-loader.service */ "./projects/ngx-feedback/src/lib/services/component-loader.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderService", function() { return _component_loader_service__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderService"]; });

/* harmony import */ var _selectors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors.service */ "./projects/ngx-feedback/src/lib/services/selectors.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectorsService", function() { return _selectors_service__WEBPACK_IMPORTED_MODULE_3__["SelectorsService"]; });







/***/ }),

/***/ "./projects/ngx-feedback/src/lib/services/modal.service.ts":
/*!*****************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/services/modal.service.ts ***!
  \*****************************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-loader.service */ "./projects/ngx-feedback/src/lib/services/component-loader.service.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modal/modal.component */ "./projects/ngx-feedback/src/lib/components/modal/modal.component.ts");
/* harmony import */ var _components_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/backdrop/backdrop.component */ "./projects/ngx-feedback/src/lib/components/backdrop/backdrop.component.ts");





var ModalService = /** @class */ (function () {
    function ModalService(componentLoader) {
        this.componentLoader = componentLoader;
    }
    ModalService.prototype.openWithPreview = function (preview) {
        this.draw();
        this.modalRef.instance.setPreview(preview);
    };
    ModalService.prototype.draw = function () {
        this.backdropRef = this.componentLoader.load(_components_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_4__["BackdropComponent"]);
        this.modalRef = this.componentLoader.load(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]);
    };
    ModalService.prototype.remove = function () {
        this.modalRef.destroy();
        this.backdropRef.destroy();
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_component_loader_service__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderService"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/services/orchestrator.service.ts":
/*!************************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/services/orchestrator.service.ts ***!
  \************************************************************************/
/*! exports provided: OrchestratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrchestratorService", function() { return OrchestratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./projects/ngx-feedback/src/lib/services/modal.service.ts");
/* harmony import */ var _selectors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors.service */ "./projects/ngx-feedback/src/lib/services/selectors.service.ts");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events.service */ "./projects/ngx-feedback/src/lib/services/events.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var OrchestratorService = /** @class */ (function () {
    function OrchestratorService(modalService, selectorsService, eventsService) {
        this.modalService = modalService;
        this.selectorsService = selectorsService;
        this.eventsService = eventsService;
        this.subscriptions = [];
        this.onSend = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    OrchestratorService.prototype.ngOnInit = function () {
        this.subscriptions.push(this.onFeedbackButtonClick(), this.onSpecificFeedbackClick(), this.onGenericFeedbackClick(), this.onElementSelected(), this.onCloseClick(), this.onSendClick());
    };
    OrchestratorService.prototype.onElementSelected = function () {
        var _this = this;
        return this.selectorsService.preview.subscribe(function (prev) {
            _this.modalService.openWithPreview(prev);
        });
    };
    OrchestratorService.prototype.onFeedbackButtonClick = function () {
        var _this = this;
        return this.eventsService.feedbackClickObservable.subscribe(function () {
            _this.modalService.draw();
        });
    };
    OrchestratorService.prototype.onSpecificFeedbackClick = function () {
        var _this = this;
        return this.eventsService.specificFeedbackClickObservable.subscribe(function () {
            _this.modalService.remove();
            _this.selectorsService.elementsHighlight();
        });
    };
    OrchestratorService.prototype.onGenericFeedbackClick = function () {
        var _this = this;
        return this.eventsService.genericFeedbackClickObservable.subscribe(function () {
            _this.modalService.remove();
            _this.selectorsService.pageScreenshot();
        });
    };
    OrchestratorService.prototype.onCloseClick = function () {
        var _this = this;
        return this.eventsService.closeClickClickObservable.subscribe(function () {
            _this.modalService.remove();
        });
    };
    OrchestratorService.prototype.onSendClick = function () {
        var _this = this;
        return this.eventsService.onSendClickObservable.subscribe(function (data) {
            _this.onSend.next(data);
        });
    };
    OrchestratorService.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    OrchestratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            _selectors_service__WEBPACK_IMPORTED_MODULE_3__["SelectorsService"],
            _events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]])
    ], OrchestratorService);
    return OrchestratorService;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/lib/services/selectors.service.ts":
/*!*********************************************************************!*\
  !*** ./projects/ngx-feedback/src/lib/services/selectors.service.ts ***!
  \*********************************************************************/
/*! exports provided: SelectorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorsService", function() { return SelectorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);




var SelectorsService = /** @class */ (function () {
    function SelectorsService(rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.preview = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subs = [];
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    SelectorsService.prototype.pageScreenshot = function () {
        this.screenshot(document.body);
    };
    SelectorsService.prototype.elementsHighlight = function () {
        var _this = this;
        var element;
        var elements = [];
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove').subscribe(function (ev) {
            if (element) {
                _this.renderer.removeClass(element, 'ngx-feedback__highlight');
            }
            element = document.elementFromPoint(ev.x, ev.y);
            if (elements.findIndex(function (el) { return el === element; }) === -1) {
                elements.push(element);
                _this.subs.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(element, 'click').subscribe(function (evt) {
                    evt.stopPropagation();
                    _this.screenshot(element);
                }));
            }
            _this.renderer.addClass(element, 'ngx-feedback__highlight');
        });
    };
    SelectorsService.prototype.screenshot = function (element) {
        var _this = this;
        var image;
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(element).then(function (canvas) {
            image = canvas.toDataURL();
            _this.preview.next(image);
        });
        this.renderer.removeClass(element, 'ngx-feedback__highlight');
        this.clean();
    };
    SelectorsService.prototype.clean = function () {
        if (this.source) {
            this.source.unsubscribe();
        }
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    SelectorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]])
    ], SelectorsService);
    return SelectorsService;
}());



/***/ }),

/***/ "./projects/ngx-feedback/src/public-api.ts":
/*!*************************************************!*\
  !*** ./projects/ngx-feedback/src/public-api.ts ***!
  \*************************************************/
/*! exports provided: NgxFeedbackService, NgxFeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_feedback_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-feedback.service */ "./projects/ngx-feedback/src/lib/ngx-feedback.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxFeedbackService", function() { return _lib_ngx_feedback_service__WEBPACK_IMPORTED_MODULE_0__["NgxFeedbackService"]; });

/* harmony import */ var _lib_ngx_feedback_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-feedback.module */ "./projects/ngx-feedback/src/lib/ngx-feedback.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxFeedbackModule", function() { return _lib_ngx_feedback_module__WEBPACK_IMPORTED_MODULE_1__["NgxFeedbackModule"]; });

/*
 * Public API Surface of ngx-feedback
 */




/***/ }),

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-root__container\">\n    <div class=\"app-root__header\">\n        <img class=\"app-root__angular-logo\" src=\"assets/angular.svg\" />\n        <div class=\"app-root__title\">ngx-feedback</div>\n    </div>\n    <div class=\"app-root__body\">\n        <div class=\"app-root__main\">\n            <div class=\"app-root__box app-root__box-left\">\n                <div class=\"app-root__box-title\">What is ngx-feeback?</div>\n                <p>\n                    An Angular library helping devs to easily collect Wep App users reviews and real time feedbacks about the product, new\n                    features or potential bugs.\n                </p>\n                <p>\n                    Ngx-feedback relies upon <a href=\"https://github.com/niklasvh/html2canvas\">html2canvas</a> library to take webpages\n                    screenshots.\n                </p>\n            </div>\n            <div class=\"app-root__box app-root__box-right\">\n                <div class=\"app-root__box-title\">Features</div>\n                <ul>\n                    <li>A <strong>feedback button</strong> you can place at the edge of the page.</li>\n                    <li>A <strong>screenshot</strong> of the whole page or of a particular feature/element.</li>\n                    <li>\n                        A <strong>modal form</strong> in which the <strong>user</strong> could add his <strong>comment</strong> about the\n                        product and vote thanks to a star rating component.\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"app-root__instructions\">\n            <div class=\"app-root__step\">\n                <div class=\"app-root__step-title\">Install</div>\n                <div class=\"app-root__step-body app-root__step-code\">\n                    <p class=\"app-root__code\">npm i ngx-feedback</p>\n                    <p>or</p>\n                    <p class=\"app-root__code\">yarn add ngx-feedback</p>\n                </div>\n            </div>\n            <div class=\"app-root__step\">\n                <div class=\"app-root__step-title\">Documentation</div>\n                <div class=\"app-root__step-body\">Documentation will be available soon...</div>\n            </div>\n            <div class=\"app-root__step app-root__step-last\">\n                <div class=\"app-root__step-title\">Do you like it?</div>\n                <div class=\"app-root__step-body\">\n                    <div class=\"app-root__star\">\n                        <iframe\n                            src=\"https://ghbtns.com/github-btn.html?user=tnicola&repo=ngx-feedback&type=star&count=true&size=large\"\n                            frameborder=\"0\"\n                            scrolling=\"0\"\n                            width=\"160px\"\n                            height=\"30px\"\n                        ></iframe>\n                    </div>\n                    <div class=\"app-root__watch\">\n                        <iframe\n                            src=\"https://ghbtns.com/github-btn.html?user=tnicola&repo=ngx-feeback&type=watch&count=true&size=large&v=2\"\n                            frameborder=\"0\"\n                            scrolling=\"0\"\n                            width=\"160px\"\n                            height=\"30px\"\n                        ></iframe>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--<a class=\"app-root__twitter-button\" href=\"https://twitter.com/nicola_tommasi\" data-size=\"large\">Follow @nicola_tommasi</a>-->\n\n    <div class=\"app-root__footer\">\n        <div class=\"app-root__footer-text\">ngx-feedback is released under a MIT license by Nicola Tommasi</div>\n        <iframe\n            src=\"https://ghbtns.com/github-btn.html?user=tnicola&type=follow&count=true\"\n            frameborder=\"0\"\n            scrolling=\"0\"\n            width=\"170px\"\n            height=\"20px\"\n        ></iframe>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-root__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  color: white; }\n  @media screen and (min-width: 1024px) and (min-height: 680px) {\n    .app-root__container {\n      height: 100%; } }\n  .app-root__header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0 20px;\n  height: 60px;\n  background-color: #467e3f;\n  color: white;\n  font-size: 24px; }\n  .app-root__body {\n  background-color: rgba(146, 145, 67, 0.4);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%; }\n  .app-root__footer {\n  height: 60px;\n  background-color: #2f2504;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 13px;\n  width: 100%;\n  padding: 0 10px; }\n  .app-root__footer-text {\n    margin-right: 10px; }\n  .app-root__main {\n  height: 50%;\n  width: 90%;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding: 5px; }\n  @media screen and (min-width: 1280px) {\n    .app-root__main {\n      width: 75%; } }\n  .app-root__instructions {\n  height: 35%;\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 16px;\n  margin: 5px; }\n  @media screen and (min-width: 1280px) {\n    .app-root__instructions {\n      width: 75%; } }\n  .app-root__box {\n  width: 100%;\n  padding: 24px;\n  margin: 16px;\n  line-height: 24px; }\n  .app-root__box-title {\n    font-size: 24px;\n    font-weight: bold;\n    padding-bottom: 20px; }\n  .app-root__box-left {\n    background-color: #2f2504; }\n  .app-root__box-right {\n    background-color: #2f2504; }\n  .app-root__box li {\n    padding-bottom: 5px; }\n  .app-root__box a {\n    color: white; }\n  @media screen and (min-width: 1024px) and (min-height: 680px) {\n    .app-root__box {\n      width: 40%; } }\n  @media screen and (min-width: 1024px) and (min-height: 680px) {\n    .app-root__box {\n      width: 40%; } }\n  .app-root__step {\n  width: 100%;\n  margin: 5px;\n  padding: 16px;\n  background-color: #467e3f; }\n  .app-root__step-title {\n    font-weight: bold;\n    font-size: 20px; }\n  .app-root__step-body {\n    padding: 8px 16px;\n    margin-top: 16px;\n    margin-left: 16px;\n    margin-right: 16px; }\n  .app-root__step-code {\n    background-color: rgba(146, 145, 67, 0.5); }\n  .app-root__step-last {\n    position: relative; }\n  @media screen and (min-width: 1024px) and (min-height: 680px) {\n    .app-root__step {\n      width: 30%; } }\n  .app-root__angular-logo {\n  width: 48px; }\n  .app-root__twitter-button {\n  position: relative;\n  height: 20px;\n  box-sizing: border-box;\n  padding: 1px 8px 1px 6px;\n  background-color: #1b95e0;\n  color: #fff;\n  border-radius: 3px;\n  font-weight: 500;\n  cursor: pointer; }\n  .app-root__star {\n  padding-bottom: 16px; }\n  .app-root__code {\n  font-family: monospace;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGdpdGh1Ylxcbmd4LWZlZWRiYWNrL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0k7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixZQUFZLEVBQUE7RUFDWjtJQUxKO01BTVEsWUFBWSxFQUFBLEVBRW5CO0VBQ0Q7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZSxFQUFBO0VBRW5CO0VBQ0kseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7RUFFaEI7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWUsRUFBQTtFQUNmO0lBQ0ksa0JBQWtCLEVBQUE7RUFHMUI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVksRUFBQTtFQUNaO0lBUEo7TUFRUSxVQUFVLEVBQUEsRUFFakI7RUFDRDtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFdBQVcsRUFBQTtFQUNYO0lBUko7TUFTUSxVQUFVLEVBQUEsRUFFakI7RUFDRDtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0VBQ2pCO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQTtFQUV4QjtJQUNJLHlCQUF5QixFQUFBO0VBRTdCO0lBQ0kseUJBQXlCLEVBQUE7RUFkaEM7SUFpQk8sbUJBQW1CLEVBQUE7RUFqQjFCO0lBb0JPLFlBQVksRUFBQTtFQUVoQjtJQXRCSjtNQXVCUSxVQUFVLEVBQUEsRUFLakI7RUFIRztJQXpCSjtNQTBCUSxVQUFVLEVBQUEsRUFFakI7RUFDRDtFQUNJLFdBQVc7RUF5QlgsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUIsRUFBQTtFQTFCekI7SUFDSSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBR25CO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7RUFHdEI7SUFDSSx5Q0FBeUMsRUFBQTtFQUc3QztJQUNJLGtCQUFrQixFQUFBO0VBR3RCO0lBdEJKO01BdUJRLFVBQVUsRUFBQSxFQU1qQjtFQUVEO0VBQ0ksV0FBVyxFQUFBO0VBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtFQUduQjtFQUNJLG9CQUFvQixFQUFBO0VBR3hCO0VBQ0ksc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtZWRpdW0td2lkdGg6IDEwMjRweDtcclxuJG1lZGl1bS1oZWlnaHQ6IDY4MHB4O1xyXG5cclxuJGJpZy13aWR0aDogMTI4MHB4O1xyXG4kYmlnLWhlaWdodDogODAwcHg7XHJcblxyXG4uYXBwLXJvb3Qge1xyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaXVtLXdpZHRoKSBhbmQobWluLWhlaWdodDogJG1lZGl1bS1oZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY3ZTNmO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAmX19ib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NiwgMTQ1LCA2NywgMC40KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmX19mb290ZXIge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyNTA0O1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICYtdGV4dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19tYWluIHtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYmlnLXdpZHRoKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faW5zdHJ1Y3Rpb25zIHtcclxuICAgICAgICBoZWlnaHQ6IDM1JTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRiaWctd2lkdGgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMjUwNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1yaWdodCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjI1MDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgbGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtZWRpdW0td2lkdGgpIGFuZChtaW4taGVpZ2h0OiAkbWVkaXVtLWhlaWdodCkge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaXVtLXdpZHRoKSBhbmQobWluLWhlaWdodDogJG1lZGl1bS1oZWlnaHQpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19zdGVwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1jb2RlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDYsIDE0NSwgNjcsIDAuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxhc3Qge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWVkaXVtLXdpZHRoKSBhbmQgKG1pbi1oZWlnaHQ6ICRtZWRpdW0taGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjdlM2Y7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYW5ndWxhci1sb2dvIHtcclxuICAgICAgICB3aWR0aDogNDhweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190d2l0dGVyLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDFweCA4cHggMXB4IDZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5NWUwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX19zdGFyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb2RlIHtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var ngx_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-feedback */ "./projects/ngx-feedback/src/public-api.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(feedbackService) {
        this.feedbackService = feedbackService;
        this.title = 'ngx-feedback-lib';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.feedbackService.listenForFeedbacks().subscribe(function (data) { });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_feedback__WEBPACK_IMPORTED_MODULE_2__["NgxFeedbackService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_feedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-feedback */ "./projects/ngx-feedback/src/public-api.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_feedback__WEBPACK_IMPORTED_MODULE_4__["NgxFeedbackModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! C:\github\ngx-feedback\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map