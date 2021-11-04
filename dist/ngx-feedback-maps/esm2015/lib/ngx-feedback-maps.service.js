import { Injectable } from '@angular/core';
import { ComponentLoaderService } from './services/component-loader.service';
import { FeedbackButtonComponent } from './components/feedback-button/feedback-button.component';
import { OrchestratorService } from './services';
import * as i0 from "@angular/core";
import * as i1 from "./services/component-loader.service";
import * as i2 from "./services/orchestrator.service";
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
NgxFeedbackService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxFeedbackService_Factory() { return new NgxFeedbackService(i0.ɵɵinject(i1.ComponentLoaderService), i0.ɵɵinject(i2.OrchestratorService)); }, token: NgxFeedbackService, providedIn: "root" });
NgxFeedbackService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxFeedbackService.ctorParameters = () => [
    { type: ComponentLoaderService },
    { type: OrchestratorService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZlZWRiYWNrLW1hcHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvbmd4LWZlZWRiYWNrLW1hcHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUtqRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzNCLFlBQ3FCLGVBQWdFLEVBQ2hFLG1CQUF3QztRQUR4QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUQ7UUFDaEUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUMxRCxDQUFDO0lBRUosa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFbkQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBQzNDLENBQUM7Ozs7WUFkSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7OztZQU5RLHNCQUFzQjtZQUV0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21wb25lbnQtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmVlZGJhY2tCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVlZGJhY2stYnV0dG9uL2ZlZWRiYWNrLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JjaGVzdHJhdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEZlZWRiYWNrU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50TG9hZGVyOiBDb21wb25lbnRMb2FkZXJTZXJ2aWNlPEZlZWRiYWNrQnV0dG9uQ29tcG9uZW50PixcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBvcmNoZXN0cmF0b3JTZXJ2aWNlOiBPcmNoZXN0cmF0b3JTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgbGlzdGVuRm9yRmVlZGJhY2tzKCkge1xuICAgICAgICB0aGlzLm9yY2hlc3RyYXRvclNlcnZpY2UubmdPbkluaXQoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRMb2FkZXIubG9hZChGZWVkYmFja0J1dHRvbkNvbXBvbmVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub3JjaGVzdHJhdG9yU2VydmljZS5vblNlbmQ7XG4gICAgfVxufVxuIl19