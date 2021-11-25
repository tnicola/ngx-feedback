import { ɵɵdefineInjectable, ɵɵinject, ComponentFactoryResolver, ApplicationRef, INJECTOR, Injectable, Injector, Component, ViewEncapsulation, ViewChild, EventEmitter, Output, RendererFactory2, Input, NgModule } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import html2canvas from 'html2canvas';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["comment"];
function ModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵelementStart(1, "p");
    ɵngcc0.ɵɵelementStart(2, "strong");
    ɵngcc0.ɵɵtext(3, "Thank you for using MAPS");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "p");
    ɵngcc0.ɵɵtext(5, "To request new features or functionality, please use our ");
    ɵngcc0.ɵɵelementStart(6, "a", 15);
    ɵngcc0.ɵɵtext(7, "Feature Request Portal");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "p");
    ɵngcc0.ɵɵtext(9, "To provide feedback or report issues with the current page please select one of the following options.");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "p");
    ɵngcc0.ɵɵelementStart(11, "strong");
    ɵngcc0.ɵɵtext(12, "Does your feedback relate to:");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function ModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1, " Thanks for your feedback! ");
    ɵngcc0.ɵɵelementEnd();
} }
function ModalComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "div", 17);
    ɵngcc0.ɵɵlistener("mouseenter", function ModalComponent_div_11_Template_div_mouseenter_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.enterGeneric = true; })("mouseleave", function ModalComponent_div_11_Template_div_mouseleave_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.enterGeneric = false; });
    ɵngcc0.ɵɵelementStart(2, "div", 18);
    ɵngcc0.ɵɵlistener("click", function ModalComponent_div_11_Template_div_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onGeneric(); });
    ɵngcc0.ɵɵelementStart(3, "div");
    ɵngcc0.ɵɵtext(4, "Whole Page");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 19);
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(6, "svg", 20);
    ɵngcc0.ɵɵelementStart(7, "g");
    ɵngcc0.ɵɵelement(8, "path", 21);
    ɵngcc0.ɵɵelement(9, "path", 22);
    ɵngcc0.ɵɵelement(10, "path", 23);
    ɵngcc0.ɵɵelement(11, "path", 24);
    ɵngcc0.ɵɵelement(12, "path", 25);
    ɵngcc0.ɵɵelement(13, "path", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(14, "g");
    ɵngcc0.ɵɵelement(15, "g");
    ɵngcc0.ɵɵelement(16, "g");
    ɵngcc0.ɵɵelement(17, "g");
    ɵngcc0.ɵɵelement(18, "g");
    ɵngcc0.ɵɵelement(19, "g");
    ɵngcc0.ɵɵelement(20, "g");
    ɵngcc0.ɵɵelement(21, "g");
    ɵngcc0.ɵɵelement(22, "g");
    ɵngcc0.ɵɵelement(23, "g");
    ɵngcc0.ɵɵelement(24, "g");
    ɵngcc0.ɵɵelement(25, "g");
    ɵngcc0.ɵɵelement(26, "g");
    ɵngcc0.ɵɵelement(27, "g");
    ɵngcc0.ɵɵelement(28, "g");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(29, "div", 17);
    ɵngcc0.ɵɵlistener("mouseenter", function ModalComponent_div_11_Template_div_mouseenter_29_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.enterSpecific = true; })("mouseleave", function ModalComponent_div_11_Template_div_mouseleave_29_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.enterSpecific = false; });
    ɵngcc0.ɵɵelementStart(30, "div", 18);
    ɵngcc0.ɵɵlistener("click", function ModalComponent_div_11_Template_div_click_30_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onSpecific(); });
    ɵngcc0.ɵɵelementStart(31, "div");
    ɵngcc0.ɵɵtext(32, "Specific Section");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(33, "div", 19);
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(34, "svg", 20);
    ɵngcc0.ɵɵelementStart(35, "g");
    ɵngcc0.ɵɵelement(36, "path", 21);
    ɵngcc0.ɵɵelement(37, "path", 22);
    ɵngcc0.ɵɵelement(38, "path", 23);
    ɵngcc0.ɵɵelement(39, "path", 24);
    ɵngcc0.ɵɵelement(40, "path", 27);
    ɵngcc0.ɵɵelement(41, "path", 28);
    ɵngcc0.ɵɵelement(42, "path", 29);
    ɵngcc0.ɵɵelement(43, "path", 30);
    ɵngcc0.ɵɵelement(44, "circle", 31);
    ɵngcc0.ɵɵelement(45, "circle", 32);
    ɵngcc0.ɵɵelement(46, "circle", 33);
    ɵngcc0.ɵɵelement(47, "circle", 34);
    ɵngcc0.ɵɵelement(48, "circle", 35);
    ɵngcc0.ɵɵelement(49, "circle", 36);
    ɵngcc0.ɵɵelement(50, "circle", 37);
    ɵngcc0.ɵɵelement(51, "circle", 38);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(52, "g");
    ɵngcc0.ɵɵelement(53, "g");
    ɵngcc0.ɵɵelement(54, "g");
    ɵngcc0.ɵɵelement(55, "g");
    ɵngcc0.ɵɵelement(56, "g");
    ɵngcc0.ɵɵelement(57, "g");
    ɵngcc0.ɵɵelement(58, "g");
    ɵngcc0.ɵɵelement(59, "g");
    ɵngcc0.ɵɵelement(60, "g");
    ɵngcc0.ɵɵelement(61, "g");
    ɵngcc0.ɵɵelement(62, "g");
    ɵngcc0.ɵɵelement(63, "g");
    ɵngcc0.ɵɵelement(64, "g");
    ɵngcc0.ɵɵelement(65, "g");
    ɵngcc0.ɵɵelement(66, "g");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ngx-feedback-modal__box-container--border", !ctx_r2.enterGeneric);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ngx-feedback-modal__box--border", ctx_r2.enterGeneric);
    ɵngcc0.ɵɵadvance(27);
    ɵngcc0.ɵɵclassProp("ngx-feedback-modal__box-container--border", !ctx_r2.enterSpecific);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ngx-feedback-modal__box--border", ctx_r2.enterSpecific);
} }
function ModalComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "em");
    ɵngcc0.ɵɵtext(2, "Feedback Screenshot:");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function ModalComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 46);
    ɵngcc0.ɵɵelementStart(1, "div", 47);
    ɵngcc0.ɵɵelement(2, "img", 48);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "div");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("src", ctx_r13.imgSrc, ɵngcc0.ɵɵsanitizeUrl);
} }
function ModalComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 39);
    ɵngcc0.ɵɵelementStart(1, "div", 40);
    ɵngcc0.ɵɵtemplate(2, ModalComponent_div_12_div_2_Template, 3, 0, "div", 9);
    ɵngcc0.ɵɵtemplate(3, ModalComponent_div_12_div_3_Template, 4, 1, "div", 41);
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵelementStart(5, "em");
    ɵngcc0.ɵɵtext(6, "Feedback Rating:");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "ngx-feedback-star-vote", 42);
    ɵngcc0.ɵɵlistener("voted", function ModalComponent_div_12_Template_ngx_feedback_star_vote_voted_7_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onVote($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 43);
    ɵngcc0.ɵɵelementStart(9, "div");
    ɵngcc0.ɵɵelementStart(10, "em");
    ɵngcc0.ɵɵtext(11, "Feedback Comment:");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(12, "textarea", 44, 45);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.imgSrc !== ctx_r3.noImageSrc);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.imgSrc !== ctx_r3.noImageSrc);
} }
function ModalComponent_ngx_feedback_btn_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-feedback-btn", 49);
    ɵngcc0.ɵɵlistener("click", function ModalComponent_ngx_feedback_btn_14_Template_ngx_feedback_btn_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onSend(); });
    ɵngcc0.ɵɵtext(1, "Send ");
    ɵngcc0.ɵɵelementEnd();
} }
const _c1 = ["*"];
function StarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 3);
    ɵngcc0.ɵɵelement(2, "path", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function StarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 3);
    ɵngcc0.ɵɵelement(2, "path", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function StarVoteComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "ngx-feedback-star", 3);
    ɵngcc0.ɵɵlistener("click", function StarVoteComponent_div_1_Template_ngx_feedback_star_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onClick(i_r2); })("mouseenter", function StarVoteComponent_div_1_Template_ngx_feedback_star_mouseenter_1_listener() { ɵngcc0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onMouseEnter(i_r2); })("mouseleave", function StarVoteComponent_div_1_Template_ngx_feedback_star_mouseleave_1_listener() { ɵngcc0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onMouseLeave(i_r2); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("type", s_r1.type);
} }
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
ComponentLoaderService.ɵfac = function ComponentLoaderService_Factory(t) { return new (t || ComponentLoaderService)(ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
ComponentLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentLoaderService_Factory() { return new ComponentLoaderService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(INJECTOR)); }, token: ComponentLoaderService, providedIn: "root" });
ComponentLoaderService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ComponentLoaderService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.Injector }]; }, null); })();

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
EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(); };
EventsService.ɵprov = ɵɵdefineInjectable({ factory: function EventsService_Factory() { return new EventsService(); }, token: EventsService, providedIn: "root" });
EventsService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(EventsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

class FeedbackButtonComponent {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    ngOnInit() { }
    onClick() {
        this.eventsService.onFeedbackButtonClick();
    }
}
FeedbackButtonComponent.ɵfac = function FeedbackButtonComponent_Factory(t) { return new (t || FeedbackButtonComponent)(ɵngcc0.ɵɵdirectiveInject(EventsService)); };
FeedbackButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FeedbackButtonComponent, selectors: [["ngx-feedback-main-btn"]], decls: 3, vars: 0, consts: [["role", "complementary"], [1, "feedback-button__container", 3, "click"]], template: function FeedbackButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "button", 1);
        ɵngcc0.ɵɵlistener("click", function FeedbackButtonComponent_Template_button_click_1_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵtext(2, "Submit Feedback");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".feedback-button__container{position:fixed;right:-65px;top:calc(50% - 37.5px);cursor:pointer;transform:rotate(-90deg);border:none;border-radius:5px 5px 0 0;background-color:#3b5560;color:#fff;font-size:14px;padding:5px 10px;font-weight:700;font-family:Verdana;outline:none}.ngx-feedback__highlight{outline:4px solid #ffc058;pointer-events:none;cursor:default!important}"], encapsulation: 2 });
FeedbackButtonComponent.ctorParameters = () => [
    { type: EventsService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FeedbackButtonComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-feedback-main-btn',
                template: "<div role=\"complementary\">\n<button (click)=\"onClick()\" class=\"feedback-button__container\">Submit Feedback</button>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".feedback-button__container{position:fixed;right:-65px;top:calc(50% - 37.5px);cursor:pointer;transform:rotate(-90deg);border:none;border-radius:5px 5px 0 0;background-color:#3b5560;color:#fff;font-size:14px;padding:5px 10px;font-weight:700;font-family:Verdana;outline:none}.ngx-feedback__highlight{outline:4px solid #ffc058;pointer-events:none;cursor:default!important}"]
            }]
    }], function () { return [{ type: EventsService }]; }, null); })();

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
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(ɵngcc0.ɵɵdirectiveInject(EventsService)); };
ModalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["ngx-feedback-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.comment = _t.first);
    } }, decls: 15, vars: 5, consts: [[1, "ngx-feedback-modal__container"], [1, "ngx-feedback-modal__header"], [1, "ngx-feedback-modal__title"], [1, "ngx-feedback-modal__close", 3, "click"], ["viewBox", "0 0 25 25", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "1", "y1", "24", "x2", "24", "y2", "1", "stroke", "#3b5560", "stroke-width", "3"], ["x1", "1", "y1", "1", "x2", "24", "y2", "24", "stroke", "#3b5560", "stroke-width", "3"], ["class", "ngx-feedback-modal__content ngx-feedback-modal__text", 4, "ngIf"], [1, "ngx-feedback-modal__content"], [4, "ngIf"], ["class", "ngx-feedback-modal__boxes", 4, "ngIf"], ["style", "display: flex; flex-direction: row;", 4, "ngIf"], [1, "ngx-feedback-modal__footer"], ["class", "ngx-feedback-modal__send", 3, "click", 4, "ngIf"], [1, "ngx-feedback-modal__content", "ngx-feedback-modal__text"], ["href", "https://features.micronutrient.support", "target", "_blank"], [1, "ngx-feedback-modal__boxes"], [1, "ngx-feedback-modal__box-container", 3, "mouseenter", "mouseleave"], [1, "ngx-feedback-modal__box", 3, "click"], [1, "ngx-feedback-modal__icon"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 60 60", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 60 60"], ["d", "M7,3C4.794,3,3,4.794,3,7s1.794,4,4,4s4-1.794,4-4S9.206,3,7,3z M7,9C5.897,9,5,8.103,5,7s0.897-2,2-2s2,0.897,2,2\n                                S8.103,9,7,9z"], ["d", "M16,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S18.206,3,16,3z M16,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S17.103,9,16,9z"], ["d", "M25,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S27.206,3,25,3z M25,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S26.103,9,25,9z"], ["d", "M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z"], ["d", "M55,55V17H5v38H55z M7,53v-2.048l15.974-14.064L33.275,47.19c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414\n                                l-4.807-4.807l9.162-10.035L53,44.424V53H7z M53,19v22.642L39.695,28.781c-0.195-0.188-0.456-0.293-0.727-0.281\n                                c-0.27,0.008-0.525,0.126-0.707,0.325l-9.795,10.727l-4.743-4.743c-0.372-0.373-0.972-0.392-1.368-0.043L7,48.287V19H53z"], ["d", "M16.431,33.638c3.071,0,5.569-2.498,5.569-5.569S19.502,22.5,16.431,22.5c-3.07,0-5.568,2.498-5.568,5.569\n                                S13.36,33.638,16.431,33.638z M16.431,24.5c1.968,0,3.569,1.601,3.569,3.569s-1.602,3.569-3.569,3.569s-3.568-1.601-3.568-3.569\n                                S14.463,24.5,16.431,24.5z"], ["d", "M28,18H6v16h22V18z M26,32H8V20h18V32z"], ["d", "M28,54V38H6v16H28z M13,40c0,0.552,0.448,1,1,1s1-0.448,1-1h4c0,0.552,0.448,1,1,1s1-0.448,1-1h4c0,0.552,0.448,1,1,1v4\n                                c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1v4c-0.552,0-1,0.448-1,1h-4c0-0.552-0.448-1-1-1s-1,0.448-1,1h-4c0-0.552-0.448-1-1-1\n                                s-1,0.448-1,1H9c0-0.552-0.448-1-1-1v-4c0.552,0,1-0.448,1-1c0-0.552-0.448-1-1-1v-4c0.552,0,1-0.448,1-1H13z"], ["d", "M54,18H32v16h22V18z M52,32H34V20h18V32z"], ["d", "M54,38H32v16h22V38z M52,52H34V40h18V52z"], ["cx", "23", "cy", "43", "r", "1"], ["cx", "20", "cy", "46", "r", "1"], ["cx", "23", "cy", "49", "r", "1"], ["cx", "17", "cy", "43", "r", "1"], ["cx", "14", "cy", "46", "r", "1"], ["cx", "17", "cy", "49", "r", "1"], ["cx", "11", "cy", "43", "r", "1"], ["cx", "11", "cy", "49", "r", "1"], [2, "display", "flex", "flex-direction", "row"], [2, "width", "40%", "margin-left", "1em"], ["class", "ngx-feedback-modal__preview-container", 4, "ngIf"], [3, "voted"], [2, "width", "60%"], ["rows", "15", "cols", "60", "placeholder", "Enter your feedback...", "autofocus", "true", 1, "ngx-feedback-modal__textarea"], ["comment", ""], [1, "ngx-feedback-modal__preview-container"], [1, "ngx-feedback-modal__preview"], [2, "width", "100%", "height", "auto", 3, "src"], [1, "ngx-feedback-modal__send", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtext(3, "Submit Feedback");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵlistener("click", function ModalComponent_Template_div_click_4_listener() { return ctx.onCloseClicked(); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(5, "svg", 4);
        ɵngcc0.ɵɵelement(6, "line", 5);
        ɵngcc0.ɵɵelement(7, "line", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, ModalComponent_div_8_Template, 13, 0, "div", 7);
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelementStart(9, "div", 8);
        ɵngcc0.ɵɵtemplate(10, ModalComponent_div_10_Template, 2, 0, "div", 9);
        ɵngcc0.ɵɵtemplate(11, ModalComponent_div_11_Template, 67, 8, "div", 10);
        ɵngcc0.ɵɵtemplate(12, ModalComponent_div_12_Template, 14, 2, "div", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "div", 12);
        ɵngcc0.ɵɵtemplate(14, ModalComponent_ngx_feedback_btn_14_Template, 2, 0, "ngx-feedback-btn", 13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(8);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.imgSrc && !ctx.thanks);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.thanks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.imgSrc && !ctx.thanks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.imgSrc && !ctx.thanks);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.imgSrc && !ctx.thanks);
    } }, directives: function () { return [ɵngcc1.NgIf, StarVoteComponent, ButtonComponent]; }, styles: [".ngx-feedback-modal__header[_ngcontent-%COMP%]{height:30px;color:#3b5560;font-weight:700;display:flex;flex-direction:row;justify-content:space-between}.ngx-feedback-modal__title[_ngcontent-%COMP%]{padding-left:16px;padding-top:8px}.ngx-feedback-modal__footer[_ngcontent-%COMP%]{height:30px}.ngx-feedback-modal__container[_ngcontent-%COMP%]{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:fixed;top:50%;left:50%;width:700px;padding:10px;z-index:1000;background:#fff;transform:translate(-200px,-250px);border:1px solid #3b5560;border-radius:3px;box-shadow:0 0 30px 1px #000;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;text-align:center}.ngx-feedback-modal__content[_ngcontent-%COMP%]{padding:10px 0;display:flex;flex-direction:column;justify-content:center;align-items:center}.ngx-feedback-modal__text[_ngcontent-%COMP%]{padding:1em 1em 0}.ngx-feedback-modal__boxes[_ngcontent-%COMP%]{padding-top:0;flex-direction:row}.ngx-feedback-modal__box[_ngcontent-%COMP%], .ngx-feedback-modal__boxes[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.ngx-feedback-modal__box[_ngcontent-%COMP%]{flex-direction:column;height:80px;padding:5px 15px;font-size:14px;font-weight:700;cursor:pointer}.ngx-feedback-modal__box--border[_ngcontent-%COMP%]{border:2px solid #3b5560;border-radius:3px}.ngx-feedback-modal__box-container[_ngcontent-%COMP%]{padding:5px;margin:0 10px}.ngx-feedback-modal__box-container--border[_ngcontent-%COMP%]{border-radius:3px;border:2px solid #3b5560}.ngx-feedback-modal__send[_ngcontent-%COMP%]{float:right}.ngx-feedback-modal__icon[_ngcontent-%COMP%]{width:40px;padding-top:10px}.ngx-feedback-modal__preview[_ngcontent-%COMP%]{width:80%;border:2px solid #3b5560;border-radius:3px;max-height:200px;overflow-y:scroll}.ngx-feedback-modal__preview-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column}.ngx-feedback-modal__preview-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:1em}.ngx-feedback-modal__textarea[_ngcontent-%COMP%]{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;outline-color:#3b5560;border-radius:3px;border:1px solid #3b5560;margin-bottom:20px;width:80%;padding:5px}.ngx-feedback-modal__close[_ngcontent-%COMP%]{width:14px;cursor:pointer}"] });
ModalComponent.ctorParameters = () => [
    { type: EventsService }
];
ModalComponent.propDecorators = {
    comment: [{ type: ViewChild, args: ['comment',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-feedback-modal',
                template: "<div class=\"ngx-feedback-modal__container\">\n    <div class=\"ngx-feedback-modal__header\">\n        <div class=\"ngx-feedback-modal__title\">Submit Feedback</div>\n        <div class=\"ngx-feedback-modal__close\" (click)=\"onCloseClicked()\">\n            <svg viewBox=\"0 0 25 25\" xmlns=\"http://www.w3.org/2000/svg\">\n                <line x1=\"1\" y1=\"24\" x2=\"24\" y2=\"1\" stroke=\"#3b5560\" stroke-width=\"3\" />\n                <line x1=\"1\" y1=\"1\" x2=\"24\" y2=\"24\" stroke=\"#3b5560\" stroke-width=\"3\" />\n            </svg>\n        </div>\n    </div>\n    <div *ngIf=\"!imgSrc && !thanks\" class=\"ngx-feedback-modal__content ngx-feedback-modal__text\">\n        <p><strong>Thank you for using MAPS</strong></p>\n        <p>To request new features or functionality, please use our\n            <a href=\"https://features.micronutrient.support\" target=\"_blank\">Feature Request Portal</a>\n        </p>\n        <p>To provide feedback or report issues with the current page please select one of the following options.</p>\n        <p><strong>Does your feedback relate to:</strong></p>\n    </div>\n    <div class=\"ngx-feedback-modal__content\">\n        <div *ngIf=\"thanks\">\n            Thanks for your feedback!\n        </div>\n        <div *ngIf=\"!imgSrc && !thanks\" class=\"ngx-feedback-modal__boxes\">\n            <div class=\"ngx-feedback-modal__box-container\"\n                [class.ngx-feedback-modal__box-container--border]=\"!enterGeneric\" (mouseenter)=\"enterGeneric = true\"\n                (mouseleave)=\"enterGeneric = false\">\n                <div class=\"ngx-feedback-modal__box\" [class.ngx-feedback-modal__box--border]=\"enterGeneric\"\n                    (click)=\"onGeneric()\">\n                    <div>Whole Page</div>\n                    <div class=\"ngx-feedback-modal__icon\">\n                        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 60 60\"\n                            style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                            <g>\n                                <path d=\"M7,3C4.794,3,3,4.794,3,7s1.794,4,4,4s4-1.794,4-4S9.206,3,7,3z M7,9C5.897,9,5,8.103,5,7s0.897-2,2-2s2,0.897,2,2\n                                S8.103,9,7,9z\" />\n                                <path d=\"M16,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S18.206,3,16,3z M16,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S17.103,9,16,9z\" />\n                                <path d=\"M25,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S27.206,3,25,3z M25,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S26.103,9,25,9z\" />\n                                <path d=\"M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z\" />\n                                <path\n                                    d=\"M55,55V17H5v38H55z M7,53v-2.048l15.974-14.064L33.275,47.19c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414\n                                l-4.807-4.807l9.162-10.035L53,44.424V53H7z M53,19v22.642L39.695,28.781c-0.195-0.188-0.456-0.293-0.727-0.281\n                                c-0.27,0.008-0.525,0.126-0.707,0.325l-9.795,10.727l-4.743-4.743c-0.372-0.373-0.972-0.392-1.368-0.043L7,48.287V19H53z\" />\n                                <path d=\"M16.431,33.638c3.071,0,5.569-2.498,5.569-5.569S19.502,22.5,16.431,22.5c-3.07,0-5.568,2.498-5.568,5.569\n                                S13.36,33.638,16.431,33.638z M16.431,24.5c1.968,0,3.569,1.601,3.569,3.569s-1.602,3.569-3.569,3.569s-3.568-1.601-3.568-3.569\n                                S14.463,24.5,16.431,24.5z\" />\n                            </g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                        </svg>\n                    </div>\n                </div>\n            </div>\n            <div class=\"ngx-feedback-modal__box-container\"\n                [class.ngx-feedback-modal__box-container--border]=\"!enterSpecific\" (mouseenter)=\"enterSpecific = true\"\n                (mouseleave)=\"enterSpecific = false\">\n                <div class=\"ngx-feedback-modal__box\" [class.ngx-feedback-modal__box--border]=\"enterSpecific\"\n                    (click)=\"onSpecific()\">\n                    <div>Specific Section</div>\n                    <div class=\"ngx-feedback-modal__icon\">\n                        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 60 60\"\n                            style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                            <g>\n                                <path d=\"M7,3C4.794,3,3,4.794,3,7s1.794,4,4,4s4-1.794,4-4S9.206,3,7,3z M7,9C5.897,9,5,8.103,5,7s0.897-2,2-2s2,0.897,2,2\n                                S8.103,9,7,9z\" />\n                                <path d=\"M16,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S18.206,3,16,3z M16,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S17.103,9,16,9z\" />\n                                <path d=\"M25,3c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S27.206,3,25,3z M25,9c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2\n                                S26.103,9,25,9z\" />\n                                <path d=\"M0,0v14v46h60V14V0H0z M2,2h56v10H2V2z M58,58H2V14h56V58z\" />\n                                <path d=\"M28,18H6v16h22V18z M26,32H8V20h18V32z\" />\n                                <path\n                                    d=\"M28,54V38H6v16H28z M13,40c0,0.552,0.448,1,1,1s1-0.448,1-1h4c0,0.552,0.448,1,1,1s1-0.448,1-1h4c0,0.552,0.448,1,1,1v4\n                                c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1v4c-0.552,0-1,0.448-1,1h-4c0-0.552-0.448-1-1-1s-1,0.448-1,1h-4c0-0.552-0.448-1-1-1\n                                s-1,0.448-1,1H9c0-0.552-0.448-1-1-1v-4c0.552,0,1-0.448,1-1c0-0.552-0.448-1-1-1v-4c0.552,0,1-0.448,1-1H13z\" />\n                                <path d=\"M54,18H32v16h22V18z M52,32H34V20h18V32z\" />\n                                <path d=\"M54,38H32v16h22V38z M52,52H34V40h18V52z\" />\n                                <circle cx=\"23\" cy=\"43\" r=\"1\" />\n                                <circle cx=\"20\" cy=\"46\" r=\"1\" />\n                                <circle cx=\"23\" cy=\"49\" r=\"1\" />\n                                <circle cx=\"17\" cy=\"43\" r=\"1\" />\n                                <circle cx=\"14\" cy=\"46\" r=\"1\" />\n                                <circle cx=\"17\" cy=\"49\" r=\"1\" />\n                                <circle cx=\"11\" cy=\"43\" r=\"1\" />\n                                <circle cx=\"11\" cy=\"49\" r=\"1\" />\n                            </g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                            <g></g>\n                        </svg>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div *ngIf=\"imgSrc && !thanks\" style=\"display: flex; flex-direction: row;\">\n            <div style=\"width: 40%; margin-left: 1em;\">\n                <div *ngIf=\"imgSrc !== noImageSrc\"><em>Feedback Screenshot:</em></div>\n                <div class=\"ngx-feedback-modal__preview-container\" *ngIf=\"imgSrc !== noImageSrc\">\n                    <div class=\"ngx-feedback-modal__preview\">\n                        <img [src]=\"imgSrc\" style=\"width: 100%; height: auto\" />\n                    </div>\n                    <div>\n                        <!-- <ngx-feedback-btn (click)=\"imgSrc=noImageSrc\">Clear Screenshot</ngx-feedback-btn> -->\n                    </div>\n                </div>\n                <div><em>Feedback Rating:</em></div>\n                <ngx-feedback-star-vote (voted)=\"onVote($event)\"></ngx-feedback-star-vote>\n            </div>\n            <div style=\"width: 60%;\">\n                <div><em>Feedback Comment:</em></div>\n                <textarea #comment class=\"ngx-feedback-modal__textarea\" rows=\"15\" cols=\"60\"\n                    placeholder=\"Enter your feedback...\" autofocus=\"true\"></textarea>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"ngx-feedback-modal__footer\">\n        <ngx-feedback-btn *ngIf=\"imgSrc && !thanks\" class=\"ngx-feedback-modal__send\" (click)=\"onSend()\">Send\n        </ngx-feedback-btn>\n    </div>\n</div>",
                styles: [".ngx-feedback-modal__header{height:30px;color:#3b5560;font-weight:700;display:flex;flex-direction:row;justify-content:space-between}.ngx-feedback-modal__title{padding-left:16px;padding-top:8px}.ngx-feedback-modal__footer{height:30px}.ngx-feedback-modal__container{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:fixed;top:50%;left:50%;width:700px;padding:10px;z-index:1000;background:#fff;transform:translate(-200px,-250px);border:1px solid #3b5560;border-radius:3px;box-shadow:0 0 30px 1px #000;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;text-align:center}.ngx-feedback-modal__content{padding:10px 0;display:flex;flex-direction:column;justify-content:center;align-items:center}.ngx-feedback-modal__text{padding:1em 1em 0}.ngx-feedback-modal__boxes{padding-top:0;flex-direction:row}.ngx-feedback-modal__box,.ngx-feedback-modal__boxes{display:flex;justify-content:center;align-items:center}.ngx-feedback-modal__box{flex-direction:column;height:80px;padding:5px 15px;font-size:14px;font-weight:700;cursor:pointer}.ngx-feedback-modal__box--border{border:2px solid #3b5560;border-radius:3px}.ngx-feedback-modal__box-container{padding:5px;margin:0 10px}.ngx-feedback-modal__box-container--border{border-radius:3px;border:2px solid #3b5560}.ngx-feedback-modal__send{float:right}.ngx-feedback-modal__icon{width:40px;padding-top:10px}.ngx-feedback-modal__preview{width:80%;border:2px solid #3b5560;border-radius:3px;max-height:200px;overflow-y:scroll}.ngx-feedback-modal__preview-container{display:flex;justify-content:center;flex-direction:column}.ngx-feedback-modal__preview-container div{margin-bottom:1em}.ngx-feedback-modal__textarea{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;outline-color:#3b5560;border-radius:3px;border:1px solid #3b5560;margin-bottom:20px;width:80%;padding:5px}.ngx-feedback-modal__close{width:14px;cursor:pointer}"]
            }]
    }], function () { return [{ type: EventsService }]; }, { comment: [{
            type: ViewChild,
            args: ['comment']
        }] }); })();

class BackdropComponent {
    constructor() {
        this.click = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
}
BackdropComponent.ɵfac = function BackdropComponent_Factory(t) { return new (t || BackdropComponent)(); };
BackdropComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BackdropComponent, selectors: [["ngx-feedback-backdrop"]], outputs: { click: "click" }, decls: 1, vars: 0, consts: [[1, "ngx-feedback-backdrop__container"]], template: function BackdropComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, styles: [".ngx-feedback-backdrop__container[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background-color:#3b5560;opacity:.7}"] });
BackdropComponent.ctorParameters = () => [];
BackdropComponent.propDecorators = {
    click: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BackdropComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-feedback-backdrop',
                template: "<div class=\"ngx-feedback-backdrop__container\"></div>",
                styles: [".ngx-feedback-backdrop__container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background-color:#3b5560;opacity:.7}"]
            }]
    }], function () { return []; }, { click: [{
            type: Output
        }] }); })();

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
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(ɵngcc0.ɵɵinject(ComponentLoaderService)); };
ModalService.ɵprov = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(ComponentLoaderService)); }, token: ModalService, providedIn: "root" });
ModalService.ctorParameters = () => [
    { type: ComponentLoaderService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ComponentLoaderService }]; }, null); })();

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
SelectorsService.ɵfac = function SelectorsService_Factory(t) { return new (t || SelectorsService)(ɵngcc0.ɵɵinject(ɵngcc0.RendererFactory2)); };
SelectorsService.ɵprov = ɵɵdefineInjectable({ factory: function SelectorsService_Factory() { return new SelectorsService(ɵɵinject(RendererFactory2)); }, token: SelectorsService, providedIn: "root" });
SelectorsService.ctorParameters = () => [
    { type: RendererFactory2 }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SelectorsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc0.RendererFactory2 }]; }, null); })();

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
OrchestratorService.ɵfac = function OrchestratorService_Factory(t) { return new (t || OrchestratorService)(ɵngcc0.ɵɵinject(ModalService), ɵngcc0.ɵɵinject(SelectorsService), ɵngcc0.ɵɵinject(EventsService)); };
OrchestratorService.ɵprov = ɵɵdefineInjectable({ factory: function OrchestratorService_Factory() { return new OrchestratorService(ɵɵinject(ModalService), ɵɵinject(SelectorsService), ɵɵinject(EventsService)); }, token: OrchestratorService, providedIn: "root" });
OrchestratorService.ctorParameters = () => [
    { type: ModalService },
    { type: SelectorsService },
    { type: EventsService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(OrchestratorService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ModalService }, { type: SelectorsService }, { type: EventsService }]; }, null); })();

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
NgxFeedbackService.ɵfac = function NgxFeedbackService_Factory(t) { return new (t || NgxFeedbackService)(ɵngcc0.ɵɵinject(ComponentLoaderService), ɵngcc0.ɵɵinject(OrchestratorService)); };
NgxFeedbackService.ɵprov = ɵɵdefineInjectable({ factory: function NgxFeedbackService_Factory() { return new NgxFeedbackService(ɵɵinject(ComponentLoaderService), ɵɵinject(OrchestratorService)); }, token: NgxFeedbackService, providedIn: "root" });
NgxFeedbackService.ctorParameters = () => [
    { type: ComponentLoaderService },
    { type: OrchestratorService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxFeedbackService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ComponentLoaderService }, { type: OrchestratorService }]; }, null); })();

class ButtonComponent {
    constructor() {
        this.click = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["ngx-feedback-btn"]], outputs: { click: "click" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [[1, "ngx-feedback-btn__container", 3, "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".ngx-feedback-btn__container[_ngcontent-%COMP%]{text-transform:uppercase;border:2px solid transparent;border-radius:3px;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.ngx-feedback-btn__container[_ngcontent-%COMP%]:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}"] });
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    click: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-feedback-btn',
                template: "<button class=\"ngx-feedback-btn__container\" (click)=\"onClick()\"><ng-content></ng-content></button>\n",
                styles: [".ngx-feedback-btn__container{text-transform:uppercase;border:2px solid transparent;border-radius:3px;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.ngx-feedback-btn__container:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}"]
            }]
    }], function () { return []; }, { click: [{
            type: Output
        }] }); })();

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
StarComponent.ɵfac = function StarComponent_Factory(t) { return new (t || StarComponent)(); };
StarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StarComponent, selectors: [["ngx-feedback-star"]], inputs: { type: "type" }, outputs: { click: "click" }, decls: 4, vars: 2, consts: [[1, "ngx-feedback-star__container", 3, "click"], [4, "ngIf", "ngIfElse"], ["empty", ""], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "#ffc058"], ["d", "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"], ["d", "M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"]], template: function StarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function StarComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵtemplate(1, StarComponent_div_1_Template, 3, 0, "div", 1);
        ɵngcc0.ɵɵtemplate(2, StarComponent_ng_template_2_Template, 3, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type === "full" || ctx.type === "temp")("ngIfElse", _r1);
    } }, directives: [ɵngcc1.NgIf], styles: [".ngx-feedback-star__container[_ngcontent-%COMP%]{cursor:pointer;padding:5px}"] });
StarComponent.ctorParameters = () => [];
StarComponent.propDecorators = {
    type: [{ type: Input }],
    click: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(StarComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-feedback-star',
                template: "<div class=\"ngx-feedback-star__container\" (click)=\"onClick()\">\n    <div *ngIf=\"type === 'full' || type === 'temp'; else empty\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#ffc058\">\n            <path\n                d=\"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z\"\n            />\n        </svg>\n    </div>\n    <ng-template #empty>\n        <div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#ffc058\">\n                <path\n                    d=\"M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z\"\n                />\n            </svg>\n        </div>\n    </ng-template>\n</div>\n",
                styles: [".ngx-feedback-star__container{cursor:pointer;padding:5px}"]
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], click: [{
            type: Output
        }] }); })();

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
StarVoteComponent.ɵfac = function StarVoteComponent_Factory(t) { return new (t || StarVoteComponent)(); };
StarVoteComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StarVoteComponent, selectors: [["ngx-feedback-star-vote"]], outputs: { voted: "voted" }, decls: 2, vars: 1, consts: [[1, "ngx-feedback-star-vote__container"], ["class", "ngx-feedback-star-vote__star", 4, "ngFor", "ngForOf"], [1, "ngx-feedback-star-vote__star"], [3, "type", "click", "mouseenter", "mouseleave"]], template: function StarVoteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, StarVoteComponent_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.stars);
    } }, directives: [ɵngcc1.NgForOf, StarComponent], styles: [".ngx-feedback-star-vote__container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}"] });
StarVoteComponent.ctorParameters = () => [];
StarVoteComponent.propDecorators = {
    voted: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(StarVoteComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-feedback-star-vote',
                template: "<div class=\"ngx-feedback-star-vote__container\">\n    <div class=\"ngx-feedback-star-vote__star\" *ngFor=\"let s of stars; index as i\">\n        <ngx-feedback-star\n            (click)=\"onClick(i)\"\n            (mouseenter)=\"onMouseEnter(i)\"\n            (mouseleave)=\"onMouseLeave(i)\"\n            [type]=\"s.type\"\n        ></ngx-feedback-star>\n    </div>\n</div>\n",
                styles: [".ngx-feedback-star-vote__container{display:flex;flex-direction:row;justify-content:center}"]
            }]
    }], function () { return []; }, { voted: [{
            type: Output
        }] }); })();

class NgxFeedbackModule {
}
NgxFeedbackModule.ɵfac = function NgxFeedbackModule_Factory(t) { return new (t || NgxFeedbackModule)(); };
NgxFeedbackModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxFeedbackModule });
NgxFeedbackModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ providers: [NgxFeedbackService, OrchestratorService, ComponentLoaderService, ModalService, SelectorsService, EventsService], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxFeedbackModule, { declarations: function () { return [FeedbackButtonComponent, ModalComponent, ButtonComponent, BackdropComponent, StarComponent, StarVoteComponent]; }, imports: function () { return [CommonModule]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxFeedbackModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

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