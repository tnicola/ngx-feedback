(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('html2canvas'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-feedback-maps', ['exports', '@angular/core', 'rxjs', 'html2canvas', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-feedback-maps'] = {}, global.ng.core, global.rxjs, global.html2canvas, global.ng.common));
}(this, (function (exports, i0, rxjs, html2canvas, common) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var html2canvas__default = /*#__PURE__*/_interopDefaultLegacy(html2canvas);

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
        return ComponentLoaderService;
    }());
    ComponentLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentLoaderService_Factory() { return new ComponentLoaderService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR)); }, token: ComponentLoaderService, providedIn: "root" });
    ComponentLoaderService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    ComponentLoaderService.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: i0.ApplicationRef },
        { type: i0.Injector }
    ]; };

    var EventsService = /** @class */ (function () {
        function EventsService() {
            this.feedbackClick = new rxjs.Subject();
            this.feedbackClickObservable = this.feedbackClick.asObservable();
            this.specificFeedbackClick = new rxjs.Subject();
            this.specificFeedbackClickObservable = this.specificFeedbackClick.asObservable();
            this.genericFeedbackClick = new rxjs.Subject();
            this.genericFeedbackClickObservable = this.genericFeedbackClick.asObservable();
            this.closeClick = new rxjs.Subject();
            this.closeClickClickObservable = this.closeClick.asObservable();
            this.onSendClick = new rxjs.Subject();
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
        return EventsService;
    }());
    EventsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventsService_Factory() { return new EventsService(); }, token: EventsService, providedIn: "root" });
    EventsService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    EventsService.ctorParameters = function () { return []; };

    var FeedbackButtonComponent = /** @class */ (function () {
        function FeedbackButtonComponent(eventsService) {
            this.eventsService = eventsService;
        }
        FeedbackButtonComponent.prototype.ngOnInit = function () { };
        FeedbackButtonComponent.prototype.onClick = function () {
            this.eventsService.onFeedbackButtonClick();
        };
        return FeedbackButtonComponent;
    }());
    FeedbackButtonComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-feedback-main-btn',
                    template: "<button (click)=\"onClick()\" class=\"feedback-button__container\">Submit Feedback</button>",
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: [".feedback-button__container{position:fixed;right:-65px;top:calc(50% - 37.5px);cursor:pointer;transform:rotate(-90deg);border:none;border-radius:5px 5px 0 0;background-color:#3b5560;color:#fff;font-size:14px;padding:5px 10px;font-weight:700;font-family:Verdana;outline:none}.ngx-feedback__highlight{outline:4px solid #ffc058;pointer-events:none;cursor:default!important}"]
                },] }
    ];
    FeedbackButtonComponent.ctorParameters = function () { return [
        { type: EventsService }
    ]; };

    var ModalComponent = /** @class */ (function () {
        function ModalComponent(eventsService) {
            this.eventsService = eventsService;
            this.imgSrc = '';
            this.noImageSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            this.formData = { rate: 0, comment: '', screenshot: null };
            this.url = window.location.href;
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
        return ModalComponent;
    }());
    ModalComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-feedback-modal',
                    template: "<div class=\"ngx-feedback-modal__container\">\n    <div class=\"ngx-feedback-modal__header\">\n        <div class=\"ngx-feedback-modal__title\">Submit Feedback</div>\n        <div class=\"ngx-feedback-modal__close\" (click)=\"onCloseClicked()\">\n            <svg viewBox=\"0 0 25 25\" xmlns=\"http://www.w3.org/2000/svg\">\n                <line x1=\"1\" y1=\"24\" x2=\"24\" y2=\"1\" stroke=\"#3b5560\" stroke-width=\"3\" />\n                <line x1=\"1\" y1=\"1\" x2=\"24\" y2=\"24\" stroke=\"#3b5560\" stroke-width=\"3\" />\n            </svg>\n        </div>\n    </div>\n    <div *ngIf=\"!imgSrc && !thanks\" class=\"ngx-feedback-modal__content ngx-feedback-modal__text\">\n        <p><strong>Thank you for using MAPS</strong></p>\n        <p>To request new features or functionality, please use our\n            <a href=\"https://features.micronutrient.support\" target=\"_blank\">Feature Request Portal</a>\n        </p>\n        <p>To provide feedback or report issues with the current page please select one of the following options.</p>\n        <p><strong>Does your feedback relate to:</strong></p>\n    </div>\n    <div class=\"ngx-feedback-modal__content\">\n        <div *ngIf=\"thanks\">\n            Thanks for your feedback!\n        </div>\n        <div *ngIf=\"!imgSrc && !thanks\" class=\"ngx-feedback-modal__boxes\">\n            <div class=\"ngx-feedback-modal__box-container\"\n                [class.ngx-feedback-modal__box-container--border]=\"!enterGeneric\" (mouseenter)=\"enterGeneric = true\"\n                (mouseleave)=\"enterGeneric = false\">\n                <div class=\"ngx-feedback-modal__box\" [class.ngx-feedback-modal__box--border]=\"enterGeneric\"\n                    (click)=\"onGeneric()\">\n                    <div>Whole Page</div>\n                    <div class=\"ngx-feedback-modal__icon\">\n                        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 60 60\"\n                            style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                            <g>\n                                <path d=\"M7,3C4.794,3,3,4.794,3,7s1.794,4,4,4s4-1.794,4-4S9.206,3,7,3z M7,9C5.897,9,5,8.103,5,7s0.897-2,2-2s2,0.897,2,2\n                                S8.103,9,7,9z\" />\n                                <path d=\"M16,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S18.206,3,16,3z M16,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S17.103,9,16,9z\" />\n                                <path d=\"M25,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S27.206,3,25,3z M25,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S26.103,9,25,9z\" />\n                                <path d=\"M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z\" />\n                                <path\n                                    d=\"M55,55V17H5v38H55z M7,53v-2.048l15.974-14.064L33.275,47.19c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414\n                                l-4.807-4.807l9.162-10.035L53,44.424V53H7z M53,19v22.642L39.695,28.781c-0.195-0.188-0.456-0.293-0.727-0.281\n                                c-0.27,0.008-0.525,0.126-0.707,0.325l-9.795,10.727l-4.743-4.743c-0.372-0.373-0.972-0.392-1.368-0.043L7,48.287V19H53z\" />\n                                <path d=\"M16.431,33.638c3.071,0,5.569-2.498,5.569-5.569S19.502,22.5,16.431,22.5c-3.07,0-5.568,2.498-5.568,5.569\n                                S13.36,33.638,16.431,33.638z M16.431,24.5c1.968,0,3.569,1.601,3.569,3.569s-1.602,3.569-3.569,3.569s-3.568-1.601-3.568-3.569\n                                S14.463,24.5,16.431,24.5z\" />\n                            </g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                        </svg>\n                    </div>\n                </div>\n            </div>\n            <div class=\"ngx-feedback-modal__box-container\"\n                [class.ngx-feedback-modal__box-container--border]=\"!enterSpecific\" (mouseenter)=\"enterSpecific = true\"\n                (mouseleave)=\"enterSpecific = false\">\n                <div class=\"ngx-feedback-modal__box\" [class.ngx-feedback-modal__box--border]=\"enterSpecific\"\n                    (click)=\"onSpecific()\">\n                    <div>Specific Section</div>\n                    <div class=\"ngx-feedback-modal__icon\">\n                        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 60 60\"\n                            style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                            <g>\n                                <path d=\"M7,3C4.794,3,3,4.794,3,7s1.794,4,4,4s4-1.794,4-4S9.206,3,7,3z M7,9C5.897,9,5,8.103,5,7s0.897-2,2-2s2,0.897,2,2\n                                S8.103,9,7,9z\" />\n                                <path d=\"M16,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S18.206,3,16,3z M16,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S17.103,9,16,9z\" />\n                                <path d=\"M25,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S27.206,3,25,3z M25,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S26.103,9,25,9z\" />\n                                <path d=\"M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z\" />\n                                <path d=\"M28,18H6v16h22V18z M26,32H8V20h18V32z\" />\n                                <path\n                                    d=\"M28,54V38H6v16H28z M13,40c0,0.552,0.448,1,1,1s1-0.448,1-1h4c0,0.552,0.448,1,1,1s1-0.448,1-1h4c0,0.552,0.448,1,1,1v4\n                                c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1v4c-0.552,0-1,0.448-1,1h-4c0-0.552-0.448-1-1-1s-1,0.448-1,1h-4c0-0.552-0.448-1-1-1\n                                s-1,0.448-1,1H9c0-0.552-0.448-1-1-1v-4c0.552,0,1-0.448,1-1c0-0.552-0.448-1-1-1v-4c0.552,0,1-0.448,1-1H13z\" />\n                                <path d=\"M54,18H32v16h22V18z M52,32H34V20h18V32z\" />\n                                <path d=\"M54,38H32v16h22V38z M52,52H34V40h18V52z\" />\n                                <circle cx=\"23\" cy=\"43\" r=\"1\" />\n                                <circle cx=\"20\" cy=\"46\" r=\"1\" />\n                                <circle cx=\"23\" cy=\"49\" r=\"1\" />\n                                <circle cx=\"17\" cy=\"43\" r=\"1\" />\n                                <circle cx=\"14\" cy=\"46\" r=\"1\" />\n                                <circle cx=\"17\" cy=\"49\" r=\"1\" />\n                                <circle cx=\"11\" cy=\"43\" r=\"1\" />\n                                <circle cx=\"11\" cy=\"49\" r=\"1\" />\n                            </g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                        </svg>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div *ngIf=\"imgSrc && !thanks\" style=\"display: flex; flex-direction: row;\">\n            <div style=\"width: 40%; margin-left: 1em;\">\n                <div *ngIf=\"imgSrc !== noImageSrc\"><em>Feedback Screenshot:</em></div>\n                <div class=\"ngx-feedback-modal__preview-container\" *ngIf=\"imgSrc !== noImageSrc\">\n                    <div class=\"ngx-feedback-modal__preview\">\n                        <img [src]=\"imgSrc\" style=\"width: 100%; height: auto\" />\n                    </div>\n                    <div>\n                        <!-- <ngx-feedback-btn (click)=\"imgSrc=noImageSrc\">Clear Screenshot</ngx-feedback-btn> -->\n                    </div>\n                </div>\n                <div><em>Feedback Rating:</em></div>\n                <ngx-feedback-star-vote (voted)=\"onVote($event)\"></ngx-feedback-star-vote>\n            </div>\n            <div style=\"width: 60%;\">\n                <div><em>Feedback Comment:</em></div>\n                <textarea #comment class=\"ngx-feedback-modal__textarea\" rows=\"15\" cols=\"60\"\n                    placeholder=\"Enter your feedback...\" autofocus=\"true\"></textarea>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"ngx-feedback-modal__footer\">\n        <ngx-feedback-btn *ngIf=\"imgSrc && !thanks\" class=\"ngx-feedback-modal__send\" (click)=\"onSend()\">Send\n        </ngx-feedback-btn>\n    </div>\n</div>",
                    styles: [".ngx-feedback-modal__header{height:30px;color:#3b5560;font-weight:700;display:flex;flex-direction:row;justify-content:space-between}.ngx-feedback-modal__title{padding-left:16px;padding-top:8px}.ngx-feedback-modal__footer{height:30px}.ngx-feedback-modal__container{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:fixed;top:50%;left:50%;width:700px;padding:10px;z-index:1000;background:#fff;transform:translate(-200px,-250px);border:1px solid #3b5560;border-radius:3px;box-shadow:0 0 30px 1px #000;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;text-align:center}.ngx-feedback-modal__content{padding:10px 0;display:flex;flex-direction:column;justify-content:center;align-items:center}.ngx-feedback-modal__text{padding:1em 1em 0}.ngx-feedback-modal__boxes{padding-top:0;flex-direction:row}.ngx-feedback-modal__box,.ngx-feedback-modal__boxes{display:flex;justify-content:center;align-items:center}.ngx-feedback-modal__box{flex-direction:column;height:80px;padding:5px 15px;font-size:14px;font-weight:700;cursor:pointer}.ngx-feedback-modal__box--border{border:2px solid #3b5560;border-radius:3px}.ngx-feedback-modal__box-container{padding:5px;margin:0 10px}.ngx-feedback-modal__box-container--border{border-radius:3px;border:2px solid #3b5560}.ngx-feedback-modal__send{float:right}.ngx-feedback-modal__icon{width:40px;padding-top:10px}.ngx-feedback-modal__preview{width:80%;border:2px solid #3b5560;border-radius:3px;max-height:200px;overflow-y:scroll}.ngx-feedback-modal__preview-container{display:flex;justify-content:center;flex-direction:column}.ngx-feedback-modal__preview-container div{margin-bottom:1em}.ngx-feedback-modal__textarea{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;outline-color:#3b5560;border-radius:3px;border:1px solid #3b5560;margin-bottom:20px;width:80%;padding:5px}.ngx-feedback-modal__close{width:14px;cursor:pointer}"]
                },] }
    ];
    ModalComponent.ctorParameters = function () { return [
        { type: EventsService }
    ]; };
    ModalComponent.propDecorators = {
        comment: [{ type: i0.ViewChild, args: ['comment',] }]
    };

    var BackdropComponent = /** @class */ (function () {
        function BackdropComponent() {
            this.click = new i0.EventEmitter();
        }
        BackdropComponent.prototype.ngOnInit = function () { };
        BackdropComponent.prototype.onClick = function () {
            this.click.emit();
        };
        return BackdropComponent;
    }());
    BackdropComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-feedback-backdrop',
                    template: "<div class=\"ngx-feedback-backdrop__container\"></div>",
                    styles: [".ngx-feedback-backdrop__container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background-color:#3b5560;opacity:.7}"]
                },] }
    ];
    BackdropComponent.ctorParameters = function () { return []; };
    BackdropComponent.propDecorators = {
        click: [{ type: i0.Output }]
    };

    var ModalService = /** @class */ (function () {
        function ModalService(componentLoader) {
            this.componentLoader = componentLoader;
        }
        ModalService.prototype.openWithPreview = function (preview) {
            this.draw();
            this.modalRef.instance.setPreview(preview);
        };
        ModalService.prototype.draw = function () {
            this.backdropRef = this.componentLoader.load(BackdropComponent);
            this.modalRef = this.componentLoader.load(ModalComponent);
        };
        ModalService.prototype.remove = function () {
            this.modalRef.destroy();
            this.backdropRef.destroy();
        };
        return ModalService;
    }());
    ModalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(ComponentLoaderService)); }, token: ModalService, providedIn: "root" });
    ModalService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    ModalService.ctorParameters = function () { return [
        { type: ComponentLoaderService }
    ]; };

    var SelectorsService = /** @class */ (function () {
        function SelectorsService(rendererFactory) {
            this.rendererFactory = rendererFactory;
            this.preview = new rxjs.Subject();
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
            this.source = rxjs.fromEvent(document, 'mousemove').subscribe(function (ev) {
                if (element) {
                    _this.renderer.removeClass(element, 'ngx-feedback__highlight');
                }
                element = document.elementFromPoint(ev.x, ev.y);
                if (elements.findIndex(function (el) { return el === element; }) === -1) {
                    elements.push(element);
                    _this.subs.push(rxjs.fromEvent(element, 'click').subscribe(function (evt) {
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
            html2canvas__default['default'](element).then(function (canvas) {
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
        return SelectorsService;
    }());
    SelectorsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SelectorsService_Factory() { return new SelectorsService(i0.ɵɵinject(i0.RendererFactory2)); }, token: SelectorsService, providedIn: "root" });
    SelectorsService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    SelectorsService.ctorParameters = function () { return [
        { type: i0.RendererFactory2 }
    ]; };

    var OrchestratorService = /** @class */ (function () {
        function OrchestratorService(modalService, selectorsService, eventsService) {
            this.modalService = modalService;
            this.selectorsService = selectorsService;
            this.eventsService = eventsService;
            this.subscriptions = [];
            this.onSend = new rxjs.Subject();
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
                setTimeout(function () {
                    _this.selectorsService.pageScreenshot();
                }, 500);
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
        return OrchestratorService;
    }());
    OrchestratorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrchestratorService_Factory() { return new OrchestratorService(i0.ɵɵinject(ModalService), i0.ɵɵinject(SelectorsService), i0.ɵɵinject(EventsService)); }, token: OrchestratorService, providedIn: "root" });
    OrchestratorService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    OrchestratorService.ctorParameters = function () { return [
        { type: ModalService },
        { type: SelectorsService },
        { type: EventsService }
    ]; };

    var NgxFeedbackService = /** @class */ (function () {
        function NgxFeedbackService(componentLoader, orchestratorService) {
            this.componentLoader = componentLoader;
            this.orchestratorService = orchestratorService;
        }
        NgxFeedbackService.prototype.listenForFeedbacks = function () {
            this.orchestratorService.ngOnInit();
            this.componentLoader.load(FeedbackButtonComponent);
            return this.orchestratorService.onSend;
        };
        return NgxFeedbackService;
    }());
    NgxFeedbackService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxFeedbackService_Factory() { return new NgxFeedbackService(i0.ɵɵinject(ComponentLoaderService), i0.ɵɵinject(OrchestratorService)); }, token: NgxFeedbackService, providedIn: "root" });
    NgxFeedbackService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgxFeedbackService.ctorParameters = function () { return [
        { type: ComponentLoaderService },
        { type: OrchestratorService }
    ]; };

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.click = new i0.EventEmitter();
        }
        ButtonComponent.prototype.ngOnInit = function () { };
        ButtonComponent.prototype.onClick = function () {
            this.click.emit();
        };
        return ButtonComponent;
    }());
    ButtonComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-feedback-btn',
                    template: "<button class=\"ngx-feedback-btn__container\" (click)=\"onClick()\"><ng-content></ng-content></button>\n",
                    styles: [".ngx-feedback-btn__container{text-transform:uppercase;border:2px solid transparent;border-radius:3px;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.ngx-feedback-btn__container:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}"]
                },] }
    ];
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        click: [{ type: i0.Output }]
    };

    var StarComponent = /** @class */ (function () {
        function StarComponent() {
            this.type = 'empty';
            this.click = new i0.EventEmitter();
        }
        StarComponent.prototype.ngOnInit = function () { };
        StarComponent.prototype.onClick = function () {
            this.click.emit();
        };
        return StarComponent;
    }());
    StarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-feedback-star',
                    template: "<div class=\"ngx-feedback-star__container\" (click)=\"onClick()\">\n    <div *ngIf=\"type === 'full' || type === 'temp'; else empty\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#ffc058\">\n            <path\n                d=\"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z\"\n            />\n        </svg>\n    </div>\n    <ng-template #empty>\n        <div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#ffc058\">\n                <path\n                    d=\"M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z\"\n                />\n            </svg>\n        </div>\n    </ng-template>\n</div>\n",
                    styles: [".ngx-feedback-star__container{cursor:pointer;padding:5px}"]
                },] }
    ];
    StarComponent.ctorParameters = function () { return []; };
    StarComponent.propDecorators = {
        type: [{ type: i0.Input }],
        click: [{ type: i0.Output }]
    };

    var StarVoteComponent = /** @class */ (function () {
        function StarVoteComponent() {
            this.stars = [
                { type: 'empty', value: 1 },
                { type: 'empty', value: 2 },
                { type: 'empty', value: 3 },
                { type: 'empty', value: 4 },
                { type: 'empty', value: 5 }
            ];
            this.voted = new i0.EventEmitter();
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
        return StarVoteComponent;
    }());
    StarVoteComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-feedback-star-vote',
                    template: "<div class=\"ngx-feedback-star-vote__container\">\n    <div class=\"ngx-feedback-star-vote__star\" *ngFor=\"let s of stars; index as i\">\n        <ngx-feedback-star\n            (click)=\"onClick(i)\"\n            (mouseenter)=\"onMouseEnter(i)\"\n            (mouseleave)=\"onMouseLeave(i)\"\n            [type]=\"s.type\"\n        ></ngx-feedback-star>\n    </div>\n</div>\n",
                    styles: [".ngx-feedback-star-vote__container{display:flex;flex-direction:row;justify-content:center}"]
                },] }
    ];
    StarVoteComponent.ctorParameters = function () { return []; };
    StarVoteComponent.propDecorators = {
        voted: [{ type: i0.Output }]
    };

    var NgxFeedbackModule = /** @class */ (function () {
        function NgxFeedbackModule() {
        }
        return NgxFeedbackModule;
    }());
    NgxFeedbackModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        FeedbackButtonComponent,
                        ModalComponent,
                        ButtonComponent,
                        BackdropComponent,
                        StarComponent,
                        StarVoteComponent,
                    ],
                    entryComponents: [FeedbackButtonComponent, ModalComponent, BackdropComponent],
                    providers: [NgxFeedbackService, OrchestratorService, ComponentLoaderService, ModalService, SelectorsService, EventsService],
                    imports: [common.CommonModule],
                    exports: []
                },] }
    ];

    var FeedbackData = /** @class */ (function () {
        function FeedbackData() {
            this.rate = 0;
            this.comment = '';
            this.screenshot = undefined;
        }
        return FeedbackData;
    }());

    /*
     * Public API Surface of ngx-feedback-maps
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FeedbackData = FeedbackData;
    exports.NgxFeedbackModule = NgxFeedbackModule;
    exports.NgxFeedbackService = NgxFeedbackService;
    exports.ɵa = ComponentLoaderService;
    exports.ɵb = OrchestratorService;
    exports.ɵc = FeedbackButtonComponent;
    exports.ɵd = EventsService;
    exports.ɵe = ModalComponent;
    exports.ɵf = ButtonComponent;
    exports.ɵg = BackdropComponent;
    exports.ɵh = StarComponent;
    exports.ɵi = StarVoteComponent;
    exports.ɵj = OrchestratorService;
    exports.ɵk = ModalService;
    exports.ɵl = SelectorsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-feedback-maps.umd.js.map
