import { Injectable } from '@angular/core';
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
ComponentLoaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ComponentLoaderService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
ComponentLoaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ComponentLoaderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ComponentLoaderService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZlZWRiYWNrLW1hcHMvc3JjL2xpYi9zZXJ2aWNlcy9jb21wb25lbnQtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFVBQVUsRUFPYixNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsTUFBTSxPQUFPLHNCQUFzQjtJQUMvQixZQUNxQix3QkFBa0QsRUFDM0QsTUFBc0IsRUFDdEIsUUFBa0I7UUFGVCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQztJQUNKLElBQUksQ0FBQyxhQUFzQjtRQUN2QixxREFBcUQ7UUFDckQsTUFBTSxHQUFHLEdBQW9CLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhILDhFQUE4RTtRQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckMsb0NBQW9DO1FBQ3BDLE1BQU0sT0FBTyxHQUFJLEdBQUcsQ0FBQyxRQUFpQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFFbkYsb0NBQW9DO1FBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV0QyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7O29IQXJCUSxzQkFBc0I7d0hBQXRCLHNCQUFzQixjQURULE1BQU07NEZBQ25CLHNCQUFzQjtrQkFEbEMsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEluamVjdGFibGUsXG4gICAgVHlwZSxcbiAgICBDb21wb25lbnRSZWYsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIEFwcGxpY2F0aW9uUmVmLFxuICAgIEluamVjdG9yLFxuICAgIEVtYmVkZGVkVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXJTZXJ2aWNlPFQ+IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICAgICkge31cbiAgICBsb2FkKGNvbXBvbmVudFR5cGU6IFR5cGU8VD4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgICAgICAvLyAxLiBDcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudFxuICAgICAgICBjb25zdCByZWY6IENvbXBvbmVudFJlZjxUPiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudFR5cGUpLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuICAgICAgICAvLyAyLiBBdHRhY2ggY29tcG9uZW50IHRvIHRoZSBhcHBSZWYgc28gdGhhdCBpdCdzIGluc2lkZSB0aGUgbmcgY29tcG9uZW50IHRyZWVcbiAgICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhyZWYuaG9zdFZpZXcpO1xuXG4gICAgICAgIC8vIDMuIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxuICAgICAgICBjb25zdCBkb21FbGVtID0gKHJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIC8vIDQuIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuICAgICAgICByZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIHJldHVybiByZWY7XG4gICAgfVxufVxuIl19