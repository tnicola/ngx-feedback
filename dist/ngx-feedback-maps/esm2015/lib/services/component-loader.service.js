import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import * as i0 from "@angular/core";
export class ComponentLoaderService {
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
ComponentLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentLoaderService_Factory() { return new ComponentLoaderService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR)); }, token: ComponentLoaderService, providedIn: "root" });
ComponentLoaderService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ComponentLoaderService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZlZWRiYWNrLW1hcHMvc3JjL2xpYi9zZXJ2aWNlcy9jb21wb25lbnQtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFVBQVUsRUFHVix3QkFBd0IsRUFDeEIsY0FBYyxFQUNkLFFBQVEsRUFFWCxNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsTUFBTSxPQUFPLHNCQUFzQjtJQUMvQixZQUNxQix3QkFBa0QsRUFDM0QsTUFBc0IsRUFDdEIsUUFBa0I7UUFGVCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQztJQUNKLElBQUksQ0FBQyxhQUFzQjtRQUN2QixxREFBcUQ7UUFDckQsTUFBTSxHQUFHLEdBQW9CLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhILDhFQUE4RTtRQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckMsb0NBQW9DO1FBQ3BDLE1BQU0sT0FBTyxHQUFJLEdBQUcsQ0FBQyxRQUFpQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFFbkYsb0NBQW9DO1FBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV0QyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Ozs7WUF0QkosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBTjlCLHdCQUF3QjtZQUN4QixjQUFjO1lBQ2QsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgSW5qZWN0YWJsZSxcbiAgICBUeXBlLFxuICAgIENvbXBvbmVudFJlZixcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQXBwbGljYXRpb25SZWYsXG4gICAgSW5qZWN0b3IsXG4gICAgRW1iZWRkZWRWaWV3UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExvYWRlclNlcnZpY2U8VD4ge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICAgKSB7fVxuICAgIGxvYWQoY29tcG9uZW50VHlwZTogVHlwZTxUPik6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgICAgIC8vIDEuIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICAgIGNvbnN0IHJlZjogQ29tcG9uZW50UmVmPFQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG4gICAgICAgIC8vIDIuIEF0dGFjaCBjb21wb25lbnQgdG8gdGhlIGFwcFJlZiBzbyB0aGF0IGl0J3MgaW5zaWRlIHRoZSBuZyBjb21wb25lbnQgdHJlZVxuICAgICAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHJlZi5ob3N0Vmlldyk7XG5cbiAgICAgICAgLy8gMy4gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XG4gICAgICAgIGNvbnN0IGRvbUVsZW0gPSAocmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgLy8gNC4gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG4gICAgICAgIHJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgcmV0dXJuIHJlZjtcbiAgICB9XG59XG4iXX0=