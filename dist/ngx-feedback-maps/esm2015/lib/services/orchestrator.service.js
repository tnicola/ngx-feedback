import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { SelectorsService } from './selectors.service';
import { EventsService } from './events.service';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./modal.service";
import * as i2 from "./selectors.service";
import * as i3 from "./events.service";
export class OrchestratorService {
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
OrchestratorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrchestratorService_Factory() { return new OrchestratorService(i0.ɵɵinject(i1.ModalService), i0.ɵɵinject(i2.SelectorsService), i0.ɵɵinject(i3.EventsService)); }, token: OrchestratorService, providedIn: "root" });
OrchestratorService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OrchestratorService.ctorParameters = () => [
    { type: ModalService },
    { type: SelectorsService },
    { type: EventsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JjaGVzdHJhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmVlZGJhY2stbWFwcy9zcmMvbGliL3NlcnZpY2VzL29yY2hlc3RyYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFnQixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBSTdDLE1BQU0sT0FBTyxtQkFBbUI7SUFJOUIsWUFDbUIsWUFBMEIsRUFDMUIsZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBRjVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFOdkMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRTNDLFdBQU0sR0FBMEIsSUFBSSxPQUFPLEVBQWdCLENBQUM7SUFLekQsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQzVCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUM5QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8scUJBQXFCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sdUJBQXVCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sc0JBQXNCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDekMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sWUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQWtCLEVBQUUsRUFBRTtZQUMvRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBakVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQU56QixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdG9yc1NlcnZpY2UgfSBmcm9tICcuL3NlbGVjdG9ycy5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50c1NlcnZpY2UgfSBmcm9tICcuL2V2ZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmVlZGJhY2tEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2ZlZWRiYWNrLWRhdGEubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9yY2hlc3RyYXRvclNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBvblNlbmQ6IFN1YmplY3Q8RmVlZGJhY2tEYXRhPiA9IG5ldyBTdWJqZWN0PEZlZWRiYWNrRGF0YT4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdG9yc1NlcnZpY2U6IFNlbGVjdG9yc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudHNTZXJ2aWNlOiBFdmVudHNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLm9uRmVlZGJhY2tCdXR0b25DbGljaygpLFxuICAgICAgdGhpcy5vblNwZWNpZmljRmVlZGJhY2tDbGljaygpLFxuICAgICAgdGhpcy5vbkdlbmVyaWNGZWVkYmFja0NsaWNrKCksXG4gICAgICB0aGlzLm9uRWxlbWVudFNlbGVjdGVkKCksXG4gICAgICB0aGlzLm9uQ2xvc2VDbGljaygpLFxuICAgICAgdGhpcy5vblNlbmRDbGljaygpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uRWxlbWVudFNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yc1NlcnZpY2UucHJldmlldy5zdWJzY3JpYmUoKHByZXYpID0+IHtcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW5XaXRoUHJldmlldyhwcmV2KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25GZWVkYmFja0J1dHRvbkNsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50c1NlcnZpY2UuZmVlZGJhY2tDbGlja09ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLmRyYXcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25TcGVjaWZpY0ZlZWRiYWNrQ2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRzU2VydmljZS5zcGVjaWZpY0ZlZWRiYWNrQ2xpY2tPYnNlcnZhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm1vZGFsU2VydmljZS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuc2VsZWN0b3JzU2VydmljZS5lbGVtZW50c0hpZ2hsaWdodCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkdlbmVyaWNGZWVkYmFja0NsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50c1NlcnZpY2UuZ2VuZXJpY0ZlZWRiYWNrQ2xpY2tPYnNlcnZhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm1vZGFsU2VydmljZS5yZW1vdmUoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdG9yc1NlcnZpY2UucGFnZVNjcmVlbnNob3QoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uQ2xvc2VDbGljaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudHNTZXJ2aWNlLmNsb3NlQ2xpY2tDbGlja09ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblNlbmRDbGljaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudHNTZXJ2aWNlLm9uU2VuZENsaWNrT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKGRhdGE6IEZlZWRiYWNrRGF0YSkgPT4ge1xuICAgICAgdGhpcy5vblNlbmQubmV4dChkYXRhKTtcbiAgICB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3ViKSA9PiB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19