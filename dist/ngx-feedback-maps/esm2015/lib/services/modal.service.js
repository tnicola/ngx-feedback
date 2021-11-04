import { Injectable } from '@angular/core';
import { ComponentLoaderService } from './component-loader.service';
import { ModalComponent } from '../components/modal/modal.component';
import { BackdropComponent } from '../components/backdrop/backdrop.component';
import * as i0 from "@angular/core";
import * as i1 from "./component-loader.service";
export class ModalService {
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
ModalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.ComponentLoaderService)); }, token: ModalService, providedIn: "root" });
ModalService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ModalService.ctorParameters = () => [
    { type: ComponentLoaderService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvc2VydmljZXMvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQUc5RSxNQUFNLE9BQU8sWUFBWTtJQUlyQixZQUE2QixlQUE0QztRQUE1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBNkI7SUFBRyxDQUFDO0lBRTdFLGVBQWUsQ0FBQyxPQUFZO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBSTtRQUNBLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7WUFuQkosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBSnpCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2JhY2tkcm9wL2JhY2tkcm9wLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAgICBwcml2YXRlIG1vZGFsUmVmOiBDb21wb25lbnRSZWY8TW9kYWxDb21wb25lbnQ+O1xuICAgIHByaXZhdGUgYmFja2Ryb3BSZWY6IENvbXBvbmVudFJlZjxCYWNrZHJvcENvbXBvbmVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudExvYWRlcjogQ29tcG9uZW50TG9hZGVyU2VydmljZTxhbnk+KSB7fVxuXG4gICAgb3BlbldpdGhQcmV2aWV3KHByZXZpZXc6IGFueSkge1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy5tb2RhbFJlZi5pbnN0YW5jZS5zZXRQcmV2aWV3KHByZXZpZXcpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmJhY2tkcm9wUmVmID0gdGhpcy5jb21wb25lbnRMb2FkZXIubG9hZChCYWNrZHJvcENvbXBvbmVudCk7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmNvbXBvbmVudExvYWRlci5sb2FkKE1vZGFsQ29tcG9uZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmJhY2tkcm9wUmVmLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=