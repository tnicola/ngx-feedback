import { Type, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ComponentLoaderService<T> {
    private readonly componentFactoryResolver;
    private appRef;
    private injector;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    load(componentType: Type<T>): ComponentRef<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentLoaderService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ComponentLoaderService<any>>;
}
