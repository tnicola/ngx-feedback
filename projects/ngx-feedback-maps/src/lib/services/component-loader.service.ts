import {
    Injectable,
    Type,
    ComponentRef,
    ComponentFactoryResolver,
    ApplicationRef,
    Injector,
    EmbeddedViewRef
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ComponentLoaderService<T> {
    constructor(
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}
    load(componentType: Type<T>): ComponentRef<T> {
        // 1. Create a component reference from the component
        const ref: ComponentRef<T> = this.componentFactoryResolver.resolveComponentFactory(componentType).create(this.injector);

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(ref.hostView);

        // 3. Get DOM element from component
        const domElem = (ref.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the body
        document.body.appendChild(domElem);
        ref.changeDetectorRef.detectChanges();

        return ref;
    }
}
