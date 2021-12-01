import { Type, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
export declare class ComponentLoaderService<T> {
    private readonly componentFactoryResolver;
    private appRef;
    private injector;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    load(componentType: Type<T>): ComponentRef<T>;
}
