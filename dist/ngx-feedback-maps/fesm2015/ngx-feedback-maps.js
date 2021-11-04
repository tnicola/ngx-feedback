import { ɵɵdefineInjectable, ɵɵinject, ComponentFactoryResolver, ApplicationRef, INJECTOR, Injectable, Injector, Component, ViewEncapsulation, ViewChild, EventEmitter, Output, RendererFactory2, Input, NgModule } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import html2canvas from 'html2canvas';
import { CommonModule } from '@angular/common';

class ComponentLoaderService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    load(componentType) {
        // 1. Create a component reference from the component
        const ref = this.componentFactoryResolver.resolveComponentFactory(componentType).create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(ref.hostView);
        // 3. Get DOM element from component
        const domElem = ref.hostView.rootNodes[0];
        // 4. Append DOM element to the body
        document.body.appendChild(domElem);
        ref.changeDetectorRef.detectChanges();
        return ref;
    }
}
ComponentLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentLoaderService_Factory() { return new ComponentLoaderService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(INJECTOR)); }, token: ComponentLoaderService, providedIn: "root" });
ComponentLoaderService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ComponentLoaderService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];

class EventsService {
    constructor() {
        this.feedbackClick = new Subject();
        this.feedbackClickObservable = this.feedbackClick.asObservable();
        this.specificFeedbackClick = new Subject();
        this.specificFeedbackClickObservable = this.specificFeedbackClick.asObservable();
        this.genericFeedbackClick = new Subject();
        this.genericFeedbackClickObservable = this.genericFeedbackClick.asObservable();
        this.closeClick = new Subject();
        this.closeClickClickObservable = this.closeClick.asObservable();
        this.onSendClick = new Subject();
        this.onSendClickObservable = this.onSendClick.asObservable();
    }
    onSpecificFeedbackClick() {
        this.specificFeedbackClick.next();
    }
    onGenericFeedbackClik() {
        this.genericFeedbackClick.next();
    }
    onFeedbackButtonClick() {
        this.feedbackClick.next();
    }
    onCloseClicked() {
        this.closeClick.next();
    }
    onSendClicked(data) {
        this.onSendClick.next(data);
    }
}
EventsService.ɵprov = ɵɵdefineInjectable({ factory: function EventsService_Factory() { return new EventsService(); }, token: EventsService, providedIn: "root" });
EventsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
EventsService.ctorParameters = () => [];

class FeedbackButtonComponent {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    ngOnInit() { }
    onClick() {
        this.eventsService.onFeedbackButtonClick();
    }
}
FeedbackButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-main-btn',
                template: "<button (click)=\"onClick()\" class=\"feedback-button__container\">Submit Feedback</button>",
                encapsulation: ViewEncapsulation.None,
                styles: [".feedback-button__container{position:fixed;right:-65px;top:calc(50% - 37.5px);cursor:pointer;transform:rotate(-90deg);border:none;border-radius:5px 5px 0 0;background-color:#3b5560;color:#fff;font-size:14px;padding:5px 10px;font-weight:700;font-family:Verdana;outline:none}.ngx-feedback__highlight{outline:4px solid #ffc058;pointer-events:none;cursor:default!important}"]
            },] }
];
FeedbackButtonComponent.ctorParameters = () => [
    { type: EventsService }
];

class ModalComponent {
    constructor(eventsService) {
        this.eventsService = eventsService;
        this.imgSrc = '';
        this.noImageSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        this.formData = { rate: 0, comment: '', screenshot: null };
        this.url = window.location.href;
    }
    ngOnInit() { }
    onSpecific() {
        this.eventsService.onSpecificFeedbackClick();
    }
    onGeneric() {
        this.eventsService.onGenericFeedbackClik();
    }
    onCloseClicked() {
        this.eventsService.onCloseClicked();
    }
    setPreview(preview) {
        this.imgSrc = preview;
        this.formData.screenshot = preview;
    }
    onVote(rate) {
        this.voted = true;
        this.formData.rate = rate;
    }
    onSend() {
        this.formData.comment = this.comment.nativeElement.value;
        this.eventsService.onSendClicked(this.formData);
        this.thanks = true;
        setTimeout(() => {
            this.eventsService.onCloseClicked();
        }, 2000);
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-modal',
                template: "<div class=\"ngx-feedback-modal__container\">\n    <div class=\"ngx-feedback-modal__header\">\n        <div class=\"ngx-feedback-modal__title\">Submit Feedback</div>\n        <div class=\"ngx-feedback-modal__close\" (click)=\"onCloseClicked()\">\n            <svg viewBox=\"0 0 25 25\" xmlns=\"http://www.w3.org/2000/svg\">\n                <line x1=\"1\" y1=\"24\" x2=\"24\" y2=\"1\" stroke=\"#3b5560\" stroke-width=\"3\" />\n                <line x1=\"1\" y1=\"1\" x2=\"24\" y2=\"24\" stroke=\"#3b5560\" stroke-width=\"3\" />\n            </svg>\n        </div>\n    </div>\n    <div *ngIf=\"!imgSrc && !thanks\" class=\"ngx-feedback-modal__content ngx-feedback-modal__text\">\n        <p><strong>Thank you for using MAPS</strong></p>\n        <p>To request new features or functionality, please use our\n            <a href=\"https://features.micronutrient.support\" target=\"_blank\">Feature Request Portal</a>\n        </p>\n        <p>To provide feedback or report issues with the current page please select one of the following options.</p>\n        <p><strong>Does your feedback relate to:</strong></p>\n    </div>\n    <div class=\"ngx-feedback-modal__content\">\n        <div *ngIf=\"thanks\">\n            Thanks for your feedback!\n        </div>\n        <div *ngIf=\"!imgSrc && !thanks\" class=\"ngx-feedback-modal__boxes\">\n            <div class=\"ngx-feedback-modal__box-container\"\n                [class.ngx-feedback-modal__box-container--border]=\"!enterGeneric\" (mouseenter)=\"enterGeneric = true\"\n                (mouseleave)=\"enterGeneric = false\">\n                <div class=\"ngx-feedback-modal__box\" [class.ngx-feedback-modal__box--border]=\"enterGeneric\"\n                    (click)=\"onGeneric()\">\n                    <div>Whole Page</div>\n                    <div class=\"ngx-feedback-modal__icon\">\n                        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 60 60\"\n                            style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                            <g>\n                                <path d=\"M7,3C4.794,3,3,4.794,3,7s1.794,4,4,4s4-1.794,4-4S9.206,3,7,3z M7,9C5.897,9,5,8.103,5,7s0.897-2,2-2s2,0.897,2,2\n                                S8.103,9,7,9z\" />\n                                <path d=\"M16,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S18.206,3,16,3z M16,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S17.103,9,16,9z\" />\n                                <path d=\"M25,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S27.206,3,25,3z M25,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S26.103,9,25,9z\" />\n                                <path d=\"M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z\" />\n                                <path\n                                    d=\"M55,55V17H5v38H55z M7,53v-2.048l15.974-14.064L33.275,47.19c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414\n                                l-4.807-4.807l9.162-10.035L53,44.424V53H7z M53,19v22.642L39.695,28.781c-0.195-0.188-0.456-0.293-0.727-0.281\n                                c-0.27,0.008-0.525,0.126-0.707,0.325l-9.795,10.727l-4.743-4.743c-0.372-0.373-0.972-0.392-1.368-0.043L7,48.287V19H53z\" />\n                                <path d=\"M16.431,33.638c3.071,0,5.569-2.498,5.569-5.569S19.502,22.5,16.431,22.5c-3.07,0-5.568,2.498-5.568,5.569\n                                S13.36,33.638,16.431,33.638z M16.431,24.5c1.968,0,3.569,1.601,3.569,3.569s-1.602,3.569-3.569,3.569s-3.568-1.601-3.568-3.569\n                                S14.463,24.5,16.431,24.5z\" />\n                            </g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                        </svg>\n                    </div>\n                </div>\n            </div>\n            <div class=\"ngx-feedback-modal__box-container\"\n                [class.ngx-feedback-modal__box-container--border]=\"!enterSpecific\" (mouseenter)=\"enterSpecific = true\"\n                (mouseleave)=\"enterSpecific = false\">\n                <div class=\"ngx-feedback-modal__box\" [class.ngx-feedback-modal__box--border]=\"enterSpecific\"\n                    (click)=\"onSpecific()\">\n                    <div>Specific Section</div>\n                    <div class=\"ngx-feedback-modal__icon\">\n                        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 60 60\"\n                            style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                            <g>\n                                <path d=\"M7,3C4.794,3,3,4.794,3,7s1.794,4,4,4s4-1.794,4-4S9.206,3,7,3z M7,9C5.897,9,5,8.103,5,7s0.897-2,2-2s2,0.897,2,2\n                                S8.103,9,7,9z\" />\n                                <path d=\"M16,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S18.206,3,16,3z M16,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S17.103,9,16,9z\" />\n                                <path d=\"M25,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S27.206,3,25,3z M25,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S26.103,9,25,9z\" />\n                                <path d=\"M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z\" />\n                                <path d=\"M28,18H6v16h22V18z M26,32H8V20h18V32z\" />\n                                <path\n                                    d=\"M28,54V38H6v16H28z M13,40c0,0.552,0.448,1,1,1s1-0.448,1-1h4c0,0.552,0.448,1,1,1s1-0.448,1-1h4c0,0.552,0.448,1,1,1v4\n                                c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1v4c-0.552,0-1,0.448-1,1h-4c0-0.552-0.448-1-1-1s-1,0.448-1,1h-4c0-0.552-0.448-1-1-1\n                                s-1,0.448-1,1H9c0-0.552-0.448-1-1-1v-4c0.552,0,1-0.448,1-1c0-0.552-0.448-1-1-1v-4c0.552,0,1-0.448,1-1H13z\" />\n                                <path d=\"M54,18H32v16h22V18z M52,32H34V20h18V32z\" />\n                                <path d=\"M54,38H32v16h22V38z M52,52H34V40h18V52z\" />\n                                <circle cx=\"23\" cy=\"43\" r=\"1\" />\n                                <circle cx=\"20\" cy=\"46\" r=\"1\" />\n                                <circle cx=\"23\" cy=\"49\" r=\"1\" />\n                                <circle cx=\"17\" cy=\"43\" r=\"1\" />\n                                <circle cx=\"14\" cy=\"46\" r=\"1\" />\n                                <circle cx=\"17\" cy=\"49\" r=\"1\" />\n                                <circle cx=\"11\" cy=\"43\" r=\"1\" />\n                                <circle cx=\"11\" cy=\"49\" r=\"1\" />\n                            </g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                        </svg>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div *ngIf=\"imgSrc && !thanks\" style=\"display: flex; flex-direction: row;\">\n            <div style=\"width: 40%; margin-left: 1em;\">\n                <div *ngIf=\"imgSrc !== noImageSrc\"><em>Feedback Screenshot:</em></div>\n                <div class=\"ngx-feedback-modal__preview-container\" *ngIf=\"imgSrc !== noImageSrc\">\n                    <div class=\"ngx-feedback-modal__preview\">\n                        <img [src]=\"imgSrc\" style=\"width: 100%; height: auto\" />\n                    </div>\n                    <div>\n                        <!-- <ngx-feedback-btn (click)=\"imgSrc=noImageSrc\">Clear Screenshot</ngx-feedback-btn> -->\n                    </div>\n                </div>\n                <div><em>Feedback Rating:</em></div>\n                <ngx-feedback-star-vote (voted)=\"onVote($event)\"></ngx-feedback-star-vote>\n            </div>\n            <div style=\"width: 60%;\">\n                <div><em>Feedback Comment:</em></div>\n                <textarea #comment class=\"ngx-feedback-modal__textarea\" rows=\"15\" cols=\"60\"\n                    placeholder=\"Enter your feedback...\" autofocus=\"true\"></textarea>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"ngx-feedback-modal__footer\">\n        <ngx-feedback-btn *ngIf=\"imgSrc && !thanks\" class=\"ngx-feedback-modal__send\" (click)=\"onSend()\">Send\n        </ngx-feedback-btn>\n    </div>\n</div>",
                styles: [".ngx-feedback-modal__header{height:30px;color:#3b5560;font-weight:700;display:flex;flex-direction:row;justify-content:space-between}.ngx-feedback-modal__title{padding-left:16px;padding-top:8px}.ngx-feedback-modal__footer{height:30px}.ngx-feedback-modal__container{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:fixed;top:50%;left:50%;width:700px;padding:10px;z-index:1000;background:#fff;transform:translate(-200px,-250px);border:1px solid #3b5560;border-radius:3px;box-shadow:0 0 30px 1px #000;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;text-align:center}.ngx-feedback-modal__content{padding:10px 0;display:flex;flex-direction:column;justify-content:center;align-items:center}.ngx-feedback-modal__text{padding:1em 1em 0}.ngx-feedback-modal__boxes{padding-top:0;flex-direction:row}.ngx-feedback-modal__box,.ngx-feedback-modal__boxes{display:flex;justify-content:center;align-items:center}.ngx-feedback-modal__box{flex-direction:column;height:80px;padding:5px 15px;font-size:14px;font-weight:700;cursor:pointer}.ngx-feedback-modal__box--border{border:2px solid #3b5560;border-radius:3px}.ngx-feedback-modal__box-container{padding:5px;margin:0 10px}.ngx-feedback-modal__box-container--border{border-radius:3px;border:2px solid #3b5560}.ngx-feedback-modal__send{float:right}.ngx-feedback-modal__icon{width:40px;padding-top:10px}.ngx-feedback-modal__preview{width:80%;border:2px solid #3b5560;border-radius:3px;max-height:200px;overflow-y:scroll}.ngx-feedback-modal__preview-container{display:flex;justify-content:center;flex-direction:column}.ngx-feedback-modal__preview-container div{margin-bottom:1em}.ngx-feedback-modal__textarea{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;outline-color:#3b5560;border-radius:3px;border:1px solid #3b5560;margin-bottom:20px;width:80%;padding:5px}.ngx-feedback-modal__close{width:14px;cursor:pointer}"]
            },] }
];
ModalComponent.ctorParameters = () => [
    { type: EventsService }
];
ModalComponent.propDecorators = {
    comment: [{ type: ViewChild, args: ['comment',] }]
};

class BackdropComponent {
    constructor() {
        this.click = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
}
BackdropComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-backdrop',
                template: "<div class=\"ngx-feedback-backdrop__container\"></div>",
                styles: [".ngx-feedback-backdrop__container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background-color:#3b5560;opacity:.7}"]
            },] }
];
BackdropComponent.ctorParameters = () => [];
BackdropComponent.propDecorators = {
    click: [{ type: Output }]
};

class ModalService {
    constructor(componentLoader) {
        this.componentLoader = componentLoader;
    }
    openWithPreview(preview) {
        this.draw();
        this.modalRef.instance.setPreview(preview);
    }
    draw() {
        this.backdropRef = this.componentLoader.load(BackdropComponent);
        this.modalRef = this.componentLoader.load(ModalComponent);
    }
    remove() {
        this.modalRef.destroy();
        this.backdropRef.destroy();
    }
}
ModalService.ɵprov = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(ComponentLoaderService)); }, token: ModalService, providedIn: "root" });
ModalService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ModalService.ctorParameters = () => [
    { type: ComponentLoaderService }
];

class SelectorsService {
    constructor(rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.preview = new Subject();
        this.subs = [];
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    pageScreenshot() {
        this.screenshot(document.body);
    }
    elementsHighlight() {
        let element;
        const elements = [];
        this.source = fromEvent(document, 'mousemove').subscribe((ev) => {
            if (element) {
                this.renderer.removeClass(element, 'ngx-feedback__highlight');
            }
            element = document.elementFromPoint(ev.x, ev.y);
            if (elements.findIndex(el => el === element) === -1) {
                elements.push(element);
                this.subs.push(fromEvent(element, 'click').subscribe((evt) => {
                    evt.stopPropagation();
                    this.screenshot(element);
                }));
            }
            this.renderer.addClass(element, 'ngx-feedback__highlight');
        });
    }
    screenshot(element) {
        let image;
        html2canvas(element).then(canvas => {
            image = canvas.toDataURL();
            this.preview.next(image);
        });
        this.renderer.removeClass(element, 'ngx-feedback__highlight');
        this.clean();
    }
    clean() {
        if (this.source) {
            this.source.unsubscribe();
        }
        this.subs.forEach(sub => sub.unsubscribe());
    }
}
SelectorsService.ɵprov = ɵɵdefineInjectable({ factory: function SelectorsService_Factory() { return new SelectorsService(ɵɵinject(RendererFactory2)); }, token: SelectorsService, providedIn: "root" });
SelectorsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
SelectorsService.ctorParameters = () => [
    { type: RendererFactory2 }
];

class OrchestratorService {
    constructor(modalService, selectorsService, eventsService) {
        this.modalService = modalService;
        this.selectorsService = selectorsService;
        this.eventsService = eventsService;
        this.subscriptions = [];
        this.onSend = new Subject();
    }
    ngOnInit() {
        this.subscriptions.push(this.onFeedbackButtonClick(), this.onSpecificFeedbackClick(), this.onGenericFeedbackClick(), this.onElementSelected(), this.onCloseClick(), this.onSendClick());
    }
    onElementSelected() {
        return this.selectorsService.preview.subscribe((prev) => {
            this.modalService.openWithPreview(prev);
        });
    }
    onFeedbackButtonClick() {
        return this.eventsService.feedbackClickObservable.subscribe(() => {
            this.modalService.draw();
        });
    }
    onSpecificFeedbackClick() {
        return this.eventsService.specificFeedbackClickObservable.subscribe(() => {
            this.modalService.remove();
            this.selectorsService.elementsHighlight();
        });
    }
    onGenericFeedbackClick() {
        return this.eventsService.genericFeedbackClickObservable.subscribe(() => {
            this.modalService.remove();
            setTimeout(() => {
                this.selectorsService.pageScreenshot();
            }, 500);
        });
    }
    onCloseClick() {
        return this.eventsService.closeClickClickObservable.subscribe(() => {
            this.modalService.remove();
        });
    }
    onSendClick() {
        return this.eventsService.onSendClickObservable.subscribe((data) => {
            this.onSend.next(data);
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
OrchestratorService.ɵprov = ɵɵdefineInjectable({ factory: function OrchestratorService_Factory() { return new OrchestratorService(ɵɵinject(ModalService), ɵɵinject(SelectorsService), ɵɵinject(EventsService)); }, token: OrchestratorService, providedIn: "root" });
OrchestratorService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OrchestratorService.ctorParameters = () => [
    { type: ModalService },
    { type: SelectorsService },
    { type: EventsService }
];

class NgxFeedbackService {
    constructor(componentLoader, orchestratorService) {
        this.componentLoader = componentLoader;
        this.orchestratorService = orchestratorService;
    }
    listenForFeedbacks() {
        this.orchestratorService.ngOnInit();
        this.componentLoader.load(FeedbackButtonComponent);
        return this.orchestratorService.onSend;
    }
}
NgxFeedbackService.ɵprov = ɵɵdefineInjectable({ factory: function NgxFeedbackService_Factory() { return new NgxFeedbackService(ɵɵinject(ComponentLoaderService), ɵɵinject(OrchestratorService)); }, token: NgxFeedbackService, providedIn: "root" });
NgxFeedbackService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxFeedbackService.ctorParameters = () => [
    { type: ComponentLoaderService },
    { type: OrchestratorService }
];

class ButtonComponent {
    constructor() {
        this.click = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-btn',
                template: "<button class=\"ngx-feedback-btn__container\" (click)=\"onClick()\"><ng-content></ng-content></button>\n",
                styles: [".ngx-feedback-btn__container{text-transform:uppercase;border:2px solid transparent;border-radius:3px;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.ngx-feedback-btn__container:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}"]
            },] }
];
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    click: [{ type: Output }]
};

class StarComponent {
    constructor() {
        this.type = 'empty';
        this.click = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
}
StarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-star',
                template: "<div class=\"ngx-feedback-star__container\" (click)=\"onClick()\">\n    <div *ngIf=\"type === 'full' || type === 'temp'; else empty\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#ffc058\">\n            <path\n                d=\"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z\"\n            />\n        </svg>\n    </div>\n    <ng-template #empty>\n        <div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#ffc058\">\n                <path\n                    d=\"M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z\"\n                />\n            </svg>\n        </div>\n    </ng-template>\n</div>\n",
                styles: [".ngx-feedback-star__container{cursor:pointer;padding:5px}"]
            },] }
];
StarComponent.ctorParameters = () => [];
StarComponent.propDecorators = {
    type: [{ type: Input }],
    click: [{ type: Output }]
};

class StarVoteComponent {
    constructor() {
        this.stars = [
            { type: 'empty', value: 1 },
            { type: 'empty', value: 2 },
            { type: 'empty', value: 3 },
            { type: 'empty', value: 4 },
            { type: 'empty', value: 5 }
        ];
        this.voted = new EventEmitter();
    }
    ngOnInit() { }
    onClick(index) {
        this.stars.forEach((s, i) => {
            if (i <= index) {
                s.type = 'full';
            }
            else {
                s.type = 'empty';
            }
        });
        this.voted.emit(index + 1);
    }
    onMouseEnter(index) {
        this.stars.forEach((s, i) => {
            if (i <= index && s.type !== 'full') {
                s.type = 'temp';
            }
        });
    }
    onMouseLeave(index) {
        this.stars.forEach((s, i) => {
            if (s.type === 'temp') {
                s.type = 'empty';
            }
        });
    }
}
StarVoteComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-star-vote',
                template: "<div class=\"ngx-feedback-star-vote__container\">\n    <div class=\"ngx-feedback-star-vote__star\" *ngFor=\"let s of stars; index as i\">\n        <ngx-feedback-star\n            (click)=\"onClick(i)\"\n            (mouseenter)=\"onMouseEnter(i)\"\n            (mouseleave)=\"onMouseLeave(i)\"\n            [type]=\"s.type\"\n        ></ngx-feedback-star>\n    </div>\n</div>\n",
                styles: [".ngx-feedback-star-vote__container{display:flex;flex-direction:row;justify-content:center}"]
            },] }
];
StarVoteComponent.ctorParameters = () => [];
StarVoteComponent.propDecorators = {
    voted: [{ type: Output }]
};

class NgxFeedbackModule {
}
NgxFeedbackModule.decorators = [
    { type: NgModule, args: [{
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
                imports: [CommonModule],
                exports: []
            },] }
];

class FeedbackData {
    constructor() {
        this.rate = 0;
        this.comment = '';
        this.screenshot = undefined;
    }
}

/*
 * Public API Surface of ngx-feedback-maps
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FeedbackData, NgxFeedbackModule, NgxFeedbackService, ComponentLoaderService as ɵa, OrchestratorService as ɵb, FeedbackButtonComponent as ɵc, EventsService as ɵd, ModalComponent as ɵe, ButtonComponent as ɵf, BackdropComponent as ɵg, StarComponent as ɵh, StarVoteComponent as ɵi, OrchestratorService as ɵj, ModalService as ɵk, SelectorsService as ɵl };
//# sourceMappingURL=ngx-feedback-maps.js.map
