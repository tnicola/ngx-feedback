import { Injectable } from '@angular/core';
import { FeedbackButtonComponent } from './components/feedback-button/feedback-button.component';
import * as i0 from "@angular/core";
import * as i1 from "./services/component-loader.service";
import * as i2 from "./services";
export class NgxFeedbackService {
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
NgxFeedbackService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgxFeedbackService, deps: [{ token: i1.ComponentLoaderService }, { token: i2.OrchestratorService }], target: i0.ɵɵFactoryTarget.Injectable });
NgxFeedbackService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgxFeedbackService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgxFeedbackService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ComponentLoaderService }, { type: i2.OrchestratorService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZlZWRiYWNrLW1hcHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvbmd4LWZlZWRiYWNrLW1hcHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOzs7O0FBTWpHLE1BQU0sT0FBTyxrQkFBa0I7SUFDM0IsWUFDcUIsZUFBZ0UsRUFDaEUsbUJBQXdDO1FBRHhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpRDtRQUNoRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQzFELENBQUM7SUFFSixrQkFBa0I7UUFDZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVuRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7SUFDM0MsQ0FBQzs7Z0hBWFEsa0JBQWtCO29IQUFsQixrQkFBa0IsY0FGZixNQUFNOzRGQUVULGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21wb25lbnQtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmVlZGJhY2tCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVlZGJhY2stYnV0dG9uL2ZlZWRiYWNrLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JjaGVzdHJhdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEZlZWRiYWNrU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50TG9hZGVyOiBDb21wb25lbnRMb2FkZXJTZXJ2aWNlPEZlZWRiYWNrQnV0dG9uQ29tcG9uZW50PixcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBvcmNoZXN0cmF0b3JTZXJ2aWNlOiBPcmNoZXN0cmF0b3JTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgbGlzdGVuRm9yRmVlZGJhY2tzKCkge1xuICAgICAgICB0aGlzLm9yY2hlc3RyYXRvclNlcnZpY2UubmdPbkluaXQoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRMb2FkZXIubG9hZChGZWVkYmFja0J1dHRvbkNvbXBvbmVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub3JjaGVzdHJhdG9yU2VydmljZS5vblNlbmQ7XG4gICAgfVxufVxuIl19