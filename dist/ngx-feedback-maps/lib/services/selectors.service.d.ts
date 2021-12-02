import { RendererFactory2 } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SelectorsService {
    private readonly rendererFactory;
    preview: Subject<any>;
    subs: Subscription[];
    source: Subscription;
    private renderer;
    constructor(rendererFactory: RendererFactory2);
    pageScreenshot(): void;
    elementsHighlight(): void;
    screenshot(element: any): void;
    clean(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectorsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelectorsService>;
}
